import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen (porps) {

  const productList = useSelector(state => state.productList)
  const { products, loading, error } = productList
  const dispath = useDispatch()
  
  useEffect(() => {
    dispath(listProducts())
    return () => {

    }
  }, [])
  return (
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <ul className="products">
    {
      products.map(product => 
      <li key={product._id}>
        <div className="product">
          <Link to={`/products/${product._id}`}>
            <img className="product-image" src={product.image} alt="product" />
          </Link>
          <div className="product-name">
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">{product.rating} Starts ({product.numReviews}Reviews)</div>
        </div>
      </li>
      )
    }
  </ul>
  )
}

export default HomeScreen