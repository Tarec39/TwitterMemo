import { CloseThreadBtn } from './ThreadBtn'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SureThreadBtn } from './ThreadBtn'
import { ThreadText } from './ThreadText'

export const ThreadBody = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState<boolean>(false)

    const [arr, setArr] = useState([])


    const handleNav = () => navigate('/')
    const handleShow = () => setShow(true)
    const handleHidden = () => setShow(false)
    const handleOutsideClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if(e.target === e.currentTarget) handleShow()
    }
    return(
        <>
        <div className="でかい何か" style={Big} onClick={handleOutsideClick}>
            {(show)
            ? <SureThreadBtn onClickNavigate={handleNav} onClickCancel={handleHidden}/>
            : ''
            }
            <div
                className="Thread"
                style={Thread}
            >                                                                                                                                                                                                                               
                <CloseThreadBtn onClick={handleShow}/>
                <div>
                    <ThreadText></ThreadText>
                    <ThreadText></ThreadText>
                </div>
            </div>
        </div>
        </>
    )
}

const Big = {
    position: 'absolute',
    width:'100vw',
    height:'90vh',
    inset: 0,
    margin:'auto'
    
} as React.CSSProperties

const Thread = {
    // position: 'fixed',
    background:'black',
    color:'white',
    // cursor:'text',
    width: 500,
    height: 500,
    margin: '0 auto 0 auto',
    zIndex:1,
} as React.CSSProperties

//overflow: hiddenでスクロールさせなくする。
//overscroll-behavior-y: none;で確実にするのか？？？