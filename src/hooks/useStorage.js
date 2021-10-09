import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file, filename, formid) => {
  const [progress, setProgress] = useState(0);
  //const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  console.log(filename.title);

  useEffect(() => {
    // references
      const storageRef = projectStorage.ref(`${formid.toString()}_${filename.title}`);
      const collectionRef = projectFirestore.collection(formid.toString());
      
      storageRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
        //console.log(progress);
      }, (err) => {
        console.log(err);
      }, async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt, filename });
        setUrl(url);
      });
    
  }, [file, filename, formid]);

  return { progress, url };
}

export default useStorage;