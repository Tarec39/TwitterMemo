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
            <div className="circle" style={{width: 30}}>
                <CircularProgressbar 
                    styles={{
                        path: {
                            stroke: props.styles
                        },
                        text: {
                            fontSize: '50px'
                        }
                    }}
                    value={props.char}
                    text={`${maxChar()}`}
                />
            </div>
        </>
    )
}