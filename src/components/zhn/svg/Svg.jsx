
const Svg = ({
  w,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    preserveAspectRatio="none"
    width={`${w}px`}
    height={`${h}px`}
    {...restProps}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${w} ${h}`}
  >
    {children}
  </svg>
);

export default Svg
