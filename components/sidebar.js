import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const SlidingSidebar = () => {
    const sidebarWidth = 250;
    const animatedValue = useRef(new Animated.Value(-sidebarWidth)).current;
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
      Animated.timing(animatedValue, {
        toValue: isOpen ? -sidebarWidth : 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  
    const sidebarStyle = {
      position: 'absolute',
      top: 60,
      left: 0,
      width: sidebarWidth,
      height: '100%',
      backgroundColor: '#fff',
      padding: 20,
      transform: [
        {
          translateX: animatedValue,
        },
      ],
    };
  
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Text>Toggle Sidebar</Text>
        </TouchableOpacity>
  
        <Animated.View style={sidebarStyle}>
          {/* Add the contents of the sidebar here */}
          <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Sidebar content goes here</Text>
          <Text style={styles.sidebarText}>Sidebar content goes here</Text>
          <Text style={styles.sidebarText}>Sidebar content goes here</Text>
        </View>
        </Animated.View>
      </View>
    );
  };
  
  export default SlidingSidebar;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      height: 60,
      backgroundColor: "#ccc",
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 15,
    },
    sidebar: {
      position: "absolute",
      top: 60,
      left: 0,
      width: "70%",
      height: "100%",
      backgroundColor: "#ccc",
      padding: 20,
      zIndex: 1,
    },
    sidebarText: {
      color: "#000",
    }
  });