import { sliderImages } from "../../constants/index";
import SliderItem from "./SliderItem";

interface SliderContainerProps {
  pages: number;
  setCurrentPage: Function;
  currentPage: number;
}

const PAGE_WIDTH = 475;
const SliderContainer = ({ pages, setCurrentPage, currentPage }: SliderContainerProps) => {

  const handleLeftArrowClick = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  const handleRightArrowClick = () => {
    if (currentPage < pages-1) {
        setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="main-slider-container w-[450px] md:w-[925px] xl:w-[1350px]">
      <img className="h-[25px] w-[25px] cursor-pointer xl:hidden block" src="./Carret_Left.png" alt="Carret left" onClick={handleLeftArrowClick}/>
      <div className={`overflow-hidden justify-center align-middle`}>
      <ul className={`all-pages`} style={{ transform: `translateX(-${currentPage * PAGE_WIDTH}px)`}}>
          {sliderImages.map((image, index) => (
            <SliderItem key={index} image={image} />
          ))}
        </ul>
      </div>
      <img className="h-[25px] w-[25px] cursor-pointer xl:hidden block" src="./Carret_Right.png" alt="Carret left" onClick={handleRightArrowClick}/>
    </div>
  );
};

export default SliderContainer;
