import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

const SignIn = () => {

    const [form,setForm] = useState({
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView>
        <View className="w-full justify-center h-full px-4">
            <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl text-white mt-10 font-semibold">Log in to Aora</Text>

            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,
            email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />

<FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form,
            password: e})}
            otherStyles="mt-7"
            />

<CustomButton
title="Sign In"
handlePress={submit}
containerStyles="mt-7"
isLoading={isSubmitting}
></CustomButton>
            

            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">Don't have an account ?</Text>
                <Link href="/sign-up" className='text-lg font-pbold text-secondary-100'>Habibi Sign Up</Link>
            </View>

        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})