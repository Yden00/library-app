import { seasonBooks } from "../constants";
import styles from "../style";

interface BookListProps {
  setSeason: string;
}

const BookList: React.FC<BookListProps> = ({ setSeason }) => {
  const filteredBooks = seasonBooks.filter((book) => book.season === setSeason);
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
        <button className={`${styles.bookBtn} hover:bg-secondary`}>Buy</button>
      </div>
      ))}
    </ul>
  );
}

export default BookList;
