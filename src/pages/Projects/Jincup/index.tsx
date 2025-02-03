import { useRef } from 'react'
import { useImmer } from 'use-immer'

/* ------------------------------- components ------------------------------- */
import { Header, Footer, Loading } from './components'

/* -------------------------------- container ------------------------------- */
import { SEO } from 'src/container'

/* --------------------------------- section -------------------------------- */
import { Mainvisual, Overview, Dialogue, Prototype } from './section'

import styles from './jincup.module.scss'

const JincupPage = () => {
  const overviewSection = useRef<any>(null)
  const dialogueSection = useRef<any>(null)
  const prototypeSection = useRef<any>(null)
  const [state, updateState] = useImmer({
    language: 'jp'
  })

  const onScrollSection = (val: string) => {
    switch (val) {
      case 'overview':
        window.scrollTo({ top: overviewSection.current.offsetTop, behavior: 'smooth' })
        break
      case 'dialogue':
        window.scrollTo({ top: dialogueSection.current.offsetTop, behavior: 'smooth' })
        break
      case 'prototype':
        window.scrollTo({ top: prototypeSection.current.offsetTop, behavior: 'smooth' })
        break
      default:
        break
    }
  }

  return (
    <>
      <SEO
        title='jincup anew ｜ PROJECTS ｜ anew inc.'
        description='未来のジンカップを考える。jincup anewは、土壌に埋めると約3ヶ月で分解されて土に還るジンカップのプロトタイプです。YOKOGAWAが取り扱うVASUジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれました。'
        url='https://anew-inc.com/projects/jincup-anew/'
        ogImg='https://anew-inc.com/ogp_jincup.jpg'
      >
        <div className={styles.jincup}>
          <Loading />

          <Header
            lang={state.language}
            onLangChange={(val: string) => {
              updateState((draft) => {
                draft.language = val
              })
            }}
            onScrollSection={(val: string) => onScrollSection(val)}
          />
          <main>
            <Mainvisual />
            <Overview lang={state.language} elRef={overviewSection} />
            <Dialogue lang={state.language} elRef={dialogueSection} />
            <Prototype lang={state.language} elRef={prototypeSection} />
          </main>
          <Footer />
        </div>
      </SEO>
    </>
  )
}

export default JincupPage
