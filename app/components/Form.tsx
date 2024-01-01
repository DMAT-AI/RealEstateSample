import React from 'react'
import FormComponent from './FormComponent'
import ImageForm from './ImageForm'

const Form = () => {
  return (
    <div className='container mx-auto flex flex-row items-start'>
        <FormComponent />
        <ImageForm />

    </div>
  )
}

export default Form