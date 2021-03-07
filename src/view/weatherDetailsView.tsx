import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { Icon,Button } from "react-native-elements";
import { useStore } from "../stores/store";
import { mainStyle } from "../styles/styles";
import { dateConverter, deleteZero } from "../util";
const WeatherDetails = () => {
  const { weatherStore } = useStore();
  const {
    openModal,
    isOpen,
    longTermWeather,
    loadChoosedWeather,
  } = weatherStore;
  const { current, longTerm } = longTermWeather;

  const createList = () => {
    return longTerm!.list.map((result) => {
      const data = result.dt_txt.split(" ");
      const currentDay = new Date().getDate().toString();
      if (data[1] === "12:00:00" && currentDay !== deleteZero(data)) {
        return (
          <TouchableOpacity key={result.dt_txt} style={mainStyle.modalView} onPress={() => {
            loadChoosedWeather({ ...result, name: longTerm!.city.name });
            openModal();
          }}>
            
            <Text style={mainStyle.textStyle2}>
              {dateConverter(result.dt_txt)}
            </Text>
            <View>
              <Image
                style={mainStyle.imageMiniStyle}
                source={{
                  uri: `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`,
                }}
              />
              <Text style={mainStyle.textStyleImage}>{result.main.temp}°</Text>
            </View>

            <Icon
              size={15}
              raised
              name="sign-in-alt"
              type="font-awesome-5"
              color="#f50"
              
            />
          </TouchableOpacity>
        );
      }
    });
  };

  return (
    <View>
      <Modal visible={isOpen} animationType="slide" >
        <Fragment>
          <View style={mainStyle.modalConteiner}>
            {longTerm && current && (
              <Fragment>
                <TouchableOpacity style={mainStyle.modalView} onPress={() => {
                      loadChoosedWeather({ ...current, name: current.name });
                      openModal();
                    }}>
                  <Text style={mainStyle.textStyle2}>Dziś</Text>
                  <View>
                    <Image
                      style={mainStyle.imageMiniStyle}
                      source={{
                        uri: `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`,
                      }}
                    />
                    <Text style={mainStyle.textStyleImage}>
                      {current.main.temp}°
                    </Text>
                  </View>
                  <Icon
                    size={15}
                    raised
                    name="sign-in-alt"
                    type="font-awesome-5"
                    color="#f50"
                    
                  />
                </TouchableOpacity>
                {createList()}
              </Fragment>
            )}
          </View>
          <Button onPress={openModal} title="Wróć"/>
        </Fragment>
      </Modal>
    </View>
  );
};
export default observer(WeatherDetails);
