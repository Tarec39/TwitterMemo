type props = {
    onClick: ()=>void
}

export const PostButton = (props:props) => {
    return(
        <button 
        onClick={props.onClick}
        // disabled={280bytes超えたらTrue、そうでないならFalse}
        >ツイートする</button>
    )
}