import { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

/* ---------------------------------- image --------------------------------- */
import prototypeSlide1 from 'src/assets/Projects/Jincup/prototype_01.webp'
import prototypeSlide1SP from 'src/assets/Projects/Jincup/prototype_01_sp.webp'
import prototypeSlide2 from 'src/assets/Projects/Jincup/prototype_02.webp'
import prototypeSlide2SP from 'src/assets/Projects/Jincup/prototype_02_sp.webp'
import prototypeSlide3 from 'src/assets/Projects/Jincup/prototype_03.webp'
import prototypeSlide3SP from 'src/assets/Projects/Jincup/prototype_03_sp.webp'
import prototypeSlide4 from 'src/assets/Projects/Jincup/prototype_04.webp'
import prototypeSlide4SP from 'src/assets/Projects/Jincup/prototype_04_sp.webp'
import prototypeSlide5 from 'src/assets/Projects/Jincup/prototype_05.webp'
import prototypeSlide5SP from 'src/assets/Projects/Jincup/prototype_05_sp.webp'
import prototypeSlide6 from 'src/assets/Projects/Jincup/prototype_06.webp'
import prototypeSlide6SP from 'src/assets/Projects/Jincup/prototype_06_sp.webp'

/* --------------------------------- swiper --------------------------------- */
import { Pagination, Controller } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import styles from '../styles/prototype.module.scss'

const Prototype = ({ lang, elRef }: { lang?: string; elRef?: any }) => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [totalSlide, setTotalSlide] = useState(1)

  return (
    <section className={styles.prototype} ref={elRef} id='prototype' data-jincup-section data-jincup-prototype>
      <div className={styles.prototypeContainer}>
        <div className={`${styles.prototypeSwiper} pc-only`}>
          <div className={styles.prototypeTitle}>
            <h2>prototype</h2>
            <div className={styles.prototypePagination} id='containerForBullets'></div>
          </div>

          <div className={styles.right}>
            <Swiper
              cssMode={true}
              modules={[Pagination, Controller]}
              spaceBetween={0}
              slidesPerView={2}
              slidesPerGroup={2}
              allowTouchMove={false}
              className={styles.prototypeSwiperWrapper}
              pagination={{
                clickable: true,
                el: '#containerForBullets',
                type: 'bullets',
                bulletClass: styles.bullet,
                bulletActiveClass: styles.bulletActive,
                renderBullet: (index: number, className: string) => {
                  return '<span class="' + className + '">0' + (index + 1) + '</span>'
                }
              }}
            >
              <SwiperSlide className={styles.prototypeSlide}>
                <img src={prototypeSlide1} alt='PROTOTYPE' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide className={styles.prototypeSlide}>
                <img src={prototypeSlide2} alt='PROTOTYPE' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide className={styles.prototypeSlide}>
                <img src={prototypeSlide3} alt='PROTOTYPE' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide className={styles.prototypeSlide}>
                <img src={prototypeSlide4} alt='PROTOTYPE' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide className={styles.prototypeSlide}>
                <img src={prototypeSlide5} alt='PROTOTYPE' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide className={styles.prototypeSlide}>
                <img src={prototypeSlide6} alt='PROTOTYPE' loading='lazy' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className={`${styles.prototypeSwiperSP} sp-only`}>
          <div className={styles.prototypeTitle}>
            <h2>prototype</h2>
            <div className={styles.prototypeTotal}>
              <span>0{currentSlide}</span>
              <span>/</span>
              <span>0{totalSlide}</span>
            </div>
          </div>

          <Swiper
            loop
            modules={[Controller]}
            spaceBetween={0}
            slidesPerView={1}
            className={styles.prototypeSwiperWrapper}
            onSlideChange={(swiper: any) => setCurrentSlide(swiper.realIndex + 1)}
            onSwiper={(swiper: any) => setTotalSlide(swiper.slides.length)}
          >
            <SwiperSlide className={styles.prototypeSlide}>
              <img src={prototypeSlide1SP} alt='PROTOTYPE' loading='lazy' />
            </SwiperSlide>
            <SwiperSlide className={styles.prototypeSlide}>
              <img src={prototypeSlide2SP} alt='PROTOTYPE' loading='lazy' />
            </SwiperSlide>
            <SwiperSlide className={styles.prototypeSlide}>
              <img src={prototypeSlide3SP} alt='PROTOTYPE' loading='lazy' />
            </SwiperSlide>
            <SwiperSlide className={styles.prototypeSlide}>
              <img src={prototypeSlide4SP} alt='PROTOTYPE' loading='lazy' />
            </SwiperSlide>
            <SwiperSlide className={styles.prototypeSlide}>
              <img src={prototypeSlide5SP} alt='PROTOTYPE' loading='lazy' />
            </SwiperSlide>
            <SwiperSlide className={styles.prototypeSlide}>
              <img src={prototypeSlide6SP} alt='PROTOTYPE' loading='lazy' />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.prototypeContent}>
          <div className={styles.right}>
            <div className={styles.prototypeHead}>
              <h2>
                jincup
                <span>anew</span>
              </h2>

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
                      <p>ジンカップ アニュウ</p>
                    ) : (
                      <p className={`${styles.en} sansserif-fonts`}>PRODUCT INFORMATION</p>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>
            </div>

            <div className={styles.prototypeDesc}>
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
                      <div>
                        <p>
                          YOKOGAWAの協力のもとVASUジャパンのバイオプラスチック原料を、ニッシリにてブロック状に成形し、アキヒロジンが手彫りすることでジンカップアニュウのプロトタイプが誕生。
                          あらゆる産業分野で活用でき、石油資源の消費とCO2排出の削減を可能にするVASUジャパンのバイオプラスチックVS-90を使用することで、最短約３ヶ月で微生物による生分解が行われる。
                          製品化のプロセスを検討し、厚生労働省の定める食品衛生法に基づく試験、生分解性試験、RoHS、REACH、FDA、CO2排出量試験などの認証を進める。
                        </p>
                        <p>* 2025年春発売予定</p>
                        <p>[ 特別協力 ]</p>
                      </div>
                    ) : (
                      <div>
                        <p className={`${styles.en} sansserif-fonts`}>
                          With the cooperation of YOKOGAWA, blocks of VASU Japan’s bioplastic material were molded by
                          Nissilli, and the jincup anew prototype was born through hand carving by Jin Akihiro.
                          Utilizing VASU Japan’s bioplastic VS-90, which allows for the reduction of petroleum
                          consumption and CO2 emissions, microbial biodegradation occurs in approximately three months
                          at the shortest. The production process includes testing based on the Food Sanitation Act
                          established by the Ministry of Health, Labour and Welfare, as well as tests for
                          biodegradability, RoHS, REACH, FDA, and CO2 emissions.
                        </p>
                        <p className={`${styles.en} sansserif-fonts`}>*Scheduled for release in Spring 2025.</p>
                        <p></p>
                      </div>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>
            </div>

            <div className={styles.prototypeLink}>
              <a href='https://www.yokogawa.com/jp-ybf/' target='_blank' rel='noreferrer'>
                <svg
                  role='img'
                  aria-label='YOKOGAWA'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='137.941'
                  height={35}
                  viewBox='0 0 137.941 35'
                >
                  <defs>
                    <clipPath id='clip-path-prototype'>
                      <rect id='長方形_93' data-name='長方形 93' width='137.941' height={35} fill='none' />
                    </clipPath>
                  </defs>
                  <g id='グループ_246' data-name='グループ 246' transform='translate(0 0)'>
                    <rect
                      id='長方形_92'
                      data-name='長方形 92'
                      width='137.941'
                      height={35}
                      transform='translate(0 0)'
                      fill='#004f9b'
                    />
                    <g id='グループ_245' data-name='グループ 245' transform='translate(0 0)'>
                      <g id='グループ_244' data-name='グループ 244' clipPath='url(#clip-path-prototype)'>
                        <path
                          id='パス_419'
                          data-name='パス 419'
                          d='M320.894,23.529c-4.482,4.49-7.127,7.109-8.958,8.958a21.646,21.646,0,0,1,8.948,9.248,21.6,21.6,0,0,1,8.958-9.248c0,.011-8.948-8.948-8.948-8.958'
                          transform='translate(-198.655 -14.985)'
                          fill='#fe0'
                        />
                        <path
                          id='パス_420'
                          data-name='パス 420'
                          d='M31.662,30.011l-4,5.882L23.695,30H21.126l5.537,7.851v5.464h2.027v-5.51l5.511-7.8Z'
                          transform='translate(-13.454 -19.108)'
                          fill='#fff'
                        />
                        <path
                          id='パス_421'
                          data-name='パス 421'
                          d='M58.683,28.905c-1,0-6.519.447-6.519,7.158a6.506,6.506,0,0,0,6.581,6.91c1.114.008,6.565-.642,6.565-7.077,0-6.1-4.906-6.99-6.626-6.99m.137,12.312c-1.97,0-4.6-1.15-4.6-5.294,0-3.786,2.5-5.291,4.472-5.291,1.8,0,4.55,1.177,4.55,5.465,0,4.212-3.033,5.121-4.424,5.121'
                          transform='translate(-33.22 -18.408)'
                          fill='#fff'
                        />
                        <path
                          id='パス_422'
                          data-name='パス 422'
                          d='M102.315,29.994H99.558l-6.277,6.3v-6.3l-2.143-.006V43.3h2.019V38.737l2.066-1.954,4.932,6.523,2.6-.008-5.974-7.749Z'
                          transform='translate(-58.041 -19.096)'
                          fill='#fff'
                        />
                        <path
                          id='パス_423'
                          data-name='パス 423'
                          d='M124.6,28.812c-1.924.067-6.708,1.05-6.708,6.943,0,6.491,5.176,7.146,6.767,7.137,1.781-.011,6.437-1.253,6.459-7.087.027-6.989-6.6-6.99-6.519-6.993m-.013,12.331c-1.927,0-4.575-1.032-4.575-5.287,0-4.062,2.659-5.291,4.53-5.291,2.346,0,4.444,1.738,4.444,5.2,0,4.477-2.843,5.374-4.4,5.374'
                          transform='translate(-75.078 -18.349)'
                          fill='#fff'
                        />
                        <path
                          id='パス_424'
                          data-name='パス 424'
                          d='M163.271,37.549h3.879c-.685,3.2-2.383,3.813-4.182,3.813-1.838,0-4.239-1.418-4.239-5.251,0-4.052,2.161-5.382,4.343-5.382a3.471,3.471,0,0,1,3.686,2.605l2.093-.006c-.537-3.5-3.689-4.26-5.952-4.26-4.274-.017-6.317,3.663-6.317,6.884,0,4.738,3.18,7.05,6.088,7.055a5.7,5.7,0,0,0,4.514-1.638l.233,1.285h1.6l.018-6.936-5.77-.006Z'
                          transform='translate(-99.719 -18.512)'
                          fill='#fff'
                        />
                        <path
                          id='パス_425'
                          data-name='パス 425'
                          d='M195.8,30.068l-4.26,13.278h2.182l1.13-3.685,5.206-.006,1.466,3.661,2.233-.021-5.225-13.233Zm-.433,7.874,1.812-5.968.389,1.069,1.815,4.9Z'
                          transform='translate(-121.983 -19.145)'
                          fill='#fff'
                        />
                        <path
                          id='パス_426'
                          data-name='パス 426'
                          d='M233.369,30.011c-1.775,7.284-2.209,8.753-2.522,9.986-.453-1.481-.763-2.62-2.838-9.986h-2.059c-1.752,6.833-2.4,8.577-2.712,9.906-.4-1.412-.75-2.68-2.536-9.906h-2.276L222.112,43.3h2.19c1.85-6.585,1.992-7.225,2.709-9.7.875,3.1,1.085,3.819,2.814,9.713l2.131-.026,3.564-13.275Z'
                          transform='translate(-139.103 -19.113)'
                          fill='#fff'
                        />
                        <path
                          id='パス_427'
                          data-name='パス 427'
                          d='M266.965,29.949h-2.623l-4.7,13.3h2.1l1.21-3.557,5.292.007,1.29,3.546,2.2-.006Zm-3.385,7.983,2.047-5.892,0-.027,2.065,5.925Z'
                          transform='translate(-165.35 -19.073)'
                          fill='#fff'
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>

              <a href='https://www.vasu.tokyo/' target='_blank' rel='noreferrer'>
                <svg
                  role='img'
                  aria-label='VASU TOKYO'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='84.883'
                  height={35}
                  viewBox='0 0 84.883 35'
                >
                  <defs>
                    <clipPath id='a'>
                      <rect width='84.883' height={35} fill='none' />
                    </clipPath>
                    <clipPath id='b'>
                      <path
                        d='M64.158,37.2a59.2,59.2,0,0,0-12.571,7.136L50.341,49.55l4.136-7.019,3.861.037A41.486,41.486,0,0,1,66.577,38.1a37.9,37.9,0,0,1,15.7-2.85,20.1,20.1,0,0,1,4.3.665c2.568.665,4.321,1.83,4.953,3.383.924,2.269-.22,5.408-3.138,8.614a35.526,35.526,0,0,1-12.709,8.412A37.394,37.394,0,0,1,61.8,59.246c-4.943,0-8.774-1.346-10.25-3.6a4.661,4.661,0,0,1-.327-.59l-6.619.037,1.124-5.122a15.512,15.512,0,0,0-2.308,3.984,7.248,7.248,0,0,0,.054,5.883c1.907,3.208,6.192,5.185,12.058,5.554,6.042.38,13.286-1.006,20.4-3.9C82.777,58.7,91.255,52.933,94.5,45.123c1.1-2.646,1.316-5.037.609-6.732-1.337-2.849-5.5-4.653-11.419-4.95-.558-.028-1.127-.042-1.7-.042a47.025,47.025,0,0,0-17.831,3.8'
                        transform='translate(-42.822 -33.399)'
                        fill='none'
                      />
                    </clipPath>
                    <linearGradient
                      id='c'
                      x1='-0.067'
                      y1='0.99'
                      x2='-0.065'
                      y2='0.99'
                      gradientUnits='objectBoundingBox'
                    >
                      <stop offset={0} stopColor='#eb7f3f' />
                      <stop offset='0.006' stopColor='#eb7f3f' />
                      <stop offset='0.28' stopColor='#eb823e' />
                      <stop offset='0.491' stopColor='#ed8b3c' />
                      <stop offset='0.68' stopColor='#ef9c38' />
                      <stop offset='0.857' stopColor='#f3b332' />
                      <stop offset={1} stopColor='#f8cc2d' />
                    </linearGradient>
                  </defs>
                  <g clipPath='url(#a)'>
                    <path
                      d='M221.382,146.52,218,156.108H207.918a1.439,1.439,0,0,1-1.232-.542,1.981,1.981,0,0,1-.331-1.174,2.544,2.544,0,0,1,.15-.889l1.292-3.719a1.849,1.849,0,0,1,1.909-1.355h7.724l.226-.7a.8.8,0,0,0,.045-.253q0-.52-.676-.52h-8.25l.992-2.826h10.159a1.408,1.408,0,0,1,1.593,1.593,2.321,2.321,0,0,1-.135.8m-4.944,4.734h-5.169a.9.9,0,0,0-.932.641l-.2.519a1.259,1.259,0,0,0-.06.366.448.448,0,0,0,.511.5h5.139Z'
                      transform='translate(-188.149 -131.415)'
                      fill='#00913a'
                    />
                  </g>
                  <g transform='translate(3.778 2.947)'>
                    <g clipPath='url(#b)'>
                      <rect width='53.211' height='32.371' transform='translate(-0.216 0)' fill='url(#c)' />
                    </g>
                  </g>
                  <g clipPath='url(#a)'>
                    <path
                      d='M3.785,54.865a7.853,7.853,0,0,1,4.771,1.814c.032,0,1.113-3.817-3.5-4.962-.064.1-2.927-.382-5.058,1.59,0,.064,1.909,9.67,8.207,4.1a10.356,10.356,0,0,0-4.422-2.544'
                      transform='translate(0 -47.154)'
                      fill='#00913a'
                    />
                    <path
                      d='M81.127,4.339s2.258.954,2.481,2.862a8.53,8.53,0,0,1,3.848-3.594c.063.032-3.467,2.545-4.166,6.075-.127-.032,6.743,2.1,7.411-5.312V.236s-7.792-1.718-9.573,4.1'
                      transform='translate(-73.97 0)'
                      fill='#00913a'
                    />
                    <path
                      d='M85.1,117.319l-5.81,8.714s.426-2.448.94-6.014c.16-1.112.269-2.857-.379-3.863a3.462,3.462,0,0,0-2.416-1.47,6.27,6.27,0,0,1,.278,2.9l-.612,3.079-.02.064.009-.007L75.485,128.8h5.923l8.219-11.477Z'
                      transform='translate(-68.825 -104.568)'
                      fill='#00913a'
                    />
                    <path
                      d='M686.439,192.224l-1.912,5.443a7.332,7.332,0,0,1-.423,1.022,2.391,2.391,0,0,1-.492.667,1.728,1.728,0,0,1-.667.372,3.386,3.386,0,0,1-.978.121,3.149,3.149,0,0,1-.47-.037l.2-1.2a2.83,2.83,0,0,0,.344.025.8.8,0,0,0,.645-.239,1.886,1.886,0,0,0,.321-.571l1.966-5.605Z'
                      transform='translate(-621.37 -175.265)'
                      fill='#00913a'
                    />
                    <path
                      d='M738.346,208.839l-1.484,4.172h-1.375l.144-.382a3.428,3.428,0,0,1-.535.335,1.369,1.369,0,0,1-.6.122,1.1,1.1,0,0,1-.743-.251,1.237,1.237,0,0,1-.4-.671,2.082,2.082,0,0,1,0-.914,3.237,3.237,0,0,1,.305-.841,3,3,0,0,1,.649-.823,3.2,3.2,0,0,1,1.107-.636,4.786,4.786,0,0,1,1.607-.243,5.547,5.547,0,0,1,.634.029q.243.029.693.1m-1.675.885h-.258a1.393,1.393,0,0,0-.727.212,1.928,1.928,0,0,0-.6.573,2.11,2.11,0,0,0-.333.781.724.724,0,0,0,.046.488.385.385,0,0,0,.375.2.914.914,0,0,0,.315-.069,3.457,3.457,0,0,0,.479-.239Z'
                      transform='translate(-668.604 -190.293)'
                      fill='#00913a'
                    />
                    <path
                      d='M787.513,203.717a3.136,3.136,0,0,1-.527,1.209,2.918,2.918,0,0,1-.994.879,2.658,2.658,0,0,1-1.29.326,1.752,1.752,0,0,1-.377-.037,3.171,3.171,0,0,1-.359-.1l-.71,1.99h-1.38l1.556-4.4-.717.69a1.856,1.856,0,0,1-.143.121.169.169,0,0,1-.1.033c-.086,0-.118-.054-.1-.162a1.432,1.432,0,0,1,.25-.495,4.1,4.1,0,0,1,.445-.536,7.36,7.36,0,0,1,.7-.594l.552-1.558h1.371l-.264.748a1.845,1.845,0,0,1,.3-.05,1.9,1.9,0,0,1,.3-.025,1.859,1.859,0,0,1,.79.152,1.184,1.184,0,0,1,.5.426,1.473,1.473,0,0,1,.225.626,2.331,2.331,0,0,1-.038.763m-1.443-.017a1.014,1.014,0,0,0-.059-.685.614.614,0,0,0-.6-.27,1.293,1.293,0,0,0-.315.037l-.783,2.2a1.156,1.156,0,0,0,.32.042,1.279,1.279,0,0,0,.726-.2,1.472,1.472,0,0,0,.474-.5,2.111,2.111,0,0,0,.235-.619'
                      transform='translate(-712.894 -183.338)'
                      fill='#00913a'
                    />
                    <path
                      d='M855.428,208.839l-1.484,4.172h-1.375l.144-.382a3.445,3.445,0,0,1-.535.335,1.37,1.37,0,0,1-.6.122,1.1,1.1,0,0,1-.743-.251,1.239,1.239,0,0,1-.4-.671,2.085,2.085,0,0,1,0-.914,3.24,3.24,0,0,1,.305-.841,3,3,0,0,1,.649-.823,3.2,3.2,0,0,1,1.107-.636,4.786,4.786,0,0,1,1.607-.243,5.55,5.55,0,0,1,.634.029q.243.029.693.1m-1.675.885H853.5a1.393,1.393,0,0,0-.727.212,1.928,1.928,0,0,0-.6.573,2.114,2.114,0,0,0-.333.781.724.724,0,0,0,.047.488.385.385,0,0,0,.375.2.915.915,0,0,0,.315-.069,3.457,3.457,0,0,0,.479-.239Z'
                      transform='translate(-775.357 -190.293)'
                      fill='#00913a'
                    />
                    <path
                      d='M908.863,209.99q-.025.125-.137.469l-.894,2.551h-1.376l.917-2.639a1.022,1.022,0,0,0,.037-.145q.081-.4-.268-.4a.872.872,0,0,0-.45.141,7.014,7.014,0,0,0-.665.482l-.892,2.56h-1.388l1.488-4.23h1.38l-.171.495a7.081,7.081,0,0,1,.756-.422,1.764,1.764,0,0,1,.747-.148q.648,0,.831.4a1.407,1.407,0,0,1,.085.883'
                      transform='translate(-824.013 -190.293)'
                      fill='#00913a'
                    />
                    <path
                      d='M526.141,144.459l-3.784,10.815a1.519,1.519,0,0,1-.748.883,2.108,2.108,0,0,1-.958.225H511.99q-1.78,0-1.78-1.526a4.957,4.957,0,0,1,.344-1.616l3.111-8.781h3.216l-2.857,8.182a1.1,1.1,0,0,0-.045.314q0,.613.523.614h4.339a1.161,1.161,0,0,0,1.182-.883l2.857-8.227Z'
                      transform='translate(-465.196 -131.714)'
                      fill='#00913a'
                    />
                    <path
                      d='M372.976,144.131l-.992,2.826h-7.093a1.414,1.414,0,0,0-.857.223,1.5,1.5,0,0,0-.361.447.5.5,0,0,0-.03.223c0,.119-.005.178-.015.178a.427.427,0,0,0-.03.164q0,.447.676.447h5.455a2.449,2.449,0,0,1,1.5.429,1.436,1.436,0,0,1,.578,1.227,2.7,2.7,0,0,1-.18.919q-.451,1.22-1.322,3.554a2.26,2.26,0,0,1-.571.964,1.616,1.616,0,0,1-1.142.377H358.459l1.007-2.825h7.078a1.176,1.176,0,0,0,1.232-.672q.225-.581.286-.55a.518.518,0,0,0,.015-.123q0-.473-.766-.473h-5.455a2.36,2.36,0,0,1-1.458-.419,1.479,1.479,0,0,1-.6-1.257,2.76,2.76,0,0,1,.165-.9q1.142-3.307,1.172-3.427a1.6,1.6,0,0,1,1.713-1.332Z'
                      transform='translate(-326.834 -131.415)'
                      fill='#00913a'
                    />
                  </g>
                </svg>
              </a>

              <a href='https://nissili.co.jp/' target='_blank' rel='noreferrer'>
                <svg
                  role='img'
                  aria-label='NISSILI'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='112.65'
                  height='33.009'
                  viewBox='0 0 112.65 33.009'
                >
                  <defs>
                    <radialGradient
                      id='radial-gradient'
                      cx='0.216'
                      cy='0.133'
                      r='0.821'
                      gradientTransform='translate(1.657) scale(1.136 1)'
                      gradientUnits='objectBoundingBox'
                    >
                      <stop offset={0} stopColor='#feecd2' />
                      <stop offset={1} stopColor='#f39800' />
                    </radialGradient>
                    <radialGradient
                      id='radial-gradient-2'
                      cx='1.647'
                      cy='3.218'
                      r='3.042'
                      gradientTransform='translate(1.729) scale(1.048 1)'
                      gradientUnits='objectBoundingBox'
                    >
                      <stop offset={0} stopColor='#dcdddd' />
                      <stop offset={1} stopColor='#b5b5b6' />
                    </radialGradient>
                    <radialGradient
                      id='radial-gradient-3'
                      cx='-56.358'
                      cy='-21.007'
                      r='2.053'
                      gradientTransform='translate(-1.1) scale(3.199 1)'
                      xlinkHref='#radial-gradient-2'
                    />
                    <radialGradient
                      id='radial-gradient-4'
                      cx='-16.107'
                      cy='-35.991'
                      r='3.381'
                      gradientTransform='translate(0.19) scale(0.62 1)'
                      xlinkHref='#radial-gradient-2'
                    />
                    <radialGradient
                      id='radial-gradient-5'
                      cx='0.546'
                      cy='0.384'
                      r='0.766'
                      gradientTransform='translate(2.723) scale(1.214 1)'
                      gradientUnits='objectBoundingBox'
                    >
                      <stop offset={0} stopColor='#dcdddd' />
                      <stop offset={0} stopColor='#bbd4ef' />
                      <stop offset={1} stopColor='#0079c3' />
                    </radialGradient>
                    <radialGradient
                      id='radial-gradient-6'
                      cx='0.109'
                      cy='0.863'
                      r='1.741'
                      gradientTransform='translate(-6.222) scale(0.535 1)'
                      gradientUnits='objectBoundingBox'
                    >
                      <stop offset={0} stopColor='#c3d94e' />
                      <stop offset={1} stopColor='#22ac38' />
                    </radialGradient>
                  </defs>
                  <g id='b' transform='translate(-0.002)'>
                    <g id='c' transform='translate(0.002)'>
                      <g id='Group_153' data-name='Group 153'>
                        <g id='Group_146' data-name='Group 146'>
                          <g id='Group_144' data-name='Group 144'>
                            <path
                              id='Path_308'
                              data-name='Path 308'
                              d='M28.23,10.08a18.221,18.221,0,0,0-4.773.427C25.211,13.875,25.3,22.087,21.75,27.76a11.254,11.254,0,0,1-10.33,5.557c8.095,4.043,16.329,1.3,20.109-3.873,3.881-5.3,2.072-14.125-3.306-19.364Z'
                              transform='translate(-2.558 -2.249)'
                              fill='url(#radial-gradient)'
                            />
                            <path
                              id='Path_309'
                              data-name='Path 309'
                              d='M11.727,5.557a5.515,5.515,0,0,0,.373,1.63c.427-.279.854-.567,1.3-.854a12.307,12.307,0,0,1,3.182-4.99A7.975,7.975,0,0,1,18.572,0,16.1,16.1,0,0,0,13.8.846a6.2,6.2,0,0,0-2.072,4.711Z'
                              transform='translate(-2.625)'
                              fill='url(#radial-gradient-2)'
                            />
                            <path
                              id='Path_310'
                              data-name='Path 310'
                              d='M40.339,14.2A6.918,6.918,0,0,0,36.49,10.83,15.808,15.808,0,0,1,37.1,13a17.546,17.546,0,0,1,2.569,12.821,15.23,15.23,0,0,0,.675-11.618Z'
                              transform='translate(-8.171 -2.425)'
                              fill='url(#radial-gradient-3)'
                            />
                            <path
                              id='Path_311'
                              data-name='Path 311'
                              d='M7.235,36.2a10.986,10.986,0,0,0,8.359-1.638c-.6-.318-1.187-.66-1.777-1A17.3,17.3,0,0,1,.91,27.27,15.632,15.632,0,0,0,7.227,36.2h.016Z'
                              transform='translate(-0.205 -6.106)'
                              fill='url(#radial-gradient-4)'
                            />
                            <path
                              id='Path_312'
                              data-name='Path 312'
                              d='M5.938,24.961A15.907,15.907,0,0,0,17.8,26.545a16.831,16.831,0,0,0,2.949-6.674c-1.118-1.071-2.5-2.173-3.912-3.306C12.775,13.32,5.239,7.848,9.64,1.88,3.159,4.79-1.109,12.35.256,19.117.559,20.623,2.763,23.215,5.938,24.961Z'
                              transform='translate(-0.002 -0.421)'
                              fill='url(#radial-gradient-5)'
                            />
                            <path
                              id='Path_313'
                              data-name='Path 313'
                              d='M22.783.394A5.4,5.4,0,0,0,21.642.27a6.1,6.1,0,0,0-4.051,1.715A12.573,12.573,0,0,0,13.92,9.529a18.256,18.256,0,0,0,1.428,1.638c6.263-3.849,14.218-5.984,18.945-1.894A16.416,16.416,0,0,0,22.783.394Z'
                              transform='translate(-3.118 -0.06)'
                              fill='url(#radial-gradient-6)'
                            />
                          </g>
                          <g id='Group_145' data-name='Group 145' transform='translate(42.902 5.774)'>
                            <path
                              id='Path_314'
                              data-name='Path 314'
                              d='M80.278,10.167A6.8,6.8,0,0,1,81.955,8.9c1.56-.947,3.322-2.026,3.438-6.612C81.318,3.415,79.712,5.883,80.278,10.167Z'
                              transform='translate(-60.852 -2.29)'
                              fill='#4c8dcb'
                            />
                            <path
                              id='Path_315'
                              data-name='Path 315'
                              d='M120.588,10.167A6.8,6.8,0,0,1,122.265,8.9c1.56-.947,3.322-2.026,3.438-6.612-4.075,1.125-5.681,3.593-5.115,7.877Z'
                              transform='translate(-69.878 -2.29)'
                              fill='#8fc31f'
                            />
                            <path
                              id='Path_316'
                              data-name='Path 316'
                              d='M138.528,10.167A6.8,6.8,0,0,1,140.2,8.9c1.56-.947,3.322-2.026,3.438-6.612C139.568,3.415,137.962,5.883,138.528,10.167Z'
                              transform='translate(-73.894 -2.29)'
                              fill='#f39800'
                            />
                            <path
                              id='Path_317'
                              data-name='Path 317'
                              d='M70.29,24.009,56.793,7.6V24.009H55.28V4.63h3.167l11.7,13.776V4.63h1.521V24.009H70.305Z'
                              transform='translate(-55.28 -2.814)'
                              fill='#9fa0a0'
                            />
                            <path
                              id='Path_318'
                              data-name='Path 318'
                              d='M114.281,13.666c-1.087-1.552-3.725-2.359-5.192-2.359-1.909,0-3.19.838-3.19,2.088,0,1.327.761,1.932,3.376,2.662,4.346,1.226,5.759,2.452,5.759,5.006,0,2.817-2.251,4.408-6.255,4.408a10.932,10.932,0,0,1-6.279-1.8,3.944,3.944,0,0,0,.675-2.018,9.371,9.371,0,0,0,5.448,2.437c2.1,0,3.4-.916,3.4-2.4s-.893-2.111-4.346-3.1c-3.267-.939-4.633-2.22-4.633-4.385,0-2.608,2.251-4.222,5.86-4.222a8.99,8.99,0,0,1,5.363,1.513v2.173Z'
                              transform='translate(-65.852 -4.012)'
                              fill='#9fa0a0'
                            />
                            <path
                              id='Path_319'
                              data-name='Path 319'
                              d='M98.218,13.666c-1.087-1.552-3.725-2.359-5.192-2.359-1.909,0-3.19.838-3.19,2.088,0,1.327.761,1.932,3.376,2.662,4.346,1.226,5.759,2.452,5.759,5.006,0,2.817-2.251,4.408-6.255,4.408a11,11,0,0,1-5.6-1.389V21.653A9.392,9.392,0,0,0,92.56,24.09c2.1,0,3.4-.916,3.4-2.4s-.893-2.111-4.346-3.1c-3.267-.939-4.633-2.22-4.633-4.385,0-2.608,2.251-4.222,5.86-4.222A8.99,8.99,0,0,1,98.2,11.493v2.173Z'
                              transform='translate(-62.378 -4.012)'
                              fill='#9fa0a0'
                            />
                            <path
                              id='Path_320'
                              data-name='Path 320'
                              d='M132.583,4.63V20.074c0,2.088.442,2.872,1.622,2.872a3.914,3.914,0,0,0,.784-.1l-.132,1.327a5.548,5.548,0,0,1-.97.1c-3.43,0-4.447-.962-4.447-4.2V4.63h3.135Z'
                              transform='translate(-71.884 -2.814)'
                              fill='#9fa0a0'
                            />
                            <path
                              id='Path_321'
                              data-name='Path 321'
                              d='M82.4,11.458a4.249,4.249,0,0,0-1.94,1.816l-.085.186V25.382h3.089V10.76C83.1,11.024,82.737,11.241,82.4,11.458Z'
                              transform='translate(-60.898 -4.186)'
                              fill='#9fa0a0'
                            />
                            <path
                              id='Path_322'
                              data-name='Path 322'
                              d='M122.706,11.458a4.249,4.249,0,0,0-1.94,1.816l-.085.186V25.382h3.089V10.76C123.412,11.024,123.047,11.241,122.706,11.458Z'
                              transform='translate(-69.923 -4.186)'
                              fill='#9fa0a0'
                            />
                            <path
                              id='Path_323'
                              data-name='Path 323'
                              d='M140.656,11.458a4.249,4.249,0,0,0-1.94,1.816l-.085.186V25.382h3.089V10.76C141.362,11.024,141,11.241,140.656,11.458Z'
                              transform='translate(-73.942 -4.186)'
                              fill='#9fa0a0'
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.left}>
            <div className={styles.logo}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='234.795'
                height='257.584'
                viewBox='0 0 234.795 257.584'
              >
                <defs>
                  <clipPath id='clip-path-logo-prototype'>
                    <rect id='Rectangle_36' data-name='Rectangle 36' width='233.103' height='124.772' fill='#5a7445' />
                  </clipPath>
                </defs>
                <g id='logo' transform='translate(-1273.479 -653)'>
                  <g id='Group_127' data-name='Group 127' transform='translate(1275.17 653)'>
                    <g
                      id='Group_126'
                      data-name='Group 126'
                      transform='translate(0 0)'
                      clipPath='url(#clip-path-logo-prototype)'
                    >
                      <path
                        id='Path_305'
                        data-name='Path 305'
                        d='M5,87.842C3.778,87.32-.289,81.96.016,80.29c.518-2.867,1.566-3.882,5.48-3.4,3.766.454,8.885,3.059,13.377,3.866,12.767,2.256,22.647-1.975,31.476-9.567C62.129,61.087,75.535,39.865,78.6,30.3s3.766-11.069,8.367-6.7c4.625,4.352,17.986,7.885,24.466-5.239,6.492-13.1,9.242-6.913,11.041-4.481,1.714,2.329,23.145,37.972,42.059,50.783.707.486,3.461-.466,5.677-1.863,0,0,6.661-3.882,13.614-7.472,5.051-2.59,11.494-4.28,17.762-2.782,7.989,1.871,13.55,6.7,17.713,10.9,6.408,6.492,9.322,14.614,12.145,20.973,1.891,4.228,2.674,6.54-.454,7.536-3.577,1.12-6.251.827-10.844-9.218A39.238,39.238,0,0,0,213.343,71.9c-3.477-3.67-4.91-5.974-11.193-7.431-5.769-1.329-12.213,0-16.661,1.658-3.882,1.469-5.488,3.521-9.74,6.95a51.838,51.838,0,0,1-6.1,5,8.943,8.943,0,0,1-8.612.558c-3.818-1.915-9.4-7.865-16-14.61a169.451,169.451,0,0,1-22.68-28.638c-4.155-6.448-4.5-11.96-7.367-8.2-2.871,3.73-7.733,11.354-17.236,10.527-6.283-.546-7.263-.743-9.138-2.325-1.859-1.558-2.73,2.2-3.686,5.115S79.557,54.23,76.157,59.212,65.694,76.347,57.737,82.458C50.2,88.227,40.156,93.511,27.971,93.792a49.529,49.529,0,0,1-15.316-2.272A56.954,56.954,0,0,1,5,87.842'
                        transform='translate(0 30.971)'
                        fill='#5a7445'
                      />
                      <path
                        id='Path_306'
                        data-name='Path 306'
                        d='M16.518,10.112C17.241,6.507,18.935.425,23.255,3.5c4.288,3.083,7.142,5.974,6.914,11.3s0,10.013-3.714,8.8c-3.734-1.192-7.552-2.4-9.17-5.725-1.6-3.328-.767-7.761-.767-7.761'
                        transform='translate(49.148 8.009)'
                        fill='#5a7445'
                      />
                      <path
                        id='Path_307'
                        data-name='Path 307'
                        d='M29.2,10.421C28.248,7.237,26.984,1.5,30.027.44s5.825-.41,7.4,4.424S42.557,15.444,41.14,16.9s-5.544,2.806-6.8,1.947a13.934,13.934,0,0,1-3.89-5.135c-.8-1.9-1.253-3.292-1.253-3.292'
                        transform='translate(84.748 0)'
                        fill='#5a7445'
                      />
                    </g>
                  </g>
                  <path
                    id='Path_335'
                    data-name='Path 335'
                    d='M29.76,25.2a7.148,7.148,0,0,1-3.627.773,4.349,4.349,0,0,1-3.121-1.1,4.782,4.782,0,0,1-1.159-3.6,12.091,12.091,0,0,1-4.846,3.6,16.017,16.017,0,0,1-5.975,1.1,16.008,16.008,0,0,1-3.954-.476,9.193,9.193,0,0,1-3.24-1.486,7.134,7.134,0,0,1-2.17-2.646,8.9,8.9,0,0,1-.8-3.954,9.029,9.029,0,0,1,.892-4.281A7.781,7.781,0,0,1,4.1,10.422a10.761,10.761,0,0,1,3.33-1.576q1.873-.535,3.835-.892,2.081-.416,3.954-.624a22.027,22.027,0,0,0,3.3-.595,5.5,5.5,0,0,0,2.259-1.13,2.758,2.758,0,0,0,.832-2.17A5.044,5.044,0,0,0,20.99.76,4.281,4.281,0,0,0,19.385-.785a6.528,6.528,0,0,0-2.2-.713,16.614,16.614,0,0,0-2.408-.178A10.688,10.688,0,0,0,9.426-.458Q7.285.76,7.107,4.149H2.053A10.917,10.917,0,0,1,3.242-.667,9.016,9.016,0,0,1,6.1-3.847,11.974,11.974,0,0,1,10.169-5.6a21.51,21.51,0,0,1,4.905-.535,28.772,28.772,0,0,1,4.132.3A10.8,10.8,0,0,1,22.922-4.62,7.125,7.125,0,0,1,25.6-2.034a8.277,8.277,0,0,1,1.011,4.34V18.122a11.828,11.828,0,0,0,.208,2.616q.208.832,1.4.832a5,5,0,0,0,1.546-.3Zm-8.2-15.756a6.29,6.29,0,0,1-2.5,1.04q-1.546.327-3.24.535t-3.419.476a12.57,12.57,0,0,0-3.092.862,5.624,5.624,0,0,0-2.23,1.695,4.746,4.746,0,0,0-.862,3,4.109,4.109,0,0,0,.505,2.111,4.213,4.213,0,0,0,1.308,1.4,5.488,5.488,0,0,0,1.873.773,10.392,10.392,0,0,0,2.259.238,11.972,11.972,0,0,0,4.281-.684,9,9,0,0,0,2.913-1.724A6.8,6.8,0,0,0,21.02,16.9a5.714,5.714,0,0,0,.535-2.289ZM33.862-5.423V25.316h5.054V7.955a12.452,12.452,0,0,1,.565-3.835,8.71,8.71,0,0,1,1.695-3.062A7.525,7.525,0,0,1,44-.964a10.3,10.3,0,0,1,4.013-.713A6.187,6.187,0,0,1,52.591-.013a6.106,6.106,0,0,1,1.665,4.519v20.81H59.31V5.1A19.021,19.021,0,0,0,58.8.552,8.614,8.614,0,0,0,57.05-2.985,8.309,8.309,0,0,0,53.78-5.3a13.339,13.339,0,0,0-5.054-.832q-6.838,0-9.989,5.589h-.119V-5.423ZM86.481,7H68.823A10.527,10.527,0,0,1,69.6,3.644,8.96,8.96,0,0,1,71.379.879,8.17,8.17,0,0,1,74.085-.994a8.8,8.8,0,0,1,3.538-.684A8.646,8.646,0,0,1,81.1-.994,8.751,8.751,0,0,1,83.836.85a8.663,8.663,0,0,1,1.843,2.765A10.34,10.34,0,0,1,86.481,7Zm4.875,8.562H86.363a7.187,7.187,0,0,1-2.705,4.519A8.747,8.747,0,0,1,78.4,21.57a10.468,10.468,0,0,1-4.34-.832,8.507,8.507,0,0,1-3.032-2.23A8.685,8.685,0,0,1,69.3,15.3a12.2,12.2,0,0,1-.476-3.835h23.01a24.472,24.472,0,0,0-.505-5.886A17.039,17.039,0,0,0,89.068-.131a13.463,13.463,0,0,0-4.34-4.311A12.611,12.611,0,0,0,77.92-6.137a13.978,13.978,0,0,0-5.8,1.189,13.625,13.625,0,0,0-4.578,3.33,15.347,15.347,0,0,0-3,5.054,18.5,18.5,0,0,0-1.07,6.421,24.64,24.64,0,0,0,1.04,6.481,14.144,14.144,0,0,0,2.765,5.113,12.6,12.6,0,0,0,4.548,3.33,15.789,15.789,0,0,0,6.392,1.189A13.953,13.953,0,0,0,86.9,23.354,12.284,12.284,0,0,0,91.357,15.565Zm35.253,9.751,9.81-30.739h-5.232l-6.9,25.15h-.119l-6.421-25.15h-5.529l-6.183,25.15h-.119L98.963-5.423H93.374l9.87,30.739h5.47L114.9.879h.119l6.243,24.437Zm33.835-36.268v-6.183h-5.054v6.183Zm-5.054,5.529V25.316h5.054V-5.423Zm11.118,0V25.316h5.054V7.955a12.452,12.452,0,0,1,.565-3.835,8.71,8.71,0,0,1,1.695-3.062,7.525,7.525,0,0,1,2.824-2.022,10.3,10.3,0,0,1,4.013-.713,6.187,6.187,0,0,1,4.578,1.665A6.106,6.106,0,0,1,186.9,4.506v20.81h5.054V5.1a19.023,19.023,0,0,0-.505-4.548A8.614,8.614,0,0,0,189.7-2.985a8.309,8.309,0,0,0-3.27-2.319,13.339,13.339,0,0,0-5.054-.832q-6.837,0-9.989,5.589h-.119V-5.423Zm52.143,9.87h5.232A12.148,12.148,0,0,0,222.459-.28a10.55,10.55,0,0,0-2.884-3.3,11.945,11.945,0,0,0-4.043-1.932,18.578,18.578,0,0,0-4.905-.624,14.879,14.879,0,0,0-6.362,1.278,12.7,12.7,0,0,0-4.548,3.508,14.92,14.92,0,0,0-2.705,5.232,22.556,22.556,0,0,0-.892,6.451,20.712,20.712,0,0,0,.922,6.332,13.887,13.887,0,0,0,2.735,4.965,12.049,12.049,0,0,0,4.519,3.211,16.011,16.011,0,0,0,6.213,1.13q5.886,0,9.3-3.092a14.156,14.156,0,0,0,4.251-8.8h-5.173a8.86,8.86,0,0,1-2.586,5.529,8.27,8.27,0,0,1-5.856,1.962,8.368,8.368,0,0,1-4.1-.951,7.983,7.983,0,0,1-2.794-2.527,11.156,11.156,0,0,1-1.576-3.6,17.1,17.1,0,0,1-.505-4.162,20.909,20.909,0,0,1,.476-4.489,11.257,11.257,0,0,1,1.576-3.835,8.161,8.161,0,0,1,2.943-2.676,9.423,9.423,0,0,1,4.578-1.011,7.671,7.671,0,0,1,5.113,1.605A7.7,7.7,0,0,1,218.653,4.447Zm10.4,14.27v6.6h6.6v-6.6Z'
                    transform='translate(1272.615 884.614)'
                    fill='#5a7445'
                  />
                  <g id='Group_128' data-name='Group 128' transform='translate(1379.296 809.955)'>
                    <line
                      id='Line_14'
                      data-name='Line 14'
                      x1='23.16'
                      y2='23.16'
                      transform='translate(0 0)'
                      fill='none'
                      stroke='#5a7445'
                      strokeWidth={1}
                    />
                    <line
                      id='Line_15'
                      data-name='Line 15'
                      x2='23.16'
                      y2='23.16'
                      transform='translate(0 0)'
                      fill='none'
                      stroke='#5a7445'
                      strokeWidth={1}
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prototype
