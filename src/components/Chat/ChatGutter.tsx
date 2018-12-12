import * as React from 'react'
import * as PropTypes from 'prop-types'

import {
  UIComponent,
  childrenExist,
  UIComponentProps,
  ContentComponentProps,
  ChildrenComponentProps,
  commonPropTypes,
  createShorthandFactory,
} from '../../lib'
import { Extendable, ShorthandValue } from '../../../types/utils'

export interface ChatGutterProps
  extends UIComponentProps<ChatGutterProps>,
    ChildrenComponentProps,
    ContentComponentProps<ShorthandValue> {

  /** Indicates whether the gutter is positioned at the start or the end. */
  position?: 'start' | 'end'
}

/**
 * A gutter is used to create the auxiliary area of a chat item
 */
class ChatGutter extends UIComponent<Extendable<ChatGutterProps>, any> {
  static className = 'ui-chat__gutter'
  static create: Function
  static displayName = 'ChatGutter'

  static propTypes = {
    ...commonPropTypes.createCommon({
      content: 'shorthand',
    }),
    position: PropTypes.oneOf(['start', 'end']),
  }

  static defaultProps = {
    as: 'div',
    position: 'start',
  }

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props

    return (
      <ElementType className={classes.root} {...rest}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

ChatGutter.create = createShorthandFactory(ChatGutter, 'content')

export default ChatGutter
