import { Text, View,TextInput } from 'react-native'
import React from 'react'
import Search from "../../assets/icons/search.svg"

const Index = () => {
  return (
    <View className='px-[20px] bg-[#000000] h-full'>
      <View className='mt-[20px]'>
        <TextInput placeholderTextColor="#FFFFFFB2" style={{borderColor:"#808080B2",borderWidth:3}} className="pr-[40px] font-robotoRegular pl-[20px] rounded-[4px] text-[#FFFFFFB2] font-normal text-[14px] leading-[24px] bg-[#161616B2] py-[20px]" 
        placeholder='Search for shows, movies or artists...' 
        />
        <Search width={20} height={20} style={{position:"absolute",right:20,marginTop:25}} />
      </View>
      
    </View>
  )
}

export default Index