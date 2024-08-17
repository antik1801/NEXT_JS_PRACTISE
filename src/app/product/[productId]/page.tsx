import React from 'react'

const DetailsProductPage = ({params}: {params :{productId: string}}) => {
    const id = params.productId;
  return (
    <div>
      <h1>Details about the products {id}</h1>
    </div>
  )
}

export default DetailsProductPage
