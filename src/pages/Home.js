import './HomeStyles.css'
import { useSelector } from 'react-redux'
import BookCards from '../components/BookCards'

export default function Home() {
    const bookResults = useSelector((state) => state.bookResults.value)
    const library = useSelector((state) => state.library.value)
    return (
        <div className='home__container'>
            <BookCards data={bookResults} />
            <BookCards data={library} button="minus" />
        </div>
    )
}

