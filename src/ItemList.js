import React from 'react'

const ItemList = (props) => {
  return (
    <li>{props.product.name} - {props.product.price}</li>
  )
}

export default ItemList