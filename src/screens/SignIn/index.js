import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import MessagePrompt from '../../components/MessagePrompt';
import { loginUser } from '../../utils/Api';
import { set } from 'react-hook-form';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('User');
   const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert
   const [alertMessage, setAlertMessage] = useState("");
   const closeAlert = () => {
     setShowAlert(false);
   };
const handleLogin = async () => {
  if (email === "" || password === "") {
    setAlertMessage("Either email or password is empty");
    setShowAlert(true);
    return;
  }

  // Create a user data object with email and password
  const userData = {
    email,
    password,
  };
  if(selectedRole === 'User'){
    try {
      // Send the user data to the server for verification
      const response = await loginUser(userData);

      // If the server responds with a success message, log in the user and navigate to the home screen
      if(response.message === 'Login successful') {
      localStorage.setItem("UserToken", response.token);
      setAlertMessage("User logged in successfully");
      setShowAlert(true);
      navigation.navigate("Home");
      }
      else{
        setAlertMessage("User not found");
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
      setAlertMessage(`Error logging in user: ${error.message}`);
      setShowAlert(true);
    }
  }
  else{
    try {
      // Send the user data to the server for verification
      const response = await loginAdmin(userData);

      // If the server responds with a success message, log in the user and navigate to the home screen
      if(response.message === 'Login successful') {
      localStorage.setItem('adminToken',response.token);
      setAlertMessage("Admin logged in successfully");
      setShowAlert(true);
      navigation.navigate("AdminHome");
      }
      else{
        setAlertMessage("Admin not found");
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
      setAlertMessage(`Error logging in user: ${error.message}`);
      setShowAlert(true);
    }
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.radioContainer}>
        {/* <Text>Select Role:</Text> */}
        <RadioButton.Group onValueChange={(value) => setSelectedRole(value)} value={selectedRole}>
          <View style={styles.radioOption}>
            <RadioButton value="User" />
            <Text>User</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="Admin" />
            <Text>Admin</Text>
          </View>
        </RadioButton.Group>
      </View>
      <Button mode="outlined" className="mt-8 bg-purple-100 text-white " onPress={handleLogin}>
            Login
       </Button>
      <MessagePrompt visible={showAlert} message={alertMessage} onClose={closeAlert} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
 
});

export default SignIn;
