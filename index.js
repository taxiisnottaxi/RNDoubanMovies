/**
 * @format
 */
// 从 Reactnative 的包中，导入 AppRegistry 组件，它的作用就是注册项目首页
import {AppRegistry} from 'react-native';
import Main from './Main';
import {name as appName} from './app.json';

// 导入自己的组件页面
// import MyHomePage from './MyHomePage.js'

// 当使用 AppRegistry 注册项目的时候，方法中的第一个参数，不要改，否则项目就废了，一般就是项目名称
// 第二个参数表示要把哪个页面注册为首页
AppRegistry.registerComponent(appName, () => Main);
