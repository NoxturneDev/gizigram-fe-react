import { RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPreviosProgress } from "../store/scannerSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ScannerRessult() {
  const { scanResultJson, scanResultString } = useSelector((state) => state.scanner);
  const dispatch = useDispatch();

  const handlePrevios = () => {
    dispatch(setPreviosProgress());
  };

  useEffect(() => {
    console.log(scanResultJson);
  }, []);

  return (
    <>
      <div className="bg-slate-300 h-56">
        <img src="" alt="" />
        <RiArrowLeftSLine onClick={handlePrevios} className="h-10 w-10 ml-1 mt-3 cursor-pointer" />
      </div>
      <div className="py-4 px-6">
        <div className="">
          <h1 className="text-3xl font-semibold">Nasi Goreng</h1>
          <div className="mt-8 group rounded-xl overflow-hidden">
            <CardItem kandungan={scanResultJson?.nutrition_fact?.calories}>Kalori</CardItem>
            <CardItem lightBlue kandungan={scanResultJson?.nutrition_fact?.carbohydrates}>karbohidrat</CardItem>
            <CardItem kandungan={scanResultJson?.nutrition_fact?.dat}>Lemak</CardItem>
            <CardItem lightBlue kandungan={scanResultJson?.nutrition_fact?.fiber}>Serat</CardItem>
            <CardItem kandungan={scanResultJson?.nutrition_fact?.protein}>Protein</CardItem>
            <CardItem lightBlue kandungan={scanResultJson?.nutrition_fact?.sodium}>Sodium</CardItem>
            <CardItem kandungan={scanResultJson?.nutrition_fact?.vitamins_and_minerals}>Vitamin dan Mineral</CardItem>
          </div>
          <p className="mt-5 text-xl text-justify">{scanResultJson.advice}</p>
        </div>
        <ResepCard />
        <ResepCard />
      </div>
    </>
  );
}

function CardItem({ children, kandungan, lightBlue }) {
  return (
    <div className={`flex flex-col font-poppins ${lightBlue ? "bg-secondaryFigma" : "bg-primaryFigma" } justify-between px-4 py-3`}>
      <h1 className="text-xl font-semibold mb-2">{children}</h1>
      <p>{kandungan}</p>
    </div>
  );
}

function ResepCard() {
  return (
    <div className="bg-slate-300 mt-7 px-6 py-5 rounded-xl">
      <h1 className="text-xl font-semibold mb-4">Cocok untuk anak pertama?</h1>
      <p>tidak karena blablablabla vdsjnvuovovnfiosnvfovoeifnvfionf nvosndfvibsudvufdobvfovhiojvefif njodsn odfnoi ndfo ndfon odfindf njdfn jndfindfo nf don fdn fjnf jxn</p>
      <div>
        <h1 className="text-xl font-semibold mt-4 mb-2">Saran alternatif makanan</h1>
        <ResepItem />
        <ResepItem />
        <ResepItem />
        <ResepItem />
      </div>
    </div>
  );
}

function ResepItem() {
  return (
    <div className="flex justify-between py-2">
      <h1>Makanan a</h1>
      <Link className="cursor-pointer">Liat Resep</Link>
    </div>
  );
}
