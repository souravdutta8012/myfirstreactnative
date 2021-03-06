import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {
    const completeTrigger = (id) => {
        props.parentCompleteTask(id);
    }

    return (
        <View style={styles.task}>
            <View style={styles.date}>
                <View style={styles.circle}>
                </View>
                <View>
                    <Text>
                        {props.text.time}
                    </Text>
                </View>
            </View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        zIndex: -1,
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    circle: {
        width: 15,
        height: 15,
        backgroundColor: '#55BCF6',
        borderRadius: 50,
        marginRight: 10,
    },
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
        // shadow style
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 10,
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
        borderWidth: 1,
    },
});

export default Task;