import { ReactNode } from 'react'
import styled from 'styled-components'

/* ------------------------------- components ------------------------------- */
import { Header, Footer } from 'src/components'

const LayoutPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutPage>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutPage>
  )
}

export default Layout
