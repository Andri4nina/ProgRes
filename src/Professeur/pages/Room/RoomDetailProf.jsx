import React from 'react'
import ProfRoomDetail from '../../../Etudiants/pages/Room/components/ProfRoomDetail'
import ProfCamEtu from '../../../Etudiants/pages/Room/components/ProfCamEtu'
import ListFolderRoomDetail from '../../../Etudiants/pages/Room/components/ListFolderRoomDetail'
import { BiTrash } from 'react-icons/bi'
import Swal from 'sweetalert2'

const RoomDetailProf = () => {

    const handleDelete = () => {
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: `Voulez-vous vraiment supprimer ce room?`,
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
                    `Suppresion du room effectuer.`,
                    'success'
                )
                // Ajoutez ici la logique pour annuler le transfert de fichier
            }
        })
    }

    return (
        <>
            <section className="lg:max-h-screen lg:h-screen w-full bg-slate-50 overflow-hidden">
                <div className="lg:flex justify-center items-center w-full h-full">
                    <div className="w-full lg:w-2/3 h-screen lg:h-full p-5"><ProfCamEtu /></div>
                    <div className="w-full lg:w-1/3 h-full grid grid-cols-1">
                        <div className='h-auto'><ProfRoomDetail /></div>
                        <div className='h-auto'><ListFolderRoomDetail /></div>
                        
                        
                        <div className='cursor-pointer flex justify-center items-center px-10 py-5 mx-2 mb-5 border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all' onClick={handleDelete}>
                            <BiTrash />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default RoomDetailProf