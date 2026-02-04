import { StyleSheet, Text, View } from 'react-native';

export default function FlexBox() {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'streach',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
