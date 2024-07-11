import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { assets } from '../../constants';
 
const Header = () => {
  return (
<View>
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
            style={styles.OlaClasse}
            source={assets.logo} 
          />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },

    iconsContainer: {
        top: 30,
        flexDirection: 'row'
    },
    logo: {
        top: 20,
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})

export default Header