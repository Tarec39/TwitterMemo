import {useEffect,useState, useRef} from 'react'


export const useAddTweetBox = () => {
  /**
   * useStateの定義
   */
  const [html, setHtml] = useState<string>('')
  const [inputEl, setInputEl] = useState<string>('')
  const [WordNum, setWordNum] = useState(Number)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  


  /**
   * 処理関数の定義
   */

  /** タイトル入力 */
  const onChangeInputEl = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(event.target.value)
  }

  /**テキスト入力 */
  const onInputDivEl = (e:React.FormEvent<HTMLDivElement>) => {
    let innerhtml = e.currentTarget.innerHTML
    setHtml(innerhtml)
  }
  
  /** Textareaの可変 */
  const TextareaRows =() => {
    let rowNums = html.split('\n').length
    return rowNums
  }

  /** 文字数の処理*/
  const count = () => {
    let len = 0;
    for (let i = 0; i < html.length; i++) {
    (html[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    setWordNum(len)
  }
  useEffect(()=> {
    console.log(html)
    count()
  },[html])


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
      html, 
      WordNum, 
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