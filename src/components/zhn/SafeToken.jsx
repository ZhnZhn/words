import domSanitize from '../../utils/domSanitize';

const _isNotEmptyStr = v => typeof v === 'string'
  && v !== '';

const SafeToken = ({
  as="span",
  style,
  token
}) => {
  const Comp = as
  , _token = domSanitize(token);
  return _isNotEmptyStr(_token)
    ? (<Comp style={style}>{_token}</Comp>)
    : null;
}

export default SafeToken
