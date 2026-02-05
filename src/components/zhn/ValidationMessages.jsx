const S_DIV = {
  color: '#f44336',
  paddingLeft: 10,
  paddingTop: 5
}
, S_MSG_NUMBER = {
  display: 'inline-block',
  width: 22,
  height: 22,
  border: 'solid 2px #F44336',
  borderRadius: '50%',
  textAlign: 'center',
  marginRight: 5
}
, S_MSG_SPAN = {
  fontWeight: 'bold'
};

const ValidationMessages = (props) => (
  <div style={S_DIV}>
    {
      (props.validationMessages || []).map((msg, index)=>(
        <div key={index}>
          <div style={S_MSG_NUMBER}>{index+1}</div>
          <span style={S_MSG_SPAN}>{msg}</span>
        </div>
      ))
    }
  </div>
);

export default ValidationMessages
