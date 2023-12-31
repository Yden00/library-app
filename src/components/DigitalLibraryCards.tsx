import styles from "../style";

const DigitalLibraryCards = () => (
    <section id="libraryCard" className="pt-9">
      <div  className={`${styles.flexCenter} flex-col p-5 w-full pb-10`}>
        <h2 className={`${styles.heading2}`}>Digital Library Cards</h2>
        <div className="w-[50px] h-[1px] border-b border-section_heading border-solid "/>
      </div>
      <div className={`flex md:flex-row flex-col md:justify-between  ${styles.flexCenter}`}>
        <form className="flex flex-col h-[495px] sm:w-[600px] w-[90%] md:pl-5 pl-0"  action="">
          <h4 className="font-inter text-[30px] leading-[40px] font-normal tracking-wide pb-7 text-center pl-5" >Find your Library card</h4>
          <div className="sm:w-[600px] w-full h-[386px] px-[18px] py-[18px] border-[3px] border-secondary">
            <div className="flex flex-col justify-start sm:w-[560px] w-full h-[272px] px-[17px] py-6 bg-secondary">
              <h5 className="font-inter text-[25px] leading-[40px] pb-6 tracking-[1px] font-normal">Brooklyn Public Library</h5>
              <input className={styles.cardInput} type="text" placeholder="Reader's name" />
              <input className={styles.cardInput} type="text" placeholder="Card number" />
            </div>
          <button className="text-center font-inter text-[22px] font-semibold rounded-[2px] border-[2px] py-[4px] px-[38px] mt-5 ml-[28%] border-section_heading hover:bg-secondary transition-color duration-200 ease-in">Check the card</button>
          </div>
        </form>
        <div className={`flex flex-col md:text-right md:h-full jh-[200px]  md:pr-5`}>
          <h4 className="font-forum text-[30px] leading-[40px] font-normal tracking-wide pb-7 md:text-right text-center pl-5">Get a reader card</h4>
          <p className={`${styles.paragraph} tracking-wide md:text-right text-center`}>You will be able to see a reader card after <br /> logging into account or you can register a new <br />account</p>
          <div className="md:pt-[37px] pb-10 md:block flex justify-center">
            <button className="text-center font-inter text-[11px] font-semibold tracking-wide rounded-[2px] border-[1px] px-[15px] py-[6px] border-section_heading mr-5 hover:bg-secondary transition-color duration-200 ease-in">Sign Up</button>
            <button className="text-center font-inter text-[11px] font-semibold tracking-wide rounded-[2px] border-[1px] px-[20px] py-[6px] border-section_heading hover:bg-secondary transition-color duration-200 ease-in">Log in</button>
          </div>
        </div>
      </div>
    </section>
  );
  
export default DigitalLibraryCards
