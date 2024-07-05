import React from 'react'

const RoomDetailProf = () => {
    return (
        <>
            <section className="lg:max-h-screen lg:h-screen w-full bg-slate-50 overflow-hidden">
                <div className="lg:flex justify-center items-center w-full h-full">
                    <div className="w-full lg:w-2/3 h-screen lg:h-full p-5"><ProfCamEtu /></div>
                    <div className="w-full lg:w-1/3 h-full grid grid-cols-1">
                        <div><ProfRoomDetail /></div>
                        <div><ListFolderRoomDetail /></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default RoomDetailProf