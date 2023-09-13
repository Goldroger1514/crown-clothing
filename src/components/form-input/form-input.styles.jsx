import { Label, Input } from "../sign-in/sign-in.styles"
let FormInput = ({ label, ...info }) => {
  return (
    <>
      <Input {...info} />
      <Label shrink={info.value.length} htmlFor="">{label}</Label>
    </>
  )
}
export default FormInput