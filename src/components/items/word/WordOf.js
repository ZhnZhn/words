import A from '../../Comp'

const S = {
  FILL_OPEN: "#80c040",
  OC: {
    marginLeft: -16
  },
  OC_CAPTION: {
    color: '#0c7abf'
  },
  OC_CHILDREN: {
    paddingLeft: 12,
    paddingRight: 16
  },
  LIST: {
    lineHeight: 1.5,
    paddingBottom: 6
  },
  LIST_CAPTION: {
    color: '#0c7abf',
    paddingRight: 8,
    fontWeight: 800
  }
};

const _isItems = items => (items && items.length !== 0);

const WordOf = ({
  caption,
  items,
  isCount=false,
  fillOpen,
  captionStyle,
  childrenStyle
}) => {
  if (!_isItems(items)) {
    return null;
  }
  const _caption = isCount
    ? `${caption} (${items.length})`
    : caption;
  return (
    <A.OpenClose
      isClose={true}
      caption={_caption}
      style={S.OC}
      fillOpen={S.FILL_OPEN}
      captionStyle={S.OC_CAPTION}
      childrenStyle={S.OC_CHILDREN}
    >
      <A.ListSpan
        caption=""
        rootStyle={S.LIST}
        captionStyle={S.LIST_CAPTION}
        items={items}
      />
    </A.OpenClose>
  );
};

export default WordOf
