import Header from "../header/Header"
import Footer from "../footer/Footer"
import Main from "../main/Main"
import { BrowserRouter, useNavigate } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App