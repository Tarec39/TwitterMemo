//Libraries
import styled from 'styled-components'

//Standard Hooks
import { useState } from 'react'

//Custom Hooks
import { useTitle } from '../../hooks/useTweetBox'

//Parts
import { Title } from "./Title"
import { ThreadBtn } from "../Buttons/ThreadBtn"
import { ThreadText } from "./ThreadText"
import { TweetButton } from '../Buttons/TweetButton'
import { CloseThreadBtn } from '../Buttons/ThreadBtn'

export const ThreadTexts = () => {
    const {titleEditorState, setTitleEditorState} = useTitle()
    
    const [value, setValue] = useState(0)
    const [arr, setArr] = useState([value])
    const addArr = () => {
        setArr([...arr, value+1])
        setValue(value+1)
    }

    const handleDelete = (index:number) => {
        const newArr = arr.filter((i) => (i !== index));
        setArr(newArr)
    }

    return(
        <div>
            <Title
                editorState={titleEditorState}
                setEditorState={setTitleEditorState}
            />
            {arr.length!==0 && arr.map((index)=>(
                <Test key={index}>

                    <ThreadText/>
                    
                    {arr.length!==1
                    ?<CloseThreadBtn onClick={()=>handleDelete(index)}/>:''}

                    

                    {(arr.length==0 || arr.slice(-1)[0] === index)
                    ?
                    <>
                    <Partition></Partition>
                    <ThreadBtn
                    onClick={addArr}
                    /**isThreadbleどうしよう。挙動と名称**/
                    isThreadable={true}
                    />
                    </>
                    :''}

                </Test>
            ))}
            
            <TweetButton
                handlePostTweet={()=>console.log}
                text={'aasd'}
                num={1}
            />
            
        </div>
    )
}

const Test = styled.div`
    display: flex;
    flex-wrap: wrap;
    div:nth-child(1){
        width: 100%;
    }
    div:nth-child(2){
        margin-left: auto;
    }
    div:nth-child(3){
        >img{
            width:30px;
            padding: 0!important;
        }
        right: 0;
        position: absolute;
        z-index: 1;
    }
`

const Partition = styled.span`
margin-left: calc(10px);
height: 31px;
background-color: rgb(62, 65, 68);
margin-right: 12px;
width: 1px;
align-self: center;
`