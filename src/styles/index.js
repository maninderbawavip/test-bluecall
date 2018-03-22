import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        margin: 10,
        backgroundColor: '#eee',
        height: 30
    },
    list: {
        flex: 1
    },
    row: {
        justifyContent: 'flex-start',
        margin: 5,
        width: (width - 10),
        height: 110,
        backgroundColor: '#F6F6F6',
        borderColor: '#eee',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
        elevation: 10
    },
    thumb: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    photoStyle: {
        height: 250,
        width: width,
        resizeMode: 'cover'
    },
    textBlock: {
        justifyContent: 'space-around',
        height: 100,
        marginLeft: 10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10
    },
    detail: {
        marginLeft: 10,
        marginRight: 10
    }
}); 