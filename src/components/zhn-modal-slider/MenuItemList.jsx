import MenuAriaItem from './MenuAriaItem';

const SUB_MENU = 'sub'
, S_ITEM = { position: 'relative' }
, S_NEXT_PAGE = {
   display: 'inline-block',
   position: 'absolute',
   top: 0,
   right: 4,
   color: 'inherit',
   padding: '1px 16px 1px 0px',
   fontWeight: 'bold'
};

const _fClick = ({
  isClose,
  onClick,
  onClose
}) => typeof onClick === 'function'
  ? isClose
     ? () => { onClick(); onClose(); }
     : onClick
  : void 0;

const NextPageArrow = ({ type }) =>
  type !== SUB_MENU ? null : (
    <span style={S_NEXT_PAGE}>
       >
    </span>
  );

const MenuItemList = ({
  items,
  itemCl,
  pageNumber,
  onNextPage,
  onReg,
  onClose
}) => (
  <>
    {items.map((item, index) => {
       const { cn, name, type, id, isClose, onClick } = item
          , _onClick = type === SUB_MENU
              ? onNextPage.bind(null, id, name, pageNumber)
              : _fClick({ isClose, onClick, onClose })
          , _onReg = index === 0
              ? onReg
              : void 0;
       return (
         <MenuAriaItem
           key={name}
           className={cn || itemCl}
           style={S_ITEM}
           onClick={_onClick}
           onReg={_onReg}
         >
           <span>{name}</span>
           <NextPageArrow type={type} />
         </MenuAriaItem>
       );
     })}
  </>
);

export default MenuItemList
