import Button from './Button';
import {
  S_FLEX_ROW_END
} from '../styles/GeneralStyles';

const S_DIV = {
  ...S_FLEX_ROW_END,
  margin: '8px 4px 6px 0'
};

const RowButtons = ({
  caption,
  title,
  onClick,
  onClear,
  onClose
}) => (
  <div style={S_DIV}>
     <Button.Primary
       caption={caption}
       title={title}
       onClick={onClick}
    />
    {onClear && <Button.Clear
       onClick={onClear}
     />
    }
    <Button.Close       
       onClick={onClose}
    />
  </div>
);

export default RowButtons
