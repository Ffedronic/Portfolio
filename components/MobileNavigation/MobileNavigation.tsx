import { ToggleHandler, menu } from "../../helpers/Layout-utils";
import NavigationItem from "../NavigationItem/NavigationItem";
import ResumeButton from "librairies/ResumeButton/ResumeButton";

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
      <ResumeButton />
    </ul>
  );
}

export default MobileNavigation;
