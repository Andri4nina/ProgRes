import React from 'react'
import { BiSolidSend } from 'react-icons/bi'

const MessageProf = () => {
    return (
        <>
            <div className="h-full relative bg-slate-100 w-screen lg:w-full lg:min-w-96">
                <div className="absolute top-0 left-0 h-14 w-full bg-slate-700">
                    <h2 className="flex justify-center pt-4 text-white">Cours Réseau</h2>
                    <span className="flex justify-center text-xs text-slate-300">2:30</span>
                </div>

                <div className="w-full h-full overflow-hidden mb-10">
                    <div className="h-full overflow-scroll mt-14 pb-10 messShow">
                        <div className=" relative flex justify-end mx-5 my-10  othersJoin">
                            <div className="text-green-400">Andrianina a rejoint le cours</div>
                            <div className="absolute -bottom-2 text-xs text-slate-400">2:25</div>

                        </div>

                        <div className=" my-10 relative flex justify-end gap-2  othersMess">
                            <div className="text-white max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-blue-400">
                                Bonjour
                            </div>
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 absolute -bottom-5">
                                <div className=" text-xs font-semibold text-slate-400">par Popol</div>
                                <div className=" text-xs text-slate-400">2:25</div>
                            </div>

                        </div>

                        <div className="my-10 relative flex justify-end gap-2  othersMess">
                            <div className="text-white max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-blue-400">
                                J'ai une question vous pouvez me repondre?
                            </div>
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 absolute -bottom-5">
                                <div className=" text-xs font-semibold text-slate-400">par Popol</div>
                                <div className=" text-xs text-slate-400">2:26</div>
                            </div>
                        </div>

                        <div className="my-10  relative flex justify-start gap-2  selfmess">
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>

                            <div className="text-black max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-slate-200">
                                Moi aussi j'ai une question?
                            </div>

                            <div className="flex justify-between gap-2 absolute -bottom-5 left-1">
                                <div className=" text-xs font-semibold text-slate-400">par Vous</div>
                                <div className=" text-xs text-slate-400">2:27</div>
                            </div>
                        </div>

                        <div className="my-10 relative flex justify-end mx-5   othersLogout">
                            <div className="text-red-400">Andrianina a quitter le cours</div>
                            <div className="absolute -bottom-2 text-xs text-slate-400">2:30</div>
                        </div>

                        <div className="relative flex justify-start mx-5 my-10  selfLogout">
                            <div className="text-red-400">Vous avez a quitter le cours</div>
                            <div className="absolute -bottom-2 text-xs text-slate-400">2:36</div>
                        </div>

                        <div className="relative flex justify-start mx-5 my-10  selfjoin">
                            <div className="text-green-400">Vous avez rejoint le cours</div>
                            <div className="absolute -bottom-2 text-xs text-slate-400">2:46</div>
                        </div>

                        <div className="my-10 relative flex justify-end gap-2  othersMess">
                            <div className="text-white max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-blue-400">
                                J'ai une question vous pouvez me repondre?
                            </div>
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 absolute -bottom-5">
                                <div className=" text-xs font-semibold text-slate-400">par Popol</div>
                                <div className=" text-xs text-slate-400">2:56</div>
                            </div>
                        </div>


                        <div className="my-10  relative flex justify-start gap-2  selfmess">
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>

                            <div className="text-black max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-slate-200">
                                Moi aussi j'ai une question?
                            </div>

                            <div className="flex justify-between gap-2 absolute -bottom-5 left-1">
                                <div className=" text-xs font-semibold text-slate-400">par Vous</div>
                                <div className=" text-xs text-slate-400">3:00</div>
                            </div>
                        </div>

                        <div className="my-10  relative flex justify-start gap-2  selfmess">
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>

                            <div className="text-black max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-slate-200">
                                Moi aussi j'ai une question?
                            </div>

                            <div className="flex justify-between gap-2 absolute -bottom-5 left-1">
                                <div className=" text-xs font-semibold text-slate-400">par Vous</div>
                                <div className=" text-xs text-slate-400">2:27</div>
                            </div>
                        </div>

                        <div className="my-10  relative flex justify-start gap-2  selfmess">
                            <div className="w-10 h-10 ">
                                <div className="w-full h-full rounded-full overflow-hidden ">
                                    <img src="./img/default.png" alt="userpdp" className=" object-contain" />
                                </div>
                            </div>

                            <div className="text-black max-w-72 w-fit h-fit px-5 py-2 rounded-lg bg-slate-200">
                                Moi aussi j'ai une question?
                            </div>

                            <div className="flex justify-between gap-2 absolute -bottom-5 left-1">
                                <div className=" text-xs font-semibold text-slate-400">par Vous</div>
                                <div className=" text-xs text-slate-400">2:27</div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="absolute top-full -translate-y-full left-0 h-20 w-full bg-slate-50">
                    <div className="flex justify-center items-center mx-1 h-full">
                        <div className="h-full w-10/12">
                            <input
                                type="text"
                                placeholder="taper votre message"
                                className="h-full w-full bg-transparent outline-none px-2 py-1"
                            />
                        </div>
                        <div className="cursor-pointer text-slate-400 text-2xl flex justify-center items-center w-2/12">
                            <BiSolidSend className="-rotate-45 hover:rotate-0 transition" />
                        </div>
                    </div>
                </div>

               
            </div>
        </>
    )
}

export default MessageProf