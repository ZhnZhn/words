const Button = ({
  className,
  style,
  tabIndex='0',
  caption='',
  title,
  onClick
}) => (
  <button
     type="button"
     className={className}
     style={style}
     tabIndex={tabIndex}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
);


export default Button
