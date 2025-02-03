import { CSSTransition, SwitchTransition } from 'react-transition-group'

/* ---------------------------------- image --------------------------------- */
import overviewImg from 'src/assets/Projects/Jincup/overview.webp'

import styles from '../styles/overview.module.scss'

const Overview = ({ lang, elRef }: { lang?: string; elRef?: any }) => {
  return (
    <section className={styles.overview} ref={elRef} id='overview' data-jincup-section data-jincup-overview>
      <div className={styles.overviewContainer}>
        <div className={styles.overviewRight}>
          <figure>
            <img src={overviewImg} alt='OVERVIEW' width={628} height={557} loading='lazy' />
          </figure>
        </div>

        <div className={styles.overviewLeft}>
          <div className={styles.overviewTop}>
            <div className={styles.head}>
              <h2>overview</h2>
              <SwitchTransition mode='out-in'>
                <CSSTransition
                  key={lang}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, true)
                  }}
                  timeout={300}
                  classNames='fade'
                >
                  <>
                    {lang === 'jp' ? (
                      <p className={styles.sub}>
                        生分解性マテリアルを使った <br />
                        土に還るジンカップ
                      </p>
                    ) : (
                      <p className={`${styles.en} sansserif-fonts`}>
                        JINCUP - WHICH DECOMPOSES <br />
                        IN THE SOIL, MADE BY <br />
                        BIODEGRADABLE MATERIALS.
                      </p>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>
            </div>

            <div className={styles.desc}>
              <SwitchTransition mode='out-in'>
                <CSSTransition
                  key={lang}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, true)
                  }}
                  timeout={300}
                  classNames='fade'
                >
                  <>
                    {lang === 'jp' ? (
                      <p>
                        最短約３ヶ月で分解されて土に還るジンカップのプロトタイプ。
                        YOKOGAWAの協力のもとVASUジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれた。
                        プラスチック製品の製造工程で必要なオリジナル金型が高額なため、サンプル第一号ということで、既存の型に流し込んで作ったブロックを木工のノミで彫って形にするという
                        「プラスチックをDIYする」 過去に例がない手法を選んだ。 伊勢丹新宿店での 「
                        <a
                          href='https://www.mistore.jp/store/shinjuku/shops/living/park/shopnews_list/shopnews_059.html'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          大東京展覧会 Tour of Asia Akihiro Wood Works in Tokyo
                        </a>
                        」 にてお披露目。 素材や金型の課題などを検証し、プロダクト化に向けて試行錯誤を進めている。
                      </p>
                    ) : (
                      <p className={`${styles.en} sansserif-fonts`}>
                        A prototype of jincup that decomposes in the soil in approximately 3 months(At the shortest).
                        With the cooperation of YOKOGAWA, VASU Japan’s biodegradable plastic material was molded into
                        block form by Nissili, then delivered to Kagoshima where Jin Akihiro hand-carved them to create
                        the cup. Given the high cost of creating molds required in the manufacturing process of plastic
                        products, a previously unheard-of method of “DIY plastic” was chosen for the first sample,
                        pouring the material into existing molds and carving the blocks with woodworking chisels to
                        shape them. This was showcased at the&nbsp;"
                        <a
                          href='https://www.mistore.jp/store/shinjuku/shops/living/park/shopnews_list/shopnews_059.html'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Tour of Asia Akihiro Wood Works in Tokyo
                        </a>
                        "&nbsp;exhibition at Isetan Shinjuku Store. Verification of materials and mold issues is
                        underway, as efforts continue to productize the cups.
                      </p>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>

          <div className={styles.overviewBottom}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h2>jin AKIHIRO</h2>
                <SwitchTransition mode='out-in'>
                  <CSSTransition
                    key={lang}
                    addEndListener={(node, done) => {
                      node.addEventListener('transitionend', done, true)
                    }}
                    timeout={300}
                    classNames='fade'
                  >
                    <>{lang === 'jp' && <p>アキヒロジン</p>}</>
                  </CSSTransition>
                </SwitchTransition>
              </div>

              <SwitchTransition mode='out-in'>
                <CSSTransition
                  key={lang}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, true)
                  }}
                  timeout={300}
                  classNames='fade'
                >
                  <>
                    {lang === 'jp' ? (
                      <p className={styles.desc}>
                        鹿児島を拠点に活動する木工作家。 直線から曲線へ、曲線から面へ。
                        力強い立体構築で使う人を作品の中へ引きずり込む。 2002
                        年の活動開始以来、オーダー家具制作、オリジナルのプロダクト製品の展開、店舗、住宅内装から、インスタレーション作品の発表など、活動の幅を広げ続けている。
                      </p>
                    ) : (
                      <p className={`${styles.desc} ${styles.en} sansserif-fonts`}>
                        A woodworking artist based in Kagoshima. From straight lines to curves, from curves to surfaces,
                        his powerful three-dimensional constructions draw viewers into his works. Since starting
                        activities in 2002, he has expanded his range of activities from custom furniture production,
                        development of original product lines, to installations, in addition to store and residential
                        interior design.
                      </p>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>

              <div className={styles.link}>
                <a href='https://www.instagram.com/jinakihiro/' target='_blank' rel='noreferrer'>
                  https://www.instagram.com/jinakihiro/
                </a>
                <a href='https://akihirowoodworks.com/' rel='noreferrer' target='_blank'>
                  https://akihirowoodworks.com/
                </a>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.title}>
                <h2>anew inc.</h2>
                <SwitchTransition mode='out-in'>
                  <CSSTransition
                    key={lang}
                    addEndListener={(node, done) => {
                      node.addEventListener('transitionend', done, true)
                    }}
                    timeout={300}
                    classNames='fade'
                  >
                    <>{lang === 'jp' && <p>アニュウインク</p>}</>
                  </CSSTransition>
                </SwitchTransition>
              </div>

              <SwitchTransition mode='out-in'>
                <CSSTransition
                  key={lang}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, true)
                  }}
                  timeout={300}
                  classNames='fade'
                >
                  <>
                    {lang === 'jp' ? (
                      <p className={styles.desc}>
                        プロダクトサステナビリティの観点から 「私たちはいかにしてよき祖先となれるか」
                        というグッドアンセスターとしての可能性を追求するプロジェクトチーム。
                        環境危機・⽂化・経済といったコンテクストへの考察を起点に、ものにまつわるデザインやマテリアルのリサーチを進め、これからの社会にふさわしい低環境負荷のプロダクトを研究開発する。
                      </p>
                    ) : (
                      <p className={`${styles.desc} ${styles.en} sansserif-fonts`}>
                        A project team that explores the potential of being “good ancestors” from the perspective of
                        product sustainability. Starting from considerations of environmental crises, culture, and
                        economics, they conduct research on design and materials related to products, developing
                        products with low environmental impact suitable for future societies.
                      </p>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>

              <div className={styles.link}>
                <a href='https://anew-inc.com/' rel='noreferrer' target='_blank'>
                  https://anew-inc.com/
                </a>
                <a href='https://www.instagram.com/anew__inc/' rel='noreferrer' target='_blank'>
                  https://www.instagram.com/anew__inc/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
