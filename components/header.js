import React, { useState, useRef } from "react";
import { StyleSheet, View, Image, Pressable, Text, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
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
    backgroundColor: '#ccc',
    padding: 20,
    zIndex: 1,
    transform: [
      {
        translateX: animatedValue,
      },
    ],
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={toggleSidebar}>
          <Icon name="bars" size={24} color="#000" />
        </Pressable>
        <Image
          source={require("../assets/profile.png")}
          style={styles.profileImage}
        />    
      </View>
      <Animated.View style={sidebarStyle}>
          {/* Add the contents of the sidebar here */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Home</Text>
          <Text style={styles.sidebarText}>Products</Text>
          <Text style={styles.sidebarText}>Contact Us</Text>
        </View>
      </Animated.View>
    </>
  );
};

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
  sidebarText: {
    color: "#000",
    fontSize: 15,
    padding: 10
  }
});

export default Header;
