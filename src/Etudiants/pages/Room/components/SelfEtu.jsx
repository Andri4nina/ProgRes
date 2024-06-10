import { useState } from "react";
import { BiSolidHand, BiSolidLogOut, BiSolidMicrophone, BiSolidMicrophoneOff, BiSolidShareAlt } from "react-icons/bi"



const SelfEtu = () => {
    // État pour gérer l'icône du microphone
    const [isMicrophoneOn, setIsMicrophoneOn] = useState(true);

    // Fonction pour basculer l'état du microphone
    const toggleMicrophone = () => {
        setIsMicrophoneOn(prevState => !prevState);
    };

    return (
        <>
            <div className="bg-slate-200 w-full h-full rounded-lg">
                <div className="flex flex-col">
                    <div className="relative w-20 h-20 rounded-full mx-auto border-4 my-5 border-blue-400 ">
                        <div className="w-full h-full rounded-full overflow-hidden ">
                            <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                        </div>
                        <div className="absolute right-1 top-0 w-3 h-3 rounded-full bg-green-500">
                        </div>
                    </div>
                    <div><h3 className="text-center font-semibold text-slate-400">Blitatous (vous)</h3></div>
                    <div className="grid grid-cols-4 gap-2 my-2 w-10/12 mx-auto">
                        <div className="bg-slate-700 rounded-sm text-white flex items-center justify-center text-xl w-10 h-10 mx-auto cursor-pointer"><BiSolidHand /></div>
                        <div className="bg-slate-700 rounded-sm text-white flex items-center justify-center text-xl w-10 h-10 mx-auto cursor-pointer"><BiSolidShareAlt /></div>
                        <div onClick={toggleMicrophone} className="bg-slate-700 rounded-sm text-white flex items-center justify-center text-xl w-10 h-10 mx-auto cursor-pointer">
                            {isMicrophoneOn ? <BiSolidMicrophone /> : <BiSolidMicrophoneOff />}
                        </div>
                        <div className="bg-slate-700 rounded-sm text-white flex items-center justify-center text-xl w-10 h-10 mx-auto cursor-pointer"><BiSolidLogOut className="rotate-180"/></div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default SelfEtu