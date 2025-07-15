import { isStrNotBlank } from '../../utils/isTypeFn';
import domSanitize from '../../utils/domSanitize';

const SafeToken = ({
  as="span",
  style,
  token
}) => {
  const Comp = as
  , _token = domSanitize(token);
  return isStrNotBlank(_token)
    ? (<Comp style={style}>{_token}</Comp>)
    : null;
}

export default SafeToken
