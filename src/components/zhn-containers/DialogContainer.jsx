import {
  useState,
  cloneElement
} from '../uiApi';

const S_ROOT = {
  zIndex: 1030,
  position: 'absolute',
  top: 70,
  left: 10,
  width: '99%'
}

const _isUndef = value => typeof value === 'undefined';

const _findCompIndex = (
  arr,
  key
) => {
  for (let i=0; i<arr.length; i++){
    if (arr[i].key === key){
      return i;
    }
  }
  return;
};

const _doVisible = (
  arr,
  keyValue
) => {
  const _index = _findCompIndex(arr, keyValue) || 0;
  return [
    ...arr.slice(0, _index),
    ...arr.slice(_index+1),
    arr[_index]
  ];
};

const _updateVisible = (
  state,
  key,
  maxDialog
) => {
  const { hmIs, visibleDialogs } = state
  , _keyIndex = visibleDialogs.indexOf(key);
  if (_keyIndex !== -1) {
    visibleDialogs.splice(_keyIndex, 1)
  }
  visibleDialogs.push(key)
  hmIs[key] = true
  if (visibleDialogs.length > maxDialog ){
    hmIs[visibleDialogs[0]] = false
    visibleDialogs.splice(0, 1)
  }
};

const DialogContainer = ({
  maxDialog=3,
  useDialog
}) => {
  const [
    state,
    setState
  ] = useState({
    hmIs: {},
    compDialogs: [],
    visibleDialogs: []
  })
  , {
    hmIs,
    compDialogs
  } = state
  , _hToggleDialog = key => {
     setState(prevState => {
       const {
         hmIs,
         visibleDialogs
       } = prevState;
       hmIs[key] = false
       prevState.visibleDialogs = visibleDialogs
         .filter(value => value !== key)
       return {...prevState};
     })
  };

  useDialog(dialogOption => {
    if (dialogOption){
       setState(prevState => {
         const {
           key,
           Comp
         } = dialogOption;
          if (Comp && !_isUndef(_findCompIndex(prevState.compDialogs, key))) {
            return prevState;
          }
         _updateVisible(prevState, key, maxDialog)
         if (!Comp){
            prevState.compDialogs = _doVisible(prevState.compDialogs, key)
         } else {
            prevState.compDialogs.push(Comp)
         }
         return {...prevState};
       })
    }
  })

  return (
    <div style={S_ROOT}>
      {compDialogs.map(Comp => {
         const key = Comp.key;
         return cloneElement(Comp, {
           key,
           isShow: hmIs[key],
           onClose: () => _hToggleDialog(key)
         });
      })}
    </div>
  );
}

export default DialogContainer
