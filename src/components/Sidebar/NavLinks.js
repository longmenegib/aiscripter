import MenuType from "../../enums/MenuType"
import URL from "../../urls/frontendUrl"

export default [
    {[MenuType.CATEGORY]: {
        headerTitle: null,
        items: [
             {
                "menu_title": "Dashboard",
                "menu_icon": "fa fa-bell",
                "path": URL.HOME.DASHBOARD,
                "type_multi": null,
                "child_routes": null,
            },
             {
                "menu_title": "Setting",
                "menu_icon": "fa fa-user",
                "path": URL.HOME.SETTING,
                "type_multi": null,
                "child_routes": null,
            },
            {
                "menu_title": "Generator",
                "menu_icon": "fa fa-bell",
                "path": URL.HOME.SELF,
                "type_multi": null,
                "child_routes": null,
            },
            {
                "menu_title": "Documents",
                "menu_icon": "fa fa-commenting-o",
                "path": URL.HOME.DOCUMENT,
                "type_multi": null,
                "child_routes": null,
            },
            {
                "menu_title": "Subscriptions",
                "menu_icon": "fa fa-dollar",
                "path": URL.HOME.SUBSCRIPTION,
                "type_multi": null,
                "child_routes": null,
            },
            {
                "menu_title": "Templates",
                "menu_icon": "",
                "path": URL.HOME.TEMPLATES,
                "type_multi": null,
                "child_routes": null,
            }
        ]
    }},
]