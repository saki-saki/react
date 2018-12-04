import * as _ from 'lodash'

import { pxToRem } from '../../../../lib'
import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import { LabelProps } from '../../../../components/Label/Label'
import { CSSProperties } from 'react'
import { ObjectOf } from '../../../../../types/utils'

const labelLayout: ObjectOf<CSSProperties> = {
  // root: props => ({
  //   display: 'inline-flex',
  //   alignItems: 'center',
  // }),
  image: props => ({
    flex: '0 0 auto',
  }),
  content: props => ({
    flex: 1,
    padding: '0.5rem',
  }),
  icon: props => ({
    flex: '0 0 auto',
    padding: '0.5rem',
  }),
}

console.log(labelLayout)

const labelStyles: ComponentSlotStylesInput<LabelProps, any> = {
  root: ({ props: { image, imagePosition, circular }, variables }): ICSSInJSStyle => ({
    // padding: variables.padding,
    // ...(image &&
    //   imagePosition === 'start' && {
    //     paddingLeft: variables.startPaddingLeft,
    //   }),
    // ...(image &&
    //   imagePosition === 'end' && {
    //     paddingRight: variables.endPaddingRight,
    //   }),
    // display: 'inline-flex',
    // alignItems: 'center',
    // height: variables.height,
    ...labelLayout.root,

    fontSize: pxToRem(14),
    lineHeight: variables.height,
    backgroundColor: variables.backgroundColor,
    color: variables.color,
    borderRadius: pxToRem(3),
    ...(circular && {
      borderRadius: variables.circularRadius,
    }),
    overflow: 'hidden',
  }),

  content: ({ variables }): ICSSInJSStyle => ({
    ...labelLayout.content,
  }),

  icon: ({ props }): ICSSInJSStyle => ({
    ...labelLayout.icon,

    ...(_.get(props, 'icon.onClick') && {
      cursor: 'pointer',
    }),
  }),

  image: ({ variables }): ICSSInJSStyle => ({
    ...labelLayout.image,

    // height: variables.height,
    // width: variables.height,
  }),
}

export default labelStyles
