import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const Navbar = ({ links }: { links: any[] }) => {
  const router = useRouter();

  return (
    <header className="py-4 px-6 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-none h-full">
        <div className="flex flex-1 items-center">
          <Link href="/" passHref>
            <a className="flex">
              <Image
                src="/logo-text.png"
                alt="ui challenge logo"
                width={150}
                height={40}
              />
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          {links.length > 0 && (
            <nav className="inline-flex gap-6 dark:text-slate-200 items-center capitalize font-semibold">
              {links.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <a
                    className={`${
                      router.pathname === href ? "text-sky-500" : ""
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
