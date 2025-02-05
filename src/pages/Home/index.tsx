import { useRef, useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

/* ---------------------------------- gsap ---------------------------------- */
import { gsap } from 'gsap'

/* ------------------------------- components ------------------------------- */
import { Header, Footer } from 'src/components'
import { ScrollDown } from './components'

/* -------------------------------- container ------------------------------- */
import { SEO } from 'src/container'

/* --------------------------------- section -------------------------------- */
import { Firstview, Intro, Projects, Philosophy, Company } from './section'

import styles from './home.module.scss'

declare global {
  interface Window {
    fullpage_api: any
  }
}

const HomePage = () => {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [isReady, setIsReady] = useState(false)
  //
  const refFirstview = useRef<any>(null)
  const refProjects = useRef<any>(null)
  const refCompany = useRef<any>(null)
  const refScrollable = useRef<any>(null)
  const refScrollDown = useRef<any>(null)
  //
  const refIntro = useRef<any>(null)
  const refIntroLeft = useRef<any>(null)
  const refIntroRight = useRef<any>(null)
  const refIntroOmoty = useRef<any>(null)

  // ===== hide element =====
  const hideElements = () => {
    gsap.to(
      [refFirstview.current, refIntro.current, refProjects.current, refScrollable.current, refScrollDown.current],
      {
        autoAlpha: 0,
        duration: 0.5
      }
    )
  }

  // ===== animate in =====
  const animateIn = ({ currentIndex }: { currentIndex?: number }) => {
    const mm = gsap.matchMedia(),
      breakPoint = 1024

    switch (currentIndex) {
      case 0:
        gsap.to(refFirstview.current, {
          autoAlpha: 1,
          duration: 0.5
        })
        break
      case 1:
        mm.add(
          {
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`
          },
          (context) => {
            const { isDesktop } = context.conditions as gsap.Conditions
            gsap
              .timeline()
              .to([refIntro.current, refScrollDown.current], {
                autoAlpha: 1,
                duration: 0.5
              })
              .to(refIntroOmoty.current, {
                x: 0,
                autoAlpha: isDesktop ? 1 : 0,
                duration: 0.5,
                delay: 0.5
              })
              .to(refIntroRight.current, {
                autoAlpha: 1,
                duration: 0.5
              })
            return () => {}
          }
        )
        break
      case 2:
        gsap.to([refProjects.current, refScrollDown.current], {
          autoAlpha: 1,
          duration: 0.5
        })
        break
      case 3:
        gsap.to(refScrollable.current, {
          autoAlpha: 1,
          duration: 0.5
        })
        break
      default:
        break
    }
    //
    setTimeout(() => {
      window.fullpage_api.setAllowScrolling(true, 'down')
    }, 100)
  }

  // ===== init fullpage =====
  useEffect(() => {
    //
    const fullpageInner = document.querySelectorAll<HTMLElement>('[data-fp-inner]')!
    const init = () => {
      fullpageInner.forEach((items) => {
        items.style.height = window.innerHeight + 'px'
      })
      refScrollable.current.style.maxHeight = window.innerHeight + 'px'
    }
    'resize orientationchange'.split(' ').forEach((evt) => {
      window.addEventListener(evt, () => {
        init()
      })
    })
    init()
    //
    'mousewheel scroll touchmove'.split(' ').forEach((evt) => {
      refScrollable.current.addEventListener(
        evt,
        () => {
          let top = -1
          top = refScrollable.current.scrollTop

          if (top > 1) {
            window.fullpage_api.moveSectionDown()
          } else if (top === 0) {
            window.fullpage_api.moveTo(3)
          }
        },
        { passive: true }
      )
    })
  }, [])

  return (
    <>
      <SEO>
        <Header />
        <ScrollDown elRef={refScrollDown} />
        <ReactFullpage
          autoScrolling={true}
          controlArrows={false}
          scrollBar={false}
          scrollOverflow={false}
          scrollingSpeed={900}
          sectionSelector={'[data-fp-vertical]'}
          normalScrollElements={'[data-fp-scrollable]'}
          afterLoad={(_origin, destination) => {
            window.fullpage_api.setAllowScrolling(false, 'down')
            hideElements()
            animateIn({ currentIndex: destination.index })
            setSectionIndex(destination.index)
            setIsReady(true)
          }}
          onLeave={() => {
            if (isReady && sectionIndex < 3) {
              window.fullpage_api.setAllowScrolling(false, 'down')
            }
          }}
          credits={{
            enabled: false
          }}
          render={() => {
            return (
              <main className={styles.fullpage}>
                <section className={styles.vertical} data-fp-vertical>
                  <div className={styles.fullpageInner} data-fp-inner>
                    <Firstview elRef={refFirstview} />
                  </div>
                </section>
                <section className={styles.vertical} data-fp-vertical>
                  <div className={styles.fullpageInner} data-fp-inner>
                    <Intro
                      elRefMain={refIntro}
                      elRefLeft={refIntroLeft}
                      elRefRight={refIntroRight}
                      elRefOmoty={refIntroOmoty}
                    />
                  </div>
                </section>
                <section className={styles.vertical} data-fp-vertical>
                  <div className={styles.fullpageInner} data-fp-inner>
                    <Projects elRefMain={refProjects} />
                  </div>
                </section>
                <section className={styles.verticalNormal} data-fp-vertical>
                  <div className={styles.scrollable} id='refScrollable' ref={refScrollable} data-fp-scrollable>
                    <Philosophy />
                    <Company elRefMain={refCompany} />
                    <Footer />
                  </div>
                </section>
              </main>
            )
          }}
        />
      </SEO>
    </>
  )
}

export default HomePage
