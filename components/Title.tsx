import { Text } from "react-native";
import { STYLES } from "../constants";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return <Text style={STYLES.textPrimary}>{text}</Text>;
};

export default Title;
