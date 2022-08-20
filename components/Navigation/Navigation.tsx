import { menu } from "../../helpers/Layout-utils";
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
          <a
            href="/documents/resume.pdf"
            download
            className="text-green border-2 border-green p-2 font-montserrat rounded-xl hover:bg-green hover:text-navy md:text-xl"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
