import './LibraryStyles.css'

export default function Library() {
    return (
        <div className='library__container'>
            <div className='library__explanation'> As this is primarily a frontend project, I have yet to add a backend. A downside to this is that state management library I used (Redux) does not persist when the user refreshes the page. Since this problem will be easily solved once a backend is added, I decided that for the sake of a MVP the best solution is to show how the logic for <i>Library</i> might work by adding it as a section on the home screen.
                <br />
                <br />
                -Zoe
            </div>
        </div>
    )
}
