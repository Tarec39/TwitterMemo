import styled from 'styled-components'

type props = {
    handlePostTweet: ()=>void
    text: string
    num: number
}

export const TweetButton = (props:props) => {
    const isDisabled = (props.text !=='' && props.num <= 281 ) ? false :true;
    return(
        <div>
            {(isDisabled)
            ? <Button1>ツイートする</Button1>
            : <Button2
                onClick={props.handlePostTweet}
              >ツイートする
              </Button2>
            }
        </div>
    )
}

const Button1 = styled.div`
background-color: black;
background-color: rgb(29, 155, 240);
margin-left: 12px;
min-width: 36px;
min-height: 36px;
outline-style: none;
padding: 0 16px 0 16px;
border-radius: 9999px;
width: 122px;
height: 36px;
font-size: 15px;
font-weight: bold;
line-height: 36px !important;
text-align: center;
opacity: 0.5;
`;

const Button2 = styled.div`
    background-color: rgb(29, 155, 240);
    margin-left: 12px;
    min-width: 36px;
    min-height: 36px;
    outline-style: none;
    padding: 0 16px 0 16px;
    border-radius: 9999px;
    width: 122px;
    height: 36px;
    font-size: 15px;
    font-weight: bold;
    line-height: 36px !important;
    text-align: center;
`;