import { menu } from "../../helpers/Layout-utils";
import Button from "librairies/Button/Button";
import NavigationItem from "../NavigationItem/NavigationItem";

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
        <li>
          <Button href="/documents/resume.pdf" download={true} title="resume" />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
