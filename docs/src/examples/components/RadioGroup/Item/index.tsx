import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import Segment from 'src/components/Segment/Segment'

const States = () => (
  <ExampleSection title="Item">
    <ComponentExample
      title="Radio"
      description="A radio for checking. Needs to be part of RadioGroup"
      examplePath="components/RadioGroup/Item/RadioGroupItemExample"
    />
    <ComponentExample
      title="Checked"
      description="A radio can come pre-checked."
      examplePath="components/RadioGroup/Item/RadioGroupItemExampleChecked"
    >
      <Segment style={{ marginTop: '10px' }}>
        Use <code>defaultCheckedValue</code> to set the default value.
      </Segment>
    </ComponentExample>
    <ComponentExample
      title="Disabled"
      description="Radios can be disabled."
      examplePath="components/RadioGroup/Item/RadioGroupItemExampleDisabled"
    />
  </ExampleSection>
)

export default States
