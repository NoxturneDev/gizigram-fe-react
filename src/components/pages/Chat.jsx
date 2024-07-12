import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdSend } from "react-icons/io";
import Navigation from "./Navigation";

function Chat() {
  return (
    <>
      <section className="font-poppins">
        <Navigation />
        <header className="flex px-5 z-20 bg-white py-4 fixed w-full items-center justify-between border-b border-black">
          <h1 className="font-semibold text-xl">Generator Resep</h1>
          <CiSearch className="text-2xl cursor-pointer" />
        </header>
        <div className="min-h-screen py-20 px-5 flex flex-col gap-y-5">
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
          <BubbleChat variant={"sender"} />
          <BubbleChat variant={"receiver"} />
        </div>
        <footer className="flex z-20 bg-white px-3 pb-3 fixed bottom-16 w-full items-center justify-between">
          <Input className="py-7 border-slate-400 rounded-full" placeholder="Type a message" />
          <Button className="absolute right-2 px-4 py-2 rounded-lg text-2xl">
            <IoMdSend />
          </Button>
        </footer>
      </section>
    </>
  );
}

function BubbleChat({ variant }) {
  return (
    <>
      {variant == "sender" ? (
        <div className="flex gap-x-4 justify-end">
          <div className="bg-blue-500 rounded-t-xl rounded-bl-xl text-white p-3 rounded-lg">
            <p>Hi, apa kabar?</p>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div className="flex gap-x-4 -z-10">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="bg-slate-500 rounded-t-xl rounded-br-xl text-white p-3 rounded-lg">
            <p>baik</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
