'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BORDER = 'border' // dragStart
,
    BORDER_BOTTOM = 'border-bottom' // backup
,
    BORDER_LEFT = 'border-left' // dragEnter
//, START_BORDER_STYLE = "1px solid yellow"
,
    ENTER_BORDER_LEFT_STYLE = "4px solid green",
    ENTER_BORDER_LEFT_STYLE_DENY = "4px solid red";

var sourcePermissions = void 0,
    nodeDragTarget = void 0,
    borderBottom = void 0,
    borderLeftEnter = void 0;

var dragStartWithDnDStyle = function dragStartWithDnDStyle(ev, permissions) {
  ev.persist();
  nodeDragTarget = ev.currentTarget;

  var style = ev.currentTarget.style;
  borderBottom = style.getPropertyValue(BORDER_BOTTOM);
  //style.setProperty(BORDER, START_BORDER_STYLE);

  sourcePermissions = permissions;
};
var dropWithDnDStyle = function dropWithDnDStyle(ev) {
  var styleTarget = nodeDragTarget.style,
      styleSource = ev.currentTarget.style;
  styleSource.removeProperty(BORDER_LEFT);
  styleTarget.removeProperty(BORDER);
  styleTarget.setProperty(BORDER_BOTTOM, borderBottom);
};
var dragEnterWithDnDStyle = function dragEnterWithDnDStyle(ev, sourceType) {
  var style = ev.currentTarget.style;
  borderLeftEnter = style.getPropertyValue(BORDER_LEFT);

  if (sourcePermissions.indexOf(sourceType) !== -1) {
    style.setProperty(BORDER_LEFT, ENTER_BORDER_LEFT_STYLE);
  } else {
    style.setProperty(BORDER_LEFT, ENTER_BORDER_LEFT_STYLE_DENY);
  }
};
var dragLeaveWithDnDStyle = function dragLeaveWithDnDStyle(ev) {
  var style = ev.currentTarget.style;
  style.removeProperty(BORDER_LEFT);
  style.setProperty(BORDER_LEFT, borderLeftEnter);
};

var withDnDStyle = function withDnDStyle(target) {
  Object.assign(target.prototype, {
    dragStartWithDnDStyle: dragStartWithDnDStyle,
    dropWithDnDStyle: dropWithDnDStyle,
    dragEnterWithDnDStyle: dragEnterWithDnDStyle,
    dragLeaveWithDnDStyle: dragLeaveWithDnDStyle
  });
};

exports.default = withDnDStyle;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\watch-browser\decorators\withDnDStyle.js.map