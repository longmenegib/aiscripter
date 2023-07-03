import MenuType from "../../enums/MenuType"
import URL from "../../urls/frontendUrl"

import { AiOutlineSetting, AiOutlineCompass, AiOutlineUser, AiOutlineVideoCamera, AiOutlineBarChart } from "react-icons/ai";

export default [
    {[MenuType.CATEGORY]: {
        headerTitle: null,
        items: [
             {
                "menu_title": "Dashboard",
                "path": URL.HOME.DASHBOARD,
                "type_multi": null,
                "child_routes": null,
                "icon": <AiOutlineBarChart />
            },
            {
                "menu_title": "My Scripts",
                "path": URL.HOME.DOCUMENT,
                "type_multi": null,
                "child_routes": null,
                "icon": <AiOutlineVideoCamera />
            },
            {
                "menu_title": "Explore",
                "path": URL.HOME.EXPLORE,
                "type_multi": null,
                "child_routes": null,
                "icon": <AiOutlineCompass />
            },
            {
                "menu_title": "Account",
                "path": URL.HOME.PROFILE,
                "type_multi": null,
                "child_routes": null,
                "icon": <AiOutlineUser />
            },
            {
                "menu_title": "Setting",
                "path": URL.HOME.SETTING,
                "type_multi": null,
                "child_routes": null,
                "icon": <AiOutlineSetting />
            },
            // {
            //     "menu_title": "Generator",
            //     "path": URL.HOME.SELF,
            //     "type_multi": null,
            //     "child_routes": null,
            //     "icon": <AiOutlineSetting />
            // },
        ]
    }},
]