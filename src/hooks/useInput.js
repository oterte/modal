import { useState } from "react"

const useInput = (initialState = '') => {
    const [value, setValue] =  useState(initialState)

    const handler = e => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return [value, handler]
}

export default useInput