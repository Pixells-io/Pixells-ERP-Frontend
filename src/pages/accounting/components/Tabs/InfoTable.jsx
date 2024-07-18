import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

const InfoTable = () =>{
    return (<> <Table>
        <TableHeader>
          <TableRow className="border-b-black">
            <TableHead className="text-[#44444F] font-roboto">PÓLIZA DE ASIENTO CONTABLE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#696974] font-roboto">
          <TableRow>
            <TableCell>Fecha: </TableCell>
            <TableCell>27/07/2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tipo de Poliza Contable</TableCell>
            <TableCell>Ajuste Contable (AC)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Numeración</TableCell>
            <TableCell>Ajuste Contable</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>AC-1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </>
      
      );
}

export default InfoTable;
















