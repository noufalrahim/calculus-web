import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TableComponentProps } from "./types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../dropdown-menu";
import { Button } from "../button";
import { MoreHorizontal } from "lucide-react";
import { Input } from "../input";


const TableComponent = <T,>({ columns, data, handleOpenModal }: TableComponentProps<T>) => {
    const [rename, setRename] = React.useState({
        mode: false,
        column: "",
    });
    return (
        <Table className="border-2 border-gray-200 rounded-lg">
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead key={String(column.id)} className=" border-r border-gray-300">
                            <div className="w-full justify-between flex items-center">
                                {
                                    rename.mode && rename.column === column.title ? (
                                        <Input
                                            type="text"
                                            className="border-2 border-gray-200 rounded-lg p-1 max-w-xs"
                                            value={column.title}
                                            onBlur={() => setRename({ mode: false, column: "" })}
                                            onChange={(event) => {
                                                console.log(event.target.value);
                                            }}
                                        />
                                    ) : <span>{column.title}</span>
                                }
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="bg-white">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                setRename({
                                                    mode: true,
                                                    column: column.title,
                                                })
                                            }
                                        >
                                            Rename
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={handleOpenModal}
                                        >Edit Configuration</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className={`${rowIndex != 0 && "border-t-2 border-dashed"} hover:bg-gray-200 cursor-pointer`}>
                            {columns.map((column) => (
                                <TableCell key={String(column.id)} className="border-r border-gray-300">
                                    {row[column.id] as React.ReactNode}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="text-center">
                            No data available.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default TableComponent;
