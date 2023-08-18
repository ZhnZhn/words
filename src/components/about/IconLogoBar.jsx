import IconGitHub from './IconGitHub'
import IconWordsApi from './IconWordsApi'
import IconPreact from './IconPreact'

const S_ROOT = {
  textAlign: 'center',
  paddingTop: 20
};

const IconLogoBar = ({
  iconStyle,
  iconGitHubStyle
}) => (
  <div style={S_ROOT}>
     <IconGitHub
        style={iconGitHubStyle}
        ariaLabel="GitHub: Repository of web app Words"
        href="https://github.com/zhnzhn/words/"
     />
     <IconWordsApi
       style={iconStyle}
     />
     <IconPreact
       style={iconStyle}
     />
  </div>
);

export default IconLogoBar
