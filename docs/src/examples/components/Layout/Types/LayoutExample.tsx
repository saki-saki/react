import React from 'react'
import { Layout } from '@stardust-ui/react'

const LayoutExample = ({ knobs }) => (
  <Layout
    debug={knobs.debug}
    vertical={knobs.vertical}
    wrap={knobs.wrap}
    start={<Layout debug={knobs.debug} gap={knobs.gap} wrap={knobs.wrap} main={'header'} />}
    main={
      <Layout
        debug={knobs.debug}
        gap={knobs.gap}
        wrap={knobs.wrap}
        start={'left'}
        main={'main'}
        end={'right'}
      />
    }
    end={<Layout debug={knobs.debug} gap={knobs.gap} wrap={knobs.wrap} main={'footer'} />}
  />
)

export default LayoutExample
