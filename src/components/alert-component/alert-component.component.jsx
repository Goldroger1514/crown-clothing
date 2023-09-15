import './alert.styles.scss'
let AlertComponent = ({ error }) => {
  return (
    <div className="alert-container">
      <div className="alert-card">
        <div className="info">{error}</div>
      </div>
    </div>
  )
}
export default AlertComponent