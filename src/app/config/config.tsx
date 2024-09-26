import { HeroPicking } from "../../pages/HeroPicking";
import { Home } from "../../pages/Home";
import Game from "../../pages/ingame";

export const APP_ROUTES = {
    MAIN: [
        {path: "/home", element: <Home />},
        {path: "/picking", element: <HeroPicking />},
        {path: "/board", element: <Game />}
    ]
}