import React, {useState} from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import DynamicComponent from '../components/DynamicComponent';
import dynamicForm from '../data/dynamicForm.json';
import gStyles from '../styles/globalStyle';

interface Option {
  title: string;
  value: string;
}

interface EachField {
  formName: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  value: string | number;
  isAction: boolean;
  isHidden: boolean;
  options: Option[];
}

const Home = (): JSX.Element => {
  const [formData, setFormData] = useState<EachField[]>(dynamicForm);

  /**
   *
   * Handle onchange of textInputs
   * call every time you fill
   */
  const handleChange = (fieldIndex: number, value: string) => {
    const updatedFields = [...formData];
    updatedFields[fieldIndex].value = value;
    setFormData(updatedFields);
    // console.log(JSON.stringify(updatedFields, null, 2));
    console.log('changed valued => ' + value);
  };

  /**
   *
   * Final submit button
   *
   */
  const handleSubmit = () => {
    //any left unfilled?
    const requiredFields = formData.filter(
      field => field.isRequired && field.value === '',
    );

    //if so then Alert
    if (requiredFields.length > 0) {
      const errorFields = requiredFields
        .map(field => field.formName)
        .join(', ');
      Alert.alert(
        'Error',
        `Please fill in all required fields: ${errorFields}`,
      );
    } else {
      // All filled then good to go
      console.log(JSON.stringify(formData, null, 4));
      Alert.alert('Success', 'Form submitted successfully!');

      // Reset the form
      const resetFields = formData.map(field => ({...field, value: ''}));
      setFormData(resetFields);
    }
  };

  return (
    <SafeAreaView style={gStyles.container}>
      <ScrollView style={gStyles.scrollContainer}>
        {formData.map((field, index) => (
          <View key={index}>
            <DynamicComponent
              field={field}
              onChange={value => handleChange(index, value)}
              handleSubmit={handleSubmit}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
