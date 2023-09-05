import InputSelect from '../zhn-m-input/InputSelect';

const STYLE_CONFIG = {
  ROOT: {
    width: 250
  }
};

const RowInputSelect = (props) => (
   <InputSelect
      styleConfig={STYLE_CONFIG}
      {...props}
   />
);


export default RowInputSelect
