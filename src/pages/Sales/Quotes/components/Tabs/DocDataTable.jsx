import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { IonIcon } from '@ionic/react'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'

const TableDT = ({ data, columns }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
  
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = data.slice(startIndex, endIndex)
  
    return (
        <div className='flex flex-col h-full w-full max-w-4xl mx-auto'>
            <div className='overflow-auto rounded-xl border'>
                <Table>
                    <TableHeader>
                        <TableRow className="border-b-primario">
                            {columns.map((column) => (
                                <TableHead key={column.accessorKey}>{column.header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column) => (
                                    <TableCell key={column.accessorKey}>
                                        {row[column.accessorKey]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-end items-center mt-4 p-2">
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        variant="outline"
                        className="mr-2 rounded-full"
                    >
                        <IonIcon icon={chevronBackOutline} className="mr-1" />
                    </Button>
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        className="ml-2 rounded-full"
                    >
                        <IonIcon icon={chevronForwardOutline} className="ml-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TableDT;