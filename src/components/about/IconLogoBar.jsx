import React from 'react'

import IconGitHub from './IconGitHub'
import IconWordsApi from './IconWordsApi'
import IconReact from './IconReact'

const S = {
  ROOT : {
    textAlign: 'center',
    paddingTop: 20
  }
};

const IconLogoBar = ({ iconStyle, iconGitHubStyle }) => (
  <div style={S.ROOT}>
     <IconGitHub
        style={iconGitHubStyle}
        title="GitHub Repository"
        href="https://github.com/zhnzhn/words/"
     />
     <IconWordsApi
       style={iconStyle}
     />
     <IconReact
       style={iconStyle}
     />
  </div>
);

export default IconLogoBar
