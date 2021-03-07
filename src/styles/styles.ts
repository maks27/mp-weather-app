import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  conteiner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  serachBarConteiner: {
    width: "90%",
    backgroundColor: "rgba(214, 214, 214, 0.7)",
    marginTop: "7%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    borderRadius: 100,
    paddingRight: 5,
    paddingLeft: 5,
  },
  errorContent: {
    padding:5,
    alignItems: "center",
    width: "90%",
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "rgba(214, 214, 214, 0.7)",
  },
  card: {
    marginTop: "1%",
    width: "90%",
    backgroundColor: "rgba(214, 214, 214, 0.7)",
    borderStyle: "solid",
    borderColor: "#e8e7e6",
    borderRadius: 5,
  },
  serachBar: {
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 180,
    width: "75%",
    paddingLeft: 10,
  },
  buttonSearch: {
    marginTop: 10,
    width: "20%",
  },
  weatherDisplay: {
    width: "90%",
    backgroundColor: "#ffc08a",
    borderStyle: "solid",
    borderColor: "#e8e7e6",
    borderWidth: 1,
  },
  imageStyle: {
    width: 125,
    height: 125,
  },
  mainCityText: {
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 10,
  },
  mainTempText: {
    fontSize: 36,
    color: "#f76f00",
  },
  descriptionText: {
    fontSize: 20,
  },
  textStyleTemp: {
    borderStyle: "solid",
    borderColor: "#e8e7e6",
    borderWidth: 1,
    padding: 5,
    textAlign: "center",
    fontSize: 20,
    color: "orange",
  },
  textDetailsList: {
    marginLeft: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle2: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  cardDetails: {
    alignItems: "center",
  },
  modalConteiner: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  modalView: {
    textAlign: "center",
    width: "40%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyleImage: {
    position: "absolute",
    bottom: "75%",
    fontSize: 16,
    color: "#f76f00",
  },
  imageMiniStyle: {
    position: "relative",
    width: 50,
    height: 50,
    borderColor: "#e6e5e3",
    borderWidth: 1,
    borderRadius: 180,
  },

  errorText: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    letterSpacing: 3,
    fontSize: 10,
  },
});
