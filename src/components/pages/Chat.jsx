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
              Tentu, berikut adalah tiga resep sehat dan bergizi untuk anak Anda yang berusia 1-10 tahun:

              ### Resep 1: Mini Frittata Sayuran

              **Bahan-bahan:**
              - 6 butir telur
              - 1/4 cangkir susu
              - 1/2 cangkir paprika merah, hijau, atau kuning, dipotong dadu
              - 1/2 cangkir bayam bayi, dicincang
              - 1/4 cangkir keju cheddar parut
              - 1/4 cangkir tomat, dipotong dadu
              - Garam dan merica secukupnya
              - Minyak zaitun untuk mengolesi loyang muffin

              **Cara Memasak:**
              1. Panaskan oven hingga 180°C.
              2. Olesi loyang muffin dengan minyak zaitun.
              3. Kocok telur dan susu dalam mangkuk besar.
              4. Tambahkan paprika, bayam, keju, dan tomat ke dalam campuran telur. Aduk rata.
              5. Bumbui dengan garam dan merica.
              6. Tuang campuran telur ke dalam loyang muffin hingga sekitar 3/4 penuh.
              7. Panggang selama 15-20 menit atau sampai frittata mengembang dan matang.
              8. Biarkan dingin sebentar sebelum dikeluarkan dari loyang. Sajikan hangat.

              ### Resep 2: Bubur Ayam Sayuran

              **Bahan-bahan:**
              - 100 gram beras
              - 500 ml kaldu ayam
              - 100 gram daging ayam, dipotong kecil
              - 1 wortel, diparut
              - 1 kentang kecil, dipotong dadu
              - 1 cangkir bayam, dicincang
              - 1 bawang merah, cincang halus
              - 2 siung bawang putih, cincang halus
              - 1 sendok makan minyak zaitun
              - Garam secukupnya

              **Cara Memasak:**
              1. Panaskan minyak zaitun di dalam panci, tumis bawang merah dan bawang putih hingga harum.
              2. Tambahkan potongan ayam, masak hingga berubah warna.
              3. Masukkan beras dan aduk rata.
              4. Tuang kaldu ayam, masak hingga beras setengah matang.
              5. Tambahkan wortel, kentang, dan bayam. Aduk rata.
              6. Masak dengan api kecil hingga beras benar-benar matang dan tekstur menjadi bubur.
              7. Bumbui dengan garam sesuai selera.
              8. Sajikan hangat dengan taburan bawang goreng jika suka.

              ### Resep 3: Smoothie Buah dan Sayuran

              **Bahan-bahan:**
              - 1 pisang matang
              - 1/2 cangkir stroberi segar atau beku
              - 1/2 cangkir bayam bayi
              - 1/2 cangkir yogurt plain
              - 1/2 cangkir jus jeruk
              - 1 sendok makan madu (opsional)

              **Cara Memasak:**
              1. Masukkan semua bahan ke dalam blender.
              2. Blender hingga halus dan tercampur rata.
              3. Tuang smoothie ke dalam gelas dan sajikan segera.

              Semoga resep-resep ini dapat membantu dalam memberikan makanan yang sehat dan bergizi untuk anak Anda!
            </Markdown>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
