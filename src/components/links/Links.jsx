import withProps from '../hoc/withProps'

import BaseComp from '../zhn-atoms/Link'

const WordsApi = withProps({
  title: "WordsApi",
  href: "https://www.wordsapi.com/",
})(BaseComp)

const Link = {
  WordsApi
};

export default Link
