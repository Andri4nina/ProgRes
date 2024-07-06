import React from 'react'
import { BiFile, BiTrash } from 'react-icons/bi'
import Swal from 'sweetalert2'
import "./ListFolderProf.css"

const ListFolderProf = () => {

    const handleCancelTransfer = (fileName) => {
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: `Voulez-vous vraiment annuler le transfert du fichier ${fileName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, annulez-le!',
            cancelButtonText: 'Non, garder'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Annulé!',
                    `Le transfert du fichier ${fileName} a été annulé.`,
                    'success'
                )
                // Ajoutez ici la logique pour annuler le transfert de fichier
            }
        })
    }

    return (
        <>
            <div className='overflow-hidden h-[300px] sm:h-full'>
                <div className='overflow-y-scroll h-full min-h-[80px] pb-20 grid grid-cols-1 sm:grid-cols-3 folder'>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                    <div className="mx-1 py-1 h-20 flex justify-between items-center border-b-2 border-slate-400">
                        <div className="flex">
                            <div className="text-5xl">
                                <BiFile />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base font-semibold">PDF</div>
                                <div className="text-sm text-slate-500 font-thin">5 ko</div>
                            </div>
                        </div>
                        <div className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => handleCancelTransfer('PDF')}>
                            <BiTrash />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListFolderProf
