import { Image } from "expo-image";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Base_Image_URL = Constants.expoConfig.extra.Base_Image_URL;

const Similar = ({ item, index, mediaType }) => {
  const router = useRouter();

  return (
    <Image
      source={{ uri: `${Base_Image_URL}${item.poster_path}` }}
      style={{ width: 120, height: 180, marginLeft: index != 0 && 20 }}
      contentFit="cover"
      transition={500}
    />
  );
};

export default Similar;
