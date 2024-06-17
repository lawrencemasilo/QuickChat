import '../App.css';
import '../LandingPage.css';
import LandingPageNavBar from '../components/LandingPage/LandingPageNavBar';
import LandingPageHero from '../components/LandingPage/LandingPageHero';
import LandingPageFeatures from '../components/LandingPage/LandingPageFeatures';
import LandingPageAbout from '../components/LandingPage/LandingPageAbout';
import LandingPageFooter from '../components/LandingPage/LandingPageFooter';


function LandingPage() {
  /*Renders the entire landing page. If the landing page has any bug. It's most likely found here*/
  return (
    <div className="landing-container">
      <LandingPageNavBar />
      <LandingPageHero />
      <LandingPageFeatures />
      <LandingPageAbout />
      <LandingPageFooter />
    </div>
  )
}

export default LandingPage;