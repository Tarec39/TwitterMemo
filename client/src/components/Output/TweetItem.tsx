import styled from 'styled-components'

import { Tweet } from "../../types/Tweet";
type props = {
    tweet: Tweet
}

export const TweetItem = (props: props) => {
    return(
        <Post>
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
        </Post>
    )
}

const Post = styled.div`
display: flex;
border-bottom: 1px solid #e6ecf0;
padding-bottom: 10px;
border-right: 1px solid #e6ecf0;

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
        p{white-space: pre-wrap;
        }

    }

     .body img {
        width: 450px;
        object-fit: contain;
        border-radius: 20px;  
    }

`;