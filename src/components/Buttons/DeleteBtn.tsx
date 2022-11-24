import styled from 'styled-components'
import TrashBin from '../../assets/trash bin.png'

type props = {
    onClick: (id:string) => void
    id: string
    isDisplay: boolean
}

export const DeleteBtn = (props: props) => {
    const onClick = () => props.onClick(props.id)
    return(
        <Button onClick={onClick} style={{opacity: (props.isDisplay)?'1':'0'}}>
            <img src={TrashBin} />
        </Button>
    )
}

const Button = styled.div`
    text-align: right;
    transition-duration: 0.218s;
    transition-timing-function: ease-in;
    width:100%;
    height:20px;
    >img{
        display: block;
        width:25px;
        margin-left:auto;
        filter: brightness(0) invert(1);
        // background: white;
    }
`