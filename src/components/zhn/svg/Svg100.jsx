import { Svg } from './Svg';

const Svg100 = ({
  children,
  ...restProps
}) => (
  <Svg
    width="100%"
    height="100%"
    {...restProps}
  >
    {children}
  </Svg>
);

export default Svg100
