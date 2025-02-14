"use-client"

import { useForm } from "react-hook-form"

import { Payable } from "@/app/types/payables.types"

import { createPayable } from "@/lib/utils"


export function ProfileForm() {
  // 1. Define your form.
  const {register, handleSubmit} = useForm<Payable>()
 
  // 2. Define a submit handler.
  async function onSubmit(data: Payable) {

    try {
      await createPayable(data)
    }catch(err){
      alert(err)
    }
    
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert("The payable data has been sent!")
  }

 return {register, handleSubmit, onSubmit}
}




