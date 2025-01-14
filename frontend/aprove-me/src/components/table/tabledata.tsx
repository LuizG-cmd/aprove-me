import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";



export async function getPayable() {
  const response = await fetch("http://localhost:8080/integrations/payables");
  return response.json()
}

export async function TableDemo() {
  const payables = await getPayable();
          
  console.log(payables.Dividas.payables);
 
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Valor</TableHead>
          <TableHead>Data da dívida</TableHead>
          <TableHead>Emissor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {payables.Dividas.payables.map((divida)=>(
              <TableRow key={divida.id}>
                <TableCell>
                  {divida.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </TableCell>
                <TableCell>
                  {divida.emissionDate}
                </TableCell>
                <TableCell>
                  Blabla Car
                </TableCell>
              </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
