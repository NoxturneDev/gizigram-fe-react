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
import {Button} from "@/components/ui/button";
import axios from "axios";
import FormDashbboard from "./FormDashbboard";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.jsx";
import Select from "react-select";
import DatePicker from "react-datepicker";
import {Link} from "react-router-dom";
import ChildrenDetail from "./ChildrenDetail";

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
            <CreateNewChildrenFormDialog />
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
                <TableCell>{child.parent.name}</TableCell>
                <TableCell>{child.age} Tahun</TableCell>
                <TableCell>{child.gender === 1 ? 'Laki-laki' : 'Perempuan'}</TableCell>
                <TableCell>{child.weight}</TableCell>
                <TableCell>{child.height}</TableCell>
                <TableCell>Normal</TableCell>
                <ChildrenDetail childData={child}/>
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
            <CreateNewParentFormDialog/>
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
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="m-auto flex gap-4 justify-center items-center bg-primaryFigma text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
          type="submit">
          Orang tua
          <FaPlus/>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white font-poppins">
        <DialogHeader>
          <DialogTitle>Edit Data Anak</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmitParent} onChange={handleFormChange}>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="name">Nama Lengkap</Label>
              <Input placeholder="Masukan Nama Lengkap" id="name"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="phone_number">No Handphone</Label>
              <Input placeholder="Masukan No. Handphone" id="phone_number"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="nik">NIK</Label>
              <Input placeholder="NIK" id="nik"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="address">Alamat</Label>
              <Input placeholder="Alamat..." id="address"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="height">Tinggi Badan</Label>
              <Input placeholder="height" id="height"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-x-10 mx-5">
              <Label htmlFor="name">Jenis Kelamin</Label>
              <RadioGroup className="flex gap-x-5 mt-3 justify-start" defaultValue="Ya">
                <div className={`flex items-center rounded-full gap-x-3 bg-secondaryFigma justify-center px-3 w-full`}>
                  <RadioGroupItem value="1" id="r1"/>
                  <Label htmlFor="r1">
                    Laki-Laki
                  </Label>
                </div>
                <div
                  className={`flex items-center rounded-full gap-x-3 bg-secondaryFigma justify-center px-3 py-1 w-full`}>
                  <RadioGroupItem value="2" id="r2"/>
                  <Label htmlFor="r2">
                    Perempuan
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter className="mt-5">
            <Button type="submit"
                    className="bg-primaryFigma w-full text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
                    type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function CreateNewChildrenFormDialog() {
  const payload = {
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    birth_date: new Date(),
    gender: null,
    parent_id: null,
  }

  const [formPayload, setFormPaylaod] = useState(payload);
  const [parentOptions, setParentOptions] = useState([]);

  const getParentOptions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/parent-options')

      if (response.data) {
        const options = response.data.data.map((parent) => ({
          value: parent.value,
          label: parent.label
        }))

        setParentOptions(options)
      }
    } catch(err) {
      console.error(err)
    }
  }

  const handleChangeParentOption = (e) => {
    const temp = {...formPayload}
    temp.parent_id = e.value
    setFormPaylaod(temp);
  }

  const handleFormChange = (e) => {
    e.preventDefault()
    const temp = {...formPayload}

    temp[e.target.id] = e.target.value
    setFormPaylaod((prevState) => ({...prevState, ...temp}))
  }

  const handleSubmitChildren = async (e) => {
    e.preventDefault()

    try {
      const payload = {
        ...formPayload,
        age: parseInt(formPayload.age),
        height: parseInt(formPayload.height),
        weight: parseInt(formPayload.weight),
        gender: parseInt(formPayload.gender),
      }

      const response = await axios.post('http://localhost:8080/api/children/create', payload)

      if (response.data) {
        console.log(response.data)
      }
      console.log(formPayload)
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    getParentOptions()
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="m-auto flex gap-4 justify-center items-center bg-primaryFigma text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
          type="submit">
          Anak-anak
          <FaPlus/>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white font-poppins">
        <DialogHeader>
          <DialogTitle>Edit Data Anak</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmitChildren} onChange={handleFormChange}>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="name">Orang tua</Label>
              <Select options={parentOptions} onChange={handleChangeParentOption} />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="name">Nama Lengkap</Label>
              <Input placeholder="Masukan Nama Lengkap" id="name"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="age">Umur</Label>
              <Input placeholder="Umur" id="umur"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="age">Berat badan (Kg)</Label>
              <Input placeholder="20kg" id="weight"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="height">Tinggi badan (cm)</Label>
              <Input placeholder="160cm" id="height"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="birth_date">Tanggal Lahir</Label>
              <DatePicker
                selected={formPayload.birth_date}
                onChange={handleFormChange}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="flex items-center gap-x-10 mx-5">
              <Label htmlFor="name">Jenis Kelamin</Label>
              <RadioGroup className="flex gap-x-5 mt-3 justify-start" defaultValue="Ya">
                <div className={`flex items-center rounded-full gap-x-3 bg-secondaryFigma justify-center px-3 w-full`}>
                  <RadioGroupItem value="1" id="r1"/>
                  <Label htmlFor="r1">
                    Laki-Laki
                  </Label>
                </div>
                <div
                  className={`flex items-center rounded-full gap-x-3 bg-secondaryFigma justify-center px-3 py-1 w-full`}>
                  <RadioGroupItem value="2" id="r2"/>
                  <Label htmlFor="r2">
                    Perempuan
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter className="mt-5">
            <Button type="submit"
                    className="bg-primaryFigma w-full text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
                    type="submit">Save changes</Button>
          </DialogFooter>
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
            className={`bg-red-500 flex ${true ? "rounded" : "rounded-md"} items-center gap-x-1 text-white px-3 py-2`}>
            <FaTrashAlt/> <span>Delete</span>
          </button>
        </DialogTrigger>
        <FormDashbboard/>
      </Dialog>
    </TableCell>
  );
}
