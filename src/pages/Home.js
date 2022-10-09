import './HomeStyles.css'
import { useSelector } from 'react-redux'
import BookCards from '../components/BookCards'
import { discover } from '../discover-data'

export default function Home() {
    const bookResults = useSelector((state) => state.bookResults.value)
    const library = useSelector((state) => state.library.value)
    return (
        <div className='home__container'>
            <div className='home__results'>Search Results</div>
            <BookCards data={bookResults} />
            <div className='home__library'>Library</div>
            <BookCards data={library} button="minus" />
            <div className='discover__library'>Discover</div>
            <BookCards data={discover} />
        </div>
    )
}

