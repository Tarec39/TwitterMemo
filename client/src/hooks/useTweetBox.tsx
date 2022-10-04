import {useEffect,useState} from 'react'


export const useAddTweetBox = () => {
  /**
   * useStateの定義
   */
  const [textAreaEl, setTextAreaEl] = useState<string>('')
  const [inputEl, setInputEl] = useState<string>('')
  const [WordNum, setWordNum] = useState(Number)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  /**
   * 処理関数の定義
   */

  /** タイトル入力 */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }

  /**テキスト入力 */
  const onChangeTextAreaEl = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaEl(event.target.value)
  }
  
  /** Textareaの可変 */
  const TextareaRows =() => {
    let rowNums = textAreaEl.split('\n').length
    return rowNums
  }

  /** 文字数の処理*/
  const count = () => {
    let len = 0;
    for (let i = 0; i < textAreaEl.length; i++) {
    (textAreaEl[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    setWordNum(len)
  }
  useEffect(()=> {
    count()
  },[textAreaEl])


  /** 文字数の制限 */
  //280バイト超えたらボタンがクリックできなくなる
  const handleisDisabled = () => {
    if(WordNum > 280) return setIsDisabled(true);
    else{return setIsDisabled(false)}
  }

  useEffect(()=>{
    handleisDisabled()
  },[WordNum])

  /**要素の非表示 */
  const handleIsVisible = () => {
    setIsVisible(true)
  }
    return {
      //state
      inputEl,
      textAreaEl, 
      WordNum, 
      isDisabled,
      isVisible,

      //setState
      setInputEl,
      setTextAreaEl,
      setIsVisible,
      
      //関数
      onChangeInputEl,
      onChangeTextAreaEl,
      handleIsVisible,
      TextareaRows
    }
}