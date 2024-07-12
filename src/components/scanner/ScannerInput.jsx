import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { setNextProgress, saveScanResult } from "../store/scannerSlice";
import { CiFileOn } from "react-icons/ci";
import { useRef, useState } from "react";
import axios from "axios";
import jsonData from "../../response.json";

function ScannerInput() {
  const dispatch = useDispatch();
  const imgPreviewRef = useRef(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageData = (e) => {
    imgPreviewRef.current.src = window.URL.createObjectURL(e.target.files[0]);
    setIsImageUploaded(true)
    const temp = JSON.parse(
      '                    "{\\n  \\"advice\\": \\"Sebagai ahli gizi, meskipun burger terlihat lezat dan bisa dinikmati sesekali sebagai makanan, burger ini bukan makanan yang ideal untuk pertumbuhan anak berusia 5 tahun. Mengonsumsi burger secara teratur dapat menyebabkan berbagai masalah kesehatan seperti obesitas, penyakit jantung, dan kekurangan gizi. \\\\n\\\\nBerikut adalah beberapa saran untuk memastikan Galih mendapatkan nutrisi yang cukup untuk pertumbuhan dan perkembangannya:\\\\n\\\\n* **Fokus pada makanan utuh:** Tawarkan beragam buah-buahan, sayuran, biji-bijian, protein tanpa lemak, dan produk susu sebagai bagian dari diet seimbang. \\\\n* **Batasi makanan olahan:** Minimalkan makanan olahan, makanan cepat saji, dan minuman manis karena tinggi kalori, gula tidak sehat, dan lemak tidak sehat, namun rendah nutrisi penting. \\\\n* **Masak lebih banyak makanan di rumah:** Ini memungkinkan Anda untuk mengontrol bahan dan metode memasak, memastikan makanan yang lebih sehat dan bergizi untuk Galih. \\\\n* **Jadikan waktu makan menyenangkan dan positif:** Ciptakan lingkungan yang menyenangkan dan positif selama waktu makan, hindari paksaan, dan dorong Galih untuk mengeksplorasi berbagai makanan sehat.\\\\n\\\\nIngatlah, pertumbuhan yang sehat membutuhkan pendekatan yang holistik, termasuk diet seimbang, olahraga teratur, dan tidur yang cukup. Jika Anda khawatir tentang pertumbuhan Galih atau memiliki pertanyaan lebih lanjut, konsultasikan dengan ahli kesehatan atau ahli diet terdaftar untuk mendapatkan panduan yang dipersonalisasi.\\",\\n  \\"nutrition_fact\\": {\\n    \\"calories\\": \\"Tinggi\\",\\n    \\"saturated_fat\\": \\"Tinggi\\",\\n    \\"sodium\\": \\"Tinggi\\",\\n    \\"fiber\\": \\"Rendah\\",\\n    \\"sugar\\": \\"Sedang\\",\\n    \\"protein\\": \\"Sedang\\"\\n  },\\n  \\"children_data\\": {\\n    \\"name\\": \\"Galih Adhi Kusuma\\",\\n    \\"age\\": 5\\n  }\\n}\\n"\n'
    );
    console.log(temp);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    // const file = e.target.file.files[0];

    // await handleFormData({file});
  };

  const handleFormData = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file);

    console.log(formData);
    try {
      // setTimeout(() => {
      //   setProgressStep(1);
      // }, 3000);
      // setLoading(true);
      const response = await axios.post("http://localhost:8080/api/ai/scanner", formData, {
        headers: { "Content-Type": "multipart/form-data," },
      });

      // console.log(jsonData);
      // if (data) {
      //   dispatch(saveScanResult(jsonData));
      // }
      console.log(response.data)
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
      handleNext();
    }
  };

  const handleNext = () => {
    dispatch(setNextProgress());
  };

  return (
    <div className="flex flex-col h-screen pb-24 w-full items-center justify-center">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-semibold">Scanner</h1>
      </div>
      <div className="w-72 bg-slate-200 rounded-xl">
        <div className="h-full">
          <form action="POST" onSubmit={handleUploadImage}>
            <Label className={`${isImageUploaded ? "hidden" : "flex flex-col gap-y-3 items-center justify-center h-full"} `} htmlFor="picture">
              <CiFileOn className={`${imgPreviewRef?.current?.src ? "hidden" : "block"} text-8xl text-slate-400`} />
              <span className="px-4 py-2 rounded-xl text-lg text-slate-400">Input Gmabar</span>
            </Label>
              <img ref={imgPreviewRef} alt="preview" />
            <Input className="h-full border-none hidden" name="file" id="picture" type="file" onChange={handleImageData} />
            <div className="mt-7 w-full">
              <Button onClick={handleFormData} className="w-full bg-cyan-600 border border-cyan-600 shadow text-white py-6 text-lg rounded-xl hover:text-black">
                Scan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ScannerInput;
