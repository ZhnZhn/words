import React from 'react';

import A from '../zhn-atoms/Atoms';

const CLASS_FOR_BT = "bt__watch__bar";

const S = {
  ROOT: {
    marginBottom: '10px'
  },
  BT_LIST : {
    marginLeft: '20px'
  }
}

const EditBar = ({ isShow, onClickGroup, onClickList }) => {
  if (!isShow){
    return null;
  }
  return (
    <div style={S.ROOT}>
       <A.CircleButton
         caption="GROUP"
         className={CLASS_FOR_BT}
         isWithoutDefault={true}
         onClick={onClickGroup}
      />
      <A.CircleButton
         caption="LIST"
         className={CLASS_FOR_BT}
         isWithoutDefault={true}
         style={S.BT_LIST}
         onClick={onClickList}
      />
    </div>
  );
}

export default EditBar
