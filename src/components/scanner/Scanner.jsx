import Navigation from "../pages/Navigation";
import ScannerInput from "./ScannerInput";
import ScannerRessult from "./ScannerRessult";

function Scanner() {
  return (
    <section className="flex h-screen pb-24 flex-col justify-center items-center">
      <Navigation />
      {/* <ScannerInput /> */}
      <ScannerRessult />
    </section>
  );
}

export default Scanner;
