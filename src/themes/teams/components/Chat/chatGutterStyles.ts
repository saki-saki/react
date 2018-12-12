import { ICSSInJSStyle, ComponentSlotStylesInput } from '../../../types'
import { ChatGutterProps } from '../../../../components/Chat/ChatGutter'
import { ChatGutterVariables } from './chatGutterVariables'

const chatItemStyles: ComponentSlotStylesInput<ChatGutterProps, ChatGutterVariables> = {
  root: ({ props: p, variables: v }): ICSSInJSStyle => ({
    position: 'absolute',
    marginTop: v.margin,
    [p.position === 'end' ? 'right' : 'left']: 0,
  }),
}

export default chatItemStyles
