import * as React from "react";
import { Input } from "@/components/ui/input";
import { AppBar } from "../AppBar";
import { TableComponent } from "../ui/Table";
import { Modal } from "../ui/Modal";
import { ColumnConfiguration } from "./components";
import { FaRegFileAlt } from 'react-icons/fa';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
console.log("socket", socket);
const Purchases = () => {
    const [searchVal, setSearchVal] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const [showReportModal, setShowReportModal] = React.useState(false);

    const purchasesColumns: {
        id: "enterprise" | "item" | "itemCode" | "quantity";
        title: string;
    }[] = [
            { id: "enterprise", title: "Enterprise" },
            { id: "item", title: "Item" },
            { id: "itemCode", title: "Item Code" },
            { id: "quantity", title: "Quantity" },
        ]

    const purchasesData: {
        enterprise: string;
        item: string;
        itemCode: string;
        quantity: number;
    }[] = [
            {
                enterprise: "Acme Corp",
                item: "ACME-100",
                itemCode: "ACME-100",
                quantity: 10,
            },
            {
                enterprise: "Acme Corp",
                item: "ACME-100",
                itemCode: "ACME-100",
                quantity: 10,
            },
            {
                enterprise: "Acme Corp",
                item: "ACME-100",
                itemCode: "ACME-100",
                quantity: 10,
            },
            {
                enterprise: "Acme Corp",
                item: "ACME-100",
                itemCode: "ACME-100",
                quantity: 10,
            },
        ]

    return (
        <>
            <div className="w-full px-5">
                <AppBar
                    title="Purchases"
                    description="View all purchases"
                    buttons={[
                        {
                            title: 'Report',
                            onClick: () => setShowReportModal(!showReportModal),
                            icon: <FaRegFileAlt />
                        },
                    ]}
                />
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter emails..."
                        value={searchVal}
                        onChange={(event) => setSearchVal(event.target.value)}
                        className="max-w-sm"
                    />
                </div>
                <div className="rounded-md border">
                    <TableComponent columns={purchasesColumns} data={purchasesData} handleOpenModal={() => setOpenModal(!openModal)} />
                </div>
            </div>
            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Edit Table Configuration"
            >
                <ColumnConfiguration columns={purchasesColumns} />
            </Modal>
            <Modal
                isOpen={showReportModal}
                onClose={() => setShowReportModal(false)}
                title="Report"
            >
                <div>
                <div className="py-5 justify-between flex items-center flex-row">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Enterprise" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="enterprise">Enterprise</SelectItem>
                            <SelectItem value="item">Item</SelectItem>
                            <SelectItem value="itemCode">Item Code</SelectItem>
                            <SelectItem value="quantity">Quantity</SelectItem>
                        </SelectContent>
                    </Select>
                    <MoreVertical />
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="value" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="max">Maximum</SelectItem>
                            <SelectItem value="min">Minimum</SelectItem>
                            <SelectItem value="avg">Average</SelectItem>
                            <SelectItem value="sum">Sum</SelectItem>
                            <SelectItem value="count">Count</SelectItem>
                            <SelectItem value="distinct">Distinct</SelectItem>
                        </SelectContent>
                    </Select>
                    <MoreVertical />
                    <div className="border border-black px-5 justify-center items-center rounded-md flex py-1">
                        49
                    </div>
                    </div>
                    <div className="flex justify-start items-center rounded-lg">
                        <Button variant={'secondary'} className="border border-gray-400" onClick={() => console.log('')}>Add</Button>
                    </div>
                    <div className="flex justify-end items-center rounded-lg">
                        <Button variant={'secondary'} className="bg-black text-white hover:bg-gray-700" onClick={() => console.log('Download')}>Download</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Purchases;
