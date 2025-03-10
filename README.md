# Simple Random Card Picker App

### This app was made to test Expo + Flask development. As it was seen,the app works nicely as a website app, but would fail to do so as a mobile version using Expo Go.
Clone the repository or download the code. Run 
```
npm install
```
to install the expo app. Then use 
```
npm start
```

## Main target problem:

### 1- Network error for api calling in the android version
### => Solutions that didn't work for me:
❌ Changing api url from localhost to ip address

❌ Adding the android permission INTERNET to the AndroidManifest.xml  

❌ Adding the androidCleartraffic true line to the AndoidManifest.xml 

❌ Changing run.py to include different things for example threaded true

❌ Trying to download ngrok 

❌ Running the app using tunnel (needed ngrok)


### 2- Failed to download remote update, in Expo Go:
### => Solutions that did'nt work for me:
❌ Reinstalling Expo Go

❌ Using another wifi 

❌ 

