import { useState } from "react"
import ListConEtu from "./components/ListConEtu"
import MessageEtu from "./components/MessageEtu"
import ProfCamEtu from "./components/ProfCamEtu"
import "./RoomEtu.css"

const RoomEtu = () => {
    // État pour gérer l'affichage du panneau des messages
    const [isMessagePanelOpen, setIsMessagePanelOpen] = useState(false);

    // Fonction pour basculer l'affichage du panneau des messages
    const toggleMessagePanel = () => {
        setIsMessagePanelOpen(prevState => !prevState);
    };

    return (
        <>
            <section className="h-screen w-full bg-slate-50 overflow-x-hidden">
                <div className="relative flex gap-1 h-full w-full">
                    <div className="flex flex-col gap-1 w-full lg:w-8/12 h-full">
                        <div className="relative h-4/6 w-full">
                            <ProfCamEtu />
                            <div className="scale-75 z-10 absolute top-3 right-5 lg:hidden">
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
                        <div className="h-2/6 w-full">
                            <ListConEtu />
                        </div>
                    </div>
                    <div className={`absolute top-0 lg:relative lg:w-4/12 lg:right-0 lg:translate-x-0 h-full transition-all duration-500 ${isMessagePanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <MessageEtu />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RoomEtu
