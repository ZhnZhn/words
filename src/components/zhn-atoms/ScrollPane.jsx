import React from 'react';

const CL = 'with-scroll';

const ScrollPane = ({ style, className="", children }) => {
   const _className = className && className !== CL
             ? className
             : CL;
   return (
     <div className={_className} style={style}>
        {children}
     </div>
   );
}

export default ScrollPane
