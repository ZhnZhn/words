import SafeToken from './SafeToken';

const _isArr = Array.isArray;

const ListDiv = ({
  items,
  itemStyle
}) => (
  <>
    {
      _isArr(items)
        ? items.map((str, index) => (
            <SafeToken
               as="div"
               key={index}
               style={itemStyle}
               token={str}
            />
          ))
        : null
    }
  </>
);

export default ListDiv
