import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <nav>
                <Link to={'/about'} >About Button</Link>
                <Link to={'/contact'} >Contact Button</Link>
                <Link to={'/info'} >Info Button</Link>
            </nav>
            <h1>Home</h1>
        </div>
    )
}