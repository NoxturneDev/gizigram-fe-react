import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-7">
      <h1 className="text-4xl mb-5">Login</h1>
      <form action="" className="w-full">
        <div className="w-full mb-8">
          <Label className="text-lg" htmlFor="picture">
            No Telp
          </Label>
          <Input placeholder="Masukan No telp" className={`rounded-xl py-6 mt-3`} id="picture" type="text" />
        </div>
        <div className="w-full mb-8">
          <Label className="text-lg" htmlFor="pass">
            Password
          </Label>
          <Input placeholder="Masukan Password" className={`rounded-xl py-6 mt-3`} id="pass" type="password" />
        </div>
        <div className="w-full">
          <Link to="/scanner">
            <Button className="bg-slate-200 w-full py-5 rounded-xl">Login</Button>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
