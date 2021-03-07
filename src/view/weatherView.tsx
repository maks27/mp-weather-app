import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ListItem, Divider, Button, Icon } from "react-native-elements";
import { useStore } from "../stores/store";
import { mainStyle } from "../styles/styles";
import { firstUpperCase } from "../util";
import ReloadButton from "./additionals/reloadButton";
import WeatherDetails from "./weatherDetailsView";

const weatherView = () => {
  const { weatherStore } = useStore();
  const { currentWeather, icon, openModal, loadLongTermWeather } = weatherStore;
  const onButtonPress = () => {
    loadLongTermWeather().then(() => {
      openModal();
    });
  };
  return (
    <KeyboardAvoidingView
      style={mainStyle.card}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {currentWeather && (
        <Fragment>
          <View style={mainStyle.headerCard}>
            <ReloadButton />
          </View>
          <View style={mainStyle.cardDetails}>
            <Text style={mainStyle.mainCityText}>{currentWeather.name}</Text>
            <Divider />

            <Image
              style={mainStyle.imageStyle}
              source={{
                uri: icon,
              }}
            ></Image>

            <Text style={mainStyle.mainTempText}>
              {currentWeather.main.temp} °C
            </Text>
            <Text style={mainStyle.descriptionText}>
              {firstUpperCase(currentWeather.weather[0].description)}
            </Text>
          </View>
          <Divider />
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Temp. odczuwalna</ListItem.Title>
              <ListItem.Subtitle>
                <Icon
                  name="thermometer-half"
                  type="font-awesome"
                  color="#f50"
                />
                <Text style={mainStyle.textDetailsList}>
                  {currentWeather.main.feels_like} °C
                </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Title>Ciśnienie</ListItem.Title>
              <ListItem.Subtitle>
                <Icon
                  name="tachometer-alt"
                  type="font-awesome-5"
                  color="#f50"
                />
                <Text style={mainStyle.textDetailsList}>
                  {currentWeather.main.pressure} hPa{" "}
                </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Wilgotność</ListItem.Title>
              <ListItem.Subtitle>
                <Icon name="water" type="font-awesome-5" color="#f50" />
                <Text style={mainStyle.textDetailsList}>
                  {currentWeather.main.humidity} %
                </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Title>Prędkość wiatru</ListItem.Title>
              <ListItem.Subtitle>
                <Icon name="wind" type="font-awesome-5" color="#f50" />
                <Text style={mainStyle.textDetailsList}>
                  {currentWeather.wind.speed} m/s
                </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <Button onPress={onButtonPress} title="Pokaż pogodę na kolejne dni" />
          <WeatherDetails />
        </Fragment>
      )}
    </KeyboardAvoidingView>
  );
};

export default observer(weatherView);
