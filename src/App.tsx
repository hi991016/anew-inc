import { BrowserRouter } from 'react-router-dom'

import RoutesApp from 'src/routes/routes'
import ScrollToTop from 'src/container/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App
