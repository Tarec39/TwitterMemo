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
            {/* <Avatar></Avatar> */}
                <Body>
                     <div className="header">
                            {props.tweet.title === ""
                            ?<h3>&nbsp;</h3>
                            :<h3>{props.tweet.title}</h3>
                        }
                        <div className="content"><p>{props.tweet.text}</p></div>
                    </div>            
                </Body>
            
            <Button onClick={handleDeleteTweet}>-</Button>
        </Container>
    )
}

const Body = styled.div`
flex: 1;
padding: 10px 10px 10px 30px;
`;

const Container = styled.div`
// position: relative;
display: flex;
// width: 400px;
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
margin-bottom: 10px;
font-size: 15px;
white-space: break-spaces;
    p{
        white-space: pre-wrap;
    }
}
`;

const Button = styled.button`
    margin-top: auto;
`;

const Avatar = styled.div`
padding: 20px;
width: 40px;
`;