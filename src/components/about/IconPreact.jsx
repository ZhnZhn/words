import { XMLNS_SVG } from '../zhn/svg/Svg';

const PREACT = 'Preact';

const IconPreact = () => (
   <a
      arial-label={`Official ${PREACT} site`}
      className="icon__preact"
      href="https://preactjs.com"
   >
    <svg
      xmlns={XMLNS_SVG}
      viewBox="-256 -256 512 512"
      strokeLinejoin="round"
    >
      <title>{`${PREACT} Logo`}</title>
      <path d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="#673ab8"/>
      <ellipse cx="0" cy="0" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="white" transform="rotate(52.5)"/>
      <ellipse cx="0" cy="0" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="white" transform="rotate(-52.5)"/>
      <circle cx="0" cy="0" r="34" fill="white"/>
    </svg>
  </a>
);


export default IconPreact
