import {useEffect, useState} from 'react'

import { useTweet } from './useTweet'

export const useAddTweetBox = () => {


    
    const {addTweet} = useTweet()

    const [textAreaEl, setTextAreaEl] = useState<string>()

    const onChangeTextAreaEl = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaEl(event.target.value)
    }
  
    const handleAddTweet = () => {
      if(textAreaEl === ""){return}
      addTweet(textAreaEl!)
      setTextAreaEl("")
    }

    return {textAreaEl, onChangeTextAreaEl, handleAddTweet}
}