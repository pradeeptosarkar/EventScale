import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
  <div className="wrapper p-5">
    {/* First Section - Logo */}
    <div className="flex justify-center text-center mb-4">
      <Link href="/">
        <Image
          src="/assets/images/logo(2).png"
          alt="logo"
          width={200}
          height={60}
        />
      </Link>
    </div>

    {/* Second Section - Remaining Components */}
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/pradeeptosarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-indigo-600 hover:underline"
        >
          Pradeepto Sarkar
        </a>
      </p>
      <p>2023 eventscale. All Rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
