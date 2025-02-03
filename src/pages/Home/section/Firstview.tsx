import styles from '../styles/firstview.module.scss'

const Firstview = ({ elRef }: { elRef?: any }) => {
  return (
    <div className={styles.firstview}>
      <div className={styles.firstviewContainer}>
        <div className={styles.firstviewHeading} ref={elRef} data-fp-fwheading>
          <h2>
            Make changes in our daily lives while imagining a thousand years into the future. <span>anew inc.</span> is
            a project team to pursue possibilities to be <span>the good ancestor</span> from a
            <span> Product Sustainability</span> perspective. Having the starting point from consideration of contexts
            such as environmental crisis, culture, and economy, we research the designs and materials associated with
            objects. And we create and develop products with <span>lower environmental impact</span> that will be
            suitable for our future society.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Firstview
