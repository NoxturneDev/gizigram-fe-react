import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.jsx";

function ChildrenDetail({}) {
  const [childData, setChildData] = useState({
    ID: 1,
    name: "John Doe",
    age: 8,
    gender: 1,
    height: 130,
    weight: 35,
  });

  const [growthRecord, setGrowthRecord] = useState([
    {
      ID: 1,
      record_count: 1,
      height_before: 125,
      height_after: 130,
      weight_before: 33,
      weight_after: 35,
      added_height: 5,
      added_weight: 2,
    },
    {
      ID: 2,
      record_count: 2,
      height_before: 120,
      height_after: 125,
      weight_before: 30,
      weight_after: 33,
      added_height: 5,
      added_weight: 3,
    },
  ]);

  const getGrowthRecord = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/growth/${childData.ID}`);

      if (response.data && response.data.data.length !== 0) {
        setGrowthRecord(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (childData?.ID) {
      getGrowthRecord();
    }
  }, [childData]);

  return (
    <Dialog className="flex">
      <DialogTrigger asChild>
        <Button className="flex gap-4 justify-center items-center bg-primaryFigma text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma" type="submit">
          Detail
          <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className={`bg-white max-w-6xl font-poppins`}>
        <DialogHeader>
          <DialogTitle>Edit Data Anak</DialogTitle>
          <h3>Nama: {childData.name}</h3>
          <h3>Umur: {childData.age}</h3>
          <h3>Jenis Kelamin: {childData.gender === 1 ? "Laki-laki" : "Perempuan"}</h3>
          <h3>Tinggi badan (cm): {childData.height}</h3>
          <h3>Berat badan(kg): {childData.weight}</h3>
        </DialogHeader>
        <CreateNewGrowthRecord childId={childData.ID} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cek ke</TableHead>
              <TableHead>Tinggi sebelumnya</TableHead>
              <TableHead>Tinggi setelahnya</TableHead>
              <TableHead>Berat sebelumnya</TableHead>
              <TableHead>Berat setelahnya</TableHead>
              <TableHead>Perubahan Tinggi (cm)</TableHead>
              <TableHead>Perubahan Berat (kg)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {growthRecord &&
              growthRecord.map((record) => (
                <TableRow key={record.ID}>
                  <TableCell>{record.record_count}</TableCell>
                  <TableCell>{record.height_before}</TableCell>
                  <TableCell>{record.height_after}</TableCell>
                  <TableCell>{record.weight_before}</TableCell>
                  <TableCell>{record.weight_after}</TableCell>
                  <TableCell>{record.added_height}</TableCell>
                  <TableCell>{record.added_weight}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

function CreateNewGrowthRecord({ childId }) {
  const payload = {
    children_id: childId,
    weight_after: null,
    height_after: null,
    record_date: new Date(),
  };

  const [formPayload, setFormPaylaod] = useState(payload);

  const handleFormChange = (e) => {
    const temp = { ...formPayload };

    temp[e.target.id] = e.target.value;
    setFormPaylaod((prevState) => ({ ...prevState, ...temp }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formPayload,
        height_after: parseInt(formPayload.height_after),
        weight_after: parseInt(formPayload.weight_after),
      };

      const response = await axios.post("http://localhost:8080/api/growth-add", payload);

      if (response.data) {
        console.log(response.data);
      }
      console.log(formPayload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="m-auto flex gap-4 justify-center items-center bg-primaryFigma text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma" type="submit">
          Assessment
          <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white font-poppins">
        <DialogHeader>
          <DialogTitle>Cek Pertumbuhan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} onChange={handleFormChange}>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="height_after">
                Tinggi Badan Terbaru
              </Label>
              <Input placeholder="height_after" id="height_after" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="height_after">
                Berat Badan Terbaru
              </Label>
              <Input placeholder="weight_after" id="weight_after" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
            </div>
          </div>
          <DialogFooter className="mt-5">
            <Button className="bg-primaryFigma w-full text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default ChildrenDetail;
