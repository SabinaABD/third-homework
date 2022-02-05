import {useState, useEffect} from 'react'
import validateInfo from "./validateInfo";

const useForm = () => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: '',
        login: '',
        loginPassword: '',
    })

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const [errors, setErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [submittedValues, setSubmittedValues] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        setErrors(validateInfo(values))
        setSubmittedValues({
            ...values
        })
        setFormSubmitted(true)
    }


    const handleClear = event => {
        event.preventDefault()
        setValues({
            name: '',
            lastName: '',
            login: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirmation: '',
            loginPassword: '',
        })
        setErrors({})
    }


    return {handleChange, values, handleSubmit, errors, handleClear}

}

export default useForm