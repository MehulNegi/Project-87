import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
    render(){
        return (
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Text style={{fontSize:5}}/>
                    <View style={styles.authorContainer}>
                        <Image source={require("../assets/assets/profile_img.png")}
                        style={styles.profileImage}></Image>
                        <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:5}}/>
                        <Image source={require("../assets/assets/post.jpeg")} style={styles.postImage}/>
                    </View>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  authorContainer: {
    flexDirection:'row', 
    alignItems: 'flex-start'
  },
  profileImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingLeft: 50,
    borderRadius: 120,
    width: 35,
    height: 35
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  captionContainer: {
    paddingLeft: RFValue(45),
    justifyContent: "center"
  },
  captionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  authorNameText: {
    fontSize: 18,
    color: "white"
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
  });