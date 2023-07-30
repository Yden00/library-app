import styles from '../style';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} text-header_footer_text`}>
      <div className={`${styles.boxWidth} h-[270px] bg-section_text px-[20px] pt-[20px] pb-[44px]`}>
        <div className='flex justify-between pb-6'>
            <div>
                <p className='pb-3'>286 Cadman Plaza, New York,<br /> NY 11238, United States</p>
                <div className='flex gap-x-5'>
                    <a href="https://twitter.com/"><img className='cursor-pointer' src="src/assets/icons/Twitter_icon.jpg" alt="Twitter" /></a>
                    <a href="https://www.instagram.com/"><img className='cursor-pointer' src="src/assets/icons/Instagram_icon.jpg" alt="Instagram" /></a>
                    <a href="https://www.facebook.com/"><img className='cursor-pointer' src="src/assets/icons/Facebook_icon.jpg" alt="Facebook" /></a>
                </div>
            </div>
            <div>
                <p className='text-right'>Mon - Fri <br /> 08:00 am - 07:00 pm <br /> Sat - Sun <br /> 10:00 am - 06:00 pm</p>
            </div>
        </div>
        <hr className="w-full h-px bg-white" />
        <div className='flex justify-between pt-8'>
            <p className={`${styles.paragraph} text-header_footer_text tracking-widest`}>2023</p>
            <p className={`${styles.paragraph} text-header_footer_text tracking-widest`}>The Rolling Scopes School</p>
            <p className={`${styles.paragraph} text-header_footer_text tracking-widest`}> <a href="https://github.com/Yden00">Yden00</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
