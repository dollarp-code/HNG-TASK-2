import { useState } from 'react';
import MenuItems from './MenuItems';
import Category from './Category';
// import menu from '..data';
const Showcase = ({ menu }) => {
  //   const { id, title, dec, price, reviews, img } = menuItems;
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <div className="align">
      <Category />
      <section className="showcase-container">
        {menuItems.map((item) => {
          return <MenuItems key={item.id} {...item} />;
        })}
      </section>
      <button className="btn-showcase">Explore More</button>
    </div>
  );
};
export default Showcase;
