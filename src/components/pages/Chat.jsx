import {useState} from "react";
import {CiSearch} from "react-icons/ci";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {IoMdSend} from "react-icons/io";
import Navigation from "./Navigation";
import axios from "axios"
import Markdown from "react-markdown";

function Chat() {
  const [chat, setChat] = useState([]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const messageText = e.target.text.value;
    console.log(messageText);

    // Append the new sender message to chat
    const newChat = [...chat, { sender: "sender", text: messageText }];
    setChat(newChat);
    // Clear the input field
    e.target.reset();

    // Call the API to get the response
    const response = await getChatResponse(messageText);

    // Append the new receiver message to chat
    setChat((prevChat) => [...prevChat, { sender: "receiver", text: response }]);
  };

  const getChatResponse = async (description) => {
    try {
      const res = await axios.post('http://localhost:8080/api/ai/recipe', {description});
      const temp = res.data.data[0].Content.Parts[0]
      return temp
    } catch (error) {
      console.error('Error fetching chat response:', error);
      return 'Sorry, something went wrong.';
    }
  };

  return (
    <>
      <section className="font-poppins">
        <Navigation/>
        <header
          className="flex px-5 z-20 bg-white py-4 fixed w-full items-center justify-between border-b border-black">
          <h1 className="font-semibold text-xl">Generator Resep</h1>
          <CiSearch className="text-2xl cursor-pointer"/>
        </header>
        <div className="min-h-screen py-20 px-5 flex flex-col gap-y-5">
          {chat && chat.map((item) => (
            <>
              <BubbleChat variant={item.sender} text={item.text}/>
            </>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <footer className="flex z-20 bg-white px-3 pb-3 fixed bottom-16 w-full items-center justify-between">
            <Input className="py-7 border-slate-400 rounded-full" name="text" id="text" placeholder="Type a message"/>
            <Button type="submit" className="absolute right-2 px-4 py-2 rounded-lg text-2xl">
              <IoMdSend/>
            </Button>
          </footer>
        </form>
      </section>
    </>
  );
}

function BubbleChat({variant, text}) {
  return (
    <>
      {variant == "sender" ? (
        <div className="flex gap-x-4 justify-end">
          <div className="bg-blue-500 rounded-t-xl rounded-bl-xl text-white p-3 rounded-lg">
            <Markdown>
              {text}
            </Markdown>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div className="flex gap-x-4 -z-10">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="bg-slate-500 rounded-t-xl rounded-br-xl text-white p-3 rounded-lg">
            <Markdown>
              {text}
            </Markdown>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
