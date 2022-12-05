import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Data from "../json/selectCity.json"

const Component3 = () => {
  return (
    Data.map( data => (

    <>
    <div className={styles.MAIN_second}>
        <ul className={styles.MAIN_second34}>
            <li><img  src={data.banner5.webImg}  className={styles.why1}/> </li>
<li>
<h1 className={styles.second_heading} >Why People Choose Us</h1>
<ul className={styles.second_list66} >
  <li className={styles.listitem}>Affordable Rates</li>
  <li className={styles.listitem}>On Time Service</li>
  <li className={styles.listitem}>Verified Professionals</li>
  <li className={styles.listitem}>Excellent Service</li>
  </ul>
  </li>
</ul>
</div>


    </>
    ))
  )
}

export default Component3
