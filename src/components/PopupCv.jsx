import React from "react";
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillEnvelopeAtFill} from 'react-icons/bs';
import {LiaPhoneVolumeSolid} from 'react-icons/lia'
import {IoIosClose} from 'react-icons/io';

const PopupCv = ({ datas, setShowPopUp, showPopUp }) => {
    console.log("datas::",datas)
  return (
    <div
      className=" bg-[rgba(0,0,0,0.6)]  grid w-full place-items-center h-screen fixed top-0 left-0 z-40 px-[5%]"
     
    >
      <div className=" w-full md:w-[38%] bg-white rounded-md shadow-md px-[2rem] py-10 relative card-user">
        <div className="p-3 text-center bg-slate-400 rounded-md relative backgound-img min-h-[13rem]">
            {datas.profile? <img src={datas?.profile} alt="profile-img" 
            className="w-[12rem] h-[12rem] rounded-full border-4 border-blue-500 mx-auto shadow-md absolute -bottom-10 left-[28%]" />:
            <img src="https://media.istockphoto.com/id/1416475042/photo/question-mark-design-hand-holding-note-paper-with-question-mark-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=fJABSQvpNGegavD81bLADxoJH7P0UV0WFmSRG5dAYE0=" alt="profile-img" 
            className="w-[12rem] h-[12rem] rounded-full border-4 border-blue-500 mx-auto shadow-md absolute -bottom-10 left-[28%]" />}
        </div>
         <div className=" text-center pb-10 pt-[3rem]">
              <h1 className=" font-medium text-3xl">{datas?.name}  {datas?.lastName}</h1>
             <p className=" text-base text-gray-500 mt-3">{datas?.description? datas?.description : "No bio"}</p>
         </div>
         <div className=" flex  gap-2 flex-col text-left">
             <div className=" text-base flex items-center gap-4"><span className=" text-lg bg-green-200 hover:bg-green-400 rounded-full p-4 duration-200 hover:text-white cursor-pointer hover:shadow-md"><LiaPhoneVolumeSolid /></span> {" "} {datas?.phoneNumber}</div>
             <div className=" text-base flex items-center gap-4"><span className=" text-lg bg-green-200 hover:bg-green-400 rounded-full p-4 duration-200 hover:text-white cursor-pointer hover:shadow-md"><BsFillEnvelopeAtFill/></span>{" "} {datas?.email}</div>
             <div className=" flex items-center gap-4 text-base"> <span className=" text-red-500  text-lg bg-green-200 hover:bg-green-400 rounded-full p-4 duration-200 hover:text-white cursor-pointer hover:shadow-md"><HiLocationMarker /></span><p>{datas?.village} {datas?.district} {datas?.province}</p>
         </div>
         </div>
         <div  onClick={() => setShowPopUp(false)}
         className=" absolute -top-2 -right-2 flex items-center justify-center cursor-pointer active:scale-105"><span className="text-[1.5rem] p-2 rounded-full bg-red-600 text-white"><IoIosClose/></span></div>
      </div>
    </div>
  );
};

export default PopupCv;
