import React from 'react'

import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/productCard.css'
import {Col} from 'reactstrap'

import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/cartSlice'
import { toast } from 'react-toastify';

const ProductCard = ({item}) => {

  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))

    toast.success("Added to Cart")
  }

  return (
    <Col lg='3' md='4' className='mb-2'>
    <div className="product__item">
        <div className="product__img">
            <motion.img whileHover = {{scale:0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
            <h3 className="product__name">
              <Link to={`/products/${item.id}`} >{item.productName}</Link>
            </h3>
            <span>{item.category}</span>
            <span className="price">${item.price}</span>
            <motion.span whileTap={{scale:1.2}} className='button' onClick={addToCart}>Add to bag</motion.span>
        </div>
        
    </div>
    </Col>
  )
}

export default ProductCard