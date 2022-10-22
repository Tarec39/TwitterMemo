//Parts
import { Title } from "./components/Title";
import { Text } from "./components/Text";
//Hooks
import { useTitle } from "./hooks/useTweetBox";
import {useText} from "./hooks/useTweetBox"

export const TweetBox = () => {
    const {inputEl, onChangeInput} = useTitle()
    const {textAreaEl, onChangeTextArea, calcRow} = useText()

    return(
        <>
        <Title 
            value={inputEl}
            onChange={onChangeInput}
            />

        <Text
            value={textAreaEl}
            onChange={onChangeTextArea}
            rows={calcRow}
        />
        </>
    )
}