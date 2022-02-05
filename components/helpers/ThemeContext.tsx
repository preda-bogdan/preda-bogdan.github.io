import { createContext } from "react";

type userContext = {
    enabled: boolean,
    toggle: React.MouseEventHandler<HTMLButtonElement>,
}
const defaultContext: userContext = { enabled: false, toggle: (): void => {} };
const ThemeContext = createContext(defaultContext);

export default ThemeContext;