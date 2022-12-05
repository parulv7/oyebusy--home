import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Data from "../json/home-routes.json"
import Image from 'next/image'
const Bottom = () => {
  return (
      Data.map( data =>(
<>
<span className={styles.bottom}>


    {/* treding servises */}

<span className={styles.Container_services}>
 <h2 className={styles.Container_services_h}> {data.serviceCard1.title} </h2>
 <span className={styles.Container_services_main}>
{
data.serviceCard1.cardItems.map ( card => {
  return(
    <>
<Link href={card.landingUrl}><a>
<div><img src={card.imgUrl} height="50px" width="50px" alt="services"  className={styles.Container_services_div_p} /> </div>
    <div className={styles.Container_services_div}>
<p className={styles.Container_services_n}>{card.displayName}</p>

    </div>
    </a>
    </Link>
    </>
  )
}
)
}
</span> 
</span> 

{/* services card */}


<span className={styles.Container_servicescard}>
 <h4 className={styles.Container_servicescard_h}>{data.serviceCard2.title}</h4>
 <h4  className={styles.Container_servicescard_ph} >{data.serviceCard2.subTitle} </h4>
 <span className={styles.Container_servicescard_main}>

{
data.serviceCard2.cardItems.map ( card => {
  return(
    <>
<Link href={card.landingUrl}><a>
<div><img src={card.imgUrl} height="50px" width="50px" alt="services"  className={styles.Container_servicescard_div_p} /> </div>
    <div className={styles.Container_servicescard_div}>
<p className={styles.Container_servicescard_n}>{card.displayName}</p>
    </div>
    </a>
    </Link>
    </>
  )
}
)
}
</span> 
</span>



{/* BANNER-1 */}

<div className={styles.Container_banner1}>
{/* {
data.banner1.map( value =>( 
    <div className={styles.Container_banner1_n}>  <img src={value.webImg} height="100" width="1000px" /> </div>
    )   ) } */}
 </div>

{/*  Professional Cleaning Servcies */}

    <div className={styles.bottom_pcs}>
<div className={styles.pcs_h}>{data.carousel1.title} </div>
<span className={styles.pcs_div_main}>
{
    data.carousel1.cardItems.map( value => (
     
<>

<Link href={value.landingUrl}>
    <a>
    <img src={value.imgUrl}  className={styles.pcs__main_i} />
       <h4 className={styles.pcs__main_h}>{value.displayName} </h4>
    </a>
</Link>
</>
            )
    )
}
</span>
    </div>


{/*  banner2*/}

<div className={styles.banner2}>
<img src={data.banner2.webImg}  alt="services"  className={styles.banner2_im} />
</div>


{/* home appliences */}

{/* < span className={styles.home_a}>
<h2 className={styles.home_h}>{data.serviceCard3.title}</h2>
<p className={styles.home_p}>{data.serviceCard3.subTitle}</p>
{
data.serviceCard3.cardItems.map(  value => {
    return( 
         <>
<Link href={value.landingUrl}><a>
<div className={styles.home_im_div}>
    <img src={value.imgUrl} className={styles.home_im_div}/>
</div>
<span className={styles.home__div}>
    <h4 className={styles.home_para}>{value.displayName}</h4>
</span>
    </a> </Link>
</>
)
    }
)
}
</span> */}
</span>
</>




      )
      ) )
}

export default Bottom
