import { pxToRem } from '../../utils'

export interface ChatItemVariables {
  margin: string
}

export default (): ChatItemVariables => ({
  margin: pxToRem(8),
})
