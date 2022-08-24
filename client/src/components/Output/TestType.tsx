type props = {
    onClick: () => any;
}
export const TestType = (props: props) => {
    return(
        <button onClick={props.onClick}></button>
    )
}