import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, { useState } from 'react';

const BottomPopup = ({ visible, children }) => {
  // const scaleValue = React.useRef(new Animated.Value(0)).current;
  // React.useEffect(() => {
  //   toggleModal();
  // }, [visible]);
  // const toggleModal = () => {
  //   if (visible) {
  //     setShowModal(true);
  //     Animated.spring(scaleValue, {
  //       toValue: 1,
  //       duration: 5000,
  //       useNativeDriver: true,
  //     }).start();
  //   } else {
  //     setTimeout(() => setShowModal(false), 200);
  //     Animated.timing(scaleValue, {
  //       toValue: 0,
  //       duration: 3000,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // };

  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {children}
      </Animated.View>
    </Modal>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
