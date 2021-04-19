import React, {Component} from 'react';


// 方案一
import {View, Button, Image} from 'react-native'
// 导入拍照的包
import ImagePicker from 'react-native-image-picker'
// 创建配置项
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,// 照片的质量
  allowsEditing: true, //允许被编辑
  noData: false, //拍照时不带日期
  storageOptions: { // 存储选项
    skipBackup: true, // 在 IOS 平台中，会自动将照片同步到云端中，为true，就是跳过备份，不会将照片放入云端
    path: 'images'
  }
}

export default class Me extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgURL: 'https://img3.doubanio.com//view//celebrity//s_ratio_celebrity//public//p23346.webp'//将来拍照的照片存储位置
        }
    }
    
    render(){
        return <View style={{alignItems: 'center', paddingTop: 70}}>
            <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 }}></Image>
            <Button title="拍照" onPress={this.cameraAction}></Button>
        </View>
    }

    cameraAction = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
          console.log('response' + response);
          if (response.didCancel) { //点击了取消按钮
            return
          } else {
            //   拍摄了照片
            this.setState({
              imgURL: response.uri
            }, () => {
              console.warn(this.state.imgURL)
            });
          }
        })
    }
}

// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     TouchableHighlight,
//     View
// } from 'react-native';

// var ImagePicker = require('react-native-image-picker');

// export default class App extends Component {

//     //选择图片
//     _showImagePicker(){

//         //配置选项
//         const options = {
//             title: '选择图片',
//             cancelButtonTitle: '取消',
//             takePhotoButtonTitle: '拍照',
//             chooseFromLibraryButtonTitle: '图库',
//             customButtons: [
//                 {name: 'share photo', title: '分享'},
//             ],
//             cameraType: 'back',
//             mediaType: 'photo',
//             videoQuality: 'high',
//             durationLimit: 10,
//             maxWidth: 300,
//             maxHeight: 300,
//             quality: 0.8,
//             angle: 0,
//             allowsEditing: false,
//             noData: false,
//             storageOptions: {
//                 skipBackup: true
//             }
//         };

//         //回调数据
//         ImagePicker.showImagePicker(options, (response => {
//              console.log("response: "+response);
//         }))
//     }

//     //打开相机
//     _launchCamera(){

//         //配置选项
//         const options = {
//             cameraType: 'front',  //前置摄像头
//             mediaType: 'photo'    //进行拍照
//         };

//         //回调数据
//         ImagePicker.launchCamera(options, (response => {
//             console.log("response: "+response);
//         }))
//     }

//     //打开图库
//     _launchImageLibrary(){

//         //配置选项
//         const options = { mediaType: 'photo' };

//         //回调数据
//         ImagePicker.launchImageLibrary(options, (response => {
//             console.log("response: "+response);
//         }))
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableHighlight onPress={this._showImagePicker.bind(this)}>
//                     <Text style={{color:'red',fontSize:30}}>选择图片</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight onPress={this._launchCamera.bind(this)}>
//                     <Text style={{color:'red',marginTop:30,fontSize:30}}>打开相机</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight onPress={this._launchImageLibrary.bind(this)}>
//                     <Text style={{color:'red',marginTop:30,fontSize:30}}>打开图库</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     }
// });

// AppRegistry.registerComponent('Me', () => Me);