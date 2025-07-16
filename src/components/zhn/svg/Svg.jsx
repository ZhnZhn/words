
export const XMLNS_SVG = "http://www.w3.org/2000/svg"

export const Svg = ({
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
    xmlns={XMLNS_SVG}
    viewBox={`0 0 ${w} ${h}`}
  >
    {children}
  </svg>
)
