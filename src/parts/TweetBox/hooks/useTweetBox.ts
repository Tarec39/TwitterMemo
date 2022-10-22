import {useState} from 'react'

export const useTitle = () => {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {value, onChange}
}