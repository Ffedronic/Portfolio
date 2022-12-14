import { menu } from "../../helpers/Layout-utils";
import NavigationItem from "../NavigationItem/NavigationItem";
import ResumeButton from "librairies/ResumeButton/ResumeButton";

function Navigation() {
  return (
    <div className="hidden md:block">
      <ul className="flex justify-end">
        {menu.map((item) => (
          <NavigationItem
            key={item.level}
            href={item.href}
            level={item.level}
            title={item.title}
            toggleHandler={function () {}}
          />
        ))}
        <ResumeButton />
      </ul>
    </div>
  );
}

export default Navigation;
