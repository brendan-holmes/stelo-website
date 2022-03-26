import Link from 'next/link'
import { useRouter } from 'next/router'
import navbarItems from '../config/navbarItems'

const Navbar = (props) => {
    const getPageName = () => {
        let router = useRouter()
        let route = router.pathname
        console.log('route: ', route)
        let navbarItem = navbarItems.find(i => i.path === route)
        let pageName = ''
        if (navbarItem) {
            pageName = navbarItems.find(i => i.path === route).label
        }
        return pageName
    }

    return (
        <>
            <h1>{getPageName()}</h1>
            <ul>
                {
                    props.navbarItems.map((button, index) => (
                        button.label!=='' ? <li key={button.path}><Link href={button.path}><a>{button.label}</a></Link></li> : <li key={index}>&nbsp;</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navbar