import { hasAccessKey } from '../has';
import { crUnderline } from '../styleFn';

const CL_UNDERLINE = crUnderline();

const _crCaptionEl = (
  caption,
  accessKey
) => {
  const captionIn = caption || ''
  , _index = hasAccessKey(accessKey)
      ? captionIn
          .toLowerCase()
          .indexOf(accessKey)
      : -1;
  return _index === -1
    ? captionIn
    : (<>
        <span>{captionIn.slice(0, _index)}</span>
        <span className={CL_UNDERLINE}>{captionIn.slice(_index, _index+1)}</span>
        <span>{captionIn.slice(_index+1)}</span>
       </>
    );
};

const CaptionInput = ({
  className,
  style,
  caption,
  accessKey,
  children
}) => {
  const _captionEl = _crCaptionEl(
    caption,
    accessKey
  );

  return (
    <span className={className} style={style}>
       {_captionEl}
       {children}
    </span>
  );
};

export default CaptionInput
