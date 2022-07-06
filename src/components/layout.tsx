import Head from "next/head";
import Navbar from "./navbar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const links = [
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const Layout = ({ title, children }: Props) => (
  <>
    <Head>
      <title>UI Challenge {title ? `| ${title}` : null}</title>
    </Head>

    <Navbar links={links} />

    <main>
      <div className="p-6">{children}</div>
    </main>
  </>
);

export default Layout;
