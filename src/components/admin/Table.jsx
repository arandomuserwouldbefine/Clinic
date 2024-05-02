import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function DataTable() {
    return (
        <div className="border rounded-lg w-full">
            <div className="relative w-full overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">John Doe</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>+1 (555) 123-4567</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Jane Smith</TableCell>
                            <TableCell>28</TableCell>
                            <TableCell>jane.smith@example.com</TableCell>
                            <TableCell>+1 (555) 987-6543</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Michael Johnson</TableCell>
                            <TableCell>45</TableCell>
                            <TableCell>michael.johnson@example.com</TableCell>
                            <TableCell>+1 (555) 456-7890</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Emily Davis</TableCell>
                            <TableCell>24</TableCell>
                            <TableCell>emily.davis@example.com</TableCell>
                            <TableCell>+1 (555) 321-0987</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">David Wilson</TableCell>
                            <TableCell>39</TableCell>
                            <TableCell>david.wilson@example.com</TableCell>
                            <TableCell>+1 (555) 789-1234</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}