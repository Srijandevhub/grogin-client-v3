import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default UserLayout