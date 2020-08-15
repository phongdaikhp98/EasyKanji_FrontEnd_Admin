import { INavData } from "@coreui/angular";

export const navItemsAdmin: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    badge: {
      variant: "info",
      text: "NEW",
    },
  },
  {
    name: "Tài khoản",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "Thông tin tài khoản",
        url: "/infor",
        icon: "icon-puzzle",
      },
      {
        name: "Đổi mật khẩu",
        url: "/change-pwd",
        icon: "icon-puzzle",
      },
      {
        name: "Lịch sử giao dịch",
        url: "/history-money",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Quản lí tài khoản",
    url: "/users",
    icon: "icon-layers",
    children: [
      {
        name: "Danh sách tài khoản",
        url: "/users",
        icon: "icon-people",
      },
      {
        name: "Thêm mới tài khoản",
        url: "/users/create",
        icon: "icon-user-follow",
      },
      {
        name: "Lịch sử giao dịch",
        url: "/users/history",
        icon: "icon-notebook",
      },
    ],
  },
  {
    name: "Tiện ích",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "Hóa đơn",
        url: "/user/infor",
        icon: "icon-puzzle",
      },
      {
        name: "Lịch sử thanh toán",
        url: "/user/change-pwd",
        icon: "icon-puzzle",
      },
    ],
  },

  {
    name: "Test all user",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "Hóa đơn",
        url: "/user/infor",
        icon: "icon-puzzle",
      },
      {
        name: "Lịch sử thanh toán",
        url: "/user/change-pwd",
        icon: "icon-puzzle",
      },
    ],
  },
];

export const navItemsUser: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    badge: {
      variant: "info",
      text: "NEW",
    },
  },
  {
    name: "Tài khoản",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "Thông tin tài khoản",
        url: "/infor",
        icon: "icon-puzzle",
      },
      {
        name: "Đổi mật khẩu",
        url: "/change-pwd",
        icon: "icon-puzzle",
      },
      {
        name: "Lịch sử giao dịch",
        url: "/history-money",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Tiện ích",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "Hóa đơn",
        url: "/user/infor",
        icon: "icon-puzzle",
      },
      {
        name: "Lịch sử thanh toán",
        url: "/user/change-pwd",
        icon: "icon-puzzle",
      },
    ],
  },

  {
    name: "Test all user",
    url: "/user",
    icon: "icon-puzzle",
    children: [
      {
        name: "Hóa đơn",
        url: "/users/test",
        icon: "icon-puzzle",
      },
      {
        name: "Lịch sử thanh toán",
        url: "/user/change-pwd",
        icon: "icon-puzzle",
      },
    ],
  },
];
