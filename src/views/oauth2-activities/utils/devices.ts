import { IconType } from "react-icons";
import { AiFillAppstore } from "react-icons/ai";
import { IoLaptopOutline, IoPhonePortraitOutline } from "react-icons/io5";

const patternList = ["iPhone", "Macintosh", "Android", "Windows"];

export const deviceMap = (ua: string, uap: string) => {
  if (uap) {
    return uap;
  }
  for (const e of patternList) {
    if (ua.includes(e)) return e;
  }
  return "Unknown";
};
