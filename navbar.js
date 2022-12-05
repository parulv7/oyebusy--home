import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.Navbar}>
<div className={styles.Navbar_logo}>
<ul className={styles.Navbar_logo_main}>
   <li> < Image className={styles.Navbar_logo_main8}  src ="/../public/image/1592026327216.jpg" height="46" width="90"/>
   </li>
  <li className={styles.Navbar_location_div}  > < span className={styles.Navbar_loc}>
     < Image className={styles.Navbar_location}  src ="/../public/image/Vector (7).png" height="20" width="17"/></span>
    <p className={styles.Navbar_location_para}  > House no 222,Hanuman Chowlk,Sec 22, Noida/Ghaziabad </p> 
    <span  className={styles.Navbar_} >
    <Image  src="/../public/image/Vector (6).png" height="10" width="15"  className={styles.Navbar_dropdown_sym}/>
    </span>
    </li>
    </ul>
    </div>
 <ul className={styles.Navbar_2_list} >
  <li className={styles.Navbar_2_list_item1}> Blog  </li>
  <li className={styles.Navbar_2_list_item2}> Career </li>
  <li className={styles.Navbar_2_list_item3}> Mamta XYZ<Image  src="/../public/image/Vector 73.jpg" height="10" width="12"  className={styles.Navbar_dropdown_sym}/></li>
  <li className={styles.Navbar_2_list_item4}>  <Image  src="/../public/image/Vector (5).png" height="20" width="20"  className={styles.Navbar_bug}/> </li>
  <li className={styles.Navbar_2_list_item5}> <div  className={styles.Navbar_down} >
  <Image  src="/../public/image/playstore 1.png" height="20" width="15"  className={styles.Navbar_play}/>
  <p className={styles.Navbar_2_list_item6}>Download App</p>
  {/* <Image  src="/../public/image/Vector 73.jpg" height="1" width="12"  className={styles.Navbar_plat}/> */}
      </div> </li>
 </ul>
    </div>






{/* mobile */}

    < div className={styles.mainheader}>
        <div className={styles.search}>
            <ul className={styles.search_content}>
                <li className={styles.mainsearch}>
                  <div className={styles.search_main77}>
                <Image className={styles.submit_icon}  src="/../public/image/Group 608.jpg" width="15.08" height="17"/>
                <input className={styles.submit}  type="search" placeholder='Search for a service'></input></div>
                </li>
                <li >
                  <Image src="/../public/image/Group 7032 (1).jpg"  width="20"  height="20" alt="bag" className={styles.addbag} />
                </li>
            </ul>
        </div>
    </div>   

    </>
  )
}

export default Navbar
