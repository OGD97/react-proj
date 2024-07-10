import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

    const [form,setForm] = useState({
      username: '',
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {
      createUser(form.username, form.email, form.password);
    }

  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4">
            <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl text-white mt-10 font-semibold">Sign up to Aora</Text>


            <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({...form,
            username: e})}
            otherStyles="mt-10"
            />

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
title="Sign up"
handlePress={submit}
containerStyles="mt-7"
isLoading={isSubmitting}
></CustomButton>
            

            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">Already have an account ?</Text>
                <Link href="/sign-in" className='text-lg font-pbold text-secondary-100'>Sign In</Link>
            </View>

        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})