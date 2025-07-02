import React, { useEffect, useState } from "react";

const useScreenSize = () => {
  const [onSmallDevice, setOnSmallDevice] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setOnSmallDevice(true);
      } else {
        setOnSmallDevice(false);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    //cleanup area
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return onSmallDevice;
};

export default useScreenSize;
