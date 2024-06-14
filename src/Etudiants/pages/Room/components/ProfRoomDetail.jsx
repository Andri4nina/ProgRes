

const ProfRoomDetail = () => {
    return (
        <>
            <section className="p-5">
                <h2 className="text-2xl italic font-semibold mb-5">Detail</h2>
                <div className="grid grid-cols-2">
                    <div className="py-5">
                        <div className="flex justify-between mx-5 border-b-2 p-2">
                            <div className="text-slate-400">Cours:</div>
                            <div>Reseau</div>
                        </div>
                        <div className="flex justify-between mx-5 border-b-2 p-2">
                            <div className="text-slate-400">Duree:</div>
                            <div>2:30</div>
                        </div>
                        <div className="flex justify-between mx-5 border-b-2 p-2">
                            <div className="text-slate-400">Niveau:</div>
                            <div>L3</div>
                        </div>
                        <div className="flex justify-between mx-5 border-b-2 p-2">
                            <div className="text-slate-400">Annee:</div>
                            <div>2024</div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="flex justify-between mx-5 border-b-2 p-2">
                            <div className="text-slate-400">Professeur:</div>
                            <div>Mr Tahina</div>
                        </div>
                        <div className="flex justify-between mx-5 border-b-2 p-2">
                            <div className="text-slate-400">Classe:</div>
                            <div>Da2i</div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default ProfRoomDetail