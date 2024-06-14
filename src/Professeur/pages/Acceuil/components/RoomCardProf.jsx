

const RoomCardProf = () => {
    return (
        <>
            <div className="group relative cursor-pointer overflow-hidden h-32">
                <div className="relative">
                    <img src="./img/prof.jpg" alt="" className="w-full h-auto" />
                    <div className="absolute group-hover:inset-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black transition-all"></div>
                </div>

                <div className="absolute -bottom-9 opacity-0 right-3 group-hover:bottom-2 group-hover:opacity-100 transition-all">
                    <h3 className="text-white font-semibold">Theorie des reseaux</h3>
                    <div className="flex justify-end text-xs text-white">2:30</div>
                </div>
            </div>
        </>
    )
}

export default RoomCardProf