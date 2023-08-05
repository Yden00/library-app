import { useEffect, useState } from "react";
import styles from "../style";
import PaginationContainer from "./slider/PaginationContainer";
import SliderContainer from "./slider/SliderContainer";
export const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1440) {
        setPages(3);
      } else if (screenWidth >= 971 && screenWidth <= 1440) {
        setPages(4);
      } else {
        setPages(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id='about' className={`${styles.flexCenter} flex-col pt-5 pb-4 w-full`}>
      <h2 className={`${styles.heading2}`}>About</h2>
      <div className="w-[50px] h-[1px] border-b border-section_heading border-solid mb-9 "/>
      <p className={`${styles.paragraph} px-5 mb-5 text-center `}>
        The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside
      </p>
      <div>
        <SliderContainer currentPage={currentPage}  setCurrentPage={setCurrentPage} pages={pages}/>
        <PaginationContainer currentPage={currentPage} setCurrentPage={setCurrentPage} dots={pages}/>
      </div>
    </section>
  );
};
