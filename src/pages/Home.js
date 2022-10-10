import './HomeStyles.css'
import { useSelector } from 'react-redux'
import BookCards from '../components/BookCards'
import { discover } from '../discover-data'

const hasBooks = (arr) => {
    if (arr !== undefined && arr.length > 0) {
        return true;
    }
    return false;
}
export default function Home() {
    const bookResults = useSelector((state) => state.bookResults.value)
    const library = useSelector((state) => state.library.value)

    return (
        <div className='home__container'>
            {hasBooks(bookResults) ? <>
                <div className='home__results'>Search Results</div>
            </> : <></>}
            <BookCards data={bookResults} limit="15" />
            {hasBooks(library) ? <>
                <div className='home__library'>Library</div>
            </> : <></>}
            <BookCards data={library} button="minus" />
            <div className='discover__library'>Discover</div>
            <BookCards data={discover} limit="10" />
        </div>
    )

}



