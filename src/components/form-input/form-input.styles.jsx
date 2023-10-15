import { Label, Input } from "../sign-in/sign-in.styles"
let FormInput = ({ label, ...info }) => {
  return (
    <>
      <Input {...info} />
      <Label className={info.value.length} htmlFor="">{label}</Label>
    </>
  )
}
export default FormInput