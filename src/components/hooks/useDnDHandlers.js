import { bindTo } from '../../utils/bindTo';

const useDnDHandlers = ({
  isDraggable,
  option,
  onDragStart,
  onDrop,
  onDragEnter,
  onDragOver,
  onDragLeave
}) => isDraggable
  ? {
      draggable: !0,
      onDragStart: bindTo(onDragStart, option),
      onDrop: bindTo(onDrop, option),
      onDragEnter,
      onDragOver,
      onDragLeave
    }
  : void 0;

export default useDnDHandlers
