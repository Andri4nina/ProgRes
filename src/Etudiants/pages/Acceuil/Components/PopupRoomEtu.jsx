

const PopupRoomEtu = () => {
    return (
        <>
            <div>
                <div>
                    <div className="flex items-center justify-center w-60">
                        <div className="w-56 mx-auto">
                            <img src="./img/Logo.png" alt="Logo emiting" className="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-center italic">Emiting</h2>
                        </div>
                    </div>
                </div>

                <form action="">
                    <div className="w-full bg-white mb-10 border rounded-md">
                        <input type="text" placeholder="ID du room" className="px-5 py-4 w-full outline-none" />
                    </div>
                    
                    <div className="w-full bg-white mb-10 border rounded-md">
                        <input type="text" placeholder="Mot de passe" className="px-5 py-4 w-full outline-none" />
                    </div>
                    <div className="w-full bg-white mb-5 border">
                        <button className="px-5 py-4 w-full outline-none text-white bg-blue-400 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600 transition-all rounded-md">Se connecter</button>

                    </div>
                </form>


            </div>
        </>
    )
}

export default PopupRoomEtu