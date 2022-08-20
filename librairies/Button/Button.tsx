import { handleButton, isCapitalized } from "../../helpers/Layout-utils";

function Button(props: handleButton) {
  const { href, download, title } = props;

  const capitalizedTitle = isCapitalized(title);

  if (download) {
    return (
      <a
        href={href}
        download
        className="text-green border-2 border-green p-2 font-montserrat rounded-xl hover:bg-green hover:text-navy md:text-xl lg:text-2xl"
      >
        {capitalizedTitle}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="text-green border-2 border-green p-2 font-montserrat rounded-xl transition duration-150 ease-in hover:bg-green hover:text-navy md:text-xl lg:text-2xl"
    >
      {capitalizedTitle}
    </a>
  );
}

export default Button;
