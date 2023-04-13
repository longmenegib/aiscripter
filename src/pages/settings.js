import React from "react";
import AppLayout from "../components/Container";
import Account from "../components/Setting/Account";
import Billing from "../components/Setting/Billing";
import Notification from "../components/Setting/Notification";
import CustomizedTabs from "../components/Setting/Tabs";

export default function Settings() {
    const [value, setValue] = React.useState(0);

    return (
        <AppLayout>
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 h-full">
            <div className="bg-white pt-10" style={{height: 150}}>
                <h1 className="text-3xl font-bold text-indigo-800 mb-2">Settings</h1>
                <CustomizedTabs value={value} setValue={setValue}/>
            </div>
            
            <div className="container mx-auto mt-2">
                <div className="flex flex-wrap mx-2 justify-center">
                   {value === 0 && <Account />}
                   {value === 1 && <Notification />}
                   {value === 2 && <Billing />}
                </div>
            </div>
        </div>
        </AppLayout>
    )
}