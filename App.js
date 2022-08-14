import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, SafeAreaView, View, StatusBar } from "react-native";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHight,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});

export default App;
