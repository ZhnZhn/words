import DialogStyles from '../styles/DialogStyles';

const styles = DialogStyles
, S_MSG_SPAN = { fontWeight: 'bold' };

const ValidationMessages = ({
  validationMessages
}) => (
  <div style={styles.validationContainer}>
    {
      (validationMessages || []).map((msg, index)=>(
        <div key={index}>
          <div style={styles.validationMessageNumber}>{index+1}</div>
          <span style={S_MSG_SPAN}>{msg}</span>
        </div>
      ))
    }
  </div>
);

export default ValidationMessages
