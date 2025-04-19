# Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication for the admin section of your website.

## 1. Create a Firebase Project (if you don't have one already)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Give your project a name (e.g., "Ruedata Website")
4. Configure Google Analytics (optional)
5. Click "Create project"

## 2. Register Your Web App

1. In your Firebase project dashboard, click the web icon (</>) to add a web app
2. Give your app a nickname (e.g., "Ruedata Web Page")
3. Check "Also set up Firebase Hosting" if you plan to use it (optional)
4. Click "Register app"
5. Copy the Firebase configuration object (you'll need this later)

## 3. Enable Email/Password Authentication

1. In the Firebase Console, go to "Authentication" in the left sidebar
2. Click on the "Sign-in method" tab
3. Click on "Email/Password" in the list of providers
4. Toggle the "Enable" switch to the ON position
5. Click "Save"

## 4. Add Your Domain to Authorized Domains

1. Still in the "Authentication" section, go to the "Settings" tab
2. Scroll down to the "Authorized domains" section
3. Click "Add domain"
4. Enter your website's domain (e.g., "ruedata.com")
5. Click "Add"

## 5. Update Your Environment Variables

Update your `.env.local` file with the Firebase configuration:

```
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Replace the placeholder values with the actual values from your Firebase configuration.

## 6. Create Admin User(s)

1. In the Firebase Console, go to "Authentication" in the left sidebar
2. Click on the "Users" tab
3. Click "Add user"
4. Enter the email and password for your admin user
5. Click "Add user"

## 7. Testing Authentication

1. Deploy your application or run it locally
2. Navigate to the `/[locale]/rue-admin/login` page
3. Log in with the admin credentials you created
4. You should be redirected to the admin dashboard

## Troubleshooting

If you encounter the error `FirebaseError: Firebase: Error (auth/invalid-api-key)`:

1. Double-check that you've correctly copied your Firebase API key
2. Make sure the API key is set in your environment variables
3. Verify that the Firebase project is active and the API key hasn't been revoked

For local development, the application includes a development mode that bypasses Firebase authentication when using the dummy API key in `.env.local`.
