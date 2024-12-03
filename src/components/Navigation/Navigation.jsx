import styles from './Navigation.module.css';

const Navigation = () => {



  return (
  <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/public/images/logo.png" alt="Company Logo" />
      </div>
      <ul>
        <li >Home</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navigation
