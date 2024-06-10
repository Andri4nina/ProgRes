import RoomCardEtu from "./RoomCardEtu"
import "./ListRoomCardEtu.css"
import Loader from "../../../../component/Loader"
import { useState, useEffect } from "react"

const ListRoomEtu = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);
  
  
  return (
    <>
      <section>

        <div className="relative pt-16 h-screen overflow-hidden listShow">
        {loading ? (
            <Loader />
          ) : (
          <div className="h-full pb-16 overflow-y-auto ">

            <div className="mx-5 my-5">
              <h2 className="text-2xl font-semibold">Juin 2024</h2>
              <hr className="my-5" />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
              </div>
            </div>


            <div className="mx-5 my-5">
              <h2 className="text-2xl font-semibold">Mai 2024</h2>
              <hr className="my-5" />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <RoomCardEtu />
                <RoomCardEtu />
              </div>
            </div>

            <div className="mx-5 my-5">
              <h2 className="text-2xl font-semibold">Avril 2024</h2>
              <hr className="my-5" />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
                <RoomCardEtu />
              </div>
            </div>
          </div>
          )}
        </div>


      </section>

    </>
  )
}

export default ListRoomEtu