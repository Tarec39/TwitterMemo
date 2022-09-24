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
            <div className="avatar"></div>
                    <div className="body">
        
                        <div className="header">
                            <div className="headerText">
                                <h3>タイトル</h3>
                            </div>
                        <div className="content">
                            <p>{props.tweet.text}</p>
                        </div>
                    </div>            
            </div>
            
            <Button onClick={handleDeleteTweet}>-</Button>
        </Container>
    )
}
const Button = styled.button`
    margin-top: auto;
`;

const Container = styled.div`
display: flex;
align-items: flex-start;
padding-bottom: 10px;
border-bottom: 1px solid #e6ecf0;
.avatar {
    padding: 20px;
    width: 40px;
}
 .body {
    flex: 1;
    padding: 10px;
}
 .headerText h3 {
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
 .body img {
    width: 450px;
    object-fit: contain;
    border-radius: 20px;  
}

`;