import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native'


// 导入轮播图组件
import Swiper from 'react-native-swiper'

// 轮播图的样式
const styles = StyleSheet.create({
    box: {
        width: '33.33%',
        alignItems: 'center',
        marginTop: 15
    }
})

// Actions 表示要进行路由的 JS 操作了，可以跳转到新路由
import {Actions} from 'react-native-router-flux'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            lunbotu: [1, 2, 3] // 轮播图数组
        }
    }

    // componentWillMount(){
    //     // 浏览器中无法直接使用fetch，但是在手机的RN中，可以直接使用
    //     // 跨域限制是对浏览器的限制
    //     fetch('http://vue.studyit.io/api/geilunbo')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // 使用JSON.stringfy将其转成字符串，最后一个参数是两个空格，代表使用两个空格来拆分
    //         console.warn(1)
    //         console.warn(JSON.stringify(data, null, '  '))
    //         this.setState({
    //             lunbotu: data.message
    //         })
    //     })
    // }

    render(){
        return <View>
            
            <View style={{height: 220, width: '100%'}}>
                {/* 轮播图的结构 */}
                {/* 在轮播图的组件外面，需要套一层 View，手动给这个View设置高度 */}
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                    <View>
                        {/* <Text style={styles.text}>Hello Swiper</Text> */}
                        <Image source={require('../../images/lunbotu/1.jpg')} style={{width: '100%', height: '100%'}} ></Image>
                    </View>
                    <View>
                        {/* <Text style={styles.text}>Beautiful</Text> */}
                        <Image source={require('../../images/lunbotu/2.jpg')} style={{width: '100%', height: '100%'}} ></Image>
                    </View>
                    <View>
                        {/* <Text style={styles.text}>And simple</Text> */}
                        <Image source={require('../../images/lunbotu/3.jpg')} style={{width: '100%', height: '100%'}} ></Image>
                    </View>
                    {/* {this.state.lunbotu.map((item, i) => { */}
                        {/* return <View key={i}> */}
                            {/* <Image source={require(`../../images/lunbotu/1.jpg`)} style={{width: '100%', height: '100%'}} ></Image> */}
                        {/* </View> */}
                    {/* })} */}
                </Swiper>
            </View>

            {/* 六宫格 */}
            {/* 在 RN 中，默认为所有的 View 启用了弹性盒模型，同时，默认的主轴是纵向的 */}
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={styles.box}>
                    <Image source={require('../../images/menu/menu1.png')} style={{width: 60, height: 60}}></Image>
                    <Text>新闻资讯</Text>
                </View>

                <View style={styles.box}>
                    <Image source={require('../../images/menu/menu2.png')} style={{width: 60, height: 60}}></Image>
                    <Text>图片分享</Text>
                </View>

                <View style={styles.box}>
                    <Image source={require('../../images/menu/menu3.png')} style={{width: 60, height: 60}}></Image>
                    <Text>商品购买</Text>
                </View>

                <View style={styles.box}>
                    <Image source={require('../../images/menu/menu4.png')} style={{width: 60, height: 60}}></Image>
                    <Text>视频专区</Text>
                </View>

                {/* View 无法响应点击事件，需要使用 TouchableHighlight */}
                {/* underlayColor 指被点击的时候是什么颜色 */}
                <TouchableHighlight onPress={this.goMovieList} style={styles.box} underlayColor="white">
                    {/* TouchableHighlight 里面只能放置唯一的元素 */}
                    <View>
                        <Image source={require('../../images/menu/menu5.png')} style={{width: 60, height: 60}}></Image>
                        <Text>热映电影</Text>
                    </View>
                </TouchableHighlight>
                
                <View style={styles.box}>
                    <Image source={require('../../images/menu/menu6.png')} style={{width: 60, height: 60}}></Image>
                    <Text>联系我们</Text>
                </View>
            </View>
        </View>
    }

    // 去电影列表页面
    goMovieList = () => {
        // console.warn('ok')
        // 这里要跳转到电影列表，需要使用编程式导航
        // 这里的movielist实际上就是那个组件路由的key
        Actions.movielist()
    }
}
