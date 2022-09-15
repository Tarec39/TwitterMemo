type props = {
    WordNum: number
}

export const WordCount = (props: props) => {
    return(
        <span>{props.WordNum}</span>
    )
}