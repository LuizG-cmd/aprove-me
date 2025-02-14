"use client"

import {ProfileForm} from "@/app/pages/payables/create/page"
 
import { Button } from "@/components/ui/button"

import { Header } from "../Header/header"

 

 
export function PayableForm() {
  // 1. Define your form.
  const {onSubmit, handleSubmit, register} = ProfileForm()
 
  // 2. Define a submit handler.
  
  
return (
  <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="flex rounded-lg border-2 border-solid justify-center items-center p-10">
        <div className="flex flex-col rounded-lg border-solid">
          <input type="text" {...register("value")} className="rounded-sm outline mt-5"/>
          <input type="text" {...register("emissionDate")} className="rounded-sm outline mt-5"/>
          <input type="text" {...register("assignorID")} className="rounded-sm outline mt-5"/>
        <Button type="submit" className="mt-5">Submit</Button>
        </div>
      </form>
      </>
  )
}