import { Fragment } from "react";
import { useState } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import CloseNavButton from "librairies/CloseNavIcon/CloseNavIcon";
import OpenNavButton from "librairies/OpenNavIcon/OpenNavIcon";

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
          <div className="md:hidden">
            {active ? (
              <CloseNavButton toggleHandler={toggleHandler}/>
            ) : (
              <OpenNavButton toggleHandler={toggleHandler} />
            )}
          </div>
          <Navigation />
        </div>
      </nav>
      <div>{active && <MobileNavigation toggleHandler={toggleHandler} />}</div>

      {/**Comments */}
      <main className=" h-screen px-5" onClick={closeNavbar}>
        {props.children}
      </main>
    </Fragment>
  );
}
