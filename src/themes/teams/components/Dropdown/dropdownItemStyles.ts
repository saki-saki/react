import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import { DropdownVariables } from './dropdownVariables'
import { DropdownItemProps } from 'src/components/Dropdown/DropdownItem'
import ListItem from 'src/components/List/ListItem'

const dropdownItemStyles: ComponentSlotStylesInput<DropdownItemProps, DropdownVariables> = {
  root: ({ variables: v, props: { active } }): ICSSInJSStyle => ({
    [`&.${ListItem.className}`]: { backgroundColor: v.listItemBackgroundColor },

    ...(active && {
      [`&.${ListItem.className}`]: {
        backgroundColor: v.listItemHighlightedBackgroundColor,
        color: v.listItemTextColor,
      },
    }),
  }),
}

export default dropdownItemStyles
