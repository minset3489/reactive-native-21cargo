import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useState } from 'react'
import FormField from '../../components/FormField'

const home = () => {


  const [form, setForm] = useState({ email: '', password: '' })

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
      <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
      </ScrollView>
    </SafeAreaView>
  )
}

export default home