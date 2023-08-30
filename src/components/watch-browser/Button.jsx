import FlatButton from '../zhn-atoms/FlatButton';

const CL_DIV = 'bt-flat__div'

const Clear = ({
  style,
  onClick
}) => (
  <FlatButton
    rootStyle={style}
    clDiv={CL_DIV}
    caption="Clear"
    title="Clear Input"
    onClick={onClick}
  />
);

const Close = ({
  style,
  onClick
}) => (
  <FlatButton
    rootStyle={style}
    clDiv={CL_DIV}
    caption="Close"
    title="Close Dialog"
    onClick={onClick}
  />
);

const Primary = ({
  style,
  caption,
  title,
  onClick
}) => (
    <FlatButton
      rootStyle={style}
      clDiv={CL_DIV}
      caption={caption}
      title={title}
      onClick={onClick}
    />
);

export default {
  Primary,
  Clear,
  Close,
  Flat: FlatButton
}
