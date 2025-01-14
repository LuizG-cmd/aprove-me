{/*import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


import { Button } from "../ui/button"


export async function getAssignors() {
    const response = await fetch("http://localhost:8080/integrations/assignors");
    return response.json()
}

export async function PopoverDemo() {

    const assignors = await getAssignors()

    console.log(assignors.assignors.assignors)
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
         <PopoverContent>
            {assignors.assignors.assignors.map((devedores)=>(
                <div key={devedores.id}>
                    <div>
                    {devedores.document} 
                    </div>
                    {devedores.name}
                </div>
            ))}
         </PopoverContent>
      </Popover>
    )
  }
*/}