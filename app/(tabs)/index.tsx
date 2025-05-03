import {Image, StyleSheet, Platform, Animated, Text, SafeAreaView, ScrollView} from 'react-native';


export default function HomeScreen() {
  return (
      <SafeAreaView>
           <ScrollView>
               <Text>Hello</Text>
           </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
