import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import ArrowCell from './ArrowCell';
import SpanBt from './SpanButton';

const MAX_WITHOUT_ANIMATION = 800;

const CL = {
  ROW: "option-row",
  ROW_ACTIVE: 'option-row__active',
  NOT_SELECTED: 'not-selected'
};

const _fnNoItem = (propCaption, inputValue, isWithInput) => {
  const _inputValue = String(inputValue).trim()
      , _caption = (isWithInput)
           ? `From input: ${_inputValue}`
           : 'No results found';
  return {
    [propCaption]: _caption,
    value: 'noresult',
    inputValue: _inputValue
  };
}

const _toItem = (item, propCaption) => {
  return {
    [propCaption]: 'From Input',
    value: item.inputValue
  }
}

const _crWidth = (width, style) => {
  return (width)
           ? ((''+width).indexOf('%') !== -1)
                ? { ...style, width: width }
                : { ...style, width: width + 'px'}
           : null;
}

const S = {
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  ROOT_DIV: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#e1e1cb',
    width: '160px'
  },
  INPUT_TEXT: {
    background: 'transparent none repeat scroll 0 0',
    //backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    //width: '140px',
    width: '100%',
    paddingRight: '40px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  ROOT_OPTION_DIV: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#E1E1CB',
    color: 'green',
    width: '160px',
    zIndex: '10',
    borderBottomLeftRadius : '5px',
    borderBottomRightRadius : '5px'
  },
  OPTION_DIV: {
    minHeight: '160px',
    maxHeight: '200px',
    paddingBottom: '2px',
    overflow: 'auto'
  },
  SPINNER_CELL: {
    position: 'absolute',
    top: '6px',
    right: '10px',
    display: 'inline-block',
    width: '20px',
    height: '20px'
  },
  SPINNER_FAILED_CELL: {
    position: 'absolute',
    top: '6px',
    right: '10px',
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderColor : '#F44336',
    cursor : 'pointer'
  },
 ARROW_SHOW: {
    borderColor: '#1B75BB transparent transparent'
 },
 INPUT_HR: {
   borderWidth: 'medium medium 1px',
   borderStyle: 'none none solid',
   borderColor: '#1B75BB',
   borderImage: 'none',
   margin: 0,
   marginLeft: '10px',
   marginBottom: '5px',
   marginRight: '40px'
 },
  ITEM_DIV: {
    cursor: 'pointer',
    paddingTop: '6px',
    paddingLeft: '5px',
    paddingBottom: '6px'
    //lineHeight: '14px'
  },
  OPTIONS_FOOTER: {
    position: 'relative',
    backgroundColor: 'silver',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    lineHeight: 1.5
  },
  FOOTER_INDEX: {
    display: 'inline-block',
    color: 'gray',
    fontWeight : 'bold',
    paddingLeft: '10px',
    paddingTop: '4px',
    paddingBottom : '4px'
  },
  FOOTER_BUTTONS: {
    display: 'inline-block',
    position: 'absolute',
    top: '4px',
    right: '8px',
    color: 'black',
    fontWeight: 'bold'
  },
  FOOTER_PADDING: {
    paddingRight: '12px',
  }
};

const ItemOptionDf = ({ item, propCaption }) => (
  <span>
    {item[propCaption]}
  </span>
);

class InputSelect extends Component {
  /*
  static propTypes = {
     propCaption: PropTypes.string,
     ItemOptionComp: PropTypes.element,
     width: PropTypes.string,
     isShowOptionAnim: PropTypes.bool,
     options: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ])
     })),
     optionName: PropTypes.string,
     optionNames: PropTypes.string,
     isUpdateOptions: PropTypes.bool,
     placeholder: PropTypes.string,

     isLoading: PropTypes.bool,
     isLoadingFailed: PropTypes.bool,

     onSelect: PropTypes.func,
     onLoadOption: PropTypes.func
  }
  */

  static defaultProps = {
    bgStyle: {},
    propCaption: 'caption',
    ItemOptionComp: ItemOptionDf,
    options: [],
    optionName: '',
    optionNames: '',
    isUpdateOptions: false,
    isWithInput: false,
    onSelect: () => {},
    onLoadOption: () => {}
  }

  constructor(props){
    super()
    this.domOptionsCache = null
    this.indexActiveOption = 0
    this.propCaption = props.propCaption

    const { optionName, optionNames } = props
        , _optionNames = (optionNames)
              ? optionNames
              : (optionName)
                   ? optionName
                   : '';

    this.state = {
      value: '',
      isShowOption: false,
      options: props.options,
      optionNames : _optionNames,
      isValidDomOptionsCache: false,
      isLocalMode: false
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      if (this.props.options !== nextProps.options
          || nextProps.isUpdateOptions){
        //New options come from Parent - Clear domCache, Init State
        this._setStateToInit(nextProps.options);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps || nextProps.isUpdateOptions) {
      nextState.isLocalMode = false;
    } else {
      nextState.isLocalMode = true;
    }
    return true;
  }

  componentDidUpdate(){
     //Decorate Active Option
     if (this.state.isShowOption){
       const comp = this._getActiveItemComp();
       this._decorateActiveRowComp(comp);
       this._makeVisibleActiveRowComp(comp);
    }
  }

  _setStateToInit = (options) => {
    this.indexActiveOption = 0;
    this.setState({
      value : '',
      isShowOption : false,
      options : options,
      isValidDomOptionsCache : false
    });
  }

  _getActiveItemComp = () => {
    return this[`v${this.indexActiveOption}`];
  }
  _decorateActiveRowComp = (comp) => {
    if (comp){
      comp.classList.add(CL.ROW_ACTIVE);
    }
    if (this.indexNode) {
      this.indexNode.textContent = this.indexActiveOption + 1
    }
  }
  _undecorateActiveRowComp = (comp) => {
     const _comp = !comp
              ? this._getActiveItemComp()
              : comp;
     if (_comp){
      _comp.classList.remove(CL.ROW_ACTIVE);
     }
  }

  _makeVisibleActiveRowComp = (comp) => {
    if (comp){
      const offsetTop = comp.offsetTop;
      const scrollTop = this.optionsComp.scrollTop;
      if ( (offsetTop - scrollTop) > 70){
         this.optionsComp.scrollTop += (offsetTop - scrollTop - 70);
      }
      if ( (offsetTop - scrollTop) < 0){
        this.optionsComp.scrollTop= 0;
      }
    }
  }

  _filterOptions = (options, value) => {
     const valueFor = value.toLowerCase()
        ,  _caption = this.propCaption;
     return options.filter( (option, i) => {
       return option[_caption].toLowerCase().indexOf(valueFor) !== -1
     })
  }

  _handleInputChange = (event) => {
    const token = event.target.value
        , tokenLn = token.length
        , { value } = this.state
        , valueLn = value.length;
    let arr = [];
    if (tokenLn !== valueLn){
      if (tokenLn > valueLn){
        arr = this._filterOptions(this.state.options, token);
      } else if (tokenLn < valueLn) {
        arr = this._filterOptions(this.props.options, token);
      }
      if (arr.length === 0){
        arr.push(_fnNoItem(
          this.propCaption, token, this.props.isWithInput
        ))
      }
      this._undecorateActiveRowComp()
      this.indexActiveOption = 0;
      this.setState({
        value : token,
        isShowOption : true,
        isValidDomOptionsCache : false,
        options : arr
      })
    }
  }

  _startAfterInputAnimation = () => {
    if (this.state.options.length>MAX_WITHOUT_ANIMATION){
      this.arrowCell.startAnimation()
    }
  }
  _stopAfterInputAnimation = () => {
    this.arrowCell.stopAnimation()
  }
  _setShowOptions = () => {
    this.setState(
      { isShowOption : true },
      this._stopAfterInputAnimation
    )
  }
  _showOptions = (ms) => {
    if (this.props.isShowOptionAnim) {
      this._startAfterInputAnimation()
      setTimeout( this._setShowOptions, ms )
    } else {
      this.setState({ isShowOption: true })
    }
  }

  _stepDownOption = () => {
    const prevComp = this._getActiveItemComp();

    if (prevComp){
       this._undecorateActiveRowComp(prevComp);

       this.indexActiveOption += 1;
       if (this.indexActiveOption>=this.state.options.length){
          this.indexActiveOption = 0;
          this.optionsComp.scrollTop = 0;
       }

       const nextComp = this._getActiveItemComp();
       this._decorateActiveRowComp(nextComp)
       //this.indexNode.innerHTML = this.indexActiveOption

       const offsetTop = nextComp.offsetTop
       const scrollTop = this.optionsComp.scrollTop;
       if ( (offsetTop - scrollTop) > 70){
          this.optionsComp.scrollTop += (offsetTop - scrollTop - 70);
       }
    }
  }

  _stepUpOption = () => {
    const prevComp = this._getActiveItemComp();
    if (prevComp){
      this._undecorateActiveRowComp(prevComp);

      this.indexActiveOption -= 1;
      if (this.indexActiveOption < 0){
        this.indexActiveOption = this.state.options.length - 1;
        const bottomComp = this._getActiveItemComp()
        this.optionsComp.scrollTop = bottomComp.offsetTop
      }

      const nextComp = this._getActiveItemComp();
      this._decorateActiveRowComp(nextComp);
      //this.indexNode.innerHTML = this.indexActiveOption

      const offsetTop = nextComp.offsetTop;
      const scrollTop = this.optionsComp.scrollTop;
      if ( (offsetTop - scrollTop) < 70){
        this.optionsComp.scrollTop -= ( 70 - (offsetTop - scrollTop) );
      }
    }
  }

  _handleInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
      case 13:{
         const item = this.state.options[this.indexActiveOption];

         if (item && item[this.propCaption]){
           this.setState({
             value : item[this.propCaption],
             isShowOption : false,
             isValidDomOptionsCache : true
           });

           if (item.value !== 'noresult'){
             this.props.onSelect(item);
           } else {
             if (!this.props.isWithInput) {
                this.props.onSelect(undefined);
             } else {
               this.props.onSelect(_toItem(item, this.propCaption))
             }
           }
         }
      break; }
      //escape, delete
      case 27: case 46: {
        event.preventDefault()
        if (this.state.isShowOption){
          this.setState({ isShowOption : false });
        } else {
          this._undecorateActiveRowComp();
          this._setStateToInit(this.props.options);
          this.props.onSelect(undefined);
        }
      break;}
      case 40: //down
        if (!this.state.isShowOption){
          this._showOptions(0)
          //this.setState({ isShowOption : true });
        } else {
          event.preventDefault()
          this._stepDownOption()
        }
        break;
      case 38: //up
        if (this.state.isShowOption){
          event.preventDefault()
          this._stepUpOption()
        }
        break;
      default: return undefined;
    }
  }

  _handleToggleOptions = () => {
    //this.setState({ isShowOption: !this.state.isShowOption });
    if (this.state.isShowOption){
      this.setState({ isShowOption: false })
    } else {
      this._showOptions(1)
    }
  }

  _handleClickItem = (item, index, event) => {
    this._undecorateActiveRowComp()
    this.indexActiveOption = index;
    this.setState({
      value : item[this.propCaption],
      isShowOption : false
    });
    this.props.onSelect(item);
  }

  _refIndexNode = n => this.indexNode = n

  _renderOptionsFooter = (nFiltered, nAll) => {
    return (
      <div
         className={CL.NOT_SELECTED}
         style={S.OPTIONS_FOOTER}
      >
        <span style={S.FOOTER_INDEX}>
          <span ref={this._refIndexNode} >
            {this.indexActiveOption}
          </span>
          <span>
             : {nFiltered}: {nAll}
          </span>
        </span>
        <span style={S.FOOTER_BUTTONS}>
          <SpanBt
             style={S.FOOTER_PADDING}
             caption="Dn"
             onClick={this._stepDownOption}
          />
          <SpanBt
             style={S.FOOTER_PADDING}
             caption="Up"
             onClick={this._stepUpOption}
          />
          <SpanBt
            caption="CL"
            onClick={this.clearInput}
          />
        </span>
      </div>
    );
  }

  renderOptions = () => {
    const {
            rootOptionsStyle,
            ItemOptionComp
          } = this.props
        , { isShowOption, options, isValidDomOptionsCache } = this.state
        , _propCaption = this.propCaption;

    let _domOptions;
    if (options){
      if (!isValidDomOptionsCache){
         _domOptions = options.map((item, index)=>{

           return (
             <div
                //role="option"
                //aria-selected={this.indexActiveOption === index}
                //tabIndex="0"
                key={index}
                className={CL.ROW}
                style={S.ITEM_DIV}
                ref={c => this[`v${index}`] = c}
                onClick={this._handleClickItem.bind(this, item, index)}
              >
                <ItemOptionComp
                   item={item}
                   propCaption={_propCaption}
                />
            </div>
           )
        });
        this.domOptionsCache = _domOptions;
      } else {
        _domOptions = this.domOptionsCache;
      }
    }

    const { width, inputStyle } = this.props
        ,  _styleOptions = isShowOption ? S.BLOCK : S.NONE
        , _rootWidthStyle = _crWidth(width, _styleOptions)
        , _nFiltered = (options[0] && (options[0].value !== 'noresult') )
              ? options.length : 0
        , _nAll = this.props.options
              ? this.props.options.length : 0;

    return (
        <div style={{ ...S.ROOT_OPTION_DIV, ..._rootWidthStyle, ...inputStyle }}>
          <div
             ref={c => this.optionsComp = c}
             style={{ ...S.OPTION_DIV,
                      ...rootOptionsStyle,
                      ..._rootWidthStyle
                    }}
           >
            {_domOptions}
          </div>
          { this._renderOptionsFooter(_nFiltered, _nAll) }
        </div>
    );
  }

  _crAfterInputEl = () => {
    const {
           isLoading, isLoadingFailed,
           placeholder, optionName, onLoadOption
         } = this.props
        , { isShowOption, optionNames } = this.state;

    let _placeholder, _afterInputEl
    if (!isLoading && !isLoadingFailed){
       const _styleArrow = isShowOption
                ? S.ARROW_SHOW
                : null;
      _placeholder = (placeholder)
          ? placeholder
          : `Select ${optionName}...`;
      _afterInputEl = (
         <ArrowCell
           ref={ (c) => this.arrowCell = c}
           styleArrow={_styleArrow}
           onClick={this._handleToggleOptions}
         />
      );
    } else if (isLoading){
      _placeholder = `Loading ${optionNames}...`;
      _afterInputEl = (
        <span
          style={S.SPINNER_CELL}
          data-loader="circle"
        >
        </span>
      );
    } else if (isLoadingFailed) {
       _placeholder=`Loading ${optionNames} Failed`;
       _afterInputEl = (
         <SpanBt
           style={S.SPINNER_FAILED_CELL}
           data-loader="circle-failed"
           onClick={onLoadOption}
         />
       )
    }
    return {
      placeholder: _placeholder,
      afterInputEl: _afterInputEl
    };
  }

  render(){
    const { rootStyle, inputStyle, width } = this.props
        , { value, isLocalMode, isShowOption } = this.state
        , _rootWidthStyle = _crWidth(width, rootStyle)
        , { afterInputEl, placeholder } = this._crAfterInputEl()
        , _domOptions = (isLocalMode || isShowOption)
              ? this.renderOptions()
              : null;

    return (
      <div style={{ ...S.ROOT_DIV, ..._rootWidthStyle, ...inputStyle }}>
        <input
           ref={c => this.domInputText = c}
           type="text"
           name="select"
           //autoComplete="new-select"
           autoComplete="off"
           autoCorrect="off"
           autoCapitalize="off"
           spellCheck={false}
           value={value}
           style={S.INPUT_TEXT}
           placeholder={placeholder}
           onChange={this._handleInputChange}
           onKeyDown={this._handleInputKeyDown}>
        </input>
        {afterInputEl}
        <hr style={S.INPUT_HR}></hr>
        {_domOptions}
      </div>
    )
  }

  clearInput = () => {
    const { options, onSelect } = this.props;
    this._undecorateActiveRowComp()
    onSelect(undefined)
    this._setStateToInit(options)
    this.setState({ isShowOption : false });
  }

  focusInput(){
    this.domInputText.focus()
  }
  focusNotValidInput(){
    this.domInputText.focus()
  }

}

export default InputSelect
