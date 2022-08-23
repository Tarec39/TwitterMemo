type props = {
    onClick: (event: string) => void;
}
export const test = (props: props) => {
    return(
        <button onClick={onclick}></button>
    )
}