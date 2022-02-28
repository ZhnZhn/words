import crCn from '../zhn-utils/crCn';

const CL_BT = 'bt-raised'
, CL_BT_SPAN = 'bt-raised__span'
, S_PRIMARY_SPAN = { color: '#80c040' };

const RaisedButton = ({
  isPrimary,
  className,
  style,
  clDiv,
  caption,
  tabIndex="0",
  onClick
}) => {
  const _btCl = crCn(CL_BT, className)
  , _spanStyle = isPrimary
      ? S_PRIMARY_SPAN
      : void 0;

  return (
    <button
      tabIndex={tabIndex}
      className={_btCl}
      style={style}
      onClick={onClick}
    >
      <div className={clDiv}>
        <span
           className={CL_BT_SPAN}
           style={_spanStyle}
        >
          {caption}
        </span>
      </div>
    </button>
  );
};

export default RaisedButton
