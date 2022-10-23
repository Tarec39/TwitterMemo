type props = {
    value: string
    rows: ()=>number
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Text = (props: props) => {
    return(
        <div>
        <textarea
            value={props.value}
            rows={props.rows()}
            onChange={props.onChange}
            placeholder="いまどうしてる?"
            required
            />
        </div>
    )
}