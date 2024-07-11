import { useSelector } from "react-redux";
import Navigation from "../pages/Navigation";
import ScannerInput from "./ScannerInput";
import ScannerRessult from "./ScannerRessult";
import { useEffect } from "react";

function Scanner() {
  const progressStep = useSelector((state) => state.scanner.scannerProgress)

  return (
    <section className="min-h-screen pb-20 font-poppins">
      <Navigation />
      {progressStep === 1 && <ScannerInput />}
      {progressStep === 2 && <ScannerRessult />}
    </section>
  );
}

export default Scanner;
