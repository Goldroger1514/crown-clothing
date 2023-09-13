let FormInput = ({ label, ...info }) => {
  return (
    <>
      <input {...info} />
      <label htmlFor="">{label}</label>
    </>
  )
}
export default FormInput