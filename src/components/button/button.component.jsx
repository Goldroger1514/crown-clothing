import { BaseButton, GoogleButton, InvertedButton } from './button-style'
let BUTTON_OPTIONS = {
  inverted: 'inverted',
  google: 'google',
  base: 'base'
}
let Button = ({ children, ...info }) => {
  let getBtnType = (type = 'base') => {
    return (
      {
        [BUTTON_OPTIONS.inverted]: InvertedButton,
        [BUTTON_OPTIONS.google]: GoogleButton,
        [BUTTON_OPTIONS.base]: BaseButton
      }[type]
    )
  }
  let CustomBtn = getBtnType(info.type)
  return (
    <CustomBtn {...info} >{children}</CustomBtn>
  )
}
export default Button