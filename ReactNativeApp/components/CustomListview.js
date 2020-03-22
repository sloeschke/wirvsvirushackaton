import React from 'react';
import { View, ListView, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';
import CustomRowRight from './CustomRowRight';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080'
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) =>
                (item.key % 2) ?
                    <CustomRow
                        title={item.title}
                        description={item.description}
                        image_url={item.image_url}
                    /> :
                    <CustomRowRight
                        title={item.title}
                        description={item.description}
                        image_url={item.image_url}
                    />
            }
        />

    </View>
);

export default CustomListview;