import { Input } from "@/components/ui/input";
import { ColumnConfigurationProps } from "./types";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Button } from "@/components/ui/button";

const dataTypes: {
    id: string;
    value: string;
    label: string;
}[] = [
        {
            id: 'string',
            value: 'string',
            label: 'String',
        },
        {
            id: 'number',
            value: 'number',
            label: 'Number',
        },
        {
            id: 'date',
            value: 'date',
            label: 'Date',
        },
        {
            id: 'boolean',
            value: 'boolean',
            label: 'Boolean',
        },
    ];

const ColumnConfiguration = <T,>({ columns }: ColumnConfigurationProps<T>) => {
    console.log(columns);
    const [columnConfigs, setColumnConfig] = React.useState([
        {
            title: 'Enterprise',
            dataType: 'string',
        },
        {
            title: 'Item',
            dataType: 'string',
        },
        {
            title: 'Item Code',
            dataType: 'string',
        },
        {
            title: 'Quantity',
            dataType: 'number',
        },
    ]);

    const handleChange = (id: string, dataType: { id: string; value: string; label: string; }) => {
        setColumnConfig((prev) => {
            const index = prev.findIndex((column) => column.title === id);
            const column = prev[index];
            column.dataType = dataType.value;
            prev[index] = column;
            return [...prev];
        });
    }

    const handleAddColumn = () => {
        setColumnConfig((prev) => {
            return [...prev, {
                title: '',
                dataType: 'string',
            }];
        });
    }

    return (
        <div className="flex gap-5 flex-col py-5 justify-between">
            {columnConfigs.map((column, index) => (
                <div className="flex flex-row justify-between items-center gap-5">
                    <Input key={index} value={column.title} />
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="String" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            {
                                dataTypes.map((dataType) => (
                                    <SelectItem key={dataType.id} value={dataType.value} onClick={() => handleChange(column.title, dataType)}>{dataType.label}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
            ))}
            <div className="flex justify-start items-center rounded-lg">
                <Button variant={'secondary'} className="border border-gray-400 w-1/3" onClick={handleAddColumn}>Add Column</Button>
            </div>
            <div className="flex justify-end items-center rounded-lg">
                <Button variant={'secondary'} className="bg-black text-white hover:bg-gray-700" onClick={() => console.log('save')}>Save</Button>
            </div>
        </div>
    )
};

export default ColumnConfiguration;