

  import type Button from './index.vue'
  import type { ExtractPropTypes } from 'vue'
  export const buttonProps = {
    /**
     * @description button text value
     * */
    text: {
      type: String,
      default: "开始",
    }
  } as const
  export type ButtonProps = ExtractPropTypes<typeof buttonProps>
  
  export const buttonEmits = {
    change: (e:Event):void =>{}
  }
  export type AffixEmits = typeof buttonProps
  
  export type AffixInstance = InstanceType<typeof Button>
  