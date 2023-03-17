
const Svg = ({
  w,
  h=w,
  style,
  children
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    width={`${w}px`}
    height={`${h}px`}
    viewBox={`0 0 ${w} ${h}`}
    style={style}
  >
    {children}
  </svg>
);

export default Svg
