type props = {
    WordNum: number
}

export const WordCountIndicator = (props: props) => {
    return(
        <>
        {props.WordNum <= 20
        ? <div>{props.WordNum}</div>
        : <div></div>
        }
        </>
    )
}