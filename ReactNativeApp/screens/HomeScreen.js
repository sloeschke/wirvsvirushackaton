import * as React from 'react';
import { useState, useEffect } from 'react';
import { Platform, Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation, Trans } from "react-i18next";
import CustomListview from '../components/CustomListview'

function getData(t) {
  return [
    {
      key: 1, title: t('title1'),
      description: t('description1'),
      image_url: t('imageUrl1')
    },
    {
      key: 2, title: t('title2'),
      description: t('description2'),
      image_url: t('imageUrl2')
    },
    {
      key: 3, title: t('title3'),
      description: t('description3'),
      image_url: t('imageUrl3')
    },
    {
      key: 4, title: t('title4'),
      description: t('description4'),
      image_url: t('imageUrl5')
    }
  ]
}

export default function HomeScreen() {

  let [faqData, setfaqData] = useState([]);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    const fetchData = async () => {
      try {
        const response = await getData(t);
        setfaqData(response)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(t);
        setfaqData(response)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }
    , []);

  const renderFields = () => {
    if (faqData != {}) {

      return (
        <CustomListview
          itemList={faqData}
        />
      )
    }
    return ""
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View key="1" style={styles.buttonMainContainer}>

          <View style={styles.buttonContainer}>
            {
              Platform.OS === 'ios' || Platform.OS === 'android' ?
                <Button color="white" onPress={() => changeLanguage("de")} title={t("DE")} /> :
                <Button onPress={() => changeLanguage("de")} title={t("DE")} />
            }
          </View>
          <View style={styles.buttonContainer}>
            {
              Platform.OS === 'ios' || Platform.OS === 'android' ?
                <Button color="white" onPress={() => changeLanguage("en")} title={t("EN")} /> :
                <Button onPress={() => changeLanguage("en")} title={t("EN")} />
            }
          </View>
        </View>

        <View key="2">
          {renderFields()}
        </View>

      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {

  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  flagContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  // buttonMainContainer: {
  //   width: 200,
  //   height: 100,
  //   margin: 10,
  //   marginLeft: 100,
  //   marginTop: -20,
  //   marginBottom: -20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  buttonMainContainer: {
    marginRight: 40,
    width: 200,
    height: 40,
    marginRight: 20,
    ...Platform.select({
      ios: {
        marginLeft: 100
      },
      android: {
        marginLeft: 100
      }
    }),
    margin: 2,
    flexDirection: 'row',
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
  }
});
