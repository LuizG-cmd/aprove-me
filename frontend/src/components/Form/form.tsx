"use client"

import {ProfileForm} from "@/app/pages/payables/create/page"
 
import { Button } from "@/components/ui/button"

 

 
export function PayableForm() {
  // 1. Define your form.
  const {onSubmit, handleSubmit, register} = ProfileForm()
 
  // 2. Define a submit handler.
  
  
return (
  
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <input type="text" {...register}/>
        <Button type="submit">Submit</Button>
      </form>
  )
}