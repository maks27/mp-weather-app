import React, { Fragment, useState } from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { useStore } from "../stores/store";
import { mainStyle } from "../styles/styles";

const SearchView: React.FC = () => {
  const [state, setstate]: any = useState({ search: "" });
  const { search } = state;
  const { weatherStore } = useStore();
  const onChange = (search: string) => {
    setstate({ search });
  };
  const onHandlePress = () => {
    weatherStore.loadTypedWeather(search);
  };

  return (
    <Fragment>
      <View style={mainStyle.serachBarConteiner}>
      <TextInput
          style={mainStyle.serachBar}
          placeholder="Wpisz miasto..."
          onChangeText={onChange}
          value={search}
          
        />
        <Icon
          raised
          name="search"
          type="material"
          color="black"
          size={20}
          onPress={onHandlePress}
          disabled={!search}
        />
      </View>
    </Fragment>
  );
};

export default SearchView;
