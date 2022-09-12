import {useEffect,useState} from 'react'


export const useAddTweetBox = () => {

    const [textAreaEl, setTextAreaEl] = useState<string>()

    const onChangeTextAreaEl = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaEl(event.target.value)
    }

    return {textAreaEl, onChangeTextAreaEl, setTextAreaEl}
}