import PaneType1 from './PaneType1';

import Word from '../items/word/Word';
import InputWord from './InputWord';
import InputRandom from './InputRandom';

const R = {
  DF: {
    Pane: PaneType1,
    Input: InputWord,
    Item: Word
  },
  R: {
    Pane: PaneType1,
    Input: InputRandom,
    Item: Word
  }
};

const RouterPane = {
  getElement: (type) => type && R[type] || R.DF
};

export default RouterPane
