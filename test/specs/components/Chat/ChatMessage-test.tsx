import { handlesAccessibility, implementsShorthandProp, isConformant } from 'test/specs/commonTests'

import ChatMessage from 'src/components/Chat/ChatMessage'
import { chatMessageBehavior } from 'src/lib/accessibility'
import { AccessibilityDefinition } from 'src/lib/accessibility/types'
import Text from 'src/components/Text/Text'
import Slot from 'src/components/Slot/Slot'

const chatMessageImplementsShorthandProp = implementsShorthandProp(ChatMessage)

describe('ChatMessage', () => {
  isConformant(ChatMessage)

  chatMessageImplementsShorthandProp('author', Text)
  chatMessageImplementsShorthandProp('timestamp', Text)
  chatMessageImplementsShorthandProp('content', Slot, { mapsValueToProp: 'children' })

  describe('accessibility', () => {
    handlesAccessibility(ChatMessage, {
      focusZoneDefinition: (chatMessageBehavior as AccessibilityDefinition).focusZone,
    })
  })
})
