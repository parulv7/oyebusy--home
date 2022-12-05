import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Header = () => {
  return (
    <>
    <div className={styles.head_main_container}> <ul className={styles.head_main_container__2}>
        <li>
        <div> <Image  src ="/../public/image/1592026327216.jpg" height="46" width="90" className={styles.head_main_container_55} /> </div>
        </li>
<ul className={styles.head_main_container_list}>
<li className={styles.head_main_container_list_1}>FREE QUOTES</li>
<li className={styles.head_main_container_list_2}>Blog</li>
<li className={styles.head_main_container_list_3}>Services <Image  src="/../public/image/Vector 73.jpg" height="6" width="10"  className={styles.head_main_container_inner_vec}/>
  </li>
<li className={styles.head_main_container_list_4}>Contact us</li>
<li className={styles.head_main_container_list_5}>

  <div className={styles.head_main_container_inner_5} >
    <span className={styles.head_main_container_inner_55555}>
    <Image  src="/../public/image/Group 7035.jpg" height="35" width="35"  className={styles.head_main_container_inner_55}/>
    </span>
    <ul className={styles.head_main_container_secondline}>
<li className={styles.head_main_container_lists_1}>Service Helpline</li>
<li className={styles.head_main_container_lists_2}>782 762 1417</li>
    </ul>
     </div>

</li>
<li className={styles.head_main_container_lists_last} >
<Image  src ="/../public/image/Group 1655.jpg" height="30" width="30" className={styles.head_main_last_55} />
</li>
</ul>
<div>
{/* <Image  src ="/../public/image/Group 1655.jpg" height="30" width="30" className={styles.head_main_last_55} /> */}
</div>
</ul>

</div>
{/* hero section */}
    
    </>
  )
}

export default Header;

