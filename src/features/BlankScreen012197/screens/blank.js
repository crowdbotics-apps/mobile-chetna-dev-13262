import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_5: "",
    TextInput_7: "",
    DateTimePicker_9: new Date("10/14/2020"),
    Switch_48: true,
    CheckBox_52: true,
    CheckBox_54: true
  }

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_3}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Image
        resizeMode="cover"
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/images.jpg"
        }}
        style={styles.Image_103}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_9}
        date={this.state.DateTimePicker_9}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_9: selectedDate })
        }
      />
      <Button
        title="Press me!"
        color="#3366FF"
        style={styles.Button_46}
        onPress={() => alert("Pressed!")}
      />
      <Switch
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_48}
        value={this.state.Switch_48}
        onValueChange={nextChecked => this.setState({ Switch_48: nextChecked })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disabled={false}
        maximumTrackTintColor="#E4E7ED"
        minimumTrackTintColor="#3366FF"
        thumbTintColor="#3366FF"
        style={styles.Slider_50}
      />
      <CheckBox
        title="Radio button"
        disabled={false}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_52}
        checked={this.state.CheckBox_52}
        onPress={nextChecked => this.setState({ CheckBox_52: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        disabled={false}
        containerStyle={styles.CheckBox_54}
        checked={this.state.CheckBox_54}
        onPress={nextChecked => this.setState({ CheckBox_54: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  Text_3: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  TextInput_5: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Image_103: {
    width: 169,
    height: 200,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  TextInput_7: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  DateTimePicker_9: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Button_46: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Switch_48: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Slider_50: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  CheckBox_52: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  CheckBox_54: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  }
})