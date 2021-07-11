import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
// const apiKey = "74b5d3f148b8421ebcbfcf34258ba99c";
const apiEndPoint =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=74b5d3f148b8421ebcbfcf34258ba99c";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const NewsLists = () => {
  //   const newsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const goToNews = async (uri) => {
    let result = await WebBrowser.openBrowserAsync(uri);
    setResult(result);
  };

  const getNewsList = async () => {
    try {
      const response = await axios.get(apiEndPoint);
      console.log(JSON.stringify(response.data.articles, null, 2));
      setNewsList(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const [newsList, setNewsList] = useState(null);

  useEffect(() => {
    getNewsList();
  }, []);

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        News
      </Text>
      <View style={{ flexDirection: "row" }}>
        {newsList && (
          <FlatList
            data={newsList}
            renderItem={({ item }) => (
              <NewsBox item={item} goToNews={goToNews} />
            )}
            keyExtractor={(item, i) => i.toString()}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

const NewsBox = ({ item, goToNews }) => {
  return (
    <TouchableOpacity
      onPress={() => goToNews(item.url)}
      style={{
        width: screenWidth / 2,
        height: screenHeight / 5,
        margin: 5,
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{
          flex: 4,
          width: null,
          height: null,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        resizeMode={"cover"}
      />
      <View style={{ flex: 1, padding: 5 }}>
        <Text style={{ fontSize: 10 }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsLists;
