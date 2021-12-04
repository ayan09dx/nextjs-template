import Link from 'next/link'

const Footer=()=>{
    return(
        <footer>
      <div className="footertop">
         <div className="aboutus">
         <p><Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"><a>Coronavirus disease (COVID-19) advice for the public</a></Link></p>
           <p>Covid-19 Solidarity Response Fund - <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"><a>Donate Now to the WHO </a></Link></p>
           <p>Information deemed reliable, but not guaranteed. By using this site, you agree to the - <Link href="#"><a>terms of use.</a></Link></p>
           <p>Newzhub is a repository of world newspapers, magazines, news sites, and publishers.Find thousands of online news sources from around the world.</p>
         <a href='https://www.freepik.com/vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a>
         <p/>
         </div>
        </div>
       
        <div className="footerbottom">
        ©Copyright 2021 NewzHub 
        
        </div>
        </footer>
    );
    }

export default Footer;