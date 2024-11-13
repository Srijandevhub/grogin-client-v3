import UserLayout from "../../shared/UserLayout"
import ErrorImage from '../../assets/images/404.png'
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <UserLayout>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} className="py-5">
                    <img src={ErrorImage} alt="error"/>
                    <h1 style={{ textAlign: 'center' }} className="mt-5">That Page Cant Be Found</h1>
                    <Link to="/" className="btn btn-success">Home</Link>
                </div>
            </div>
        </UserLayout>
    )
}

export default Error404;