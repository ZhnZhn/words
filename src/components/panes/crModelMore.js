import {
  crMenuModelProps,
  crMenuSubItem,
  crMenuItem
} from '../zhn-modal-slider/menuModelFn';

const crModelMore = ({
  onMinWidth,
  onInitWidth,
  onPlusWidth,
  onMinusWidth,
  onRemoveItems
}) => ({
    ...crMenuModelProps(180, 2),
    p0: [
      crMenuSubItem('p1', 'Resize'),
      crMenuItem('Remove All Items', onRemoveItems)
    ],
    p1: [
      crMenuItem('to MinWidth', onMinWidth, !1),
      crMenuItem('to InitWidth', onInitWidth, !1),
      crMenuItem('+10px to Width', onPlusWidth, !1),
      crMenuItem('-10px to Width', onMinusWidth, !1)
    ]
})

export default crModelMore
