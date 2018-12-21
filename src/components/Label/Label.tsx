import * as PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenExist,
  createShorthandFactory,
  customPropTypes,
  pxToRem,
  UIComponent,
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
  commonPropTypes,
} from '../../lib'

import Icon from '../Icon/Icon'
import Image from '../Image/Image'
import Layout from '../Layout/Layout'
import { Accessibility } from '../../lib/accessibility/types'
import { ReactProps, ShorthandValue } from '../../../types/utils'

export interface LabelProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps {
  accessibility?: Accessibility

  /** A Label can be circular. */
  circular?: boolean

  /** A Label can take up the width of its container. */
  fluid?: boolean

  /** A Label can have an icon. */
  icon?: ShorthandValue

  /** A Label can position its Icon at the start or end of the layout. */
  iconPosition?: 'start' | 'end'

  /** A Label can contain an image. */
  image?: ShorthandValue

  /** A Label can position its image at the start or end of the layout. */
  imagePosition?: 'start' | 'end'
}

/**
 * A Label is used to classify content.
 */
class Label extends UIComponent<ReactProps<LabelProps>, any> {
  static displayName = 'Label'

  static create: Function

  static className = 'ui-label'

  static propTypes = {
    ...commonPropTypes.createCommon(),
    circular: PropTypes.bool,
    icon: customPropTypes.itemShorthand,
    iconPosition: PropTypes.oneOf(['start', 'end']),
    image: customPropTypes.itemShorthand,
    imagePosition: PropTypes.oneOf(['start', 'end']),
    fluid: PropTypes.bool,
  }

  static defaultProps = {
    as: 'span',
    imagePosition: 'start',
    iconPosition: 'end',
  }

  handleIconOverrides = iconProps => {
    return {
      ...(iconProps.onClick && { tabIndex: '0' }),
      ...(!iconProps.xSpacing && {
        xSpacing: 'none',
      }),
    }
  }

  renderComponent({ ElementType, classes, rest, variables, styles }) {
    const { children, content, icon, iconPosition, image, imagePosition } = this.props

    if (childrenExist(children)) {
      return (
        <ElementType {...rest} className={classes.root}>
          {children}
        </ElementType>
      )
    }

    const imageElement = Image.create(image, {
      defaultProps: {
        styles: styles.image,
        variables: variables.image,
      },
    })
    const iconElement = Icon.create(icon, {
      defaultProps: {
        styles: styles.icon,
        variables: variables.icon,
      },
      overrideProps: this.handleIconOverrides,
    })
    return (
      <ElementType {...rest} className={classes.root}>
        <Layout
          start={
            <>
              {imagePosition === 'start' && imageElement}
              {iconPosition === 'start' && iconElement}
            </>
          }
          main={content}
          end={
            <>
              {iconPosition === 'end' && iconElement}
              {imagePosition === 'end' && imageElement}
            </>
          }
          gap={pxToRem(3)}
        />
      </ElementType>
    )
  }
}

Label.create = createShorthandFactory(Label, 'content')

export default Label
