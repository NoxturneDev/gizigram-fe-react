import React from "react";
import Navigation from "./Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Profile() {
  return (
    <section className="font-poppins min-h-screen pt-10 pb-28">
      <Navigation />
      <div className="px-5">
        <div className="flex items-center mb-5 gap-x-6">
          <Avatar className="w-14 h-14">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-semibold">Notification</h1>
            <p>08118181818</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="bg-blue-100 px-5 py-6 rounded-xl">
            <div>
              <h1 className="text-2xl font-semibold">Terdaftar Di posyandu</h1>
              <p className="mt-2 indent-5 text-lg">Posyandu</p>
            </div>
            <div className="mt-7">
              <h1 className="text-2xl font-semibold">Kelurahan / Kecamatan</h1>
              <p className="mt-2 indent-5 text-lg">Nama kelurahan / Nama Kecamatan</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="text-2xl font-semibold">Data Anak</h1>
          <div className="bg-blue-100 px-5 py-6 rounded-xl mt-4">
            <div>
              <h1 className="text-2xl font-semibold">Terdaftar Di posyandu</h1>
              <p className="mt-2 indent-5 text-lg">Posyandu</p>
            </div>
            <div className="mt-7">
              <h1 className="text-2xl font-semibold">Kelurahan / Kecamatan</h1>
              <p className="mt-2 indent-5 text-lg">Nama kelurahan / Nama Kecamatan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
