import { Alert } from "react-native";

export const dateConverter = (date:string)=>{
    let text  = date.split(' ')[0].split('-')

    return `${text[2]}.${text[1]}.${text[0]}`

}
export const showErrorView = (message:string) => {
    Alert.alert(
        'Błąd',
        `${message}`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        
        { cancelable: false }
      );
}
export const firstUpperCase = (word: string) => {
  const upperWord = word.charAt(0).toUpperCase() + word.slice(1);
  return upperWord;
};
export const deleteZero = (text:string[]) =>{
  const getDay = text[0].split("-")[2];
  if(getDay[0] == "0")return getDay[1]
  else return getDay

  
}