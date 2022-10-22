type props = {
    onClick: ()=>void
    isDisabled: boolean
}

export const PostButton = (props:props) => {
    return(
        <button 
        onClick={props.onClick}
        disabled={props.isDisabled}
        // disabled={280bytes超えたらTrue、そうでないならFalse}
        >ツイートする</button>
    )
}