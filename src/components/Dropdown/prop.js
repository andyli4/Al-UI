import tooltipProps from '../Tooltip/prop'
export default {
  ...tooltipProps,
  menuOptions: {
    type: Array,
    required: true
  },
  hideAfterClick: {
    type: Boolean,
    default: false
  }
}
