import styled from 'styled-components' 
import AddIcon from '../../assets/Add.png';

import Close from '../../assets/CloseBtn.png'

type props = {
    onClick: () => void
    isThreadable: boolean
}

export const ThreadBtn = (props: props) => {
    return(
        <>
        {(props.isThreadable)
        ? <Button onClick={props.onClick}>
            <img src={AddIcon}/>
            </Button>
        : ''
        }
        </>
    )
}
const Button = styled.div`
    cursor: pointer;
    align-self: center;
    >img{
        transition: 0.2s;
        display: block;
        align-self: center;
        width: 30px;
        cursor: pointer;
        border-radius: 50%;
        border: solid 1px #333D45;
    &:hover{background-color:rgba(239,243,244,0.1);}
    }
`

type DelProps = {
    onClick: (num:number) => void
    index: number
}

export const DelThreadBtn = (props: DelProps) => {
    const onClick = ()=>props.onClick(props.index)
    return(
        <button onClick={onClick}>{props.index}</button>
    )
}

type CloseProps = {
    onClick: ()=>void
}
export const CloseThreadBtn = (props: CloseProps) => {
    return(
        <Button2 onClick={props.onClick}>
            <img src={Close}/>
        </Button2>
    )
}
const Button2 = styled.div`
    >img{
        display: block;
        padding-top: 16px;
        padding-left: 16px;
        width: 50px;
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
        cursor: pointer;
    }
`


type SureProps = {
    onClickNavigate:()=>void
    onClickCancel: ()=>void
}
export const SureThreadBtn = (props: SureProps) => {
    return(
        <>
        <Background></Background>
        <SureWindow>
            <p>スレッドを破棄しますか？</p>
            <p>この操作は取り消しできません。下書きは失われます。</p>
            <Dispose onClick={props.onClickNavigate}>破棄</Dispose>
            <Cancel onClick={props.onClickCancel}>キャンセル</Cancel>
        </SureWindow>
        </>
    )
}

const SureWindow = styled.div`
position: fixed;
width:320px;
padding: 32px;
background: black;
margin: auto;
z-index: 4;
border-radius: 16px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
word-wrap: break-word;
text-align: center;
p:nth-child(1){
       font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }
    p:nth-child(2){
        text-align: left;
        font-size: 15px;
        color: rgb(113, 118, 123);
    }
`
const Dispose = styled.div`
font-weight: 700;
margin-top: 24px;
background-color: rgb(244, 33, 46);
font-size: 15px;
line-height: 20px;
padding: 15px 20px;
border-radius: 9999px;
cursor: pointer;
transition-duration: 0.2s;
&:hover{background-color:rgb(220,30,41);}
`
const Cancel = styled.div`
margin-top: 10px;
font-weight: 700;
border: 1px solid rgb(83, 100, 113);
font-size: 15px;
line-height: 20px;
padding: 15px 20px;
border-radius: 9999px;
cursor: pointer;
transition-duration: 0.2s;
&:hover{background-color:rgba(239,243,244,0.1);}
`
const Background = styled.div`
width: 100%;
background-color: rgba(91, 112, 131, 0.4);
height: 100vh;
position: fixed;
z-index: 4;
`