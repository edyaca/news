import { FlatList, ScrollView, View } from "react-native"
import New from "./New"


const NewList = ({ list }) => {
    const renderItem = ({ item }) => <New info={item} />
    console.log({ list })
    return (
        <View style={{ flex: 1 }}>
            <FlatList data={list}
                renderItem={renderItem}
                horizontal
                keyExtractor={(item) => item.publishedAt}
            />
        </View>
    )
}

export default NewList;
