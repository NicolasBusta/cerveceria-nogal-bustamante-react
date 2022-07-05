import Header from "../header/Header"
import Footer from "../footer/Footer"
import Main from "../main/Main"
import { BrowserRouter} from "react-router-dom"
import { CartProvider } from "../../../../api/CartContext"



const App = () => {

  return (
    <CartProvider>
    <BrowserRouter>
        <Header />
        <Main />
      <Footer />
    </BrowserRouter>
    </CartProvider>
  )
}

export default App