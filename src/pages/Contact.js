import { Link } from "react-router-dom"
export default function Contact()
{
    return(
        <div>
            <nav className="bg-slate-800 p-8">
                <Link to={'/'} className=" m-2 p-2 bg-fuchsia-300">Home Button</Link>
                <Link to={'/about'} className=" m-2 p-2 bg-fuchsia-300">About Button</Link>
                <Link to={'/info'} className=" m-2 p-2 bg-fuchsia-300">Info Button</Link>
            </nav>
            <div className="text-3xl text-center font-bold my-8">
                <h1>Contact Page</h1>
            </div>
        </div>
    )
}