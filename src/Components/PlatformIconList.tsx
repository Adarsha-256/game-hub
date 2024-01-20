import {
  FaWindows,
  FaXbox,
  FaAndroid,
  FaPlaystation,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/UseGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    bs: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="red.300"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
