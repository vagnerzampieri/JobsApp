import { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
  const router = useRouter();

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: COLORS.lightWhite,
    },
    scrollView: {
      flex: 1,
      padding: SIZES.medium,
    },
  });

  const options = {
    stackScreen: {
      headerTitle: "",
      headerStyle: {
        backgroundColor: COLORS.lightWhite,
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
      ),
    },
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen options={options.stackScreen} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
