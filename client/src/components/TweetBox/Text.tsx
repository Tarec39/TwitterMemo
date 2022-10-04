type props = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Text = (props: props) => {
    return(
        <textarea
        value={props.value}
        onChange={props.onChange}
        // onClick={props.handleIsVisible}
        placeholder="いまどうしてる?"
        required
        />
    )
}