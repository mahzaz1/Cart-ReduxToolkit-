import { useState } from 'react'
import Product from './Components/Product'
import products from "./products.json"
import Cart from './Components/Cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cart/>
      <div className="products">
        {products.map((product)=>(
          <Product {...product}/>
        ))}
      </div>
   
    </div>
  )
}

export default App
