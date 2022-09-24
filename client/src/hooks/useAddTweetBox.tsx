import {useEffect,useState} from 'react'


export const useAddTweetBox = () => {
  /**
   * useStateの定義
   */
  const [textAreaEl, setTextAreaEl] = useState<string>('')
  const [inputEl, setInputEl] = useState<string>('')
  const [WordNum, setWordNum] = useState(Number)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  /**
   * 処理関数の定義
   */

  /** テキスト入力 */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }

  const onChangeTextAreaEl = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaEl(event.target.value)
  }
  useEffect(()=> {
    count()
  },[textAreaEl])

  /** 文字数の表示*/
  const count = () => {
    let len = 0;
    for (let i = 0; i < textAreaEl.length; i++) {
    (textAreaEl[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    setWordNum(len)
  }
  /** 文字数の制限 */
  //140文字超えたらボタンが押せなくなる。
  const handleisDisabled = () => {
    if(WordNum > 280) return setIsDisabled(true);
    else{return setIsDisabled(false)}
  }
  /**これはなに？ */
  useEffect(()=>{
    handleisDisabled()
  },[WordNum])


    return {
      //state
      inputEl,
      textAreaEl, 
      WordNum, 
      isDisabled,

      //setState
      setInputEl,
      setTextAreaEl, 
      
      //関数
      onChangeInputEl,
      onChangeTextAreaEl
    }
}