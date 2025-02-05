import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.scss'

const Header = () => {
  const headerMenuRef = useRef<any>(null)
  const toggleRef = useRef<any>(null)
  const [checked, setChecked] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  // ===== get data theme =====
  useEffect(() => {
    let currentTheme = localStorage.getItem('data-theme')
    if (!currentTheme) currentTheme = 'dark'

    if (toggleRef.current) {
      toggleRef.current.checked = currentTheme === 'dark'
      setChecked(toggleRef.current.checked)
    }

    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  // =====  handle change theme =====
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('data-theme', 'light')
    }
  }

  // ===== toggle menu =====
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  // ===== resize update width/height =====
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // ===== detect mobile/pc show/hide menu =====
  useEffect(() => {
    if (size.width > 1023 && openMenu) {
      setOpenMenu(false)
    }
  }, [size.width, openMenu])

  // ===== on scroll section =====
  const onScrollSection = (val: string) => {
    const refScrollable = document.getElementById('refScrollable')

    switch (val) {
      case 'projects':
        window.fullpage_api?.moveTo(3)
        refScrollable?.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        break
      case 'philosophy':
        window.fullpage_api?.moveTo(4)
        refScrollable?.scrollTo({
          top: 1.5,
          behavior: 'smooth'
        })
        break
      case 'company':
        window.fullpage_api?.moveTo(4)
        refScrollable?.scrollTo({
          top: document.getElementById('company')?.offsetTop,
          behavior: 'smooth'
        })
        // setTimeout refScrollable.current.scrollTop === 0 ? 900 : 0
        break
      default:
        break
    }
  }

  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <header className={styles.header}>
        <Link to='/' className={styles.headerLeft}>
          <h1>anew inc.</h1>
        </Link>

        <div className={styles.headerCenter}>
          <p onClick={() => onScrollSection('projects')}>projects,</p>
          <p onClick={() => onScrollSection('philosophy')}>philosophy,</p>
          <p onClick={() => onScrollSection('company')}>company</p>
        </div>

        <div className={styles.headerRight}>
          <p onClick={toggleMenu}>{!openMenu ? 'menu' : 'close'}</p>
          <label htmlFor='toggle'>
            <span>{checked ? 'dark' : 'light'}</span>
          </label>
          <input
            id='toggle'
            ref={toggleRef}
            className={styles.toggle}
            checked={checked}
            type='checkbox'
            onChange={handleChange}
          />
        </div>
      </header>

      <div
        className={` ${styles.headerMenu} ${openMenu && size.width < 1023 ? `${styles.active}` : ''} `}
        ref={headerMenuRef}
      >
        <div className={styles.top}>
          <p
            onClick={() => {
              onScrollSection('projects')
              toggleMenu()
            }}
          >
            projects
          </p>
          <p
            onClick={() => {
              onScrollSection('philosophy')
              toggleMenu()
            }}
          >
            philosophy
          </p>
          <p
            onClick={() => {
              onScrollSection('company')
              toggleMenu()
            }}
          >
            company
          </p>
        </div>

        <div className={styles.bottom}>
          <Link to='https://instagram.com/anew__inc/' target='_blank' className={styles.instagram}>
            INSTAGRAM
          </Link>
          <Link to='https://www.websitecarbon.com/' target='_blank' className={styles.carbon}>
            * This website emits 0.03g of CO2 per view.
          </Link>
          <p>©︎ {new Date().getFullYear()} anew inc.</p>
        </div>
      </div>
    </>
  )
}

export default Header
