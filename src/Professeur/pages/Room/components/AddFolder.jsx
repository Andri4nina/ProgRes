import React, { useState } from 'react';
import { BiSolidLogIn } from 'react-icons/bi';

const AddFolder = () => {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        // Handle the dropped files here
        console.log(files);
    };

    return (
        <>
            <div 
                className={`relative w-60 h-60 border-2 border-slate-200 border-dashed ${isDragOver ? 'border-blue-500' : 'border-slate-200'}`} 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90'>
                    <label htmlFor="fileInput">
                        <BiSolidLogIn className='text-[150px] cursor-pointer' />
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        name="files" 
                        multiple 
                        className='hidden' 
                    />
                </div>
            </div>
        </>
    )
}

export default AddFolder;
