import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {CheckBox} from 'native-base';
export default function App() {
 return (
	<View style={{flex: 1}}>
	<View style={{ left: 219, top: 368, width: 645, height: 58, position: 'absolute'}}>
	<Text>how you doing?</Text>
	</View>
	<View style={{flexDirection:'row',  left: 327, top: 518, width: 432, height: 5, position: 'absolute'}}>
	<CheckBox checked={true} color='#fc5185' />
	<Text style= {{marginLeft:15}}>Php</Text>
	</View>
	<View style={{ left: 331, top: 596, width: 424, height: 9, position: 'absolute'}}>
	<TextInput style={{left: 331, top: 596, width: 424, height: 85, position: 'absolute', borderWidth: 1}}/>
	</View>
	<View style={{flexDirection:'row',  left: 327, top: 771, width: 432, height: 5, position: 'absolute'}}>
	<CheckBox checked={true} color='#fc5185' />
	<Text style= {{marginLeft:15}}>Php</Text>
	</View>
	<View style={{ left: 331, top: 848, width: 424, height: 9, position: 'absolute'}}>
	<TextInput style={{left: 331, top: 848, width: 424, height: 85, position: 'absolute', borderWidth: 1}}/>
	</View>
	<View style={{flexDirection:'row',  left: 327, top: 1021, width: 432, height: 5, position: 'absolute'}}>
	<CheckBox checked={true} color='#fc5185' />
	<Text style= {{marginLeft:15}}>Php</Text>
	</View>
	<View style={{ left: 331, top: 1100, width: 424, height: 9, position: 'absolute'}}>
	<TextInput style={{left: 331, top: 1100, width: 424, height: 85, position: 'absolute', borderWidth: 1}}/>
	</View>
	<View style={{flexDirection:'row',  left: 327, top: 1274, width: 432, height: 5, position: 'absolute'}}>
	<CheckBox checked={true} color='#fc5185' />
	<Text style= {{marginLeft:15}}>Php</Text>
	</View>
	<View style={{ left: 331, top: 1352, width: 424, height: 9, position: 'absolute'}}>
	<TextInput style={{left: 331, top: 1352, width: 424, height: 85, position: 'absolute', borderWidth: 1}}/>
	</View>
	</View>
 );
}