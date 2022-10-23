type props = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const ThreadText = (props: props) => {
    return(
        <div>
            <textarea
                value={props.value}
                onChange={props.onChange}
                placeholder="いまどうしてる?"
                required
            />
        </div>
    )
}