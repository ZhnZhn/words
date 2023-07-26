const _isArr = Array.isArray;

const ListDiv = ({
  items,
  itemStyle
}) => (
  <>
    {
      _isArr(items)
        ? items.map((str, index) => (
            <div key={index} style={itemStyle}>
              {str}
            </div>
          ))
        : null
    }
  </>
);

export default ListDiv
