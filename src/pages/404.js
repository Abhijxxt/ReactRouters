import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="w-full h-screen flex justify-center flex-col items-center bg-slate-100">
            <h1 className="text-3xl font-bold">Error 404! Page not Found.</h1>
            <Link className="p-3 m-2 bg-slate-700 text-white rounded-md shadow-md hover:shadow-none" to={'/'}>Go Back</Link>
        </div>
    )
}