import React,{Component} from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'

import {Header, HomeTabSection} from '../../components';

const axios = require('axios').default

export default class Order extends Component {


    constructor(props){
        super();
        this.state={
            persons:[]
        }
    }

    getPerson= () => {
        axios.get(`https://raw.githubusercontent.com/alvienadd/raw-task06refactory/master/person.json`)
            .then((response)=>{
                // handle success
                console.log(response.data.persons);
                this.setState({
                    persons: response.data.persons,
                });

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
        });
    }

    componentDidMount(){
        this.getPerson();
    }


    render(){
        return (
            <View style={styles.container}>
                <Header title="Book Table"/>
                <HomeTabSection content={this.state.persons}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        backgroundColor:'#000000'
    }
})
