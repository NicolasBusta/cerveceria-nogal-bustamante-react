import Header from "../header/Header"
import Footer from "../footer/Footer"
import Main from "../main/Main"
import { BrowserRouter} from "react-router-dom"
import { MiProvider } from "../../../../api/CartContext"

const App = () => {

  return (
    <BrowserRouter>
      <MiProvider>
        <Header />
        <Main />
      </MiProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App