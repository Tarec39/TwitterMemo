import ContentEditable from 'react-contenteditable'

type props = {
    innerRef: React.RefObject<HTMLDivElement>
    html: string
    onChange: (event: React.FormEvent<HTMLDivElement>) => void
}

export const Text = (props: props) => {
    return(
        <ContentEditable
        innerRef={props.innerRef}
        html={props.html}
        onChange={props.onChange}
        // disabled={true}
      />
    )
}