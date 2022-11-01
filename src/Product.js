import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }
  return (
    <div>
                <div className="product first_product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((e,i) => (<p key={i}>🌟</p>))
                    }
                </div>
            </div>
            <img src={image}
                alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product