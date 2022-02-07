const S_KEY = { textDecoration: 'underline' }
, EMPTY = '';

const _toCaptionIn = (caption, accessKey) => {
  const captionIn = caption == null
       ? EMPTY
       : EMPTY + caption
  , _index = captionIn
      .toLowerCase()
      .indexOf(accessKey);
  if (accessKey && _index !== -1) {
    return {
      before: captionIn.substring(0, _index),
      key: captionIn.substring(_index, _index+1),
      after:  captionIn.substring(_index+1)
    };
  }
  return { captionIn };
};

const CaptionInput = ({
  className,
  rootStyle,
  caption,
  accessKey,
  children
}) => {
  const {
    captionIn,
    after,
    key,
    before
  } = _toCaptionIn(caption, accessKey)
  , _captionEl = captionIn || (
    <>
      <span>{before}</span>
      <span style={S_KEY}>{key}</span>
      <span>{after}</span>
    </>
  );

  return (
    <span className={className} style={rootStyle}>
       {_captionEl}
       {children}
    </span>
  );
};

export default CaptionInput
