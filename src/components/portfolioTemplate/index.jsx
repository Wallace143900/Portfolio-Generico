import { Header } from "../Header";
import { Footer } from "../Footer";

export const PortfolioTemplate = ({ children }) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}