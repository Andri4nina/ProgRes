import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import LoginEtu from './Etudiants/pages/LoginEtu';
import LoginProf from './Professeur/pages/LoginProf';
import './login.css';

const Index = () => {
    const [isProfLogin, setIsProfLogin] = useState(false); 
    
    const toggleLoginType = () => {
        setIsProfLogin(!isProfLogin);
    };

    return (
        <>
            <div className="relative overflow-hidden w-full h-screen">

                <div className='h-screen w-full flex justify-center items-center'>
                    <div className='hidden sm:block w-1/2 relative h-auto'>
                        <img src="./img/GpVideo.png" alt="GpVideo.png" className='w-full h-auto' />
                    </div>

                    <div className='sm:block w-full sm:w-1/2 relative h-screen'>
                        <div className={`absolute w-full h-full transition-transform duration-500 transform ${isProfLogin ? 'translate-x-0' : 'translate-x-full'}`}>
                            <LoginProf />
                        </div>
                        <div className={`absolute w-full h-full transition-transform duration-500 transform ${!isProfLogin ? 'translate-x-0' : 'translate-x-full'}`}>
                            <LoginEtu />
                        </div>
                    </div>
                </div>




                <div className={`cursor-pointer absolute top-2 right-0 flex items-center  transition-all duration-500 transform ${isProfLogin ? '-translate-x-5' : 'opacity-45 right-0 translate-x-full'}`} onClick={toggleLoginType}>
                    <div className={isProfLogin ? 'font-bold block ' : ''}>Professeur</div>
                    <div className={isProfLogin ? 'font-bold block' : ''}><BiChevronRight /></div>
                </div>


                <div className={`cursor-pointer absolute top-2 right-0 flex items-center  transition-all duration-500 transform ${!isProfLogin ? '-translate-x-5' : 'opacity-45 right-0 translate-x-full'}`} onClick={toggleLoginType}>
                    <div className={!isProfLogin ? 'font-bold block' : ''}><BiChevronLeft /></div>
                    <div className={!isProfLogin ? 'font-bold block' : ''}>Etudiants</div>
                </div>

            </div>
        </>
    );
};

export default Index;
