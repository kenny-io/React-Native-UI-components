// import React, {Component} from 'react';
// import {Button, Text, View, StyleSheet} from 'react-native';
// import Modal from 'react-native-modal';
// import LoginForm from './Login';

// export default class ModalTester extends Component {
//   state = {
//     isModalVisible: false,
//   };

//   toggleModal = () => {
//     this.setState({isModalVisible: !this.state.isModalVisible});
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Click here to login" onPress={this.toggleModal} />
//         <Modal isVisible={this.state.isModalVisible}>
//           <View>
//             <LoginForm />
//             <View style={{marginTop: 150}}>
//               <Button title="Hide modal" onPress={this.toggleModal} />
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import LoginForm from './Login';

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Click here to login" onPress={toggleModal} />
      <Modal
        animationOutTiming={1000}
        animationOut={'slideOutUp'}
        isVisible={isModalVisible}>
        <View>
          <LoginForm />
          <View style={{marginTop: 150}}>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ModalDemo;
