import { Input } from '@/components/input';
import { Calendar as IconCalendar, MapPin } from 'lucide-react-native';
import { Image, Text, View } from 'react-native';

import { Button } from '@/components/button';
import { colors } from '@/styles/colors';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center px-5'>
      <Image
        source={require('@/assets/logo.png')}
        className='h-8'
        resizeMode='contain'
      />
      <Text className='text-zinc-400 font-regular text-center text-lg mt-3'>
        Convide seus amigos e planeje sua próxima viagem
      </Text>

      <View className='w-full bg-zinc-900 p-4 rounded-lg my-8 border border-zinc-800'>
        <Input>
          <MapPin color={colors.zinc[400]} size={20} />
          <Input.Field
            placeholder='Para onde?'
            placeholderTextColor={colors.zinc[400]}
          />
        </Input>
        <Input>
          <IconCalendar color={colors.zinc[400]} size={20} />
          <Input.Field
            placeholder='Quando?'
            placeholderTextColor={colors.zinc[400]}
          />
        </Input>

        <View className='border-b py-3 border-zinc-800'>
          <Button variant='primary' isLoading={false}>
            <Text>Alterar local/data</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
