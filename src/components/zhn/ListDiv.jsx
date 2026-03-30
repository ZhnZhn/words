import SafeToken from './SafeToken';

const _isArr = Array.isArray;

const ListDiv = ({
  items,
  itemStyle
}) => (
  <>
    {
      _isArr(items)
        ? items.map(str => (
            <SafeToken
               key={str}
               as="div"              
               style={itemStyle}
               token={str}
            />
          ))
        : null
    }
  </>
);

export default ListDiv
