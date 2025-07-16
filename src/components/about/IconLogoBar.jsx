import IconGitHub from './IconGitHub';
import IconWordsApi from './IconWordsApi';
import IconPreact from './IconPreact';

const IconLogoBar = () => (
  <div className="logos">
     <IconGitHub
        ariaLabel="GitHub: Repository of web app Words"
        href="https://github.com/zhnzhn/words/"
     />
     <IconWordsApi />
     <IconPreact />
  </div>
);

export default IconLogoBar
