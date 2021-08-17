import LoadingProgressIndicatorGetStyleFunction from "../types/LoadingProgressIndicatorGetStyleFunction";

const getDefaultStyle: LoadingProgressIndicatorGetStyleFunction = ({
  color,
  direction,
  fadeAnimationDuration,
  growAnimationDuration,
  isVisible,
  progress,
}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1031,

  width: "100%",
  height: "3px",

  background: color,
  opacity: isVisible ? 1 : 0,

  transition: `opacity ${fadeAnimationDuration}ms, transform ${growAnimationDuration}ms`,

  transform: `translate3d(${direction === "ltr" ? "-" : ""}${
    (1 - progress) * 100
  }%, 0, 0)`,
});

export default getDefaultStyle;
