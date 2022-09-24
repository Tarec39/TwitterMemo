import styled from 'styled-components'

type Props = {
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
    onClick: () => void
    value: string
    isDisabled: boolean
}

export const PostTweet = (props: Props) => {
    return(
        <>
        <Form>
            <div>
                <textarea
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="What's happening?"
                />
            </div>
            <Button
                onClick={props.onClick}
                disabled={props.isDisabled}>
                ツイートする
            </Button>
        </Form>
        </>
    )
}

const Form = styled.div`
display: flex;
flex-direction: column;

>div{
    display: flex;
    padding: 20px;
}
textarea {
    resize:'none'
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    outline: none;
    width: 100%;
}
`;


const Button = styled.button`
background-color: #50b7f5;
border: none;
color: white;
font-weight: 900;
border-radius: 30px;
width: 80px;
height: 40px;
margin-top: 20px;
margin-left: auto;
`;
