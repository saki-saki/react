import { debugRoot, debugArea, debugGap } from '../../../../styles/debugStyles'
import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'

const truncateStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const layoutStyles: ComponentSlotStylesInput = {
  root: ({ props }): ICSSInJSStyle => {
    const {
      alignItems,
      debug,
      gap,
      inline,
      justifyItems,
      main,
      mainSize,
      end,
      endSize,
      start,
      startSize,
      vertical,
    } = props

    return {
      ...(debug && debugRoot()),
      justifyItems,
      alignItems,
      display: inline ? 'inline-flex' : 'flex',
      justifyContent: 'center',
      flexDirection: vertical ? 'column' : 'row',
      // [vertical ? 'gridTemplateRows' : 'gridTemplateColumns']: [
      //   // Heads up!
      //   // IE11 Doesn't support grid-gap, insert virtual columns instead
      //   start && startSize,
      //   gap && start && main && gap,
      //   main && mainSize,
      //   gap && (start || main) && end && gap,
      //   end && endSize,
      // ]
      //   .filter(Boolean)
      //   .join(' '),
    }
  },

  gap: ({ props }): ICSSInJSStyle => ({
    ...(props.debug && debugGap({ vertical: props.vertical })),
  }),

  start: ({ props }): ICSSInJSStyle => ({
    ...(props.debug && debugArea()),
    ...(props.truncateStart && truncateStyle),
    alignItems: 'center',
    ...props.startCSS,
  }),

  main: ({ props }): ICSSInJSStyle => ({
    ...(props.debug && debugArea()),
    ...(props.truncateMain && truncateStyle),
    ...props.mainCSS,
  }),

  end: ({ props }): ICSSInJSStyle => ({
    ...(props.debug && debugArea()),
    ...(props.truncateEnd && truncateStyle),
    alignItems: 'center',
    padding: props.endPadded ? '0.5rem' : undefined,
    ...props.endCSS,
  }),
}

export default layoutStyles
