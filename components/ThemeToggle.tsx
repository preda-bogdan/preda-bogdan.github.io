import { useContext } from "react";
import { LightBulbIcon } from "@heroicons/react/outline";
import { LightBulbIcon as LightBulbSolid } from "@heroicons/react/solid";
import ThemeContext from "./helpers/ThemeContext";
import { classNames } from "../common/utils";

export default function ThemeToggle() {
  const { toggle, enabled } = useContext(ThemeContext);

  const iconClasses = classNames(
    "w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-white"
  );

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-100 hover:text-gray-500 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-neutral-800 md:dark:hover:bg-transparent"
    >
      <span className="sr-only">Toggle dark mode</span>
      {enabled ? (
        <LightBulbIcon className={iconClasses} />
      ) : (
        <LightBulbSolid className={iconClasses} />
      )}
    </button>
  );
}