import { Fragment } from "react";
import { useState } from "react";

import Logo from "../Logo/Logo";
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
          <div className="md:hidden">
            {active ? (
              <button className="z-10" onClick={toggleHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#64ffda"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button className="z-10" onClick={toggleHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#64ffda"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
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
