import { StatusBar } from "expo-status-bar";
import React, { Fragment, useEffect } from "react";
import { ImageBackground, View } from "react-native";
import { mainStyle } from "./src/styles/styles";
import SearchView from "./src/view/searchView";
import { observer } from "mobx-react-lite";
import LoadingSpinner from "./src/view/additionals/loadingSpinner";
import WeatherView from "./src/view/weatherView";
import { store, StoreContext, useStore } from "./src/stores/store";
import cloud from "./assets/medium.jpg";
import cold from "./assets/cold.jpg";
import hot from "./assets/hot.jpg";
import ErrorView from "./src/view/errorView";
function App() {
  const { weatherStore } = useStore();
  const {
    currentWeather,
    loading,
    getCurrentPosition,
    errorMessage,
  } = weatherStore;
  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);
  if (loading) return <LoadingSpinner />;
  return (
    <StoreContext.Provider value={store}>
      <ImageBackground
        source={
          currentWeather
            ? currentWeather.main.temp > 20
              ? hot
              : currentWeather.main.temp > 10
              ? cloud
              : cold
            : cloud
        }
        style={mainStyle.backgroundImage}
      >
        <View style={mainStyle.conteiner}>
          <SearchView />
          {errorMessage.length > 0 ? (
            <ErrorView />
          ) : (
            <Fragment>
              <WeatherView />
            </Fragment>
          )}
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </StoreContext.Provider>
  );
}
export default observer(App);
