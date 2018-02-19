import React from 'react'

import IconGitHub from './IconGitHub'
import IconWordsApi from './IconWordsApi'
import IconReact from './IconReact'

const S = {
  ROOT : {
    textAlign : 'center',
    paddingTop: '20px'
  }
};

const IconLogoBar = ({ iconStyle, iconGitHubStyle }) => (
  <div style={S.ROOT}>
     <IconGitHub
        style={iconGitHubStyle}
        title="GitHub ZhnZhn"
        href="https://github.com/zhnzhn"
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
