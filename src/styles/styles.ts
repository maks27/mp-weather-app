import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f2f2f2",
  },

  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },

  serachBarConteiner: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f2eded",
    position: "relative",
    borderRadius: 100,
    width: "90%",
    paddingRight: 5,
    paddingLeft: 5,
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
  headerCard: {
    position: "absolute",
    top: 0,
    left: 0,
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
    marginLeft:5,
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
  card: {
    margin: 10,
    backgroundColor: "rgba(214, 214, 214, 0.7)",
    borderStyle: "solid",
    borderColor: "#e8e7e6",
    width: "90%",
    borderRadius: 5,
  },
  cardDetails: {
    marginTop: 40,
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
  errorContent: {
    padding: 15,
    alignItems: "center",
    width: "80%",
    height: "50%",
    marginTop: 100,
    borderRadius: 100,

    backgroundColor: "rgba(214, 214, 214, 0.7)",
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
