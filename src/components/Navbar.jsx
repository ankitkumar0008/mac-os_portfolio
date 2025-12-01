import dayjs from "dayjs";
import { navIcons, navLinks } from "../Constants/index.js";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Ankit's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
      <div>
        <ul>
            {navIcons.map(({id,img})=>{
                return <li key = {id} >
                    <img src={img} className="icon-hover" alt={`icon-${id}`}></img>
                </li>
            })}
            </ul>
            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
      </div>
      
    </nav>
  );
};
export default Navbar;
