import styled from 'styled-components'
type props = {
    onClick: (id:string) => void
    id: string
    isDisplay: boolean
}

export const DeleteBtn = (props: props) => {
    const onClick = () => props.onClick(props.id)
    return(
        <Button onClick={onClick} style={{opacity: (props.isDisplay)?'1':'0'}}>
            <span className="material-symbols-outlined">delete</span>
        </Button>
    )
}

const Button = styled.div`
    text-align: right;
    transition-duration: 0.218s;
    transition-timing-function: ease-in;
`