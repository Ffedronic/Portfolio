import Link from "next/link";

import { Title } from "../../helpers/Layout-utils"

function Logo(props: Title) {
  
  const { title } = props;

  return (
    <div className="text-xl md:text-2xl text-green font-montserrat">
      <Link href="/">{title}</Link>
    </div>
  );
}

export default Logo;
