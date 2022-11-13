import { CloseThreadBtn } from './ThreadBtn'
import { useNavigate } from 'react-router-dom'

export const ThreadText = () => {
    const navigate = useNavigate()
    return(
        <>
        <div className="でかい何か" style={Big}>
            <div
                className="Thread"
                style={Thread}
                onBlur={()=>console.log('off focus')}
                onClick={()=>console.log('on focus')}>                                                                                                                                                                                                                               
                <CloseThreadBtn onClick={()=>navigate('/home')}/>
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
    cursor:'text',
    width: 500,
    height: 500,
    margin: '0 auto 0 auto',
    zIndex:1,
} as React.CSSProperties

//overflow: hiddenでスクロールさせなくする。
//overscroll-behavior-y: none;で確実にするのか？？？