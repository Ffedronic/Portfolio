import { ToggleHandler, menu } from "../../helpers/Layout-utils";
import NavigationItem from "../NavigationItem/NavigationItem";

function MobileNavigation(props: ToggleHandler) {
  const { toggleHandler } = props;

  return (
    <ul className="z-10 absolute w-full h-5/6 flex flex-col items-center justify-around bg-navy md:hidden">
      {menu.map((item) => (
        <NavigationItem
          key={item.level}
          href={item.href}
          level={item.level}
          title={item.title}
          toggleHandler={toggleHandler}
        />
      ))}
      <li>
        <a
          href="/documents/resume.pdf"
          download
          className="text-green border-2 border-green p-2 font-montserrat rounded-xl hover:bg-green hover:text-navy md:text-xl"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default MobileNavigation;
