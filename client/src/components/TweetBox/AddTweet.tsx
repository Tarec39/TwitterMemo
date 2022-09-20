type props = {
    onClick: () => any
}

export const AddTweet = (props: props) =>{
    const result = props.onClick()
    return(
        <>
        <button onClick={props.onClick}>+</button>
        </>
        
    )
}