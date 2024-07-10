import { Category, Footer, Header, Navbar, Showcase } from '../components';
import menu from '../data';
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Category /> */}
      <Showcase menu={menu} />
      <Footer />
    </>
  );
};
export default HomeLayout;
