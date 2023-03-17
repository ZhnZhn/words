
const Svg = ({
  style,
  w,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    preserveAspectRatio="none"
    {...restProps}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width={`${w}px`}
    height={`${h}px`}
    viewBox={`0 0 ${w} ${h}`}
  >
    {children}
  </svg>
);

export default Svg
