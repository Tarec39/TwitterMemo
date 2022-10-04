import React from 'react'
import styled from 'styled-components'

type props = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Title =(props: props)=> {
    return(
        <>
        <Input
            value={props.value}
            onChange={props.onChange}
            placeholder='タイトル'
        />
        </>
    )
}

const Input = styled.input`
    display: none;
`
