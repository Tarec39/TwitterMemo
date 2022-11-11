type props = {
    onClick: (id:string) => void
    id: string
}

export const DeleteBtn = (props: props) => {
    const onClick = () => props.onClick(props.id)
    return(
        <button onClick={onClick}>削除</button>
    )
}
