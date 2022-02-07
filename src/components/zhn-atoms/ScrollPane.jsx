const CL_SCROLL = 'with-scroll';

const ScrollPane = ({
  style,
  className="",
  children
}) => {
   const _className = className && className !== CL_SCROLL
     ? className
     : CL_SCROLL;
   return (
     <div className={_className} style={style}>
        {children}
     </div>
   );
};

export default ScrollPane
