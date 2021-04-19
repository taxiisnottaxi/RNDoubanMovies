// 在 RN 中只能使用.js作为后缀名，不能使用.jsx
import React, {Component} from 'react'

// View 组件负责布局，就好比网页中的 div
import { View, Text } from 'react-native'

export default class MyHomePage extends Component {
    // constructor 一般推荐写出来
    constructor(props){
        super(props)
        this.state = {}
    }

    // 必须又一个render函数
    render(){
        // 1. 在 RN 中，不能使用网页中的所有标签，如 div,p,img等都布恩那个使用
        // 2. 如果想要实现布局，RN提供了 View 的组件，来实现布局；
        // 3. RN 提供了一系列基础的组件，来方便程序员的开发，如果想要使用这些组件，只需按需把组件从'react-native'中导入即可
        return <View>
            {/* 在 RN 中，所有的文本，必须使用 RN 提供的 Text 组件进行包裹，否则会报错 */}
            <Text>1234545644566</Text>
        </View>
    }

}
