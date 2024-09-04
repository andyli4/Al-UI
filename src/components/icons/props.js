//This file is used to define props for all components
export default {
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String
  },
  rotation: {
    type: [Number, String]
  },
  flip: {
    type: [Number, String]
  },
  color:{
    type:String,
  },
  //animation
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  // custom value
  type: String,
}
