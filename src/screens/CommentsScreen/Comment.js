import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { CircleImageComp } from '../../components/CircleImageComp/CircleImageComp'
import { color } from '../../config/color'

const Comment = ({navigation}) => {
  const data = [{},{},{},{}]
  const inputElement = useRef();
  return (
    <View style={styles.mainContainer}>
        <HeaderComponent
        back={true}
        backpress={()=> navigation.goBack()}
        name={'Commnets'}/>
        <View style={styles.upperView}>
          <CircleImageComp
          image={require('../../images/Ellipse1.png')}
          styles={styles.mainimage}
          />
          <Text style={styles.innerView}>
         <Text style={styles.MainName}>martinvue.ca  </Text>
         <Text style={styles.secondText}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor lora ad.</Text>
         </Text>  
         </View>
         <View style={styles.Divider}>
         </View>
         <FlatList
                    data={data}
                    renderItem={({ item }) => {
                      return(
                       <View style={styles.otherView}>
                        <Image
                        source={require('../../images/Ellipse1-1.png')}
                         styles={styles.Secondimage} 
                         />
                         <View style={styles.SecondinnerView}>
                          <Text style={styles.innerView}>
                        <Text style={styles.secondName}>martinvue.ca   </Text>
                        <Text style={styles.secondNameText}>Lorem ipsum dolor sit</Text>
                        </Text>  
                        <Text style={styles.time}>
                         8min ago
                        </Text>
                         </View>
                        </View> )}}
        />
        <View style={styles.bottomBar}>
          <View style={styles.bottomViewInsider}>
            <TextInput
            ref={inputElement}
            placeholderTextColor={color.greyTextcolor}
            placeholder={'Type your comments here'}
            value=''
            onChangeText={(e)=>{}}
            />
           <TouchableOpacity>
           <Text>Post</Text>
           </TouchableOpacity>
          </View>
          <View style={styles.BottomDivider}>
         </View>

        </View>
    </View>
  )
}

export default Comment