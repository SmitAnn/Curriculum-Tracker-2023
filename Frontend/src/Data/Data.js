//Sidebar

import {
    UilEstate,
    UilClipboardAlt,
    UilChart,
    UilUserCircle,
    UilBookOpen,
    UilBell,
    // UilCompressLines,
    // UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import img1 from "../Images/girl1.jfif";
import img2 from "../Images/girl2.jfif";
import img3 from "../Images/catcute.jpg";



export const SidebarData = [
    {
        icon: UilEstate,
        heading: "DashBoard",
        file:"/dashboard"
    },
    {
        icon: UilUserCircle,
        heading: "Profile",
        file:"/user/Profile"
    },
    {
        icon: UilClipboardAlt,
        heading: "Requirement",
        file:"/requirements/ReadAll"
    },
    {
        icon: UilBookOpen,
        heading: "Curriculum",
        file:"/curriculums/ReadAll"
    },
    {
        icon: UilBell,
        heading: "Notification",
        file:"/curriculums/dash"
    },
  
];

export const CardsData = [
    {
        title: "Completed Courses",
        color: {
            backGroud: "linear-gradient(180deg,#bb67ff  0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        // png: UilCompressLines,
        series: [
            {
                name: "Student",
                data: [31, 40, 28, 51, 42, 100, 67],
            }
        ],
    },

    {
        title: "Upcoming Courses",
        color: {
            backGroud: "linear-gradient(180deg ,#FF919D 50%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 50,
        value: "14,970",
        // png: UilMoneyWithdrawal,
        series: [
            {
                name: "Duration",
                data: [2, 5, 20, 11, 4, 10, 60],
            }
        ],
    },

    {
        title: "Ongoing Courses",
        color: {
            backGroud: "linear-gradient((rgb(248,212,154) -146.42%,rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 45,
        value: "25,970",
        // png: UilClipboardAlt,
        series: [
            {
                name: "Duration",
                data: [3, 4, 8, 50, 4, 10, 7],
            }
        ],
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: "Anna",
        noti: "New  Curriculum Launched!",
    },
    {
        img: img2,
        name: "Jenny",
        noti: "Response from Admin",
    },
    {
        img: img3,
        name: "Maha",
        noti: "Contact to HR",
    },
]

