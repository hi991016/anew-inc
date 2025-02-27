import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Link to='https://instagram.com/anew__inc/' target='_blank' className={styles['footer-left']}>
          INSTAGRAM
        </Link>
        <Link to='https://www.websitecarbon.com/' target='_blank' className={styles['footer-center']}>
          * This website emits 0.03g of CO2 per view.
        </Link>
        <p className={styles['footer-right']}>©︎ {new Date().getFullYear()} anew inc.</p>
      </footer>
    </>
  )
}

export default Footer
