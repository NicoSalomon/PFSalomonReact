import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"
import Nosotros from "./components/Nosotros/Nosotros"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContext } from "./context/CartContext";
import './App.css'

function App() {

  const user = 1

  return (
    <div className="container_principal">
      <CartContext.Provider value={user}>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>

        </BrowserRouter>

      </CartContext.Provider>
    </div>
  )
}

export default App