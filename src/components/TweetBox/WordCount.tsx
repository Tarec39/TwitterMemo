//react-circular-progressbar
import { CircularProgressbar } from 'react-circular-progressbar'
import './styles.css'

type props = {
    maxChar: number
    styles: string
    char: number
}

export const WordCountIndicator = (props: props) => {
    const maxChar = () => props.maxChar <= 20 ? props.maxChar : ''
    return(
        <>
            <div className="circle" style={{width: 25, position:'relative', alignSelf: 'center'}}>
                <CircularProgressbar 
                    styles={{path: {stroke: props.styles}}}
                    value={props.char}
                    text={`${maxChar()}`}
                />
            </div>
        </>
    )
}