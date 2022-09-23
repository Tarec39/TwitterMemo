import styled from 'styled-components'

export const Posts = () => {
    return(
        <>
        <Container>
        <span></span>
        <Post>
        <div className="post__avatar">
          <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt=""></img>
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Somanath Goudar
                <span className="post__headerSpecial"><span className="material-icons post__badge"> verified </span>@somanathg</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <img src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg" alt=""></img>
          <div className="post__footer">
            <span className="material-icons"> repeat </span>
            <span className="material-icons"> favorite_border </span>
            <span className="material-icons"> publish </span>
          </div>
        </div>
      </Post>
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

const Post = styled.div`
display: flex;
flex: 0.5;

align-items: flex-start;
border-bottom: 1px solid #e6ecf0;
padding-bottom: 10px;
border-right: 1px solid #e6ecf0;

    .post__avatar {
        padding: 20px;
        width: 40px;
    }
    > .post__avatar img {
        border-radius: 50%;
        height: 40px;
    }

    > .post__body {
        flex: 1;
        padding: 10px;
    }

    > .post__headerText h3 {
    font-size: 15px;
    margin-bottom: 5px;
    }

    > .post__headerSpecial {
        font-weight: 600;
        font-size: 12px;
        color: gray;
        
        > .post__badge {
            font-size: 14px !important;
            color: #50b7f5;
            margin-right: 5px;
        }
    }

    > .post__headerDescription {
        margin-bottom: 10px;
        font-size: 15px;
    }

    > .post__body img {
        width: 450px;
        object-fit: contain;
        border-radius: 20px;  
    }

    > .post__footer {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

      
`;