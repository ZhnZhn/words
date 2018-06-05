import React, { Component } from 'react'

import A from '../../zhn-atoms/Atoms'
import WordSyn from './WordSyn'
import WordNyms from './WordNyms'

const S = {
  FILL_OPEN: "black",
  OC_CAPTION: {
    color: 'black'
  },
  OC_AFTER: {
    color: '#0c7abf',
    fontWeight: 800
  },
  OC_CHILDREN: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
};

const Span = ({ style, text }) =>
  <span style={style}>
    &nbsp;{text}
  </span>


class WordDef extends Component {

  static defaultProps = {
    config: {}
  }

  _renderDefinitions = (results=[], style) => {
    return results.map((result, index) => {
      const {
              definition,
              partOfSpeech,
            } = result
          , _afterComp = (
               <Span
                  style={S.OC_AFTER}
                  text={partOfSpeech}
                />
              );
      return (
        <A.OpenClose
          key={index}
          isClose={true}
          style={style}
          caption={definition}
          fillOpen={S.FILL_OPEN}
          captionStyle={S.OC_CAPTION}
          afterCaptionComp={_afterComp}
          childrenStyle={S.OC_CHILDREN}
        >
          <WordSyn
            result={result}
          />
          <WordNyms
            result={result}
          />
        </A.OpenClose>
      );
    })
  }

  render(){
    const {
            isShow, style,
            config
          } = this.props;
    return (
      <A.ShowHide
        style={style}
        isShow={isShow}
      >
        {this._renderDefinitions(config.results, style)}
      </A.ShowHide>
    );
  }
}

export default WordDef
