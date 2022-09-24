import styled from 'styled-components'

import { Tweet } from "../../types/Tweet";
type props = {
    tweet: Tweet
    deleteTweet: any
}

export const Post = (props: props) => {
    const handleDeleteTweet = () => {
        props.deleteTweet(props.tweet.id)
    }
    return(
        <Container>
            <Avatar></Avatar>
                <Body>
                     <div className="header">
                            {props.tweet.title === ""
                            ?<h3></h3>
                            :<h3>{props.tweet.title}</h3>
                        }
                        <div className="content"><p>{props.tweet.text}</p></div>
                    </div>            
                </Body>
            
            <Button onClick={handleDeleteTweet}>-</Button>
        </Container>
    )
}
const Button = styled.button`
    margin-top: auto;
`;

const Avatar = styled.div`
padding: 20px;
width: 40px;
`;
const Body = styled.div`
flex: 1;
padding: 10px;
`;

const Container = styled.div`
display: flex;
align-items: flex-start;
padding-bottom: 10px;
border-bottom: 1px solid #e6ecf0;

h3 {
font-size: 15px;
margin-bottom: 5px;
}
.content {
margin-bottom: 10px;
font-size: 15px;
white-space: break-spaces;
    p{
        white-space: pre-wrap;
    }
}
`;