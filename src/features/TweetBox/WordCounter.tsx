type props = {
    WordNum: number
}

export const WordCounter = (props: props) => {
    const visibility = props.WordNum === 11 ? 'hidden': 'visible';

    return(
        <>
        <div style={{visibility: visibility}}>マイナス文字数/{props.WordNum}</div>
        </>
    )
}