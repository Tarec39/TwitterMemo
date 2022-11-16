import styled from 'styled-components' 
// import {ReactCompoent as AddIcon} from '../icon/AddIcon.svg';

type props = {
    onClick: () => void
    isThreadable: boolean
}

export const ThreadBtn = (props: props) => {
    return(
        <>
        {(props.isThreadable)
        ? <Button onClick={props.onClick}>
            <AddIcon xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"/>
            </AddIcon>
            
            </Button>
        : ''
        }


        </>
    )
}
const Button = styled.div``
const AddIcon = styled.svg`
    fill: #1C9BEF;
    font-size: 3px;
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
        <button onClick={props.onClick}>X</button>
    )
}


type SureProps = {
    onClickNavigate:()=>void
    onClickCancel: ()=>void
}
export const SureThreadBtn = (props: SureProps) => {
    return(
        <>
        <div>
            <p>スレッドを破棄しますか？</p>
            <button onClick={props.onClickNavigate}>破棄</button>
            <button onClick={props.onClickCancel}>キャンセル</button>
        </div>
        </>
    )
}