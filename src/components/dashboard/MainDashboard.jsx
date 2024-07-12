import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardHeader from "./DashboardHeader";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import FormDashbboard from "./FormDashbboard";

export default function MainDashboard() {
  return (
    <section className="h-screen font-poppins">
      <DashboardHeader />
      <Tabs defaultValue="account" className="w-full px-16 py-24">
        <TabsList className="w-full mb-16 mt-6 flex gap-x-5">
          <TabsTrigger className="w-full border border-slate-400 py-6" value="account">
            <div className="flex items-center gap-x-5">
              <div className={`bg-slate-300 h-14 w-14 flex items-center ${true ? "rounded-lg" : "rounded"} justify-center rounded-xl text-2xl`}>
                <FaUsers />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-xl font-semibold">Total anak</h1>
                <p className="text-start text-lg">100</p>
              </div>
            </div>
          </TabsTrigger>
          <TabsTrigger className="w-full border border-slate-400 py-6" value="password">
            <div className="flex items-center gap-x-5">
              <div className={`bg-slate-300 h-14 w-14 flex items-center ${true ? "rounded-lg" : "rounded"} justify-center rounded-xl text-2xl`}>
                <FaUser />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-xl font-semibold">Total User</h1>
                <p className="text-start text-lg">86</p>
              </div>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex mb-5">
            <div className="w-full">
              <h1 className="font-semibold text-slate-400">Data Anak</h1>
            </div>
            <div className="w-full relative">
              <CiSearch className="absolute text-xl right-3 top-2 text-black" />
              <Input className="rounded-full border-slate-400" placeholder="Search" />
            </div>
            <div className="w-full text-end">
              <Button>
                <FaPlus />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Anak</TableHead>
                <TableHead>Nama Orang Tua</TableHead>
                <TableHead>Umur Anak</TableHead>
                <TableHead>Jenis Kelamin (p / l) </TableHead>
                <TableHead>Tinggi Badan (cm)</TableHead>
                <TableHead>Berat Badan (kg)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Edit Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Asep</TableCell>
                <TableCell>Ujang</TableCell>
                <TableCell>1 thn 2 bln</TableCell>
                <TableCell>l</TableCell>
                <TableCell>xx</TableCell>
                <TableCell>xx</TableCell>
                <TableCell>Normal</TableCell>
                <TableActionButton />
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="password">
          <div className="flex mb-5">
            <div className="w-full">
              <h1 className="font-semibold text-slate-400">Data Orang Tua</h1>
            </div>
            <div className="w-full relative">
              <CiSearch className="absolute text-xl right-3 top-2 text-black" />
              <Input className="rounded-full border-slate-400" placeholder="Search" />
            </div>
            <div className="w-full text-end">
              <Button>
                <FaPlus />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Orang Tua</TableHead>
                <TableHead>Jumlah Anak</TableHead>
                <TableHead>Alamat</TableHead>
                <TableHead>Jenis Kelamin (p / l) </TableHead>
                <TableHead>Tinggi Badan (cm)</TableHead>
                <TableHead>Berat Badan (kg)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Edit Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Asep</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Jl Manja</TableCell>
                <TableCell>l</TableCell>
                <TableCell>xx</TableCell>
                <TableCell>xx</TableCell>
                <TableCell>Normal</TableCell>
                <TableActionButton />
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function TableActionButton() {
  return (
    <TableCell className="flex gap-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <button className={`bg-blue-500 flex ${true ? "rounded" : "rounded-md"} items-center gap-x-1 text-white px-3 py-2`}>
            <FaEdit /> <span>Edit</span>
          </button>
        </DialogTrigger>
        <FormDashbboard />
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <button className={`bg-red-500 flex ${true ? "rounded" : "rounded-md"} items-center gap-x-1 text-white px-3 py-2`}>
            <FaTrashAlt /> <span>Dellete</span>
          </button>
        </DialogTrigger>
        <FormDashbboard />
      </Dialog>
    </TableCell>
  );
}
