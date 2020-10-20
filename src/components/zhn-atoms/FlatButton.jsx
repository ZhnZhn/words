import CaptionInput from './CaptionInput'

const CL = {
  BT: 'bt-flat',
  BT_SPAN: 'bt-flat__span'
};

const FlatButton = ({
  className='', rootStyle,
  clDiv, divStyle,
  title='', caption,
  accessKey,
  children,
  onClick
}) => (
  <button
    className={`${CL.BT} ${className}`}
    style={rootStyle}
    tabIndex={0}
    title={title}
    accessKey={accessKey}
    onClick={onClick}
  >
    <div className={clDiv} style={divStyle}>
      { caption
         ? <CaptionInput
              className={CL.BT_SPAN}
              caption={caption}
              accessKey={accessKey}
            />
         : null
      }
      {children}
    </div>
  </button>
);

export default FlatButton
