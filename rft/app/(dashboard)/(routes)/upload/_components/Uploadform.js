import React, { useState, useEffect } from 'react';
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';
import Popup from './Popup';

function Uploadform({ UploadBtnClick, progress }) {
    const [file, setFile] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    // Show the popup when progress reaches 100%
    useEffect(() => {
        if (progress === 100) {
            setShowPopup(true);
        }
    }, [progress]);

    const onFileSelect = (file) => {
        if (file && file.size > 2000000) {
            setErrorMsg("Invalid File Size( >2MB )");
            return;
        }
        setErrorMsg(null);
        setFile(file);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        // Reset the file and progress after the popup closes
        setFile(null);
    };

    return (
        <div className='bg-secondary text-center'>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-secondary dark:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-primary dark:secondary"><span className="font-semibold">Click to upload</span> or <strong>drag</strong> and <strong>drop</strong></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max size: 2MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(event) => onFileSelect(event.target.files[0])} />
                </label>
            </div>
            {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
            {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}

            {progress > 0&&progress<=100? <ProgressBar progress={progress} /> :
                <button disabled={!file} className='p-2 bg-primary text-secondary w-[30%] mt-5 rounded-md disabled:bg-gray-500' onClick={() => UploadBtnClick(file)}>
                    Upload
                </button>
            }

            {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
    );
}

export default Uploadform;