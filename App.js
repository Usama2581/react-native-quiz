// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Question from './src/Pages/Question';
import Result from './src/Pages/Result';
import Navigator from './src/Pages/Navigator';
import { Provider } from 'react-redux';
import store from './src/Redux/store/Store';

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <Provider store={store}>
        <Navigator />
      </Provider>
      {/* <Result /> */}
    </>
  );
}

