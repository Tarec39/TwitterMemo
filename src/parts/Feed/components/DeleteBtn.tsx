type props = {
    onClick: () => void
}

export const DeleteBtn = (props: props) => {
    return(
        <button onClick={props.onClick}>削除</button>
    )
}