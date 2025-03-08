npm install -g eas-cli
eas login
eas init
eas build:configure
npx expo export --platform web
eas build --profile development --platform android
