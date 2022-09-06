import useClassAnimation from '../hooks/useClassAnimation';

const CL_INIT = 'modal-root'
, CL = {
  INIT: CL_INIT,
  SHOWING: `${CL_INIT} show-modal`,
  HIDING: `${CL_INIT} hide-modal`
}
, S = {
  INIT: { display: 'none' },
  SHOWING: { display: 'block' },
  HIDING: { backgroundColor: 'rgba(0,0,0, 0)' }
};

const ModalContainer = ({
  isShow,
  timeout,
  children,
  onClose
}) => (
   <div
     {...useClassAnimation({ isShow, CL, S, timeout })}
     onClick={onClose}
   >
     {children}
   </div>
);


export default ModalContainer
