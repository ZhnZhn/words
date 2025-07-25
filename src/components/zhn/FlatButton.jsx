import { crCn } from '../styleFn';
import CaptionInput from './CaptionInput';

const CL_BT_FLAT = "bt-flat"
, CL_BT_SPAN = `${CL_BT_FLAT}__span`;

const FlatButton = ({
  ariaLabel,
  ariaHaspopup,
  refBt,
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
    aria-label={ariaLabel}
    aria-haspopup={ariaHaspopup}
    ref={refBt}
    type="button"
    className={crCn(CL_BT_FLAT, className)}
    style={rootStyle}
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
