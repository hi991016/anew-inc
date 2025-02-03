import { LayoutMain } from 'src/container'

import styles from './notfound.module.scss'

const NotFoundPage = () => {
  return (
    <LayoutMain>
      <div className={styles.notfound}>
        <h2 className={styles['notfound-heading']}>404</h2>
        <div className={styles['notfound-sub']}>
          <h3>This page could not be found.</h3>
        </div>
      </div>
    </LayoutMain>
  )
}

export default NotFoundPage
