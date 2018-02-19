import React from 'react'

import Button from './Button'
import S from './Pane.Style'

const RowButtons = ({ btStyle, Primary, withoutClear, onClear, onClose }) =>
  <div style={S.COMMAND_DIV}>
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



export default RowButtons
