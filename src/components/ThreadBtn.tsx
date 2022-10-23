type props = {
    onClick: () => void
}

export const ThreadBtn = (props: props) => {
    return(
        <button onClick={props.onClick}>＋</button>
    )
}