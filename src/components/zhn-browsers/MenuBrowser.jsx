import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser'

const MenuBrowser = (props) => (
  <DynamicMenuBrowser
     {...props}
     caption="Words Sources"
     url="data/words-source-menu.json"
  />
);


/*
MenuBrowser.propTypes = {
  store: PropTypes.object,
  showAction: PropTypes.string,
  browserId: PropTypes.string,
  onClickItem: PropTypes.func
}
*/

export default MenuBrowser
