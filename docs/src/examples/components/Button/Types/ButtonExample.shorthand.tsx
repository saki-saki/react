import React from 'react'
import { Button, _S } from '@stardust-ui/react'

const ButtonExample = () => (
  <div>
    <Button icon="checkmark" /> {/* Primitive */}
    <Button icon={{ name: 'checkmark', color: 'red' }} /> {/* Props */}
    {/* Function! */}
    <Button
      icon={_S('checkmark', (Component, props) => (
        <>
          <Component {...props} />
          <span>Custom element!</span>
        </>
      ))}
    />
    <Button
      icon={_S({ name: 'checkmark' }, (Component, props) => (
        <>
          <Component {...props} />
          <span>Custom element!</span>
        </>
      ))}
    />
  </div>
)

export default ButtonExample
