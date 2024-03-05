import { Link } from "react-router-dom"
export default function Contact()
{
    return(
        <div>
            <nav>
                <Link to={'/about'} >About Button</Link>
                <Link to={'/'} >Home Button</Link>
                <Link to={'/info'} >Info Button</Link>
            </nav>
            <h1>Contact Page</h1>
        </div>
    )
}