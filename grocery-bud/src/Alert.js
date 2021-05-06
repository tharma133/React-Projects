function Alert({ type, msg }) {
  return <p className={`alert-text ${type}`}>{msg}</p>
}

export default Alert
