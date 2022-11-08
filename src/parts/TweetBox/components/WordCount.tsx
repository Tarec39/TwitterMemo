type props = {
    maxChar: number
    styles: React.CSSProperties
}

export const WordCountIndicator = (props: props) => {
    return(
        <>
        {props.maxChar <= 20
        ?   <div>残りバイト数：{props.maxChar}</div>
        :   <div></div>
        }
        <div className="meter" style={{width:'400px'}}>
            <div style={props.styles}>あ</div>
        </div>

        <div className="circle" style={style.circle}><div className="circle-inner">{props.maxChar}</div></div>
        </>
    )
}

const style = {
    circle : {
        width: '200px',
        height: '100px',
        borderRadius : '50% 50% 0 0/100% 100% 0 0',
        backgroundColor: 'red'
    }
}