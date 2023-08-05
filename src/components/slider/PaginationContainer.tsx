
interface PaginationContainerProps {
    dots: number;
    currentPage: number;
    setCurrentPage: Function;
  }
  
const PaginationContainer = ( { dots, currentPage, setCurrentPage } :PaginationContainerProps ) => {
  return (
    <div className={`pagination`}>
          {Array.from({ length: dots }).map((_, idx) => (
            <div
            key={idx}
            className={`paginationDot ${currentPage === idx ? 'active' : ''} cursor-pointer`}
            onClick={() => setCurrentPage(idx)}
            />
          ))}
        </div>
  )
}

export default PaginationContainer
