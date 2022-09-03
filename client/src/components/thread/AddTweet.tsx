type props = {
    onClick: () => any
}

export const AddTweet = (props: props) =>{
    return(
        <button onClick={props.onClick}>+</button>
    )
}