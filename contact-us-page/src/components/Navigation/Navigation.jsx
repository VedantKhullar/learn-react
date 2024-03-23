import styles from './Navigation.module.css'

function Navigation() {
  return (
    <div className={styles.navigation_container}>
    <div>
      <img src="./images/logo.png" alt="logo" />
    </div>
      <ul className={styles.nav_list}>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navigation