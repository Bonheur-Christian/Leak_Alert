// import { MdOutlineFileDownload } from "react-icons/md";

function Bar() {
  const Links = [
    { label: "Home", link: "/" },
    { label: "About", link: "#about" },
    { label: "Features", link: "#feature" },
    { label: "How It Work", link: "#mechanism" },
    { label: "Contacts", link: "#contact" },
  ];

  return (
    <div className="pt-6">
      <nav className="flex justify-between items-center">
        <div>
          <img src="/svg/logo.svg" alt="This is Company logo" />
        </div>
        <div>
          <ul className="flex gap-20">
            {Links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="font-lato text-xl font-medium underline-animation"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Bar;
