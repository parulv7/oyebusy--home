import Image from 'next/image'
import Link from 'next/link';
import React, {  useState } from 'react'
import styles from '../styles/Home.module.css'
import Data from "../json/selectCity.json"


const Maincon = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    Data.map( data => (
    <>    
            <div className={styles.Main0}>
            {/* <div className={styles.Main0_bg}><img src={data.heroSection.webBanner}  className={styles.Main0_bg_1}/></div> */}
{/* } */}
      {/* {
        data.heroSection.map( elem =>{
          return(
            <>
           <div className={styles.Main0_bg}>{elem.webBanner}</div>

             </>
          )
        } )
      }  */}
<div className={styles.Main0_fisrt}>
<ul className={styles.Main0_second}>

<li className={styles.Main0_second_inner1}> {data.heroSection.title}</li>
<li className={styles.Main0_second_inner2}>{data.heroSection.heading} </li>
<li className={styles.Main0_second_inner3}>{data.heroSection.description}</li>
<li></li>
<li className={styles.Main0_second_inner4}>
   <div className={styles.Main0_second_getdata}>
     <p className={styles.Main0_second_data}> Where do you need a service? </p>
     < div className={styles.middle}>
      <ul className={styles.drop_div} > 
      <li>  <h1 className={styles.cityselect}>Select your city </h1></li>
       <li className={styles.drop_div_M}> <Image  src="/../public/image/Vector 73.jpg" height="7" width="15"  className={styles.dropdown_sym} onClick={e => setIsActive(!isActive)}/>
        </li>
         </ul>
     </div> 
   </div>
 </li>
</ul>
{
  data.heroSection.form.map( add =>{
    return(
      <>
      <Link href={add.landingUrl}>

        <a>
          { isActive &&(
          <span className={styles.cityselect_border}>
        <div className={styles.cityselectdata}>{add.dropdownItem} </div> 
          </span>
        ) }
        </a>
      </Link>
      
      </>
    )
  }
     
  )
}

</div>


  {/* <Link href={Data.landingUrl}> */}
    <a>
      {/* <div className={styles.cityselectdata}>{data.heroSection.} </div> */}
      {/* <div className={styles.cityselectdata}>{data.heroSection.title} </div> */}
    </a>
  {/* </Link> */}
  </div>
    </>

    ))
   

  )
}

export default Maincon
