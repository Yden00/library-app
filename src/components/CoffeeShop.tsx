import { coffeeeAndTea, dessertsAndCakes } from "../constants";
import styles from "../style";

type MenuItem = {
  name: string;
  price: string;
};

export const CoffeeShop = () => {

function getMenu(type: MenuItem[]) {
  return (
    <ul className={`grid-container grid grid-rows-6  w-[440px] h-[520px]  ${type === coffeeeAndTea ? 'text-left' : 'text-right'}`}>
        <h3 className={`${styles.heading2} text-secondary`}>{type === coffeeeAndTea ? 'Coffee & Tea' : 'Desserts & Cakes'}</h3>
      {type.map((el: MenuItem) => (
      <li className="flex justify-between" key={el.name}>
        <h5 className={`text-[20px] font-inter leading-[40px] tracking-widest w-[220px]`}>{el.name}</h5>
        <hr className="w-[100px] h-[1px] mt-5 border-none bg-secondary my-2" />
        <p className={`text-[20px] mt-1`}>{el.price}</p>
      </li>
      ))}
    </ul>
  )
}

  return (
    <section id="coffeeShop" className="pb-10">
      <div  className={`${styles.flexCenter} flex-col p-5 w-full pb-9`}>
        <h2 className={`${styles.heading2}`}>Coffee Shop</h2>
        <div className="w-[50px] h-[1px] border-b border-section_heading border-solid "/>
        <p className={`${styles.paragraph} text-center pt-10 tracking-widest`}>In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. <br />You can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts <br /> from bakery.</p>
      </div>
      <div className="flex justify-between">
          <div className="px-5 flex">
            {getMenu(coffeeeAndTea)}
          </div>
          <div className="px-5 flex">
            {getMenu(dessertsAndCakes)}
          </div>
      </div>
    </section>
  );
}
