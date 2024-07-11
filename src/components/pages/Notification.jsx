import { useState } from "react";
import Navigation from "./Navigation";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function Notification() {
  return (
    <section className="font-poppins h-screen py-8">
      <Navigation />
      <div className="px-5">
        <div className="flex justify-between mb-5">
          <h1 className="text-xl font-semibold">Notification</h1>
          <p className="text-red-500">View All</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
    </section>
  );
}

function NotificationCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 py-4 flex flex-col gap-y-6 border border-slate-400 rounded-xl shadow-md">
      <div className={`flex items-center justify-between w-full ${isOpen ? "border-b border-black pb-3" : ""}`}>
        <div className="w-full">
          <h1>How to create an account</h1>
        </div>
        <div className="cursor-pointer">{isOpen ? <FaMinus onClick={handleCardOpen} className="h-5 w-5" /> : <FaPlus onClick={handleCardOpen} className="h-5 w-5" />}</div>
      </div>
      <div className={`${!isOpen ? "hidden" : ""}`}>
        <p>Open the tradebase app to get started and follow the step. Tradebase doesnt charge a fee to create or maintain your tradebase account</p>
      </div>
    </div>
  );
}
