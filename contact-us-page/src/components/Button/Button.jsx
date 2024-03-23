import styles from './Button.module.css';

function Button({btnText, icon, isOutline}) {
  return (
    <button
      className = { isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {btnText}
    </button>
  )
}

export default Button