export default function Footer({ children }) {
    const showCreatedByMessage = false
    if (showCreatedByMessage) {
        return <div className='footer'><a href="https://github.com/brendan-holmes">Site by Brendan</a></div>
    } else {
        return null
    }
}