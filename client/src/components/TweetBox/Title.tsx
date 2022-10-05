import React from 'react'

type props = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Title =(props: props)=> {
    return(
        <>
        <input
            value={props.value}
            onChange={props.onChange}
            placeholder='タイトル'
        />
        </>
    )
}

