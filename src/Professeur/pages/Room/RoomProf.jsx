import React, { useState } from 'react'
import ProfCamPrincipal from './components/ProfCamPrincipal'
import CardEtu from '../../../Etudiants/pages/Room/components/CardEtu'
import ListConProf from './components/ListConProf'
import MessageProf from './components/MessageProf'
import AddFolder from './components/AddFolder'
import ListFolderProf from './components/ListFolderProf'

const RoomProf = () => {
    // État pour gérer l'affichage du panneau des messages
    const [isMessagePanelOpen, setIsMessagePanelOpen] = useState(false);

    // Fonction pour basculer l'affichage du panneau des messages
    const toggleMessagePanel = () => {
        setIsMessagePanelOpen(prevState => !prevState);
    };


    return (
        <section className="h-screen w-full bg-slate-50 overflow-x-hidden">
            <div className="relative flex gap-1 h-full w-full">
                <div className=" gap-1 w-full lg:w-8/12 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full mb-2">
                        
                        <div className=" ">
                            <div className="relative h-screen lg:h-4/6 w-full">
                                <ProfCamPrincipal />
                            </div>
                            <div className="relative my-1 lg:h-2/6 w-full gap-1 grid grid-cols-1 sm:grid-cols-2">
                                <div><CardEtu /></div>
                                <div><CardEtu /></div>
                            </div>


                            <div className="scale-75 z-10 fixed top-3 right-5 lg:hidden">
                                <div id="menuToggle">
                                    <input id="checkbox" type="checkbox" onChange={toggleMessagePanel} />
                                    <label className="toggle" htmlFor="checkbox">
                                        <div className="bar bar--top"></div>
                                        <div className="bar bar--middle"></div>
                                        <div className="bar bar--bottom"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto w-full">
                            <ListConProf />
                        </div>
                    </div>
                    <div className=" h-2/6 w-full">
                        <div className='grid grid-cols-1 lg:flex h-full'>
                            <div className='w-full lg:w-1/4 h-full'><AddFolder/></div>
                            <div className='w-full lg:w-3/4 h-full'><ListFolderProf /></div>
                        </div>
                    </div>
                </div>
                <div className={`fixed lg:w-4/12 lg:right-0 lg:translate-x-0 h-full transition-all duration-500 ${isMessagePanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <MessageProf />
                </div>
            </div>
        </section>
    )
}

export default RoomProf