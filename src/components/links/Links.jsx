import withProps from '../hoc/withProps'

import BaseComp from '../zhn-atoms/Link'

const WordsApi = withProps({
  title: "WordsApi",
  href: "https://www.wordsapi.com/",
})(BaseComp)

const RapidApi = withProps({
  title: "RapidApi",
  href: "https://rapidapi.com/dpventures/api/wordsapi/details",
})(BaseComp)

const Link = {
  WordsApi,
  RapidApi
};

export default Link
