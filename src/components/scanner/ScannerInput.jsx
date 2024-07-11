import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { setNextProgress } from "../store/scannerSlice";

function ScannerInput() {
  
  const dispatch = useDispatch();  

  const handleNext = () => {
    dispatch(setNextProgress());
  }

  return (
    <div className="flex flex-col h-screen pb-24 w-full items-center justify-center">
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
        <div className="mt-5 w-full">
          <Button onClick={handleNext} className="w-full bg-slate-700 text-white py-6 text-lg rounded-xl hover:text-black">Scan</Button>
        </div>
      </div>
    </div>
  );
}

export default ScannerInput;
