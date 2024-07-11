import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function ScannerInput() {
  return (
    <div className="">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-semibold">Scanner</h1>
      </div>
      <div className="h-72 w-72 bg-slate-200 rounded-xl">
        <div className="h-full">
          <Label className="flex items-center justify-center h-full" htmlFor="picture">
            <span className="bg-white px-4 py-2 rounded-xl">Input Gmabar</span>
          </Label>
          <Input className="h-full border-none hidden" id="picture" type="file" />
        </div>
      </div>
      <div className="mt-5">
        <Button className="w-full bg-slate-700 text-white py-6 text-lg rounded-xl hover:text-black">Scan</Button>
      </div>
    </div>
  );
}

export default ScannerInput;
