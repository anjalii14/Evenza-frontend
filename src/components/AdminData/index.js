import { View, Text, Image } from "react-native";
import { Portal, Dialog, Button } from "react-native-paper";
import React, { useState } from "react";
import HorizontalLine from "../Horizontal Line";
import Icon from "react-native-vector-icons/AntDesign";

const AdminData = () => {
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <>
      <View className="mt-2 pb-8">
        <HorizontalLine />
        <View>
          <View className="flex flex-row justify-between px-6 mt-4">
            <Text className="text-gray-600 font-bold">
              Personal Information
            </Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Name</Text>
            <Text className="text-gray-600 ">Vishesh Vijayvargiya</Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Email</Text>
            <Text className="text-gray-600 ">iit2021114@iiita.ac.in</Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Phone</Text>
            <Text className="text-gray-600 ">+91-9625388220</Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Institution</Text>
            <Text className="text-gray-600 ">IIITA</Text>
          </View>
        </View>
        <HorizontalLine />
        <View>
          <View className="flex flex-row justify-between px-6 mt-4">
            <Text className="text-gray-600 font-bold">Events Information</Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Created</Text>
            <Text className="text-gray-600 ">5</Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Succesfully Conducted</Text>
            <Text className="text-gray-600 ">6</Text>
          </View>
          <View className="flex flex-row justify-between px-8 mt-4">
            <Text className="text-gray-600 ">Next event in</Text>
            <Text className="text-gray-600 ">2 days</Text>
          </View>
        </View>
        <HorizontalLine />
        <View>
          <View
            className="flex flex-row items-center justify-between px-8 mt-4"
            onStartShouldSetResponder={showDialog}
          >
            <Text className="text-gray-600 ">Sign Out</Text>
            <Icon name="logout" size={16} />
          </View>
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirm</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Are you sure you want to Logout ?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default AdminData;
