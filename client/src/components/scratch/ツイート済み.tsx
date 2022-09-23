import styled from 'styled-components'

export const Posts = () => {
    return(
        <>
        <Container>
            <span></span>
            <Post_s>
                <Post>
                    <div className="avatar"></div>
                    <div className="body">
        
                        <div className="header">
                            <div className="headerText">
                                <h3>タイトル</h3>
                            </div>
                        <div className="content">
                            <p>ここに適当なサンプルテキストをいれときますわ。
                                改行されたときとかどうやって振り舞うのかも確認しておきたいし。
                                実際の改行は機能を組み込まないとチェックできないから後回しね。
                            </p>
                        </div>
                    </div>
        
                    </div>
                </Post>
                <Post>
                    <div className="avatar"></div>
                    <div className="body">
        
                        <div className="header">
                            <div className="headerText">
                                <h3>タイトル</h3>
                            </div>
                        <div className="content">
                            <p>ここに適当なサンプルテキストをいれときますわ。
                                改行されたときとかどうやって振り舞うのかも確認しておきたいし。
                                実際の改行は機能を組み込まないとチェックできないから後回しね。
                            </p>
                        </div>
                    </div>
        
                    </div>
                </Post>
            </Post_s>
            <span></span>
      </Container>

        </>
    )
}
const Container = styled.div`
display: flex;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
    > span:first-child {
        flex: 0.2;
        border-right: 1px solid #e6ecf0;
        min-width: 250px;
        margin-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
      }
    
    > span:last-child {
      flex: 0.3;
    }
`;

const Post_s = styled.div`
flex: 0.5;
`;

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
    }

     .body img {
        width: 450px;
        object-fit: contain;
        border-radius: 20px;  
    }

`;

const アイコン = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`;


{/* <アイコン>
  <span className="material-icons"> repeat </span>
  <span className="material-icons"> favorite_border </span>
  <span className="material-icons"> publish </span>
</アイコン> */}