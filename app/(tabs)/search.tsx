import {View, Text} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchField from "@/components/SearchField";
import SearchResult from "@/components/SearchResult";
import {icons, images} from "../../constants";


const Search = () => {
    const [keyword, setKeyword] = useState({
        keyword: ""
    });

    return (
        <SafeAreaView className="mb-5">
            <View className="ml-5 mr-5">
                <Text className="font-pbold text-2xl mt-2 mb-3">Search</Text>
                <SearchField
                    title="Search"
                    value={keyword.keyword}
                    placeholder="Search anything"
                    handleChangeText={(value: any) => setKeyword({...keyword, keyword: value})}
                    otherStyles={undefined}/>
            </View>

            <View className="ml-5 mr-5 mt-10">
                <Text className="font-pbold text-xl mt-2 mb-3">Search results</Text>
                <SearchResult icon={icons.dumbbell} handlePress={undefined}/>
                <SearchResult icon={icons.dumbbell} handlePress={undefined}/>
                <SearchResult icon={icons.dumbbell} handlePress={undefined}/>
                <SearchResult icon={icons.dumbbell} handlePress={undefined}/>
            </View>
        </SafeAreaView>
    )
}

export default Search;