import { useEffect, useState } from "react";
import { Product } from "../models/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=> {
    fetch('http://localhost:5000/api/product')
      .then(resonse => resonse.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, 
    {
      id: prevState.length + 101,
      name: 'urun' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'some descripton',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }


  return (
    <div>
      <h1>İnternet Market</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>ürün Ekle</button>
    </div>
  );
}

export default App;
