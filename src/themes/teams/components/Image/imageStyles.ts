import { pxToRem } from '../../../../lib'
import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import { ImageProps } from '../../../../components/Image/Image'

export default {
  root: ({ props, variables }): ICSSInJSStyle => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: (props.fluid && '100%') || variables.width,
    height: variables.height,
    ...(props.circular && { borderRadius: pxToRem(9999) }),
    ...(props.avatar && {
      width: variables.avatarSize,
      height: variables.avatarSize,
      borderRadius: variables.avatarRadius,
    }),
    ...(props.fluid && { width: '100%' }),
  }),
} as ComponentSlotStylesInput<ImageProps, any>
