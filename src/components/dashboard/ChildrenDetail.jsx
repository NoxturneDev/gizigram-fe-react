import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Dialog} from "@radix-ui/react-dialog";
import {DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {FaPlus} from "react-icons/fa";
import axios from "axios";
import {useEffect, useState, useRef} from "react";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import "react-datepicker/dist/react-datepicker.css";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.jsx";
import {Chart, CategoryScale, registerables} from "chart.js";
import {Line} from "react-chartjs-2";
import {useToast} from "@/components/ui/use-toast.js";
import {useNavigate} from "react-router-dom";

Chart.register(...registerables);

function ChildrenDetail({childData}) {
  const [growthRecord, setGrowthRecord] = useState([]);

  const getGrowthRecord = async () => {
    try {
      const response = await axios.get(`http://103.176.78.114:8080/api/growth/${childData.ID}`);

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
    <Dialog className="flex max-w-5xl">
      <DialogTrigger asChild>
        <Button
          className="m-auto flex gap-4 justify-center items-center bg-primaryFigma text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
          type="submit">
          Detail
          <FaPlus/>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-start bg-white max-w-5xl max-h-full overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Data Anak</DialogTitle>
          <h3>Nama: {childData.name}</h3>
          <h3>Umur: {childData.age}</h3>
          <h3>Jenis Kelamin: {childData.gender === 1 ? 'Laki-laki' : 'Perempuan'}</h3>
          <h3>Tinggi badan (cm): {childData.height}</h3>
          <h3>Berat badan(kg): {childData.weight}</h3>
        </DialogHeader>
        <CreateNewGrowthRecord childId={childData.ID}/>
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
            {growthRecord && growthRecord.map((record) => (<TableRow key={record.ID}>
              <TableCell>{record.record_count}</TableCell>
              <TableCell>{record.height_before}</TableCell>
              <TableCell>{record.height_after}</TableCell>
              <TableCell>{record.weight_before}</TableCell>
              <TableCell>{record.weight_after}</TableCell>
              <TableCell>{record.added_height}</TableCell>
              <TableCell>{record.added_weight}</TableCell>
            </TableRow>))}
          </TableBody>
        </Table>
        <div className="w-full">
          <Line
            data={{
              type: 'line',
              labels: growthRecord.map((record) => record.record_count),
              datasets: [
                {
                  label: 'Tinggi Badan',
                  data: growthRecord.map((record) => record.added_height),
                  fill: false,
                  borderColor: 'red',
                },
                {
                  label: 'Berat Badan',
                  data: growthRecord.map((record) => record.added_weight),
                  fill: false,
                  borderColor: 'blue',
                },
              ],
            }}
          />
        </div>
      </DialogContent>
    </Dialog>)
}

function CreateNewGrowthRecord({childId}) {
  const {toast} = useToast();
  const navigate = useNavigate()
  const payload = {
    children_id: childId, weight_after: null, height_after: null, record_date: new Date(),
  }

  const [formPayload, setFormPaylaod] = useState(payload);
  const canvasRef = useRef(null)

  const handleFormChange = (e) => {
    const temp = {...formPayload};

    temp[e.target.id] = e.target.value;
    setFormPaylaod((prevState) => ({...prevState, ...temp}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formPayload,
        height_after: parseInt(formPayload.height_after),
        weight_after: parseInt(formPayload.weight_after),
      };

      const response = await axios.post("http://103.176.78.114:8080/api/growth-add", payload);

      if (response.data) {
        toast({
          variant: "success",
          title: "Success",
          description: "Data record pertumbuhan berhasil ditambahkan",
        });
      }
    } catch (error) {
      toast({
        title: "Destructive",
        description: error,
      });
    } finally {
      navigate(0)
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="m-auto flex gap-4 justify-center items-center bg-primaryFigma text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
          type="submit">
          Assessment
          <FaPlus/>
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
              <Input placeholder="height_after" id="height_after"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-2/6" htmlFor="height_after">
                Berat Badan Terbaru
              </Label>
              <Input placeholder="weight_after" id="weight_after"
                     className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`}/>
            </div>
          </div>
          <DialogFooter className="mt-5">
            <Button
              className="bg-primaryFigma w-full text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma"
              type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ChildrenDetail;
