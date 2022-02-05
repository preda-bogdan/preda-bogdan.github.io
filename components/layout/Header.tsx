import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";

import { useRouter } from "next/router";

import { classNames } from "../../common/utils";
import ThemeToggle from "../ThemeToggle";

const navigation = [
  {
    text: "root",
    link: "/",
  },
  {
    text: "/whois",
    link: "/posts",
  },
  {
    text: "/code",
    link: "/code",
  },
  {
    text: "/cook",
    link: "/cook",
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-slate-100 dark:bg-gray-900 shadow-sm shadow-black-100 z-10"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-100 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center font-semibold dark:text-gray-300 text-slate-700 hover:text-sky-400">
                  <Link href={"/"}>Bogdan Preda</Link>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <ThemeToggle />
              </div>
              <div className="sm:items-stretch sm:justify-start absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* {navigation.map(({ text, link }) => {
                    const classes = classNames(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      router.asPath === link
                        ? "border-sky-500 text-gray-900 dark:text-gray-100"
                        : "border-transparent text-gray-500 hover:border-gray-300 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-700"
                    );

                    return (
                      <Link key={text} href={link}>
                        <a className={classes}>{text}</a>
                      </Link>
                    );
                  })} */}
                  {navigation.map(({ text, link }) => {
                    const itemClasses = classNames(
                      "inline-flex items-center px-1 pt-1 text-sm font-medium group",
                      router.asPath === link
                        ? "text-gray-900 dark:text-gray-100"
                        : "border-transparent text-gray-500 hover:border-gray-300 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-700"
                    );

                    const blinkClasses = classNames(
                        "ml-1 animate-cursor-blink",
                        router.asPath === link
                        ? "visible"
                        : "invisible group-hover:visible"
                    )

                    return (
                      <Link key={text} href={link}>
                        <a className={itemClasses}>{text === 'root' ? <HomeIcon className="w-5 h-5" /> : text} <span className={blinkClasses}>_</span></a>
                      </Link>
                    );
                  })}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.map(({ text, link }) => {
                const classes = classNames(
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                  router.asPath === link
                    ? "bg-sky-50 border-sky-500 text-sky-700 dark:text-gray-100 dark:bg-neutral-800"
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                );

                return (
                  <Link key={text} href={link}>
                    <a className={classes}>{text}</a>
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}