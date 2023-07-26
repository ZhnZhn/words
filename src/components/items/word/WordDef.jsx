import ShowHide from '../../zhn-atoms/ShowHide';
import DefinitionList from './DefinitionList';

const WordDef = ({
  isShow,
  style,
  config
}) => (
  <ShowHide
    isShow={isShow}
  >
    <DefinitionList
      style={style}
      defItems={(config || {}).results}
    />
  </ShowHide>
);


export default WordDef
