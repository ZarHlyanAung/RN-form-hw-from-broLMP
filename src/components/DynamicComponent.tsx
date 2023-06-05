import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import gStyles from '../styles/globalStyle';
import Button from './Button';

/**
 *
 * for TextInput
 *
 *
 *
 */
interface TextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  style?: any;
  type?: string;
  multiline?: boolean;
  callbackUrl?: string;
}

const DynamicTextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChangeText,
  style,
  type,
  multiline,
  callbackUrl,
}) => {
  const handleUrl = (url: string = '') => {
    callbackUrl && console.log('Calling callback url:', url);
  };
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={text => onChangeText(text)}
      placeholderTextColor="gray"
      style={[gStyles.basicTextInput, style]}
      keyboardType={type === 'phoneinput' ? 'phone-pad' : 'default'}
      multiline={multiline}
      onBlur={() => handleUrl(callbackUrl)}
    />
  );
};

/**
 *
 * for Radio
 *
 *
 *
 */

interface Option {
  title: string;
  value: string;
}

interface RadioProps {
  value: any;
  onChange: (text: any) => void;
  options: Option[];
}

const DynamicRadio: React.FC<RadioProps> = ({value, onChange, options}) => (
  <RadioButton.Group
    onValueChange={newValue => onChange(newValue)}
    value={value}>
    {options.map(option => (
      <View style={gStyles.layHorizontal}>
        <Text style={gStyles.radioText}>{option.title}</Text>
        <RadioButton value={option.value} />
      </View>
    ))}
  </RadioButton.Group>
);

/**
 *
 * for DynamicComponent
 *
 *
 *
 */
interface DCompoProps {
  field: any;
  onChange: (value: any) => void;
  handleSubmit: (value: any) => void;
}

/***
 *
 *
 *
 *
 *
 * Super Mom
 *
 *
 *
 *
 ****/
const DynamicComponent: React.FC<DCompoProps> = ({
  field,
  onChange,
  handleSubmit,
}) => {
  const {placeholder, type, value, options, callbackUrl} = field;

  switch (type) {
    case 'input':
      return (
        <>
          <Text style={gStyles.text}>{field.formName}</Text>
          <DynamicTextInput
            placeholder={placeholder}
            value={value}
            onChangeText={text => onChange(text)}
            style={gStyles.basicTextInput}
          />
        </>
      );
    case 'phoneinput':
      return (
        <>
          <Text style={gStyles.text}>{field.formName}</Text>
          <DynamicTextInput
            placeholder={placeholder}
            value={value}
            onChangeText={text => onChange(text)}
            style={gStyles.basicTextInput}
            type="phoneinput"
            callbackUrl={callbackUrl}
          />
        </>
      );
    case 'textarea':
      return (
        <>
          <Text style={gStyles.text}>{field.formName}</Text>
          <DynamicTextInput
            placeholder={placeholder}
            value={value}
            onChangeText={text => onChange(text)}
            style={gStyles.basicTextInput}
            multiline={true}
          />
        </>
      );
    case 'radio':
      return (
        <>
          <Text style={gStyles.text}>{field.formName}</Text>

          <DynamicRadio
            value={value}
            options={options}
            onChange={text => onChange(text)}
          />
        </>
      );

    case 'selectbox':
      return (
        <>
          <Text style={gStyles.text}>{field.formName}</Text>

          <DynamicRadio
            value={value}
            options={options}
            onChange={text => onChange(text)}
          />
        </>
      );
    case 'submit':
      return <Button text="Submit" onPress={handleSubmit} />;
    default:
      return null;
  }
};

export default DynamicComponent;
