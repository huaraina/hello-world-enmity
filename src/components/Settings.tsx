import { FormRow, FormSection, ScrollView, View, Image, Text } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, Constants, Dialog, Navigation, StyleSheet } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   const styles = StyleSheet.createThemedStyleSheet({
      container: {
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center"
      },
      image: {
         width: 70,
         height: 70,
         marginTop: 20,
         marginLeft: 20
      },
      title: {
         flexDirection: "column",
      },
      name: {
         fontSize: 30,
         paddingTop: 20,
         paddingLeft: 20,
         paddingRight: 30,
         color: Constants.ThemeColorMap.HEADER_PRIMARY,
      },
      author: {
         fontSize: 15,
         paddingLeft: 20,
         color: Constants.ThemeColorMap.HEADER_PRIMARY,
      },
      info: {
         height: 45,
         paddingTop: 3,
         paddingBottom: 3,
         justifyContent: "center",
      },
      footer: {
         color: Constants.ThemeColorMap.HEADER_SECONDARY,
         textAlign: 'center',
         paddingTop: 10,
         paddingBottom: 20
      }
   })
   return (
   <ScrollView>
      <View style={styles.container}>
         <Image
            source={{uri: "https://avatars.githubusercontent.com/u/95729626"}}
            style={styles.image}
         />
         <View style={styles.title}>
            <Text style={styles.name}>Hello, World!</Text>
            <Text style={styles.author}>by huaraina</Text>
         </View>
      </View>
      <FormSection title="Press tha button!">
         <FormRow
            label="Press Me!"
            styles={styles.info}
            trailing={FormRow.Arrow}
            leading={<FormRow.Icon source={{uri: "https://avatars.githubusercontent.com/u/95729626"}}/>}
            onPress={() => {
               Dialog.show({title: "you pressed it! :3", body: "Hello, World!", confirmText: "success, now leave."})
            }}
         >
         </FormRow>
      </FormSection>
   </ScrollView>
   );
};
