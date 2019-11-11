import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    items: {
      width: 100,
      height: 100,
      backgroundColor: 'green',
      margin: 2,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default styles;