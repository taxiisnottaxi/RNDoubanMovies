import React, {Component} from 'react';
import {View, Image, Text, ActivityIndicator, FlatList, StyleSheet, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    movieTitle: {
        fontWeight: 'bold'
    }
})

// 导入路由的组件
import { Actions } from 'react-native-router-flux'

export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],  // 电影列表
            nowPage: 1, //当前的页码
            totalPage: 0, // 总页数
            pageSize: 7, // 每页显示的记录条数
            isLoading: true // 是否正在加载数据
        }
    }

    UNSAFE_componentWillMount(){
        this.getMoviesByPage()
    }

    render(){
        return <View>
            {this.renderList()}
        </View>
    }

    // 根据页码获取电影列表
    getMoviesByPage = () => {
        const start = (this.state.nowPage - 1) * this.state.pageSize
        // const url = `https://api.douban.com/v2/movie/in_theaters?start=**&count=${this.state.pageSize}`
        
        // 从网络拿数据
        // fetch(url)
        // .then(res => res.json())
        // .then(data => {
        //     this.setState({
        //         isLoading: false,
        //         movies: this.state.movies.concat(data.subjects),
        //         totalPage: Math.ceil(data.total / this.state.pageSize)
        //     })
        // })
        

        // 模拟从本地拿数据
        setTimeout(() => {
            this.setState({
                isLoading: false,
                movies: require('./test_list.json').subjects,
                totalPage: 2
            })
        }, 1000)
    }

    // 渲染电影列表的方法
    renderList = () => {
        if(this.state.isLoading){
            return <ActivityIndicator style={{marginTop: 15}} size="large" color="#0079FF" />
        }
        // 使用 FlaList 进行高效的渲染
        return <FlatList
            data={this.state.movies}
            keyExtractor={(item, i) => i.toString()}  // 解决 key 的问题
            renderItem={({item}) => this.renderItem(item)}  // 调用方法，去渲染每一项
            ItemSeparatorComponent={this.renderSeparator}  // 渲染分隔线的属性方法
            onEndReachedThreshold={0.5}  // 距离底部还有多远的时候，触发加载更多的事件
            onEndReached={this.loadNextPage}  // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
        />
    }

    // 渲染每项电影
    renderItem = (item) => {
        return <TouchableHighlight underlayColor="#fff" onPress={() => {Actions.moviedetail({id: item.id})}}>
            <View style={{flexDirection: 'row', padding: 10}}>
                {/* 加载网络图片，需要时https开头的，并且得使用uri，而不是url */}
                <Image source={{uri: item.images.small}} resizeMode='cover' style={{width: 100, height: 140, marginRight: 10}} ></Image>
                <View style={{justifyContent: 'space-around'}}>
                    <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
                    <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
                    <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
                    <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
                </View>
            </View>
        </TouchableHighlight>
    }

    // 渲染分隔线
    renderSeparator = () => {
        return <View style={{borderTopColor: '#ccc', borderWidth: 1, marginLeft: 10, marginRight: 10}}></View>
    }

    // 加载下一页
    loadNextPage = () => {
        // 如果下一页的页码值大于总页数了，直接return
        if((this.state.nowPage + 1) > this.state.totalPage){
            return
        }

        this.setState({
            nowPage: this.state.nowPage + 1
        }, function (){
            // this.getMovieByPage()
        })
    }
}
