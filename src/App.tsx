
import { About, CoffeeShop, DigitalLibraryCards, Favourites, Navbar, OurContacts, Welcome } from "./components";
import Evaluation from "./components/Evaluation";
import Footer from "./components/Footer";
import styles from "./style";

type AppProps = {};

const App: React.FC<AppProps> = () => (
  <div className="w-full overflow-hidden">
    <Evaluation/>
    <header className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </header>

    <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Welcome />
        </div>
      </div>

    <main className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Favourites />
        <CoffeeShop />
        <OurContacts />
        <DigitalLibraryCards />
      </div>
    </main>
    <Footer/>
  </div>
);

export default App;