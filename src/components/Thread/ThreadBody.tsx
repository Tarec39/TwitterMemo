import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { CloseThreadBtn } from '../Buttons/ThreadBtn'
import { SureThreadBtn } from '../Buttons/ThreadBtn'
import { ThreadTexts } from '../Text Input/ThreadTexts'

export const ThreadBody = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState<boolean>(false)

    const [arr, setArr] = useState([])

    const handleNav = () => navigate('/')
    const handleShow = () => setShow(true)
    const handleHidden = () => setShow(false)
    return(
        <>
       {(show)? <SureThreadBtn onClickNavigate={handleNav} onClickCancel={handleHidden}/>: ''}
        <Background
            onClick={()=>setShow(true)}
        >
        </Background>
        <Composer>
            <CloseThreadBtn onClick={()=>setShow(true)}></CloseThreadBtn>

            <ThreadTexts></ThreadTexts>
        </Composer>
        
        {/* <div className="でかい何か" style={Big} onClick={handleOutsideClick}>
            <div
                className="Thread"
                style={Thread}
            >                                                                                                                                                                                                                               
                <CloseThreadBtn onClick={handleShow}/>
                <div>
                    <ThreadText></ThreadText>
                </div>
            </div>
        </div> */}
        </>

    )
}

const Background = styled.div`
width: 100%;
background-color: rgba(91, 112, 131, 0.4);
height: 100vh;
position: fixed;
z-index: 2;
`

const Composer = styled.div`
    position: fixed;
    top: 5%;
    min-width: 600px;
    padding: 5px 12px 30px 12px;
    height: auto;
    background: black;
    margin: auto;
    z-index: 3;
    border-radius: 16px;
    left: 50%;
    transform: translateX(-50%);
`
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