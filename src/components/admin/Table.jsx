import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function DataTable() {
    return (
        <div className="border rounded-lg w-full">
            <div className="relative w-full overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID.</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">John Doe</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>+1 (555) 123-4567</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}