import { Image, ImageProps } from "@chakra-ui/react";
import bulls from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: bulls, alt: "good", boxSize: "35px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: meh, alt: "exceptional", boxSize: "25px" },
  };
  return <Image {...EmojiMap[rating]} marginTop={1} />;
};

export default Emoji;
