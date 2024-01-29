import { SiWebmoney, SiZalo } from "react-icons/si";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
  BsPostcard,
  BsFileEarmarkPost,
} from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineNodeCollapse,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  FaChartLine,
  FaFirstOrderAlt,
  FaHome,
  FaRegNewspaper,
  FaTiktok,
  FaTrademark,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  BiCube,
  BiHappy,
  BiHive,
  BiLoader,
  BiNetworkChart,
  BiPencil,
  BiSlideshow,
  BiSolidUserAccount,
} from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCategory,
  TbCubeSend,
  TbListDetails,
  TbReport,
  TbSeo,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdConnectWithoutContact,
  MdManageAccounts,
  MdMiscellaneousServices,
  MdOndemandVideo,
  MdOutlineHistory,
  MdOutlineLocalCarWash,
  MdOutlinePostAdd,
  MdPolicy,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoIosConstruct, IoMdColorWand } from "react-icons/io";
import { GiExitDoor, GiStarSattelites } from "react-icons/gi";

import { CiBoxList, CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import {
  IoFlashOutline,
  IoImagesOutline,
  IoListSharp,
  IoSettingsOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { PiCirclesThreePlusDuotone, PiShareNetworkLight } from "react-icons/pi";
import { LuGitCompare } from "react-icons/lu";
import { GoGitBranch } from "react-icons/go";

interface IconMappingType {
  [key: string]: IconType;
}
export const WebsiteUrl = "nhakhoathammytranhuy.com";
export const DB_URL = "nhakhoathammytranhuy";

export const IconMapping: IconMappingType = {
  IoFlashOutline: IoFlashOutline,
  MdManageAccounts: MdManageAccounts,
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
  FaFirstOrderAlt: FaFirstOrderAlt,
  AiOutlineSlack: AiOutlineSlack,
  BsBatteryCharging: BsBatteryCharging,
  IoMdColorWand: IoMdColorWand,
  MdAirlineSeatReclineNormal: MdAirlineSeatReclineNormal,
  CgSize: CgSize,
  MdOutlineLocalCarWash: MdOutlineLocalCarWash,
  TbCarouselHorizontal: TbCarouselHorizontal,
  GiExitDoor: GiExitDoor,
  AiOutlineProfile: AiOutlineProfile,
  BsFillSendExclamationFill: BsFillSendExclamationFill,
  BsFillSendCheckFill: BsFillSendCheckFill,
  TbCubeSend: TbCubeSend,
  BsFillSendXFill: BsFillSendXFill,
  CiViewList: CiViewList,
  MdMiscellaneousServices: MdMiscellaneousServices,
  FaHome: FaHome,
  IoIosConstruct: IoIosConstruct,
  FaRegNewspaper: FaRegNewspaper,
  IoSettingsOutline: IoSettingsOutline,
  SiWebmoney: SiWebmoney,
  FaTrademark: FaTrademark,
  TbSeo: TbSeo,
  TbCategory: TbCategory,
  PiCirclesThreePlusDuotone: PiCirclesThreePlusDuotone,
  CiBoxList: CiBoxList,
  GiStarSattelites: GiStarSattelites,
  BsPostcard: BsPostcard,
  IoListSharp: IoListSharp,
  MdPolicy: MdPolicy,
  BsFileEarmarkPost: BsFileEarmarkPost,
  FaChartLine: FaChartLine,
  IoShareSocialOutline: IoShareSocialOutline,
  PiShareNetworkLight: PiShareNetworkLight,
  IoImagesOutline: IoImagesOutline,
  BiSolidUserAccount: BiSolidUserAccount,
  AiOutlineNodeCollapse: AiOutlineNodeCollapse,
  MdOutlineHistory: MdOutlineHistory,
  TbReport: TbReport,
  BiLoader: BiLoader,
  BiPencil: BiPencil,
  BiCube: BiCube,
  BiHappy: BiHappy,
  BiHive: BiHive,
  LuGitCompare: LuGitCompare,
  GoGitBranch: GoGitBranch,
  MdConnectWithoutContact: MdConnectWithoutContact,
  MdOndemandVideo: MdOndemandVideo,
};

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white",
    field: "zalo",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
    field: "facebook",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
    field: "fanpage",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
    field: "messenger",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
    field: "instagram",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
    field: "tiktok",
  },
];

export const AdminPageHeaderItems = [
  {
    label: "Cấu Hình",
    value: "cau-hinh",
    icon: "IoSettingsOutline",
    children: [
      // {
      //   label: "Thông Tin Website",
      //   value: "thong-tin-website",
      //   icon: "SiWebmoney",
      // },
      // {
      //   label: "Liên Hệ",
      //   value: "lien-he",
      //   icon: "MdConnectWithoutContact",
      // },
      // {
      //   label: "Cấu Hình SEO",
      //   value: "cau-hinh-seo",
      //   icon: "TbSeo",
      // },
    ],
  },
  // {
  //   label: "Sản Phẩm",
  //   value: "danh-sach-san-pham",
  //   icon: "GiStarSattelites",
  //   children: [
  //     {
  //       label: "Danh Sách Sản Phẩm",
  //       value: "danh-sach-san-pham",
  //       icon: "PiCirclesThreePlusDuotone",
  //     },
  //     {
  //       label: "Danh Mục Sản Phẩm",
  //       value: "danh-muc-san-pham",
  //       icon: "CiBoxList",
  //     },
  //   ],
  // },
  {
    label: "Bài Viết",
    value: "danh-sach-bai-viet",
    icon: "BsPostcard",
    children: [
      {
        label: "Danh Sách Bài Viết",
        value: "danh-sach-bai-viet",
        icon: "IoListSharp",
      },
      {
        label: "Danh Mục Bài Viết",
        value: "danh-muc-bai-viet",
        icon: "CgListTree",
      },
      // {
      //   label: "Điều Khoản Sử Dụng",
      //   value: "dieu-khoan-su-dung",
      //   icon: "MdPolicy",
      // },
      {
        label: "Bài giới thiệu",
        value: "bai-gioi-thieu",
        icon: "BsFileEarmarkPost",
      },
      // {
      //   label: "Cấu Hình SEO",
      //   value: "cau-hinh-seo",
      //   icon: "FaChartLine",
      // },
    ],
  },
  {
    label: "Truyền Thông",
    value: "kenh-truyen-thong",
    icon: "IoShareSocialOutline",
    children: [
      {
        label: "Kênh Truyền Thông",
        value: "kenh-truyen-thong",
        icon: "PiShareNetworkLight",
      },
      {
        label: "Slide giới thiệu",
        value: "slide-gioi-thieu",
        icon: "BiSlideshow",
      },
      {
        label: "Bộ sưu tập",
        value: "bo-suu-tap",
        icon: "IoImagesOutline",
      },
      // {
      //   label: "Video",
      //   value: "video",
      //   icon: "MdOndemandVideo",
      // },
    ],
  },
  // {
  //   label: "Tài Khoản",
  //   value: "thong-tin-tai-khoan",
  //   icon: "MdManageAccounts",
  //   children: [
  //     {
  //       label: "Thông Tin Tài Khoản",
  //       value: "thong-tin-tai-khoan",
  //       icon: "AiOutlineProfile",
  //     },
  //     {
  //       label: "Quản Lý Tài Khoản",
  //       value: "quan-ly-tai-khoan",
  //       icon: "BiSolidUserAccount",
  //     },
  //     // {
  //     //   label: "Phân Quyền",
  //     //   value: "phan-quyen",
  //     //   icon: "AiOutlineNodeCollapse",
  //     // },
  //     // {
  //     //   label: "Lịch Sử Hoạt Động",
  //     //   value: "lich-su-hoat-dong",
  //     //   icon: "MdOutlineHistory",
  //     // },
  //   ],
  // },
  // {
  //   label: "Báo Cáo",
  //   value: "bao-cao",
  //   icon: "TbReport",
  //   children: [
  //     // {
  //     //   label: "Lượt Truy Cập",
  //     //   value: "luot-truy-cap",
  //     //   icon: "BiLoader",
  //     // },
  //     // {
  //     //   label: "Phản Hồi của Khách Hàng",
  //     //   value: "Phan-hoi-cua-khach-hang",
  //     //   icon: "BiPencil",
  //     // },
  //     // {
  //     //   label: "Đơn Hàng",
  //     //   value: "don-hang",
  //     //   icon: "BiCube",
  //     // },
  //     // {
  //     //   label: "Sản Phẩm Xem Nhiều",
  //     //   value: "san-pham-xem-nhieu",
  //     //   icon: "BiHappy",
  //     // },
  //   ],
  // },
  // {
  //   label: "Tiện Ích",
  //   value: "tien-ich",
  //   icon: "BiHive",

  //   children: [
  //     {
  //       label: "Đối tác",
  //       value: "doi-tac",
  //       icon: "LuGitCompare",
  //     },
  //     {
  //       label: "Chi Nhánh",
  //       value: "chi-nhanh",
  //       icon: "GoGitBranch",
  //     },
  //   ],
  // },
];

/*<---------------------------------------------------------- Custom System ----------------------------------------------------------> */
export const HeaderItems = [
  {
    label: "Trang Chủ",
    value: "",
  },
  {
    label: "Về Nha Khoa",
    value: "gioi-thieu",
    children: [
      {
        label: "Đội Ngũ",
        value: "gioi-thieu/doi-ngu-bac-si",
      },
      {
        label: "Công Nghệ",
        value: "gioi-thieu/cong-nghe",
      },
      {
        label: "Lịch Sử",
        value: "gioi-thieu/lich-su",
      },
    ],
  },
  {
    label: "Dịch Vụ",
    value: "dich-vu",
    children: [
      {
        label: "Implant",
        value: "dich-vu/implant",
      },
      {
        label: "Phục Hình Răng",
        value: "dich-vu/phuc-hinh-rang",
      },
      {
        label: "Chỉnh Nha - Niềng Răng",
        value: "dich-vu/chinh-nha-nieng-rang",
      },
      {
        label: "Nha Chu",
        value: "dich-vu/nha-chu",
      },
      {
        label: "Nội Nha",
        value: "dich-vu/noi-nha",
      },
      {
        label: "Trám Răng",
        value: "dich-vu/tram-rang",
      },
      {
        label: "Tẩy Trắng Răng",
        value: "dich-vu/tay-trang-rang",
      },
      {
        label: "Nhổ Răng/Tiểu Phẫu Răng",
        value: "dich-vu/nho-rang-tieu-phau-rang",
      },
      {
        label: "Răng Trẻ Em",
        value: "dich-vu/rang-tre-em",
      },
    ],
  },
  {
    label: "Báo Giá",
    value: "bao-gia",
  },

  {
    label: "Tin Tức",
    value: "tin-tuc",
  },
  {
    label: "Thắc Mắc",
    value: "thac-mac",
  },
  {
    label: "Liên Hệ",
    value: "lien-he",
  },
];

export const ToolsTipsSocialMediaItems = [
  {
    title: "zalo.me/...",
  },
  {
    title: "www.facebook.com/...",
  },
  {
    title: "www.facebook.com/plugins/page.php?href=....",
  },
  {
    title: "",
  },
  {
    title: "www.instagram.com/...",
  },
  {
    title: "www.tiktok.com/...",
  },
  {
    title: "www.twitter.com/...",
  },
  {
    title: "www.youtube.com/...",
  },
];

/*<-------------------------------------------------------------------------------------------------------------------- CUSTOM --------------------------------------------------------------------------------------------------------------------> */

export const ProductTypeItems = [
  {
    label: "Wifi Camera",
    value: "wifi-camera",
  },
  {
    label: "Dual lens Camera",
    value: "dual-lens-camera",
  },
  {
    label: "4G Camera",
    value: "4g-camera",
  },
  {
    label: "Battery Camera",
    value: "battery-camera",
  },
  {
    label: "Camera Trọn bộ",
    value: "camera-tron-bo",
  },
  {
    label: "Phụ Kiện Camera",
    value: "phu-kien-camera",
  },
  {
    label: "Thiết Bị Thông Minh",
    value: "thiet-bi-thong-minh",
  },
];

export const PostsTypeItems = [
  {
    label: "Về Nha Khoa",
    value: "Về Nha Khoa",
  },
  {
    label: "Dịch Vụ",
    value: "Dịch Vụ",
  },
  {
    label: "Tin tức",
    value: "Tin tức",
  },
  {
    label: "Thắc Mắc",
    value: "Thắc Mắc",
  },
];

export {};
