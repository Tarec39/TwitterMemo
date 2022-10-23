type props = {
    onClick: () => void
}

export const ThreadBtn = (props: props) => {
    return(
        <button onClick={props.onClick}>＋</button>
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