import React from 'react'
import ItemList from './ItemList'


const App = () => {
  
  let items = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 }
  ]

  
  
  return (
    <ul>
        {
        items.map((item, index) => (
          <ItemList key={index} product={item} />
        ))
      }
    </ul>
  )
}

export default App