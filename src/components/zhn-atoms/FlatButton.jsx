import { crCn } from '../uiApi';
import CaptionInput from './CaptionInput';

const CL_BT = 'bt-flat'
, CL_BT_SPAN = 'bt-flat__span';

const FlatButton = ({
  className,
  rootStyle,
  clDiv,
  divStyle,
  title,
  caption,
  accessKey,
  children,
  onClick
}) => (
  <button
    type="button"
    className={crCn(CL_BT, className)}
    style={rootStyle}
    tabIndex={0}
    title={title}
    accessKey={accessKey}
    onClick={onClick}
  >
    <div className={clDiv} style={divStyle}>
      { caption
         ? <CaptionInput
              className={CL_BT_SPAN}
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
