import { Title } from "./components/Title";
import { useTitle } from "./hooks/useTweetBox";

export const TweetBox = () => {
    const {value, onChange} = useTitle()

    return(
        <Title 
            value={value}
            onChange={onChange}
        />
    )
}