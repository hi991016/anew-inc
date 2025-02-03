import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

/* ------------------------------- components ------------------------------- */
import { HeaderMain, FooterMain } from 'src/components'

interface LayoutProps {
  children: ReactNode
}

const LayoutMain = ({ children }: LayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className='layout'>
      <HeaderMain onScrollSection={() => navigate('/')} />
      <main>{children}</main>
      <FooterMain />
    </div>
  )
}

export default LayoutMain
