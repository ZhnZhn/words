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
  caption,
  title,
  onClick,
  onClear,
  onClose
}) => (
  <div style={S_DIV}>
     <Button.Primary
       style={btStyle}
       caption={caption}
       title={title}
       onClick={onClick}
    />
    {onClear && <Button.Clear
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
