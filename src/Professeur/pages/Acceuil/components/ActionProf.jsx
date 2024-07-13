import { BiSolidCameraMovie, BiSolidLogIn, BiSolidLogOut, BiXCircle } from "react-icons/bi";
import { useState } from "react";
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
import PopupRoomProf from "./PopupRoomProf";
import PopupCreateRoomProf from "./PopupCreateRoomProf";


const ActionProf = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPopupCreateVisible, setIsPopupCreateVisible] = useState(false);

    const handleLoginClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        setIsPopupCreateVisible(false);
    };
    
    const handleCloseCreatePopup = () => {
        setIsPopupCreateVisible(false);
    };
    
    
    
    const handleCreateClick = () => {
        setIsPopupCreateVisible(true);
    };

   

    
    

    const handleLogoutClick = () => {
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous allez vous déconnecter.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, déconnectez-moi!',
            cancelButtonText: 'Annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                // Ajoutez ici la logique de déconnexion
                Swal.fire(
                    'Déconnecté!',
                    'Vous avez été déconnecté avec succès.',
                    'success'
                );
            }
        });
    };

    const popupAnimation = useSpring({
        opacity: isPopupVisible ? 1 : 0,
        transform: isPopupVisible ? 'translateY(0)' : 'translateY(-40%)',
        config: { tension: 300, friction: 20 },
    });
    
    const popupCreateAnimation = useSpring({
        opacity: isPopupCreateVisible ? 1 : 0,
        transform: isPopupCreateVisible ? 'translateY(0)' : 'translateY(-40%)',
        config: { tension: 300, friction: 20 },
    });

    return (
      <>
        <section className="relative min-h-screen">
          <div>
            <div className="flex items-center justify-center w-60">
              <div className="w-56 mx-auto">
                <img src="./img/Logo.png" alt="Logo emiting" className="" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-center italic">
                  Emiting
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 w-11/12 sm:w-1/2 mx-auto gap-2">
            <div
              className="group cursor-pointer relative text-white rounded-md  bg-[#00A9FF] hover:bg-[#00A4EE] hover:shadow-md hover:shadow-[#00A4EE] transition-all w-full h-36 flex items-center justify-center"
              onClick={handleCreateClick}
            >
              <BiSolidCameraMovie className="text-7xl" />
              <span className="text-5xl absolute top-1/2 left-1/2 -translate-x-[65%] -translate-y-[45%] text-[#00A9FF] group-hover:text-[#00A4EE] transition-all">
                +
              </span>
            </div>

            <div
              className="cursor-pointer text-white rounded-md  bg-[#00A9FF] hover:bg-[#00A4EE] hover:shadow-md hover:shadow-[#00A4EE] transition-all w-full h-36 flex items-center justify-center"
              onClick={handleLoginClick}
            >
              <BiSolidLogIn className="text-7xl" />
            </div>
          </div>

          {isPopupVisible && (
            <div className="z-20 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <animated.div
                style={popupAnimation}
                className="relative bg-white p-6 rounded-md w-96"
              >
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={handleClosePopup}
                >
                  <BiXCircle className="text-xl hover:text-red-500" />
                </button>
                <PopupRoomProf />
              </animated.div>
            </div>
          )}

          {isPopupCreateVisible && (
            <div className="z-20 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <animated.div
                style={popupCreateAnimation}
                className="relative bg-white p-6 rounded-md w-96"
              >
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={handleCloseCreatePopup}
                >
                  <BiXCircle className="text-xl hover:text-red-500" />
                </button>
                <PopupCreateRoomProf />
              </animated.div>
            </div>
          )}

          <div className="absolute bottom-2 left-2 text-white rounded-md bg-red-500 hover:bg-red-600 hover:shadow-md hover:shadow-red-600 transition-all w-10 h-10 flex items-center justify-center">
            <button
              className="w-full h-full flex justify-center items-center"
              onClick={handleLogoutClick}
            >
              <BiSolidLogOut />
            </button>
          </div>
        </section>
      </>
    );
}

export default ActionProf;
