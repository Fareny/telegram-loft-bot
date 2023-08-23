import React from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import { BsPersonCircle } from 'react-icons/bs'
import './header.css'
function Header() {

    const { user, onClose } = useTelegram();

    return (
        <>
            <h2 className={'header-title'}>SUGI</h2>
            <div className={'header'}>
                <Button onClick={onClose}>Закрыть</Button>
                <span className={'username'}>
                    <BsPersonCircle className={'username-icon'} />{user?.username}
                    <div>{user}</div>
                </span>
            </div>
        </>
    )
}

export default Header