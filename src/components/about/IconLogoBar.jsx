import IconGitHub from './IconGitHub'
import IconWordsApi from './IconWordsApi'
import IconPreact from './IconPreact'

const S_ROOT = {
  textAlign: 'center',
  paddingTop: 20
};

const IconLogoBar = () => (
  <div style={S_ROOT}>
     <IconGitHub
        ariaLabel="GitHub: Repository of web app Words"
        href="https://github.com/zhnzhn/words/"
     />
     <IconWordsApi />
     <IconPreact />
  </div>
);

export default IconLogoBar
