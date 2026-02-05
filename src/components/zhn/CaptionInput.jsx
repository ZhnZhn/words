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

const CaptionInput = (props) => {
  const _captionEl = _crCaptionEl(
    props.caption,
    props.accessKey
  );

  return (
    <span className={props.className} style={props.style}>
       {_captionEl}
       {props.children}
    </span>
  );
};

export default CaptionInput
