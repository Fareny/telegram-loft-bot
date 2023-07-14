import React from 'react'
import Button from '../Button/Button'
import './productitem.css'

function ProductItem({ product, className, onAdd }) {

    const onAddHandler = () => {
        onAdd(product)
    }

    return (
        <div className={'product ' + className}>

            <img className={'product-img'} src='https://phonoteka.org/uploads/posts/2023-03/1679622942_phonoteka-org-p-kokteili-oboi-oboi-instagram-50.jpg' alt='' />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={() => { onAddHandler }} >
                Добавить
            </Button>
        </div>

    )
}

export default ProductItem