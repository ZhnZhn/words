import STYLE from '../styles/DialogStyles';

const S = {
  ROOT_DIV: {
    margin: 5,
    lineHeight: 2,
    fontWeight: 'bold'
  },
  LABEL_SPAN : {
    display: 'inline-block',
    color: '#1b75bb',
    paddingLeft: 18,
    paddingRight: 5,
    fontSize: '16px'
  }
};


const Plain = ({ style, children }) => (
  <div style={{ ...STYLE.rowDiv, ...style }}>
    {children}
  </div>
);

const Text = ({ caption, text, styleRoot }) => {
  return (
    <div style={{ ...S.ROOT_DIV, ...styleRoot }}>
      <span style={S.LABEL_SPAN}>
        {caption}
      </span>
      <span>
        {text}
      </span>
    </div>
  )
};



export default { Plain, Text }
