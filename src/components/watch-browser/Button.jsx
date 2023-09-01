import FlatButton from '../zhn-atoms/FlatButton';

const CL_DIV = 'bt-flat__div'

export const ButtonClear = ({
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

export const ButtonClose = ({
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
)

export const ButtonPrimary = ({
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
)
