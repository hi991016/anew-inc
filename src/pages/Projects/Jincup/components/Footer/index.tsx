import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer} data-jincup-footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <Link to='/'>back to site</Link>
          <p>©︎ {new Date().getFullYear()} anew inc.</p>
        </div>

        <div
          className={`pc-only ${styles.footerRight}`}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          <svg
            role='img'
            aria-label='BACK TO TOP'
            xmlns='http://www.w3.org/2000/svg'
            width='22.828'
            height='62.414'
            viewBox='0 0 22.828 62.414'
          >
            <g id='Group_159' data-name='Group 159' transform='translate(-1386.586 -7620.586)'>
              <line
                id='Line_23'
                data-name='Line 23'
                y1={60}
                transform='translate(1398 7623)'
                fill='none'
                stroke='#5a7445'
                strokeWidth={2}
              />
              <line
                id='Line_24'
                data-name='Line 24'
                x1={10}
                y2={10}
                transform='translate(1388 7622)'
                fill='none'
                stroke='#5a7445'
                strokeLinecap='square'
                strokeWidth={2}
              />
              <line
                id='Line_25'
                data-name='Line 25'
                x2={10}
                y2={10}
                transform='translate(1398 7622)'
                fill='none'
                stroke='#5a7445'
                strokeLinecap='square'
                strokeWidth={2}
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer
