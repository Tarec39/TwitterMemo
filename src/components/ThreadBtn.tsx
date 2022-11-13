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