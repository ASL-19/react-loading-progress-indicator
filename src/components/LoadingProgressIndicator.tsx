import { announce } from "@asl-19/js-dom-utils";
// We need to import React directly to prevent API Extractor from failing with
// “Error: The expression contains an import() type, which is not yet supported
// by API Extractor:”
import React, { FC, memo, useEffect, useRef, useState } from "react";

import LoadingProgressIndicatorProps from "../types/LoadingProgressIndicatorProps";
import getDefaultStyle from "../utils/getDefaultStyle";

const LoadingProgressIndicatorUnmemoized: FC<LoadingProgressIndicatorProps> = ({
  color,
  direction = "ltr",
  fadeAnimationDuration = 300,
  getStyle,
  growAnimationDuration = 300,
  isLoading,
  label,
  shouldBeVisibleBeforeFirstTick = false,
  tickDuration = 1000,
  tickDurationFirst = 300,
  tickIncrement = 0.05,
  tickIncrementFirst = 0.1,
}) => {
  const loadingElementRef = useRef<HTMLDivElement>(null);

  const [{ isVisible, progress }, setState] = useState<{
    /**
     * Is loading indicator visible?
     *
     * Note: Not the same as isLoading, since isVisible will be false during
     * first tick if !shouldBeVisibleBeforeFirstTick, and will remain true on
     * last tick to allow loading indicator time to animate to full
     */
    isVisible: boolean;

    /**
     * Progress of loading indicator (between 0 and 1).
     */
    progress: number;
  }>({
    isVisible: shouldBeVisibleBeforeFirstTick,
    progress: 0,
  });

  // Announce loading when isVisible
  useEffect(() => {
    const announceLoadingTimeoutId = setTimeout(() => {
      if (isVisible) {
        announce({ priority: "assertive", text: label });
      }
    }, 300);

    return () => {
      clearTimeout(announceLoadingTimeoutId);
    };
  }, [isVisible, label]);

  // Push progress to 1 once !isLoading (retains value of isVisible since we
  // don’t want to force it to true if progress === 0 and
  // !shouldBeVisibleBeforeFirstTick)
  useEffect(() => {
    if (!isLoading) {
      setState({
        isVisible,
        progress: 1,
      });
    }
  }, [isLoading, isVisible]);

  useEffect(() => {
    const timeoutId =
      isLoading || isVisible
        ? window.setTimeout(
            () => {
              setState({
                // Will be true in the tick/render in which state.progress is set
                // to 1 (the value of progress is from the current render)
                isVisible: progress < 1,

                // * On first tick, incremented by firstTickProgress
                // * On subsequent ticks, incremented by tickProgress
                // * Is limited to 1 - tickProgress if isLoading
                progress: Math.min(
                  progress +
                    (progress === 0 ? tickIncrementFirst : tickIncrement),
                  isLoading ? 1 - tickIncrement : 1,
                ),
              });
            },
            progress === 0 ? tickDurationFirst : tickDuration,
          )
        : undefined;

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    isLoading,
    isVisible,
    progress,
    tickDuration,
    tickIncrement,
    tickDurationFirst,
    tickIncrementFirst,
  ]);

  const getStyleFunction = getStyle ?? getDefaultStyle;

  const style = getStyleFunction({
    color,
    direction,
    fadeAnimationDuration,
    growAnimationDuration,
    isVisible,
    progress,
  });

  return <div aria-label={label} ref={loadingElementRef} style={style} />;
};

LoadingProgressIndicatorUnmemoized.displayName = "LoadingProgressIndicator";

/**
 * Loading progress indicator (props: {@link LoadingProgressIndicatorProps})
 *
 * @param props - Props
 *
 * @public
 */
const LoadingProgressIndicator: FC<LoadingProgressIndicatorProps> = memo(
  LoadingProgressIndicatorUnmemoized,
);

export default LoadingProgressIndicator;
