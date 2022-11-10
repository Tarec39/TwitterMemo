type props = {
    onClick: () => void
}

export const DeleteBtn = (props: props) => {
    return(
        <button onClick={props.onClick}>削除</button>
    )
}

type props2 = {
    onClick: () => void
}
export const ForceBtn = (props: props2) => {
    return(
        <button onClick={props.onClick}>強制</button>
    )
}