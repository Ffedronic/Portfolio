import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";

import Logo from "../Logo/Logo";
import OpenMobileNavigation from "librairies/OpenNavIcon/OpenNavIcon";
import CloseMobileNavigation from "librairies/CloseNavIcon/CloseNavIcon";
import Navigation from "../Navigation/Navigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";


export default function Layout(props: any) {
  const [active, setActive] = useState(false);

  function toggleHandler() {
    setActive(!active);
  }

  function closeNavbar() {
    setActive(false);
  }

  return (
    <Fragment>
      <nav className="sticky top-0 bg-navy transition duration-300 ease-in-out">
        <div className="flex justify-between items-center p-5 transition duration-300 ease-in-out">
          <Logo title="My Portofolio" />
          <div className="md:hidden lg:hidden xl:hidden">
            {active ? (
              <OpenMobileNavigation toggleHandler={toggleHandler} />
            ) : (
              <CloseMobileNavigation toggleHandler={toggleHandler} />
            )}
          </div>
          <Navigation />
        </div>
      </nav>
      <div>{active && <MobileNavigation toggleHandler={toggleHandler} />}</div>

      {/**Comments */}
      <main className="w-full h-screen bg-navy" onClick={closeNavbar}>
        {props.children}
      </main>
    </Fragment>
  );
}
