import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { setTabs } from "../store/dashboardSlice";

export default function Admin() {
  const currentTab = useSelector((state) => state.dashboard.tabs);

  return (
    <section className="h-screen font-poppins flex items-center justify-center">
      {currentTab == "home" && <DashboardHome />}
      {currentTab == "loginAdmin" && <DashboardLogin />}
    </section>
  );
}

function DashboardHome() {
  const dispatch = useDispatch();

  const handleSelectTabs = () => {
    dispatch(setTabs("loginAdmin"));
  };

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">
        Selamat Datang di <br /> <span className="text-primaryFigma">GiziGram</span>
      </h1>
      <p className="my-7 text-sm text-slate-400">Pastikan anda telah terdaftar di posyandu terdekat</p>
      <Button onClick={handleSelectTabs} className="bg-primaryFigma py-5 w-2/4 text-white font-semibold border border-primaryFigma hover:text-primaryFigma shadow-md shadow-secondaryFigma rounded-xl">
        Login
      </Button>
    </div>
  );
}

function DashboardLogin() {
  return (
    <div className="w-2/3">
      <h1 className="text-3xl text-primaryFigma font-semibold mb-7">Login Admin Posyandu</h1>
      <div className="flex items-center mb-7">
        <Label className="text-slate-500 mb-2 text-base w-1/2" htmlFor="instansi">
          Username Admin
        </Label>
        <Input placeholder="Masukan instansi anda" className={`rounded-full placeholder:text-slate-500 py-6 border-slate-300 bg-slate-100 px-5 w-full`} type="text" id="instansi" />
      </div>
      <div className="flex items-center mb-7">
        <Label className="text-slate-500 mb-2 text-base w-1/2" htmlFor="pass">
          Password
        </Label>
        <Input placeholder="Masukan instansi anda" className={`rounded-full placeholder:text-slate-500 py-6 border-slate-300 bg-slate-100 px-5 w-full`} type="Password" id="pass" />
      </div>
      <div className="text-end">
        <Button className="bg-primaryFigma w-2/3 py-6 rounded-xl border border-primaryFigma text-white font-semibold hover:text-primaryFigma shadow-md shadow-secondaryFigma">Login</Button>
      </div>
    </div>
  );
}
