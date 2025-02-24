import { useEffect, useRef, useState } from 'react'

import useToggle from './useToggle'

const useAccordion = () => {
  const refContentBody = useRef<any>(null)
  const [isOpen, toggle] = useToggle()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (isOpen) {
        const newHeight = refContentBody.current.scrollHeight
        if (newHeight !== height) {
          setHeight(newHeight)
        }
      }
    }
    // Add event listener
    window.addEventListener('resize', updateHeight)
    // Call handler right away so state gets updated with initial window size
    updateHeight()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateHeight)
  }, [isOpen, height])

  useEffect(() => {
    if (refContentBody.current) {
      setHeight(refContentBody.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const newHeight = refContentBody.current.scrollHeight
      if (newHeight !== height) {
        setHeight(newHeight)
      }
    }
  }, [isOpen, height])

  const computedHeight = isOpen ? height : 0
  return [isOpen, toggle, refContentBody, computedHeight] as const
}

export default useAccordion
