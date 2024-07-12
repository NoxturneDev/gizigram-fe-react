import {RiArrowLeftSLine} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setPreviosProgress} from "../store/scannerSlice";
import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import Markdown from "react-markdown";

export default function ScannerRessult() {
  const {scanResultJson, scanResultString} = useSelector((state) => state.scanner);
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
        <img src="" alt=""/>
        <RiArrowLeftSLine onClick={handlePrevios} className="h-10 w-10 ml-1 mt-3 cursor-pointer"/>
      </div>
      <div className="py-4 px-6">
        <div className="">
          <h1 className="text-3xl font-semibold">Burger</h1>
          <div className="mt-8 group rounded-xl overflow-hidden">
            <CardItem kandungan={scanResultJson?.nutrition_fact?.calories}>Kalori 400</CardItem>
            <CardItem lightBlue kandungan={scanResultJson?.nutrition_fact?.carbohydrates}>karbohidrat </CardItem>
            <CardItem kandungan={scanResultJson?.nutrition_fact?.dat}>Lemak</CardItem>
            <CardItem lightBlue kandungan={scanResultJson?.nutrition_fact?.fiber}>Kalori 500</CardItem>
            <CardItem kandungan={scanResultJson?.nutrition_fact?.protein}>Protein 50gr</CardItem>
            <CardItem lightBlue kandungan={scanResultJson?.nutrition_fact?.sodium}>Sodium 8gr</CardItem>
          </div>
          <p className="mt-5 text-xl text-justify">
            <Markdown>
              Meskipun burger lezat dan bisa dinikmati sesekali sebagai makanan, penting untuk membatasi burger cepat
              saji
              dan olahan untuk anak-anak karena kandungan lemak jenuh, natrium, dan kalori yang tinggi. Secara teratur
              mengonsumsi makanan tersebut dapat berkontribusi pada penambahan berat badan dan masalah kesehatan
              lainnya.
              \\n\\nUntuk mendukung pertumbuhan dan perkembangan Galih dan mencegah stunting, prioritaskan pilihan
              makanan
              yang padat nutrisi dari berbagai kelompok makanan. \\n\\nBerikut adalah beberapa saran tentang apa yang
              dapat Anda tawarkan kepada Galih: \\n\\n* **Protein:** Sajikan berbagai sumber protein seperti ayam, ikan,
              telur, kacang-kacangan, lentil, tahu, dan tempe. \\n* **Karbohidrat Sehat:** Pilihlah karbohidrat kompleks
              seperti beras merah, nasi merah, quinoa, ubi jalar, dan roti gandum utuh. Karbohidrat ini menyediakan
              energi
              berkelanjutan dan serat. \\n* **Lemak Sehat:** Sertakan sumber lemak sehat seperti alpukat,
              kacang-kacangan,
              biji-bijian, dan minyak zaitun. Lemak ini mendukung perkembangan otak dan penyerapan vitamin. \\n* **Buah
              dan Sayuran:** Dorong Galih untuk mengonsumsi berbagai buah dan sayuran berwarna-warni. Sajikan sebagai
              makanan ringan, hidangan sampingan, atau masukkan ke dalam makanan favoritnya. \\n\\nBuatlah makanan dan
              camilan yang menarik dan menyenangkan bagi Galih untuk mendorong kebiasaan makan yang sehat. Misalnya,
              Anda
              dapat membuat kebab ayam dan sayuran, nasi goreng sayuran dengan telur, atau smoothie buah dengan yogurt
              dan
              bayam. \\n\\nPenting juga untuk berkonsultasi dengan ahli gizi atau ahli diet anak untuk saran nutrisi
              yang
              dipersonalisasi berdasarkan kebutuhan Galih yang spesifik.\",\n
            </Markdown>
          </p>
        </div>
      </div>
    </>
  );
}

function CardItem({children, kandungan, lightBlue}) {
  return (
    <div
      className={`flex flex-col font-poppins ${lightBlue ? "bg-secondaryFigma" : "bg-primaryFigma"} justify-between px-4 py-3`}>
      <h1 className="text-xl font-semibold mb-2">{children}</h1>
      <p>{kandungan}</p>
    </div>
  );
}

function ResepCard() {
  return (
    <div className="bg-slate-300 mt-7 px-6 py-5 rounded-xl">
      <h1 className="text-xl font-semibold mb-4">Cocok untuk anak pertama?</h1>
      <p></p>
      <div>
        <h1 className="text-xl font-semibold mt-4 mb-2">Saran alternatif makanan</h1>
        <ResepItem/>
        <ResepItem/>
        <ResepItem/>
        <ResepItem/>
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
