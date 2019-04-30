import React, {Component} from 'react';
import {View, TextInput, Text, ImageBackground,Image,ScrollView,StyleSheet ,TouchableOpacity,Alert,ActivityIndicator,NetInfo,AsyncStorage} from 'react-native';
import LoginStyle from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';
import {bindActionCreators} from 'redux';
 
 const emp_data = [
   {
      "id":1,
      "name":"test1",
      "age" : "11",
      "gender":"male",
      "email" : "test1@gmail.com",
      "phoneNo" : "9738452245"
    },
    {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phoneNo" : "9738452245"

    },
    {
    "id":3,
    "name":"test3",
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9738452245"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9738452245"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9738452245"
    },
    {
    "id":6,
    "name":"test6",
    "age" : "16",
    "gender":"male",
    "email" : "test6@gmail.com",
    "phoneNo" : "9738452245"
    }
  ];

class EmployeeList extends Component {

	constructor(props){
		super(props);
		this.state = {
			tableHead: ['ID','Name', 'Age', 'Gender', 'E-Mail', 'Phone No'],
      tableData: [],
      widthArr: [120,120, 120, 120, 120, 120],
      isLoading:true
		}
	}

	navigate(){
    
	}

  componentDidMount() {
     var tbl_data=[];
    for(i=0;i<emp_data.length;i++){
      var name=[];
      name.push(emp_data[i].id);
      name.push(emp_data[i].name);
      name.push(emp_data[i].age);
      name.push(emp_data[i].gender);
      name.push(emp_data[i].email);
      name.push(emp_data[i].phoneNo);
      tbl_data.push(name);
    }
    
    // tbl_data.push(age);
    // tbl_data.push(gender)
    // tbl_data.push(email);
    // tbl_data.push(phone);
    this.setState({tableData:tbl_data,isLoading:false});

    console.log("table data", this.state.tableData);
  }
  render() {
    //const state = this.state;
    if (this.state.isLoading) {
      return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  this.state.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={this.state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
function mapDispatchToProps(dispatch){
	return{
	};
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps ,mapDispatchToProps)(EmployeeList);