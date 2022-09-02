import Button from './Button';
import {
  S_FLEX_ROW_END
} from '../styles/GeneralStyles';

const S_DIV = {
  ...S_FLEX_ROW_END,
  margin: '8px 4px 6px 0'
};

const RowButtons = ({
  btStyle,
  Primary,
  withoutClear,
  onClear,
  onClose
}) => (
  <div style={S_DIV}>
    {Primary}
    {!withoutClear &&
     <Button.Clear
        style={btStyle}
        onClick={onClear}
     />
    }
    <Button.Close
       style={btStyle}
       onClick={onClose}
    />
  </div>
);

export default RowButtons
