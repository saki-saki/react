import React from 'react'
import { Label } from '@stardust-ui/react'

class LabelExampleContentCustomizationShorthand extends React.Component {
  render() {
    return (
      <Label
        // debug={false}
        // wrap
        content="You can remove me!"
        circular
        image={{ src: 'public/images/avatar/small/matt.jpg', avatar: true }}
        icon='close'
      />
    )
  }
}

export default LabelExampleContentCustomizationShorthand
