
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'
import Popular from './components/Popular';
import Admission from './components/Admission';
import Map from './components/Map';
export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Admission/>
      <Map/>
      <Footer />
    </>
  );
}
