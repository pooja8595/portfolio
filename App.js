import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
const { height, width } = Dimensions.get('screen');
import 'react-native-gesture-handler'
import Splash from './src/Screen/Splash';
import { NavigationContainer } from '@react-navigation/native';
import Sidebar from 'react-native-sidebar';
import Screen_Navigation from './src/Router/Screen_Navigation';
const App = () => {
  const [splash, setSplash] = useState(true);
  const sidebarRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000)
  }, [])
  const STYLES = ['default', 'dark-content', 'light-content'];
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  const openSideBar = () => {
    sidebarRef.current.open()
    // console.warn('working')
  };
  const closeSideBar = () => {
    sidebarRef.current.close()
    // console.warn('working')

  };
  return (
    <>
      <MyStatusBar barStyle={STYLES[2]}
        animated={true}
        hidden={false}
        backgroundColor={"#0200fe"}
      />
      {splash ?
        (
          <Splash />
        )
        :
        (
          <NavigationContainer>
            <Sidebar
              ref={sidebarRef}
              rightSidebar={false}
              // leftSidebar={<CustomData closeSideBar={closeSideBar} />}
              style={{ flex: 1, backgroundColor: '#FFF' }}>
              <Screen_Navigation openSideBar={openSideBar} closeSideBar={closeSideBar} />
            </Sidebar>
          </NavigationContainer>


        )
      }
    </>
  )
}
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    // height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
})
export default App