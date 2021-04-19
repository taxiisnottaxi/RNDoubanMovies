/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 导入React基础包，作用是创建组件
import React from 'react';
// 从ReactNative中导入系统开发需要的包
import {
  StyleSheet,
  View,// 用来布局的，相当于div
  Text,// 文本节点，所有文本必须放到这里面
} from 'react-native';

// 导入 TabNavigator 相关组件
import TabNavigator from 'react-native-tab-navigator';

// 导入 Tab 组件
import Home from './components/tabbars/Home.js'
import Me from './components/tabbars/Me.js'
import Search from './components/tabbars/Search.js'
import ShopCar from './components/tabbars/ShopCar.js'

// 导入图标相关组件
import Icon from 'react-native-vector-icons/FontAwesome';

// 当修改了项目根目录中，Android 目录下的任何文件之后，想看项目效果，不能使用react-native start
// 而是需要再一次编译并安装一下项目，运行 react-native run-android

// () => React$Node = () =>是TS的写法
// const App: () => React$Node = () => {
// 传统写法
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'home' // 选中的 tab 栏名称
    }
  }

  render(){
    return (
      <View style={styles.container}>

        <TabNavigator>

          {/* Home 的 tab 栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}  // 判断当前的 tab 栏是否被选中
            title="Home" // 表示 tabbar 上展示的内容
            renderIcon={() => <Icon name="home" size={24} color="gray" />}  // 未选中状态下，展示的图标
            renderSelectedIcon={() => <Icon name="home" size={24} color="#0079FF" />}  // 选中状态下，展示的图标
            
            onPress={() => this.setState({ selectedTab: 'home' })}  // 点击 tab 栏操作
            >
            <Home></Home>
          </TabNavigator.Item>

          {/* Search 的 tab 栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="Search"
            renderIcon={() => <Icon name="search" size={24} color="gray" />}
            renderSelectedIcon={() => <Icon name="search" size={24} color="#0079FF" />}
            onPress={() => this.setState({ selectedTab: 'search' })}
            >
            <Search></Search>
          </TabNavigator.Item>

          {/* 购物车的 tab 栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shopcar'}
            title="ShopCar"
            renderIcon={() => <Icon name="shopping-cart" size={24} color="gray" />}
            renderSelectedIcon={() => <Icon name="shopping-cart" size={24} color="#0079FF" />}
            badgeText="0"  // 徽标
            onPress={() => this.setState({ selectedTab: 'shopcar' })}
            >
            <ShopCar></ShopCar>
          </TabNavigator.Item>

          {/* Me 的 Tab 栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'me'}
            title="Me"
            renderIcon={() => <Icon name="user-o" size={24} color="gray" />}
            renderSelectedIcon={() => <Icon name="user-o" size={24} color="#0079FF" />}
            onPress={() => this.setState({ selectedTab: 'me' })}
            >
            <Me></Me>
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    )}
};

// 使用 StyleSheet.create 创建样式表对象，可以为 create 传递一个配置对象，这个对象，就是要创建的样式
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// export default App;

// 总结：如果要定义一个基本的 RN 页面需要的步骤：
// 1. 导入 react，来创建组件
// 2. 导入 react-native 包，来提供基础的开发组件
// 3. 从 react-native 中，可以导入 StyleSheet 的组件，用它的 create 方法，可以创建样式对象
// 4. 使用 react 基础的语法，创建出来的组件，就是一个合法的 RN 组件页面；如果想要在页面中，
// 放置一些合法的页面元素，只能使用 RN 库提供的固有组件，不能使用网页中的任何元素


// 不推荐使用 npm 下载包，首先：下载速度慢，其次，如果是 npm 5.x，在装新包的时候，会把一些老包删除
// 推荐使用 facebook 开发的 yarn 来安装包 yarn add 包名，但是不知道为什么会运行错误