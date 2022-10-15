import { ExpoConfig, ConfigContext } from '@expo/config';

// In SDK 47 and higher, use the following import instead:
// import { ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: 'myfirstreactnative',
    slug: 'myfirstreactnative',
    android: {
        package: "com.souravdutta2108.myfirstreactnative"
    },
    extra: {
        eas: {
            projectId: "4e7eebb4-fa6d-4917-a8cd-2570acd27d27"
        }
    },
    runtimeVersion: {
        policy: "sdkVersion"
    },
    updates: {
        url: "https://u.expo.dev/4e7eebb4-fa6d-4917-a8cd-2570acd27d27"
    }
});

// const config: ExpoConfig = {
//     name: 'myfirstreactnative',
//     slug: 'myfirstreactnative',
//     android: {
//         package: "com.souravdutta2108.myfirstreactnative"
//     }
// };

// export default config;