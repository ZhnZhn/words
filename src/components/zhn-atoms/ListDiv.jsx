
const ListDiv = ({ items=[], itemStyle }) => (
  <>
    {
      items.map((str, index) => {
        return (
          <div key={index} style={itemStyle}>
             {str}
          </div>
        );
      })
    }
  </>
);

export default ListDiv
