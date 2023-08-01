import { seasonBooks } from "../constants";
import styles from "../style";
import { useState } from 'react';

interface BookListProps {
  setSeason: string;
}

const BookList: React.FC<BookListProps> = ({ setSeason }) => {
  const filteredBooks = seasonBooks.filter((book) => book.season === setSeason);

  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);

  const handleButtonClick = (bookId: string) => {
    setDisabledButtons((prev) => [...prev, bookId]);
  };

  return (
    <ul className="grid grid-cols-2 gap-x-[220px] gap-y-[40px]">
      {filteredBooks.map(book => (
        <div key={book.id} className="book-card flex flex-col py-3 px-5">
        <div className="pb-5">
          <h3 className="font-forum font-normal leading-[40px] tracking-wider text-[22px] h-[40px]">Staff Picks</h3>
          <div className="w-[58px] h-[1px] border-b border-solid border-secondary "/>
        </div>
        <strong className="font-inter font-bold leading-[40px] tracking-wider text-[17px] uppercase">{`${book.name}`}</strong>
        <strong className="font-inter font-bold leading-[40px] tracking-wider text-[17px] pb-4">{`By ${book.author}`}</strong>
        <p className=" w-[340px] h-[340px] text-black font-inter text-base font-normal leading-[40px] tracking-wider capitalize pb-4 pl-1">{book.description}</p>
        <img src={book.image} alt="book" />
        <button
          disabled={disabledButtons.includes(book.id)}
          className={`${
            styles.bookBtn
          } ${
            disabledButtons.includes(book.id) ? 'cursor-not-allowed tracking-wider border-[#BB945F] text-[#BB945F]' : 'hover:bg-secondary'
          } transition-color duration-200 ease-in`}
          onClick={() => handleButtonClick(book.id)}
        >
          {disabledButtons.includes(book.id) ? 'Own' : 'Buy'}
        </button>
      </div>
      ))}
    </ul>
  );
}

export default BookList;
