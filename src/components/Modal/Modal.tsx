import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/slices/ModalSlice'
import './Modal.scss'

export const Modal = () => {
    const dispatch = useDispatch()
  return (
    <div className='modal-container'>
        <div className="modal-form"></div>
        <div className="overlay" onClick={() => dispatch(toggleModal())}></div>
    </div>
  )
}
