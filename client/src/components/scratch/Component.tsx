import styled from 'styled-components'

export const Component = () => {
    return(
        <疑似ボディー>
            <第一></第一>
            <第二>
            <TweetBox>
                <Form>
                    <TweetBox_Input>
                        <Input type="text" placeholder="What's happening?" />
                    </TweetBox_Input>
                    <Button>Tweet</Button>
                </Form>
            </TweetBox>
            </第二>
            <第三></第三>
        </疑似ボディー>
    )
}

const 疑似ボディー = styled.div`
display: flex;
// height: 100vh;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
`

const 第一 = styled.div`
border-right: 1px solid var(--twitter-background);
flex: 0.2;
min-width: 250px;
margin-top: 20px;
padding-left: 20px;
padding-right: 20px;
`;

const 第二 = styled.div`
-ms-overflow-style: none;
    scrollbar-width: none;
flex: 0.5;
border-right: 1px solid var(--twitter-background);
min-width: fit-content;
overflow-y: scroll;
`;
const 第三 = styled.div`
flex: 0.3;
`;
const TweetBox = styled.div`
padding-bottom: 10px;
border-bottom: 8px solid #e6ecf0;
padding-right: 10px;
`;

const Form = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
margin-left: 20px;
font-size: 20px;
border: none;
outline: none;
`;

const Image = styled.img`
border-radius: 50%;
height: 40px;
`;

const TweetBox_Input = styled.div`
display: flex;
padding: 20px;
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