import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Data from "../json/home-routes.json"
import Navbar from '../navbar'
import Home from '../[landing-home]'

const cityHome = () => {
    const router = useRouter();
    // const pathname =  "/" + router.pathname;
    const {path} = router.query;
    const[serviceZone, setServiceZone ] = useState("");
    //  console.log(pathname);


useEffect(() => {
  if (!router.isReady) return;
  console.log(path);
  data.map(function(item) {
    if (item.path === path) {
      setServiceZone(item.path + ":" + item.serviceZone);
    }
  } );
}  );


// let found = false;
// let locationData;
// let CommonMatchData;


// Data.filter((data)  => data.path == pathname || pathname === data.path + "/")
// .map ((data) =>{
//     found = true;
//     locationData = data;
//     CommonMatchData.filter ((data) => data.zoneId ===locationData.zoneId && data.catId == locationData.map(data)  => {
//       CommonMatchData = data;
//     } ) 
// } )

  return 
  <> {serviceZone} </>
}

export default cityHome
