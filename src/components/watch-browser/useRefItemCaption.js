import {
  useRef,
  useCallback,
  setRefValue
} from '../uiApi';

const useRefItemCaption = () => {
  const refCaption = useRef()
  , setCaption = useCallback(item => {
    const { caption } = item || {};
    setRefValue(refCaption, caption || null)
  }, []);

  return [
    refCaption,
    setCaption
  ];
};

export default useRefItemCaption
