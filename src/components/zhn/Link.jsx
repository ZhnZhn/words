import toLink from './toLink';

const Link = ({
  title,
  href,
  ...rest
}) => (
 <a
   {...rest}
   target="_blank"
   className="link"
   href={toLink(href)}
  >
     {title}
 </a>
);

export default Link
