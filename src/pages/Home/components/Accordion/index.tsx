import useAccordion from 'src/hooks/useAccordion'

import styles from './accordion.module.scss'

interface AccordionProps {
  title: string
  subtitle: string
  children: string
  lang: string
}

const Accordion = ({ title, subtitle, children, lang }: AccordionProps) => {
  const [isOpen, toggle, refContentBody, height] = useAccordion()
  return (
    <div className={` ${styles.accordion} ${lang === 'en' ? styles.langEn : ''} ${isOpen ? styles.active : ''}   `}>
      <div className={styles['accordion_header']} onClick={toggle}>
        <div className={styles['accordion_heading']}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles['accordion_icon']}>
          <svg aria-label='plus' xmlns='http://www.w3.org/2000/svg' width={12} height={12} viewBox='0 0 12 12'>
            <g id='Group_78' data-name='Group 78' transform='translate(-1195 -3556.5)'>
              <line
                id='Line_3'
                data-name='Line 3'
                x2={12}
                transform='translate(1195 3562.5)'
                fill='none'
                stroke='#3b720e'
                strokeWidth={1}
              />
              <line
                id='Line_4'
                data-name='Line 4'
                x2={12}
                transform='translate(1201 3556.5) rotate(90)'
                fill='none'
                stroke='#3b720e'
                strokeWidth={1}
              />
            </g>
          </svg>
        </div>
      </div>

      <div className={styles['accordion_content']} style={{ height }}>
        <div ref={refContentBody} className={styles['accordion_content-body']}>
          <div dangerouslySetInnerHTML={{ __html: children }} />
        </div>
      </div>
    </div>
  )
}

export default Accordion
