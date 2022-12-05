import React from 'react'
import Data from "../json/selectCity.json"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const About = () => {
  return (
    Data.map(data =>
    <>
    <div className={styles.below}>
    < div className={styles.green}>
< div className={styles.green_grid}>
<div className={styles.green_boedehead}>
<div className={styles.green_heading}>
  {data.banner4.title}
  </div>
  </div>
 <div className={styles.green_para_border}>
  <p className={styles.green_para}>
    {data.banner4.description}
  </p>
 
 </div>

 {/* {
    data.banner4.imgs.map( expert =>{
  return(
    <> < div className={styles.green_json}>
    <img src={expert}  width="30" height="30" className={styles.greenpicture}/>
    </div>
    </>
  )
})
  } */}

</div>
<div className={styles.green_second_div}>
{
    data.banner4.imgs.map( expert =>{
  return(
    <> < div className={styles.green_json}>
    <img src={expert}  width="30" height="30" className={styles.greenpicture}/>
    </div>
    </>
  )
})
  }
</div>
    </div>
    < div className={styles.grey}>
< div  className={styles.grey_top_div}>
< div  className={styles.grey_topcontent_div}>TOP LOCATIONS</div>
< div  className={styles.grey_firstcontent_border}>
  <p  className={styles.grey_first_para}>
  Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana • Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam
  </p>
</div>
</div>
</div>


< div  className={styles.grey_sec_div}>
  <ul className={styles.grey_sec_div_list}>
    <li className={styles.grey_contact}>Contact Us</li>
    <li className={styles.grey_no}>Phone : +91 782 762 1417</li>
    <li className={styles.grey_mail}>Email : support@roservicecenter.live</li>
  </ul>
</div>
< span className={styles.grey_third_div}>
  <ul className={styles.grey_third_list}>
    <li className={styles.grey_third_list1}>About Us</li>
    <li className={styles.grey_third_list2}>Blog</li>
    <li className={styles.grey_third_list3}>Near me</li>
    <li className={styles.grey_third_list4}>Terms & Conditions</li>
    <li className={styles.grey_third_list5}>Privacy Policy</li>
    <li className={styles.grey_third_list6}>Contact Us </li>
  </ul>
</span>
<sapn  className={styles.grey_media}>
  < div  className={styles.grey_media_b}>
  <ul  className={styles.grey_media_list}>
      <li  className={styles.grey_intra}> <Image src="/../public/image/vector.png" width="22" height="22" className={styles.intra}/>  </li>
      <li  className={styles.grey_twitter}> <Image src="/../public/image/vector (1).png" width="22" height="22" className={styles.twitter}/></li>   
      <li  className={styles.grey_linkin}> <Image src="/../public/image/linkedin-logo 1.png" width="22" height="22" className={styles.linkin}/> </li>
      <li  className={styles.grey_facebook}>  <Image src="/../public/image/facebook 1.png" width="22" height="22" className={styles.fb}/></li>
      <li  className={styles.grey_utube}>  <Image src="/../public/image/vector (2).png" width="22" height="18" className={styles.pin}/></li>
      <li  className={styles.grey_ipin}>  <Image src="/../public/image/vector (3).png" width="22" height="22" className={styles.pin}/></li>
    </ul>

  </div>
</sapn>
<div   className={styles.last_con}>
© 2021 OyeBusy Technologies Pvt. Ltd.
</div>
    </div>
    </>
    )
  )
}

export default About;
