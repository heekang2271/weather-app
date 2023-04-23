import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppLoading from 'expo-app-loading';
import Tabs from './navigation/Tabs';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
