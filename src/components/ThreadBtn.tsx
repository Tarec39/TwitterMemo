import { NavigateFunction } from "react-router-dom";
type props = {
    onClick: () => void
    isThreadable: boolean
}

export const ThreadBtn = (props: props) => {
    return(
        <>
        {(props.isThreadable)
        ? <button onClick={props.onClick}>＋</button>
        : ''
        }
        </>
    )
}

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