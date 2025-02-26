import Button from '../zhn-atoms/button/Button';

const CL_BT = "bt__watch__bar"
, S_MB_10 = {
  marginBottom: 10
}
, S_ML_20 = {
  marginLeft: 20
}
, BT_GROUP_TITLE = "Click to open groups edit dialog"
, BT_LIST_TITLE = "Click to open lists edit dialog";

const EditBar = ({
  isShow,
  onClickGroup,
  onClickList
}) => isShow ? (
  <div style={S_MB_10}>
     <Button
       caption="GROUP"
       title={BT_GROUP_TITLE}
       className={CL_BT}
       onClick={onClickGroup}
    />
    <Button
       caption="LIST"
       title={BT_LIST_TITLE}
       className={CL_BT}
       style={S_ML_20}
       onClick={onClickList}
    />
  </div>
) : null;

export default EditBar
