import ContentEditable from 'react-contenteditable'

type props = {
    value: string
    rows: number
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Text = (props: props) => {
    return(
        <textarea
        value={props.value}
        rows={props.rows}
        onChange={props.onChange}
        placeholder="いまどうしてる?"
        required
      />
    )
}