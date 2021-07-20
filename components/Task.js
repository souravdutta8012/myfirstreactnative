import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {
    const completeTrigger = (id) => {
        props.parentCompleteTask(id);
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                </View>
                <Text style={styles.itemText}>
                    {props.text.taskName}
                </Text>
                <TouchableOpacity style={styles.completeWrapper} onPress={() => completeTrigger(props.text.id)}>
                    <Text>
                        <View>
                            <FontAwesomeIcon icon={faCheck} color="green" />
                        </View>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'blue',
        borderWidth: 0.5,
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        minWidth: '80%',
        maxWidth: '80%',
    },
    completeWrapper: {
        width: 30,
        height: 30,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1.5,
    },
});

export default Task;