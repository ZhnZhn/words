import SvgIcon from './SvgIcon';

const S_SVG = {
  transform: 'scale(1.3) translate(0px, 5px)'
};

const SvgAddBookmark = (props) => (
  <SvgIcon
    stroke="currentColor"    
    style={S_SVG}
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    <line x1="12" x2="12" y1="7" y2="13" />
    <line x1="15" x2="9" y1="10" y2="10" />
  </SvgIcon>
)

export default SvgAddBookmark
