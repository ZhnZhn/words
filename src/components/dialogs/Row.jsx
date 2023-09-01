const S_ROW_DIV = {
  display: 'flex',
  alignItems: 'center',
  margin: 5
}
, S_ROOT_DIV = {
  margin: 5,
  lineHeight: 2,
  fontWeight: 'bold'
}
, S_LABEL_SPAN = {
  display: 'inline-block',
  color: '#1b75bb',
  paddingLeft: 18,
  paddingRight: 5,
  fontSize: '16px'
};

const Plain = ({
  style,
  children
}) => (
  <div style={{...S_ROW_DIV, ...style}}>
    {children}
  </div>
);

const Text = ({
  caption,
  text,
  styleRoot
}) => (
  <div style={{...S_ROOT_DIV, ...styleRoot}}>
    <span style={S_LABEL_SPAN}>
      {caption}
    </span>
    <span>
      {text}
    </span>
  </div>
);




export default { Plain, Text }
