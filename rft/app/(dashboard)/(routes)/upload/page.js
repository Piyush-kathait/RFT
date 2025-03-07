"use client"
import React, { useState } from 'react'
import Uploadform from './_components/Uploadform'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import app from '/firebaseConfig';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '/app/_utils/GenerateRandomString';
function Upload() {
  const{user}=useUser();

  const[progress,setProgress]=useState();
  const storage = getStorage(app)
  const db = getFirestore(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'filesharing/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
        progress == 100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file,downloadURL);
        }).then(resp=>{
          console.log(resp);
        })
      },)
  }
  const saveInfo=async(file,fileUrl)=>{
    const docId =  Date.now().toString();

    await setDoc(doc (db, "uploadedFile", docId), {
      fileName:file?.name,
      fileSize:file?.size,
      fileType:file?.type,
      fileUrl:fileUrl,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userName:user?.fullName,
      password:'',
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
      
    });
  }
  return (
    <div className='p-5 px-8 md:px-28 bg-secondary min-h-screen '>
      <h2 className=' text-[20px] text-center m-5 text-primary'>Start
        <strong className='text-primary text-2xl'> Uploading</strong> file and <strong className='text-primary text-2xl'> Share</strong> it</h2>
      <Uploadform UploadBtnClick={(file) => uploadFile(file)} 
         progress={progress} 
        />
    </div>
  )
}

export default Upload