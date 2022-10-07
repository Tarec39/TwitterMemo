import {useEffect,useState, useRef} from 'react'


export const useAddTweetBox = () => {
  /**
   * useStateの定義
   */
  const [html, setHtml] = useState<string>('')
  const [inputEl, setInputEl] = useState<string>('')
  const [WordsNum, setWordsNum] = useState(Number)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  


  /**
   * 処理関数の定義
  */

  /** タイトル入力機能の処理 */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }


  /**テキスト入力 */
  const onInputDivEl = (e:React.FormEvent<HTMLDivElement>) => {
    let innerhtml = e.currentTarget.innerHTML
    setHtml(innerhtml)
  }
  
  //textareaの可変
  const TextareaRows =() => {
    let rowNums = html.split('\n').length
    return rowNums
  }

  /** 文字数のカウントと制限の処理 */
  //文字数の取得
  const getWordsNumber = () => {
    let len = 0;
    for (let i = 0; i < html.length; i++) {
    (html[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    setWordsNum(len)
  }

  //テキスト入力になんかあったらgetWordsNumberを起動
  useEffect(()=> {
    console.log(html)
    count()
  },[html])


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
      WordsNum, 
      html, 
      isDisabled,
      isVisible,
      ref,

      //setState
      setInputEl,
      setHtml,
      setIsVisible,
      
      //関数
      onChangeInputEl,
      onInputDivEl,
      handleIsVisible,
      TextareaRows,
    }
}