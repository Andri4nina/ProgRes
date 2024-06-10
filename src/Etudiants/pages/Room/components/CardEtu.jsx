

const CardEtu = () => {
  return (
    <>
      <div className="bg-slate-200 w-full h-full rounded-lg">
        <div className="flex flex-col">
          <div className="relative w-20 h-20 rounded-full mx-auto border-4 my-5 border-blue-400 ">
            <div className="w-full h-full rounded-full overflow-hidden ">
              <img src="./img/default.png" alt="userpdp" className=" object-contain" />
            </div>
          </div>
          <div><h3 className="text-center font-semibold text-slate-400">Popol</h3></div>

          <div className="mx-auto my-2 w-28 top-0 left-0 bg-slate-700 rounded-3xl px-2 py-1">
            <div className="flex justify-around items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full">
              </div>
              <div className="text-white">Connecter </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardEtu