import { pxToRem } from '../../utils'

export interface ChatGutterVariables {
  margin: string
}

export default (): ChatGutterVariables => ({
  margin: pxToRem(10),
})
