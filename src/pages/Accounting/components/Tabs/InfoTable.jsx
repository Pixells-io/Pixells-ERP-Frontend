import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InfoTable = () => {
  return (
      <Table>
        <TableHeader>
          <TableRow className="border-b-black">
            <TableHead className="text-md flex gap-x-8 font-roboto font-semibold text-[#44444F] h-8">
              <div>PÓLIZA DE ASIENTO CONTABLE</div>
              <div className="text-grisSubText">2588</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-roboto text-[#696974]">
          <TableRow>
            <TableCell className="font-medium">Fecha: </TableCell>
            <TableCell className="font-normal">27/07/2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Tipo de Poliza Contable</TableCell>
            <TableCell className="font-normal">Ajuste Contable (AC)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Numeración</TableCell>
            <TableCell className="font-normal">Ajuste Contable</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Código</TableCell>
            <TableCell className="font-normal">AC-1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
};

export default InfoTable;
