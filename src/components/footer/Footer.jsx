const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-[#022c22] px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-[#059669] sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-[#059669] sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} School Archive. All Rights Reserved.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="/"
              className="text-base font-medium text-[#059669] hover:text-[#059669]"
            >
              Home
            </a>
          </li>
          {/* <li>
            <a
              target="blank"
              href="https://simmmple.com/licenses"
              className="text-base font-medium text-[#059669] hover:text-[#059669]"
            >
              License
            </a>
          </li> */}
          <li>
            <a
              target="blank"
              href="/schools"
              className="text-base font-medium text-[#059669] hover:text-[#059669]"
            >
              Schools
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="/"
              className="text-base font-medium text-[#059669] hover:text-[#059669]"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
