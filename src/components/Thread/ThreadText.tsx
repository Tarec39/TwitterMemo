import styled from 'styled-components'
import {Editor, EditorState} from 'draft-js'
import {useState,useRef, useEffect} from 'react'
import {useText,useMeter,useCharCounter} from '../../parts/TweetBox/hooks/useTweetBox'
import {WordCountIndicator} from '../../parts/TweetBox/components/WordCount'

type props = {

}
export const ThreadText = (props: props) => {
    const {textEditorState, setTextEditorState} = useText()
    const text = textEditorState.getCurrentContent().getPlainText()
    const { countChar, countMaxChar } = useCharCounter(text)
    const {styles, width} = useMeter(countChar().count)
    const ins = useRef<Editor>(null)
    return(
        <>
          <div>
            <DraftStyle>
            {(textEditorState.getCurrentContent().getPlainText().length===0)
              ?<PlaceHolder>いまどうしてる？</PlaceHolder>
              :''
            }
            <Editor
              editorState={textEditorState}
              onChange={setTextEditorState}
              ref={ins}
            />
            <div onClick={()=>console.log(ins.current)}>A</div>
            </DraftStyle>
          </div>

          <WordCountIndicator
                maxChar={countMaxChar()}
                char={width()}
                styles={styles()}
            />
        </>
      )
}

const Body = styled.div`
    background-color: white;
    color: black;
    margin-top: 5px;
`
const DraftStyle = styled.div`
  // height: 28px;
  padding: 2px 0;
`

const PlaceHolder = styled.div`
  position: absolute;
  color: #71767B;
  z-index: -1;
`