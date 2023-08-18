
const WORDS_API = 'WordsApi';

const IconWordsApi = ({
  style
}) => (
 <a
   aria-label={`Official ${WORDS_API} site`}
   className="icon__words"
   style={style}
   href="https://www.wordsapi.com/"
 >
   <img
      alt={`${WORDS_API} Logo`}
      src="css/wordsapilogo.png"
    />
 </a>
);

 export default IconWordsApi
