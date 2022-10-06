import './LibraryStyles.css'
import { useSelector } from 'react-redux'
import BookCards from '../components/BookCards'

export default function Main() {
    const library = useSelector((state) => state.library.value)
    return (
        <div className='library__container'>
            <BookCards data={library} button="minus" />
        </div>
    )
}
