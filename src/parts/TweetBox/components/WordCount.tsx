type props = {
    WordNum: number
}

export const WordCountIndicator = (props: props) => {
    // const visibility = props.WordNum === 11 ? 'hidden': 'visible';

    return(
        <>
        {props.WordNum <= 20
        ? <div>{props.WordNum}</div>
        : <div></div>
        }
        </>
    )
}