import { StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';

export default function ArticleCard({article}) {

    return (
        <View style={styles.cardTop}>
        <View style={styles.cardBottom}>
            <Text style={styles.title}>{article["title"]}</Text>
            {!article["img_url"]? null : <Image
                source={{
                    uri: article["img_url"]
                }}
                style={styles.image}
            />}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardTop: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 1,
        shadowOffset: {
            width: 5,
            height: 5
        },
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        marginBottom: 35,
    },

    cardBottom: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 1,
        shadowOffset: {
            width: -5,
            height: -5
        },
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
    },

    title: {
        fontFamily: 'Optima-Bold',
        fontSize: 20,
        margin: 15,
    },

    image: {
        width: 280,
        height: 280,
    },
})