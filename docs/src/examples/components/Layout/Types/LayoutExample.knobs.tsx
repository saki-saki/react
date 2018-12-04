import PropTypes from 'prop-types'
import React from 'react'

import Knobs from 'docs/src/components/Knobs/Knobs'

const LayoutExampleGapKnobs: any = props => {
  const { onKnobChange, debug, gap, vertical, wrap } = props

  return (
    <Knobs>
      <Knobs.Scalar name="gap" value={gap} onChange={onKnobChange} />
      <Knobs.Boolean name="debug" value={debug} onChange={onKnobChange} />
      <Knobs.Boolean name="vertical" value={vertical} onChange={onKnobChange} />
      <Knobs.Boolean name="wrap" value={wrap} onChange={onKnobChange} />
    </Knobs>
  )
}

LayoutExampleGapKnobs.propTypes = {
  onKnobChange: PropTypes.func.isRequired,
  gap: PropTypes.string,
  debug: PropTypes.bool,
  vertical: PropTypes.bool,
  wrap: PropTypes.bool,
}

LayoutExampleGapKnobs.defaultProps = {
  gap: 0,
  debug: true,
  vertical: true,
  wrap: true,
}

export default LayoutExampleGapKnobs
