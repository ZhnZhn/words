import Button from './Button';

const S_DIV = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
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
