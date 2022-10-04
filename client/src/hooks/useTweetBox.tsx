import {useEffect,useState} from 'react'


export const useAddTweetBox = () => {
  /**
   * useStateの定義
   */
  const [textAreaEl, setTextAreaEl] = useState<string>('')
  const [inputEl, setInputEl] = useState<string>('')
  const [WordsNum, setWordsNum] = useState(Number)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  /**
   * 処理関数の定義
  */

  /** タイトル入力機能の処理 */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }

  /** テキスト入力機能の処理 */
  //入力の受付
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

  //280バイト超えたら信号
  useEffect(()=>{
    console.log(WordsNum)
    SignalOfSomething()
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
      textAreaEl, 
      WordsNum, 
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