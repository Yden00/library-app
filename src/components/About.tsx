import styles from "../style";
import { sliderImages } from "../constants/index";
import { useState } from "react";



export const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const visibleImages = sliderImages.slice(currentPage, currentPage + 3);


  return (
    <section id='about' className={`${styles.flexCenter} flex-col p-5 w-full`}>
      <h2 className={`${styles.heading2}`}>About</h2>
      <div className="w-[50px] h-[1px] border-b border-section_heading border-solid mb-10 "/>
      <p className={`${styles.paragraph} mb-5`}>
        The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside
      </p>
      <ul className="flex space-x-6 mb-8 overflow-hidden">
        {visibleImages.map((image) => (
          <li key={image.id}>
            <img src={image.path} alt={image.id} className="w-[450px] h-[560px]" />
          </li>
        ))}
      </ul>
      <div className={`${styles.pagination}`}>
        {Array.from({ length: 3 }, (_, idx) => (
          <div
            key={idx}
            className={`${styles.paginationDot} ${currentPage === idx ? styles.paginationActive : ''}`}
            onClick={() => setCurrentPage(idx)}
          />
        ))}
      </div>
    </section>
  );
};
