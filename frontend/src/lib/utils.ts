import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import axios from 'axios'

import { Payable } from "@/app/types/payables.types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const api = axios.create({
  baseURL: 'http://localhost:8080'
})


export const createPayable = async (data: Payable) => {
  const response = await api.post('/integrations/payable', data)
  return response
}





