import {useEffect,useState, useRef} from 'react'


export const useAddTweetBox = () => {
  /**
   * useStateの定義
   */
  const [textAreaEl, setTextAreaEl] = useState<string>('')
  const [inputEl, setInputEl] = useState<string>('')
  const [WordsNum, setWordsNum] = useState(Number)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const [overWords, setOverWords] = useState(0)

  


  /**
   * 処理関数の定義
  */

  /** タイトル入力機能の処理 */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }


  /**テキスト入力 */
  const onChangeTextAreaEl = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaEl(event.target.value)
  }

  
  //textareaの可変
  const TextareaRows =() => {
    let rowNums = textAreaEl.split('\n').length
    return rowNums
  }

  /** 文字数のカウントと制限の処理 */
  //文字数の取得
  const getWordsNumber = () => {
    let len = 0;
    for (let i = 0; i < textAreaEl.length; i++) {
    (textAreaEl[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    setWordsNum(len)
  }

  //テキスト入力になんかあったらgetWordsNumberを起動
  useEffect(()=> {
    getWordsNumber()
  },[textAreaEl])

  //280バイト超えたときにだす信号の処理
const SignalOfSomething = () => {
  if(WordsNum > 280) return(console.log("280字超えました！！！"))
}
const process = () => {
  if(WordsNum >= 260){
    setOverWords(Math.trunc((280-WordsNum)/2))
  }else{setOverWords(11)}
}
  useEffect(()=>{
    process()
    handleIsDisabled()
  },[WordsNum])


  //文字制限
  const handleIsDisabled = () => {
    if(WordsNum > 280) return setIsDisabled(true)
    else{setIsDisabled(false)}
  }



  /**要素の非表示 */
  const handleIsVisible = () => {
    setIsVisible(true)
  }
    return {
      //state
      inputEl,
      WordsNum, 
      textAreaEl, 
      isDisabled,
      isVisible,
      show,
      overWords,

      //setState
      setInputEl,
      setTextAreaEl,
      setIsVisible,
      setShow,
      
      //関数
      onChangeInputEl,
      onChangeTextAreaEl,
      handleIsVisible,
      TextareaRows,
    }
}