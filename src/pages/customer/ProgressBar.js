import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import useStorage from '../../hooks/useStorage';

const ProgressBar = (props) => {
  const { file, filename, formid, setSelectedStatus, setLoader } = props;
  const { progress, url } = useStorage(file, filename, formid);
  //const [completed, setCompleted] = useState(null);

  useEffect(() => {
    if (url) {
      //setCompleted("Completed!");
      setSelectedStatus(false);
      setLoader(false);

    }
  }, [url, setSelectedStatus, setLoader]);

  return (
    <motion.div className="bg-success my-3"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;