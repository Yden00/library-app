import styles from "../style";

export const OurContacts = () => {
  return (
    <section id="contacts">
      <div className={`${styles.flexCenter} flex-col p-5 w-full pb-10`}>
        <h2 className={`${styles.heading2}`}>Our Contacts</h2>
        <div className="w-[50px] h-[1px] border-b border-section_heading border-solid "/>
      </div>
      <div className="flex">
        <div className="px-[23px]">
          <h4 className='font-inter text-section_heading leading-10 tracking-[2px] pb-[34px] font-black text-[20px]'>For all Library inquiries:</h4>
          <p className={`${styles.paragraph} leading-[59px] tracking-widest`}>
            Please call <a className={styles.hover} type="tel" href="tel:+16177302370">(617) 730-2370</a><br />
            For TTY service, please call <a className={styles.hover} type="tel" href="tel:+16177302370">(617) 730-2370</a><br />
            Putterham Library: <a className={styles.hover} type="tel" href="tel:+16177302370">(617) 730-2385</a>
          </p>
          <h4 className="pt-[30px] font-inter text-section_heading leading-10 tracking-[2px] pb-[12px] font-black text-[20px] ">Senior Staff</h4>
          <p className={`${styles.paragraph} leading-[59px] tracking-widest`}><a className={styles.hover} type="mailto" href="mailto:amanda.hirst@example.com">Library Director: <b>Amanda Hirst</b></a></p>
        </div>
        <div className="w-[708px] h-[418px] ml-auto">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-_BxxG9QUWZdTxNIhhyOujGJaZMsnMME&q=286+Cadman+Plaza+W,Brooklyn,NY+11201,USA&zoom=18"
          width="100%"
          height="100%"
          aria-hidden="false"
        ></iframe>
        </div>
      </div>
    </section>
  );
}
