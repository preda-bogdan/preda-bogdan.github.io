import NextJSLogo from "../icons/NextJSLogo";
import TailwindCSSLogo from "../icons/TailwindCSSLogo";
import { socialAccounts } from "../../data/SocialAccounts";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 mt-auto">
        <div className="mx-auto max-w-md py-8 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        
            <div className="mt-6 flex justify-center space-x-6 text-gray-400">
                <span className="flex items-center md:mt-0 md:ml-4 mt-5 grayscale">
                    <a href="https://nextjs.org/"
                       target="_blank"
                       className="h-6 block" rel="noreferrer"
                    >
                        <span className="sr-only">NextJS</span>
                        <NextJSLogo />
                    </a>

                    <a href="https://tailwindcss.com/"
                       target="_blank"
                       className="h-3 ml-2 block" rel="noreferrer"
                    >
                        <span className="sr-only">Tailwind CSS</span>
                        <TailwindCSSLogo />
                    </a>
                </span>
            </div>
            <div className="mt-6 flex justify-center space-x-6">
                {socialAccounts.map((item) => (
                    <a key={item.name}
                       href={item.href}
                       className="text-gray-400 hover:text-gray-500"
                    >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
            </div>
            <p className="mt-6 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Bogdan Preda.</p>
        </div>
      </footer>
  );
}
