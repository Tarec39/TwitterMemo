type props = {
    onClick: () => any
}

export const AddThread = (props: props) => {
    return(
        <button onClick={props.onClick}>+</button>
    )
}