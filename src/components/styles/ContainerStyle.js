
const _crBase = () => ({
  position: 'relative',
  backgroundColor: '#4d4d4d',
  height: 'calc(100vh - 71px)',
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: '4px'
});

const ContainerStyle = {
  BROWSER_ROOT: {
    ..._crBase(),
    flexShrink: 0,
    marginLeft: '10px',
    padding: '0px 3px 35px 0px',
    minWidth: '270px',
    maxWidth: '400px',
    minHeight: '500px'
  },
  ABOUT_ROOT: {
    ..._crBase(),
    marginLeft: '16px',
    padding: '0px',
    paddingBottom: '35px',
    width: '380px',
    minWidth: '300px',
    minHeight: '500px'
  }
};

export default ContainerStyle
