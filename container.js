import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import data from "../json/home-routes.json"
import Image from 'next/image'
const Container = () => {



  
  return (
    // Data.map(data => (
    <>
    <div className={styles.Container}>
<div  className={styles.Container_herobanner}>
<div className={styles.Container_mid}>
  <span className={styles.Container_mid1}>
    <p className={styles.Container_mid1_p}>
    Home services, on demand
    </p>
  </span>
  <span className={styles.Container_mid1_search} >
    <ul>
  <li> <img className={styles.submit_icon}  src="/../public/image/Group 608.jpg" width="17.08" height="19"/></li>
             <li>   <input className={styles.submit}  type="search" placeholder='Search for a service'></input></li>
                </ul>
    </span> 
    <span className={styles.Container_mid1_phead}>
    Examples:
    </span>
    <span className={styles.Container_mid1_plast}>
    Salon, Women’s hair, Men’s grooming & Many more..
    </span>
</div>
</div>

{/* what are you for */}

< span className={styles.Container_services_second}>
{/* <h1 className={styles.Container_services_heading}> {data.heroSection.categoriesSection.heading}</h1> */}
<h1 className={styles.Container_services_heading}>  What are you looking for?</h1>



{/* {
      data.heroSection.categoriesSection.categories.map( value => {
        return(
          <>
          <div  className={styles.Container_services_parti}>
            <img src={value.imgUrl} width="40"  height="40"  className={styles.Container_services_phou} />
             <Link href={value.landingUrl}>
              <a>
              <p  className={styles.Container_services_parti_p}>
                {value.displayName}
             </p>
              </a>
             </Link>
          </div>
          </>
        )} )
} */}

{
      data[0].heroSection.categoriesSection.categories.map( value => {
        return(
          <>
          <div  className={styles.Container_services_parti}>
            <img src={value.imgUrl} width="40"  height="40"  className={styles.Container_services_phou} />
             <Link href={value.landingUrl}>
              <a>
              <p  className={styles.Container_services_parti_p}>
              {value.displayName}
            </p>
              </a>
             </Link>
           
          </div>
          </>
        )} )
}

</span>
    </div>
{/* photo block */}

<span  className={styles.Container_block}>
{
  data[1].offerBanner.map(value => {
    return(
      <>
{/* <button className={styles.Container_block}  onClick={handelPrev}>  {"<"} </button>    */}
    <div className={styles.Container_block}>
      <Link href={value.landingUrl}> 
<img  src={value.imgUrl} width="40"  height="40" className={styles.Container_block_im}/>
</Link>
    </div>
    {/* <button className={styles.Container_block}  onClick={handelNext}>  {"<"} </button>    */}

    </>
    )
  } )
}
  </span>

{/* treding servises */}

{/* <span className={styles.Container_services}>
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
</span>  */}


{/* <span className={styles.Container_services}>
 <h2 className={styles.Container_services_h}> Treding Services</h2>
 <span className={styles.Container_services_main}>

{
data[2].serviceCard1.cardItems.map ( card => {
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
</span>  */}




{/* services card */}


{/* <span className={styles.Container_servicescard}>
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
</span> */}

{/* <span className={styles.Container_servicescard}>
 <h4 className={styles.Container_servicescard_h}> Same Day Services</h4>
 <h4  className={styles.Container_servicescard_ph} > Premium Service</h4>
 <span className={styles.Container_servicescard_main}>

{
data[3].serviceCard2.cardItems.map ( card => {
  return(
    <>
<Link href={card.landingUrl}><a>
<div><img src={card.imgUrl} height="50px" width="50px" alt="services"  className={styles.Container_servicescard_div_im} /> </div>
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
</span> */}

{/* <div className={styles.Container_banner1}>

  {
  data.banner1.map( value => (
    <div className={styles.Container_banner1_n}>  <img src={imgUrl.value} height="100" width="1000px" /> </div>

  )

  )
 } 
 </div> */}

{/* {
  data.map( value =>{
    <div className={styles.Container_banner1_n}>  <img src={banner1.imgUrl.value} height="100" width="1000px" /> </div>
  } )
} */}




    </>
// ))
)
  
}
export default Container















