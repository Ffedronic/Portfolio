import Link from "next/link";
import { ToggleHandler } from "../../helpers/Layout-utils";

interface NavigationItem extends ToggleHandler {
  href: string;
  level: string;
  title: string;
}

function NavigationItem(props: NavigationItem) {
  const { href, level, title, toggleHandler } = props;

  return (
    <li onClick={toggleHandler} className="md:hover:border-b-4 font-montserrat md:hover:border-green md:hover:pb-1 md:mr-10">
      <Link href={href}>
      <a>
        <span className="text-green mr-2">{level}</span>
        <span className="text-white">{title}</span>
      </a>
      </Link>
    </li>
  );
}

export default NavigationItem;
