import NavBar from './NavBar';
import Footer from './Footer';
import WelcomeAlert from './WelcomeAlert';
import FetchSection from './FetchSection';


function HomePage() {

  return (
    <>
    <NavBar></NavBar>    
    <WelcomeAlert></WelcomeAlert>
    <FetchSection/>
    <div className="mb-5 pb-5"></div>
    <Footer></Footer>
    </>
  )
}

export default HomePage