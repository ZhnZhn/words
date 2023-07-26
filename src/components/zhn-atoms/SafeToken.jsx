
const _isNotEmptyStr = v => typeof v === 'string'
  && v !== '';

const SafeToken = ({
  as="span",
  style,
  token
}) => {
  const Comp = as;
  return _isNotEmptyStr(token)
    ? (<Comp style={style}>{token}</Comp>)
    : null;
}

export default SafeToken
