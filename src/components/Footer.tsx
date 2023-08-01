import styles from '../style';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} text-header_footer_text`}>
      <div className={`${styles.boxWidth} h-[270px] bg-section_text px-[20px] pt-[20px] pb-[44px]`}>
        <div className='flex justify-between pb-6'>
            <div>
            <p className='pb-3'><a className='cursor-pointer hover:text-secondary transition-color duration-200 ease-in' href="https://www.google.com/maps/place/286+Cadman+Plaza+E,+Brooklyn,+NY+11201,+USA/@40.6956249,-73.9941948,17z/data=!3m1!4b1!4m9!1m2!2m1!1s286+Cadman+Plaza,+New+York,+NY+11238,+United+States!3m5!1s0x89c25a49ebbb4533:0x83b2f30fade7bf9f!8m2!3d40.6956216!4d-73.9900944!15sCjMyODYgQ2FkbWFuIFBsYXphLCBOZXcgWW9yaywgTlkgMTEyMzgsIFVuaXRlZCBTdGF0ZXOSARBnZW9jb2RlZF9hZGRyZXNz4AEA?entry=ttu">286 Cadman Plaza, New York,<br /> NY 11238, United States</a></p>
                <ul className='flex gap-x-5'>
                    <li><a href="https://twitter.com/"><img className='cursor-pointer' src="/twitter.png" alt="Twitter" /></a></li>
                    <li><a href="https://www.instagram.com/"><img className='cursor-pointer' src="/instagram.png" alt="Instagram" /></a></li>
                    <li><a href="https://www.facebook.com/"><img className='cursor-pointer' src="/facebook.png" alt="Facebook" /></a></li>
                </ul>
            </div>
            <div>
                <p className='text-right'>Mon - Fri <br /> 08:00 am - 07:00 pm <br /> Sat - Sun <br /> 10:00 am - 06:00 pm</p>
            </div>
        </div>
        <hr className="w-full h-px bg-white" />
        <div className='flex justify-between pt-8'>
            <p className={`${styles.paragraph} text-header_footer_text tracking-widest`}>2023</p>
            <p className={`${styles.paragraph} text-header_footer_text tracking-widest hover:text-secondary transition-color duration-200 ease-in`}><a href="https://app.rs.school/">The Rolling Scopes School</a></p>
            <p className={`${styles.paragraph} text-header_footer_text tracking-widest hover:text-secondary transition-color duration-200 ease-in`}> <a href="https://github.com/Yden00">Yden00</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
