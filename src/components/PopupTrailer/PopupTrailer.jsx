import React, { useEffect } from 'react'
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideTrailer } from '../../features/trailer/trailerActions';
import './popuptrailer.css'

export default function PopupTrailer(props) {
    const dispatch = useDispatch()
    const { trailerMovie, isOpen } = useSelector(state => state.trailerReducer)

    const stopTrailer = () => {
        document.querySelector('#trailer').setAttribute('src', '')
    }

    return (
        <>
            <Modal
                centered
                width={'fit-content'}
                visible={isOpen}
                onOk={() => {
                    stopTrailer()
                    dispatch(hideTrailer())
                }}
                onCancel={() => {
                    stopTrailer()
                    dispatch(hideTrailer())
                }}
            >
                <iframe
                    id='trailer'
                    width={800} height={450} src={`${trailerMovie.trailer}?autoplay=1`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </Modal>
        </>
    )
}
