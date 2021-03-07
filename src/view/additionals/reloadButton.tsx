import React from "react";
import { Icon } from "react-native-elements";
import { useStore } from "../../stores/store";

const ReloadButton = () => {
  const { weatherStore } = useStore();
  const { getCurrentPosition } = weatherStore;
  const onPress = ()=>{
    getCurrentPosition()
  }

  return (
    <Icon
      raised
      size={18}
      name="refresh"
      type="material"
      color="#f50"
      onPress={onPress}
    />
  );
};

export default ReloadButton;
