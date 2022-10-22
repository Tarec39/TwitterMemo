import React from 'react'

type props = {
    show: boolean
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Title =(props: props)=> {
    const isDisplay = props.show ? 'inherit' : 'none'
    return(
        <>
        <input
            value={props.value}
            onChange={props.onChange}
            placeholder='タイトル'
            style={{display: isDisplay}}
        />
        </>
    )
}

