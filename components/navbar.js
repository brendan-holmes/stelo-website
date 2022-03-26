import Link from 'next/link'

const Navbar = (props) => {
    return (
        <ul>
            {props.navbarItems.map(button => (
                <li key={button.path}>
                    <Link href={button.path}><a>{button.label}</a></Link>
                </li>
            ))}
        </ul>
    )
}

export default Navbar