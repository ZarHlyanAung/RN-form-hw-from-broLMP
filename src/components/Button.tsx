import React from 'react';
import {TouchableNativeFeedback, Text, View} from 'react-native';
import gStyles from '../styles/globalStyle';

interface BtnProps {
  text: string;
  onPress: (value: any) => void;
}

const Button: React.FC<BtnProps> = ({text, onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={gStyles.btncontainer}>
        <Text style={gStyles.btntext}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
