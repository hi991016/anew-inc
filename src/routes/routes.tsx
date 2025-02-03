import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

/* ---------------------------------- page ---------------------------------- */
import { HomePage, NotFoundPage, JincupPage } from 'src/pages/page'

const RoutesApp = () => {
  const location = useLocation()

  // ===== set app-height =====
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`)
    }
    appHeight()
    window.addEventListener('resize', appHeight)
    return () => window.removeEventListener('resize', appHeight)
  }, [location.pathname])

  // ===== lazy loading =====
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0 || entry.isIntersecting) {
          const image = entry.target
          observer.unobserve(image)
          if (image.hasAttribute('src')) {
            // Image has been loaded already
            image.classList.add('loaded')
            return
          }
          // Image has not been loaded so load it
          const sourceUrl: any = image.getAttribute('data-src')
          image.setAttribute('src', sourceUrl)
          // Removing the observer
          observer.unobserve(image)
        }
      })
    })
    document.querySelectorAll('img').forEach((el) => {
      observer.observe(el)
    })
  }, [location.pathname])

  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/projects/jincup-anew' element={<JincupPage />} />
    </Routes>
  )
}

export default RoutesApp
