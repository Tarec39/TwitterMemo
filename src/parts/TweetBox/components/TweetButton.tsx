type props = {
    onClick: ()=>void
    WordNum: number
    value: string
}

export const TweetButton = (props:props) => {
    const isDisabled = (props.value !=='' && props.WordNum >= 0 ) ?false :true;
    return(
        <div>

        <button 
        onClick={props.onClick}
        disabled={isDisabled}
        >ツイートする</button>
        </div>
    )
}