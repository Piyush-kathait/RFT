import React from 'react'

function ProgressBar({ progress = 40 }) {
    return (
        <div className=' bg-primary h-4 w-full text-primary 
     mt-3 rounded-full'>
            <div className='bg-gray-400 h-4 
            rounded-full text-[10px]'
            style={{ width: `${progress}%` }}>
                {`${Number(progress).toFixed(0)}%`}
            </div>

        </div>
    )
}

export default ProgressBar