"use-client"

import { useForm } from "react-hook-form"


interface Payable {
    value: number,
    emissionDate: string,
    assignorID: string
}
 

export function ProfileForm() {
  // 1. Define your form.
  const {register, handleSubmit} = useForm<Payable>()
 
  // 2. Define a submit handler.
  function onSubmit(data: Payable) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(data)
  }

 return {register, handleSubmit, onSubmit}
}




