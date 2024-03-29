import LoadingProgressIndicatorGetStyleFunction from "../types/LoadingProgressIndicatorGetStyleFunction";

const getDefaultStyle: LoadingProgressIndicatorGetStyleFunction = ({
  color,
  direction,
  fadeAnimationDuration,
  growAnimationDuration,
  isVisible,
  progress,
}) => ({
  background: color,
  height: "3px",
  left: 0,
  opacity: isVisible ? 1 : 0,
  position: "fixed",
  top: 0,
  transform: `translate3d(${direction === "ltr" ? "-" : ""}${
    (1 - progress) * 100
  }%, 0, 0)`,
  transition: `opacity ${fadeAnimationDuration}ms, transform ${growAnimationDuration}ms`,
  width: "100%",
  zIndex: 1031,
});

export default getDefaultStyle;
