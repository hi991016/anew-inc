import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

/* ------------------------------- components ------------------------------- */
import Accordion from '../components/Accordion'

/* ---------------------------------- utils --------------------------------- */
import { accordionData } from '../utils/accordion-data'

import styles from '../styles/company.module.scss'

const Company = ({ elRefMain }: { elRefMain?: any }) => {
  const [isLangugage, setIsLangugage] = useState('jp')

  return (
    <div className={styles.company} id='company' ref={elRefMain}>
      <div className={styles.companyContainer}>
        <div className={styles.companyLeft}>
          <h2>
            COMPANY <br />
            INFORMATION
          </h2>

          <div className={styles.companyLang}>
            <p className={isLangugage === 'jp' ? styles.active : ''} onClick={() => setIsLangugage('jp')}>
              jp
            </p>
            <span>/</span>
            <p className={isLangugage === 'en' ? styles.active : ''} onClick={() => setIsLangugage('en')}>
              en
            </p>
          </div>
        </div>

        <div className={styles.companyCenter}>
          <div className={styles.companyContent}>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={isLangugage}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false)
                }}
                timeout={300}
                classNames='fade'
              >
                <>
                  {isLangugage === 'jp' ? (
                    <div className='lang-jp'>
                      <h2 className={styles.companyText}>( MISSION )</h2>

                      <div className={styles.companySubtitle}>
                        <h3 className={styles.companyText}>ALL BACK TO THE EARTH.</h3>
                        <p>すべてを地球に還す</p>
                      </div>

                      <div className={styles.companyDesc}>
                        <p>
                          人と地球がお互いに恩恵を得る事ができるよう、持続可能かつ透明性のある革新的な方法により、保有する喜びを感じられるプロダクトをより多くの人に届けます。
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='lang-en'>
                      <h2 className={styles.companyText}>( MISSION )</h2>

                      <div className={styles.companySubtitle}>
                        <h3 className={styles.companyText}>ALL BACK TO THE EARTH.</h3>
                      </div>

                      <div className={styles.companyDesc}>
                        <p>
                          In order for people and the earth to benefit from each other. By sustainable, transparent, and
                          innovative ways, we create products that people feel the joy of owning them.
                        </p>
                      </div>
                    </div>
                  )}
                </>
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className={`${styles.companyContent} pc-only`}>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={isLangugage}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false)
                }}
                timeout={300}
                classNames='fade'
              >
                <>
                  {isLangugage === 'jp' ? (
                    <div className='lang-jp'>
                      <h2 className={styles.companyText}>( INFO )</h2>

                      <div className={styles.companySubtitle}>
                        <h3 className={styles.companyText}>anew inc.</h3>
                        <p>株式会社アニュウインク</p>
                      </div>

                      <div className={styles.companyDesc}>
                        <p>東京都渋谷区代官山町20−23</p>
                        <p>Forestgate Daikanyama MAIN棟 3F</p>
                        <Link to='mailto:info@anew-inc.com'>info@anew-inc.com</Link>
                      </div>
                    </div>
                  ) : (
                    <div className='lang-en'>
                      <h2 className={styles.companyText}>( INFO )</h2>

                      <div className={styles.companySubtitle}>
                        <h3 className={styles.companyText}>anew inc.</h3>
                      </div>

                      <div className={styles.companyDesc}>
                        <p>Forestgate Daikanyama Main Building 3F,</p>
                        <p>20-23 Daikanyamacho, Shibuya-ku, Tokyo</p>
                        <Link to='mailto:info@anew-inc.com'>info@anew-inc.com</Link>
                      </div>
                    </div>
                  )}
                </>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>

        <div className={styles.companyRight}>
          <div className={styles.companyMember}>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={isLangugage}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false)
                }}
                timeout={300}
                classNames='fade'
              >
                <h2 className={styles.companyText}>( MEMBER )</h2>
              </CSSTransition>
            </SwitchTransition>

            {accordionData.map((items, i) => (
              <SwitchTransition mode='out-in' key={i}>
                <CSSTransition
                  key={isLangugage}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false)
                  }}
                  timeout={300}
                  classNames='fade'
                >
                  <>
                    <Accordion
                      title={items.title}
                      subtitle={isLangugage === 'jp' ? items.subtitleJp : items.subtitleEn}
                      lang={isLangugage}
                      key={i}
                    >
                      {isLangugage === 'jp' ? items.textJp : items.textEn}
                    </Accordion>
                  </>
                </CSSTransition>
              </SwitchTransition>
            ))}
          </div>

          <div className={`${styles.companyContent} sp-only`}>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={isLangugage}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false)
                }}
                timeout={300}
                classNames='fade'
              >
                <>
                  {isLangugage === 'jp' ? (
                    <div className='lang-jp'>
                      <h2 className={styles.companyText}>( INFO )</h2>

                      <div className={styles.companySubtitle}>
                        <h3 className={styles.companyText}>anew inc.</h3>
                        <p>株式会社アニュウインク</p>
                      </div>

                      <div className={styles.companyDesc}>
                        <p>東京都中央区⽇本橋⼩⾈町14-7</p>
                        <p>Soil Nihonbashi 2F Soil Work</p>
                        <Link to='mailto:info@anew-inc.com'>info@anew-inc.com</Link>
                      </div>
                    </div>
                  ) : (
                    <div className='lang-en'>
                      <h2 className={styles.companyText}>( INFO )</h2>

                      <div className={styles.companySubtitle}>
                        <h3 className={styles.companyText}>anew inc.</h3>
                      </div>

                      <div className={styles.companyDesc}>
                        <p>Soil Nihonbashi 2F Soil Work, 14-7, Kobunacho,</p>
                        <p>Nihonbashi, Chuo-ku, Tokyo</p>
                        <Link to='mailto:info@anew-inc.com'>info@anew-inc.com</Link>
                      </div>
                    </div>
                  )}
                </>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
