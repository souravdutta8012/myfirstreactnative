import { ExpoConfig } from '@expo/config-types';

// In SDK 47 and higher, use the following import instead:
// import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
    name: 'myfirstreactnative',
    slug: 'myfirstreactnative',
    android: {
        package: "com.souravdutta2108.myfirstreactnative"
    }
};

export default config;