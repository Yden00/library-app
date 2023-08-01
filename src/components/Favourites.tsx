import styles from "../style";
import { seasonsList } from "../constants";
import { useState } from "react";
import BookList from "./BookList";

const Favourites = () => {
  const [selectedLabel, setSelectedLabel] = useState('winter') 
  return (
    <section id="favorites" className="flex flex-col px-5 pb-10 pt-2">
      <div  className={`${styles.flexCenter} flex-col p-5 w-full pb-9`}>
        <h2 className={`${styles.heading2}`}>Favorites</h2>
        <div className="w-[50px] h-[1px] border-b border-section_heading border-solid "/>
      </div>
      <div className="flex justify-start flex-col pb-4">
        <p className="font-inter text-black font-bold text-[20px] mb-9 ">Pick favorites of season</p>
        <ul className="flex w-full pb-5">
          {seasonsList.map((season, index) => (
            <li key={`${season}${index}`} onClick={() => setSelectedLabel(`${season}`)} className="flex items-center space-x-6 pr-[89px] cursor-pointer">
              <input name="season" id={season} type="radio" className='w-4 h-4 cursor-pointer' checked={selectedLabel === season} />
              <label htmlFor={season} className={`cursor-pointer ml-2 text-[20px] font-inter ${selectedLabel === season ? 'font-bold' : ''}`}>
                {season.charAt(0).toUpperCase() + season.slice(1)}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <BookList setSeason={selectedLabel}/>
    </section>
  );
}

export default Favourites
