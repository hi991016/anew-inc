import styles from './scrolldown.module.scss'

const ScrollDown = ({ elRef }: { elRef?: any }) => {
  return (
    <div className={styles.scrolldown} ref={elRef}>
      <div className={styles.line}>
        <span></span>
      </div>
    </div>
  )
}

export default ScrollDown
