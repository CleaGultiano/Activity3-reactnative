import React, { useState } from 'react';
import { View, Button, Text, Image } from 'react-native';

const MyComponent = () => {
  const [isFlashlightVisible, setFlashlightVisibility] = useState(false);
  const [isCounterVisible, setCounterVisibility] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isImageOneVisible, setImageOneVisibility] = useState(true);
  const [isSwitchToggled, setSwitchToggled] = useState(false);
  const [counterValue, setCounterValue] = useState(0);

  const toggleFlashlight = () => {
    setFlashlightVisibility(!isFlashlightVisible);
    setButtonDisabled(true);
  };

  const toggleCounter = () => {
    setCounterVisibility(!isCounterVisible);
    setButtonDisabled(true);
  };

  const toggleImage = () => {
    setImageOneVisibility(!isImageOneVisible);
    setSwitchToggled(!isSwitchToggled);
  };

  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  const toggleComponentVisibility = () => {
    setFlashlightVisibility(false);
    setCounterVisibility(false);
    setButtonDisabled(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 80,
          justifyContent: 'space-evenly',
          width: 390,
        }}
      >
        <Button
          title="Flashlight"
          onPress={toggleFlashlight}
          disabled={isButtonDisabled}
          style={{ width: 200 }}
        />
        <Button
          title="Counter"
          onPress={toggleCounter}
          disabled={isButtonDisabled}
          style={{ width: 200 }}
        />
      </View>
      <View style={{ width: 400, justifyContent: 'center', alignItems: 'center' }}>
        {isFlashlightVisible && (
          <View style={{ width: 340 }}>
            <View style={{ marginBottom: 80 }}>
              {isImageOneVisible ? (
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNi7ZYJOuPcEjbiiMYrcJeiI0hSNouLYxNhw&usqp=CAU',
                  }} // DEFAULT
                  style={{ width: 340, height: 340, marginBottom: 50 }}
                />
              ) : (
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNi7ZYJOuPcEjbiiMYrcJeiI0hSNouLYxNhw&usqp=CAU',
                  }} // SWITCH
                  style={{ width: 340, height: 340, marginBottom: 50 }}
                />
              )}
              {isSwitchToggled ? (
                <Button title="Off" color={'orange'} onPress={toggleImage} style={{ width: 200 }} />
              ) : (
                <Button title="On" color={'#2e8b57'} onPress={toggleImage} style={{ width: 200 }} />
              )}
            </View>
            <Button
              title={isFlashlightVisible ? 'Back' : 'Show Component'}
              onPress={toggleComponentVisibility}
            />
          </View>
        )}

        {isCounterVisible && (
          <View style={{ width: 340 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 200, fontWeight: 'bold' }}>{counterValue}</Text>
            </View>
            {
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 60 }}>
                <Button title="+1 " color={'#00ff00'} onPress={incrementCounter} style={{ width: 200 }} />
                <Button title="-1 " color={'#00ff0'} onPress={decrementCounter} style={{ width: 200 }} />
              </View>
            }
            <View style={{ width: 340, marginTop: 125 }}>
              <Button title={isCounterVisible ? 'Back' : ''} onPress={toggleComponentVisibility} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default MyComponent;