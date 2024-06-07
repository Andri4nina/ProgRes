import { BiDownload, BiFile } from "react-icons/bi"


const ListFolderEtu = () => {
    return (
        <>
            <div className="relative z-20 w-full h-full bg-slate-200">
                <div className="absolute top-0 left-0 w-full">
                    <h3 className="text-center pt-5 font-semibold">Fichier partager</h3>
                </div>

                <div className="w-full h-full overflow-hidden mb-10">
                    <div className="h-full overflow-scroll mt-14 pb-10 folderShow">
                    
                        <div className="mx-4 py-4 flex justify-between items-center border-b-2 border-slate-400">
                            <div className="flex">
                                <div className="text-5xl">
                                    <BiFile />
                                </div>

                                <div className="flex flex-col">
                                    <div className="text-base font-semibold">PDF</div>
                                    <div className="text-sm text-slate-500 font-thin">5 ko</div>
                                </div>
                            </div>
                            <div className="text-2xl">
                                <BiDownload />
                            </div>

                        </div>

                    </div>
                
                </div>
                <div className="cursor-pointer bg-slate-100 absolute h-16 flex justify-center items-center bottom-0  left-0 w-full">
                    <h3 className="text-center font-semibold flex justify-between items-center gap-2">Tout Telecharger <BiDownload /></h3>
                </div>


            </div>
        </>
    )
}

export default ListFolderEtu