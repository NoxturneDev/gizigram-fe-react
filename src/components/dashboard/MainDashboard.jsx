import {useEffect, useState} from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import DashboardHeader from "./DashboardHeader";
import {FaUsers} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import {FaPlus} from "react-icons/fa";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import axios from "axios";

export default function MainDashboard() {
  const [parentTableData, setParentTableData] = useState([])
  const [childTableData, setChildTableData] = useState([])

  const getParentTableData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/parents')

      if (response.data) {
        console.log(response.data.data)
        setParentTableData(response.data.data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const getChildTableData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/childrens')

      if (response.data) {
        console.log(response.data.data)
        setChildTableData(response.data.data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getParentTableData()
    getChildTableData()
  }, []);

  return <section className="h-screen font-poppins">
    <DashboardHeader/>
    <Tabs defaultValue="parents" className="w-full px-16 py-24">
      <TabsList className="w-full mb-16 mt-6 flex gap-x-5">
        <TabsTrigger className="w-full border border-slate-400 py-6" value="childrens">
          <div className="flex items-center gap-x-5">
            <div
              className={`bg-slate-300 h-14 w-14 flex items-center ${true ? "rounded-lg" : "rounded"} justify-center rounded-xl text-2xl`}>
              <FaUsers/>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-xl font-semibold">Anak-anak</h1>
              <p className="text-start text-lg">100</p>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger className="w-full border border-slate-400 py-6" value="parents">
          <div className="flex items-center gap-x-5">
            <div
              className={`bg-slate-300 h-14 w-14 flex items-center ${true ? "rounded-lg" : "rounded"} justify-center rounded-xl text-2xl`}>
              <FaUser/>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-xl font-semibold">Orang Tua</h1>
              <p className="text-start text-lg">86</p>
            </div>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="childrens">
        <div className="flex mb-5">
          <div className="w-full">
            <h1 className="font-semibold text-slate-400">Data Anak</h1>
          </div>
          <div className="w-full relative">
            <CiSearch className="absolute text-xl right-3 top-2 text-black"/>
            <Input className="rounded-full border-slate-400" placeholder="Search"/>
          </div>
          <div className="w-full text-end">
            <Button>
              <FaPlus/>
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
            {childTableData && childTableData.map((child) => (
              <TableRow>
                <TableCell>{child.name}</TableCell>
                <TableCell>{child.name}</TableCell>
                <TableCell>{child.age} Tahun</TableCell>
                <TableCell>{child.gender === 1 ? 'Laki-laki' : 'Perempuan'}</TableCell>
                <TableCell>{child.weight}</TableCell>
                <TableCell>{child.height}</TableCell>
                <TableCell>Normal</TableCell>
                <TableActionButton/>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="parents">
        <div className="flex mb-5">
          <div className="w-full">
            <h1 className="font-semibold text-slate-400">Data Orang Tua</h1>
          </div>
          <div className="w-full relative">
            <CiSearch className="absolute text-xl right-3 top-2 text-black"/>
            <Input className="rounded-full border-slate-400" placeholder="Search"/>
          </div>
          <div className="w-full text-end">
            <CreateNewParentFormDialog />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Orang Tua</TableHead>
              <TableHead>Alamat</TableHead>
              <TableHead>Jenis Kelamin (p / l) </TableHead>
              <TableHead>Tinggi Badan (cm)</TableHead>
              <TableHead>Edit Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parentTableData && parentTableData.map((parent) => (
              <TableRow>
                <TableCell>{parent.name}</TableCell>
                <TableCell>{parent.address}</TableCell>
                <TableCell>{parent.gender === 1 ? 'Laki-laki' : 'Perempuan'}</TableCell>
                <TableCell>{parent.height}</TableCell>
                <TableActionButton/>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  </section>;
}

function CreateNewParentFormDialog() {
  const payload = {
    name: '',
    phone_number: '',
    address: '',
    height: 0,
    gender: 1,
  }

  const [formPayload, setFormPaylaod] = useState(payload);

  const handleFormChange = (e) => {
    const temp = {...formPayload}

    temp[e.target.id] = e.target.value
    setFormPaylaod((prevState) => ({...prevState, ...temp}))
  }

  const handleSubmitParent = async (e) => {
    e.preventDefault()

    try {
      const payload = {
         ...formPayload,
        height: parseInt(formPayload.height),
        gender: parseInt(formPayload.gender),
      }

      const response = await axios.post('http://localhost:8080/api/parent/create', payload)

      if (response.data) {
        console.log(response.data)
      }
      console.log(formPayload)
    } catch(error) {
      console.error(error);
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FaPlus/>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <form onSubmit={handleSubmitParent} onChange={handleFormChange}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nama Lengkap
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone_number" className="text-right">
                No Handphone
              </Label>
              <Input id="phone_number" defaultValue="phone_number" className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Alamat
              </Label>
              <Input id="address" defaultValue="address" className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="height" className="text-right">
                Tinggi Badan
              </Label>
              <Input type="number" id="height" defaultValue="height" className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gender" className="text-right">
                Gender
              </Label>
              <Input type="number" id="gender" defaultValue="gender" className="col-span-3"/>
            </div>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function TableActionButton() {
  return (
    <TableCell className="flex gap-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`bg-blue-500 flex ${true ? "rounded" : "rounded-md"} items-center gap-x-1 text-white px-3 py-2`}>
            <FaEdit/> <span>Edit</span>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3"/>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`bg-red-500 flex ${true ? "rounded" : "rounded-md"} items-center gap-x-1 text-white px-3 py-2`}>
            <FaTrashAlt/> <span>Delete</span>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3"/>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TableCell>
  );
}
