import { isStrNotBlank } from '../../utils/isTypeFn';
import { safeMap } from '../uiApi';

const ListDiv = ({
  items,
  itemStyle
}) => safeMap(items, str => isStrNotBlank(str) ? (
  <div key={str} style={itemStyle}>
     {str}
  </div>
) : null);

export default ListDiv
