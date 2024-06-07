import Loader from "../../../component/Loader"
import "./ProfCamEtu.css"

const ProfCamEtu = () => {
    return (
        <>
            <div className="w-full bg-slate-100 h-full p-5">
                <div className="w-full h-full relative rounded-md">
                    <Loader />

                    <div className="absolute w-28 top-0 left-0 bg-slate-800 rounded-3xl opacity-45 px-2 py-1">
                        <div className="flex justify-around items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full">
                            </div>
                            <div className="text-white">En ligne </div>
                        </div>
                    </div> 
                    <div className="absolute w-28 top-0 left-0 bg-slate-800 rounded-3xl opacity-45 px-2 py-1">
                        <div className="flex justify-around items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full">
                            </div>
                            <div className="text-white">En ligne </div>
                        </div>
                    </div>

                    <div className="cursor-pointer absolute bottom-0 right-0 w-6 h-6 ">
                        <div className="w-full h-full relative screensize">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfCamEtu