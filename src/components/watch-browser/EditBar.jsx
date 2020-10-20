import A from '../zhn-atoms/Atoms';

const CL_BT = "bt__watch__bar";

const S = {
  ROOT: {
    marginBottom: 10
  },
  BT_LIST : {
    marginLeft: 20
  }
};

const T = {
  G: "Click to open groups edit dialog",
  L: "Click to open lists edit dialog"
};

const EditBar = ({ isShow, onClickGroup, onClickList }) => {
  if (!isShow){
    return null;
  }
  return (
    <div style={S.ROOT}>
       <A.Button
         caption="GROUP"
         title={T.G}
         className={CL_BT}
         onClick={onClickGroup}
      />
      <A.Button
         caption="LIST"
         title={T.L}
         className={CL_BT}
         style={S.BT_LIST}
         onClick={onClickList}
      />
    </div>
  );
}

export default EditBar
