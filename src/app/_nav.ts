import { INavData } from "@coreui/angular";

export const navItemsAdmin: INavData[] = [
  // {
  //   name: "Dashboard",
  //   url: "/dashboard",
  //   icon: "icon-speedometer",
  //   badge: {
  //     variant: "info",
  //     text: "NEW",
  //   },
  // },
  {
    name: "User Management",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "List User",
        url: "/list-user",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Level Management",
    url: "/level",
    icon: "icon-puzzle",
    children: [
      {
        name: "List level",
        url: "/list-level",
        icon: "icon-puzzle",
      },
      {
        name: "Add level",
        url: "/add-level",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Lesson Management",
    url: "/lesson",
    icon: "icon-puzzle",
    children: [
      {
        name: "List lesson",
        url: "/list-lesson",
        icon: "icon-puzzle",
      },
      {
        name: "Add lesson",
        url: "/add-lesson",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Kanji Management",
    url: "/kanji",
    icon: "icon-puzzle",
    children: [
      {
        name: "List kanji",
        url: "/list-kanji",
        icon: "icon-puzzle",
      },
      {
        name: "Add kanji",
        url: "/add-kanji",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Vocabulary Management",
    url: "/vocabulary",
    icon: "icon-puzzle",
    children: [
      {
        name: "List Vocabulary",
        url: "/list-vocabulary",
        icon: "icon-puzzle",
      },
      {
        name: "Add Vocabulary",
        url: "/add-vocabulary",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Quiz Multiple Management",
    url: "/quiz-multiple",
    icon: "icon-puzzle",
    children: [
      {
        name: "List Quiz Multiple",
        url: "/list-quiz-multiple",
        icon: "icon-puzzle",
      },
      {
        name: "Add Quiz Multiple",
        url: "/add-quiz-multiple",
        icon: "icon-puzzle",
      },
    ],
  },
];

export const navItemsUser: INavData[] = [

];
