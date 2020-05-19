
const _crBase = () => ({
  position: 'relative',
  backgroundColor: '#4d4d4d',
  height: 'calc(100vh - 71px)',
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: 4
});

const ContainerStyle = {
  BROWSER_ROOT: {
    ..._crBase(),
    flexShrink: 0,
    marginLeft: 10,
    padding: '0px 3px 35px 0px',
    minWidth: 270,
    maxWidth: 400,
    minHeight: 500
  },
  ABOUT_ROOT: {
    ..._crBase(),
    marginLeft: 16,
    padding: 0,
    paddingBottom: 35,
    width: 390,
    minWidth: 300,
    minHeight: 500
  }
};

export default ContainerStyle
