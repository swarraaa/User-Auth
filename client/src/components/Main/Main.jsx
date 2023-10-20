import styles from './Main.module.css'

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Swara</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.hero}>
        <h1>Hey and Welcome to the Main page!</h1>
      </div>
    </div>
  )
}

export default Main
