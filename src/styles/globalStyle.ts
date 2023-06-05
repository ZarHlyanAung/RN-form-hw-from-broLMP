import {Dimensions, StyleSheet} from 'react-native';
const screen = Dimensions.get('window');

const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Roboto',
    padding: 10,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  progressbar: {
    position: 'absolute',
  },
  text: {
    fontSize: 16,
    margin: 5,
    fontWeight: 'bold',
    marginTop: 25,
  },
  basicTextInput: {
    borderRadius: 5,
    backgroundColor: '#202125',
    color: 'white',
    width: screen.width * 0.9,
    minHeight: 45,
    padding: 5,
    paddingHorizontal: 15,
  },
  //button
  btncontainer: {
    width: 150,
    height: 40,
    backgroundColor: '#202125',
    padding: 10,
    margin: 10,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
  btntext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  layHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202125',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 2,
  },
  radioText: {
    marginLeft: 20,
    width: 100,
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'white',
  },
});

export default gStyles;
