import { CSSProperties } from "react";

/**
 * Function returning loading indicator styles.
 *
 * @remarks
 * Called with attrs argument containing config and state values:
 *
 * - {@link LoadingProgressIndicatorProps.color | color}
 *
 * - {@link LoadingProgressIndicatorProps.direction | direction}
 *
 * - {@link LoadingProgressIndicatorProps.fadeAnimationDuration | fadeAnimationDuration}
 *
 * - {@link LoadingProgressIndicatorProps.growAnimationDuration | growAnimationDuration}
 *
 * - isVisible (boolean)
 *
 * - progress (number 0 and 1)
 *
 * Function definition should be outside of render function or wrapped in
 * useCallback to prevent unnecessary re-renders.
 *
 * @public
 */
type LoadingProgressIndicatorGetStyleFunction = (attrs: {
  color: string;
  direction: "ltr" | "rtl";
  fadeAnimationDuration: number;
  growAnimationDuration: number;
  isVisible: boolean;
  progress: number;
}) => CSSProperties;

export default LoadingProgressIndicatorGetStyleFunction;
