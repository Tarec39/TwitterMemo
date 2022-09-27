import styled from 'styled-components'
import { useState } from 'react';

import { AddThread } from '../AddThread';
import { Tweet } from "../../types/Tweet";
import { pid } from 'process';
type props = {
    tweet: Tweet
    deleteTweet: any
}

export const Post = (props: props) => {
    const [isDisplay, setIsDisplay] = useState<boolean>(false!)
    const event = () =>  setIsDisplay(!isDisplay)
    // const handleDeleteTweet = () => props.deleteTweet(props.tweet.id)

    return(
        <Container>
            <Body>
                <div className="title">
                    {props.tweet.title === ""
                    ?<h3>&nbsp;</h3>
                    :<h3>{props.tweet.title}</h3>
                    }
                </div>
                {props.tweet.contents.map((i) => (
                    <>
                    <Content><p>{i.text}</p></Content>
                    </>
                ))}
           </Body>
                
                
            {/* <Button onClick={handleDeleteTweet}>-</Button> */}

            <AddThread onClick={event}/>

            <ThreadBox display={isDisplay}><textarea></textarea></ThreadBox>


        </Container>
    )
}


const Container = styled.div`
// position: relative;
// display: flex;
width: 400px!;
align-items: flex-start;
padding-bottom: 10px;
border-top: 1px solid #e6ecf0;
border-bottom: 1px solid #e6ecf0;
border-right: 1px solid #e6ecf0;

h3 {
font-size: 15px;
margin-bottom: 5px;
}
.content {

`;
const Content = styled.div`
margin-bottom: 10px;
font-size: 15px;
white-space: break-spaces;
    p{
        white-space: pre-wrap;
    }
}
`;
const Body = styled.div`
flex: 1;
padding: 10px 10px 10px 30px;
`;

const Button = styled.button`
    margin-top: auto;
`;

const ThreadBox = styled.div<{display: boolean}>`
    display: ${props => props.display ?'inherit':'none'};
`;