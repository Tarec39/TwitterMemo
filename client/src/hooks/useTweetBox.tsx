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

  /** 処理関数の定義 */

  /**
   * タイトル入力の処理
  */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }

  /**
   * テキスト入力の処理
  */
  const onChangeTextAreaEl = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaEl(event.target.value)
  }
  
  /** Textareaの可変をする処理 */
  const TextareaRows =() => {
    let rowNums = textAreaEl.split('\n').length
    return rowNums
  }

  /**　 テキスト入力機能から文字数を取得 */
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


  /** 文字数が280バイト超えたら何らかのシグナルを出す処理 */
const SignalOfSomething = () => {
  if(WordsNum > 280) return(console.log("280字超えました！！！"))
}

  //何らかのシグナルを出すやつ
  useEffect(()=>{
    console.log(WordsNum)
    SignalOfSomething()
  },[WordsNum])



  /** 文字数の制限 */
  //280バイト超えたらボタンがクリックできなくなる
  const handleisDisabled = () => {
    if(WordsNum > 280) return setIsDisabled(true);
    else{return setIsDisabled(false)}
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