import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FormDashbboard() {
  return (
    <DialogContent className="bg-white font-poppins">
      <DialogHeader>
        <DialogTitle>Edit Data Anak</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-10">
          <Label htmlFor="name">Jenis Kelamin</Label>
          <RadioGroup className="flex gap-x-5 mt-3 justify-start" defaultValue="Ya">
            <div className={`flex items-center rounded-full gap-x-3 bg-secondaryFigma justify-center px-3 w-full`}>
              <RadioGroupItem value="Laki" id="r1" />
              <Label htmlFor="r1">
                Laki-Laki
              </Label>
            </div>
            <div className={`flex items-center rounded-full gap-x-3 bg-secondaryFigma justify-center px-3 py-1 w-full`}>
              <RadioGroupItem value="Perempuan" id="r2" />
              <Label htmlFor="r2">
                Perempuan
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-2/6" htmlFor="full-name">Nama Lengkap</Label>
          <Input placeholder="Masukan Nama Lengkap" id="full-name" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-2/6" htmlFor="tl">Tanggal Lahir</Label>
          <Input placeholder="contoh: 2005/08/02" id="tl" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-2/6" htmlFor="nik">NIK</Label>
          <Input placeholder="Masukan NIK" type="number" id="nik" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-2/6" htmlFor="tb">Tinggi Badan</Label>
          <Input placeholder="contoh: 170cm" id="tb" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-2/6" htmlFor="bb">Berat Badan</Label>
          <Input placeholder="contoh: 65kg" id="bb" className={`w-full border-slate-400 rounded-full placeholder:text-slate-400`} />
        </div>
      </div>
      <DialogFooter>
        <Button className="bg-primaryFigma w-full text-white border border-primaryFigma hover:text-primaryFigma rounded-full shadow-md shadow-secondaryFigma" type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default FormDashbboard;
