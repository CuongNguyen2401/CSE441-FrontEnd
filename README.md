This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# E-commerce Mobile App

A React Native mobile application for e-commerce that connects to a Spring Boot backend.

## Project Structure

```
src/
├── assets/            # Images, fonts, and other static assets
├── components/        # Reusable UI components
├── config/            # Configuration files
│   └── env.ts         # Environment configuration
├── navigation/        # Navigation configuration
│   ├── AppNavigator.tsx      # Main navigation setup
│   └── helpers.ts       # Navigation type definitions
├── screens/           # App screens
├── services/          # API services
│   ├── api.ts         # Base API configuration
│   ├── authService.ts # Authentication service
│   ├── cartService.ts # Cart service
│   ├── AppNavigator.tsx      # Services export
│   ├── orderService.ts# Order service
│   └── productService.ts # Product service
├── store/             # State management
│   ├── authStore.ts   # Authentication state
│   ├── cartStore.ts   # Cart state
│   ├── index.ts       # Store exports
│   └── productStore.ts# Product state
└── utils/             # Utility functions
```

## Features

- User authentication (login, register, logout)
- Product browsing and searching
- Product categories
- Shopping cart management
- Order processing
- User profile management

## Tech Stack

- React Native
- TypeScript
- React Navigation for navigation
- Axios for API requests
- React Query for data fetching and caching
- Zustand for state management
- React Hook Form for form handling
- Yup for form validation

## Backend Requirements

The app is designed to work with a Spring Boot backend that provides the following API endpoints:

### Authentication
- POST /api/auth/login - Login with email and password
- POST /api/auth/register - Register a new user
- POST /api/auth/logout - Logout user
- GET /api/auth/me - Get current user profile
- POST /api/auth/refresh - Refresh authentication token

### Products
- GET /api/products - Get products with pagination and filtering
- GET /api/products/{id} - Get product by ID
- GET /api/products/featured - Get featured products

### Cart
- GET /api/cart - Get current user's cart
- POST /api/cart/items - Add product to cart
- PUT /api/cart/items/{id} - Update cart item quantity
- DELETE /api/cart/items/{id} - Remove item from cart
- DELETE /api/cart - Clear cart
- POST /api/cart/coupon - Apply coupon to cart
- DELETE /api/cart/coupon - Remove coupon from cart

### Orders
- POST /api/orders - Create a new order
- GET /api/orders - Get all orders with pagination
- GET /api/orders/{id} - Get order by ID
- POST /api/orders/{id}/cancel - Cancel order

### User
- GET /api/user/addresses - Get user addresses
- POST /api/user/addresses - Add a new address
- PUT /api/user/addresses/{id} - Update an address
- DELETE /api/user/addresses/{id} - Delete an address
- POST /api/user/addresses/{id}/default - Set default address

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
   or
   ```
   pnpm install
   ```

3. Configure the backend URL:
   - Open `src/config/env.ts`
   - Update the `apiUrl` for each environment

4. Run the app:
   ```
   npm run android
   ```
   or
   ```
   npm run ios
   ```

## Development

### Environment Configuration

The app supports different environments (development, staging, production). You can configure the environment settings in `src/config/env.ts`.

### Adding New Screens

1. Create a new screen component in the `src/screens` directory
2. Add the screen to the appropriate navigator in `src/navigation/AppNavigator.tsx`
3. Add the screen to the navigation types in `src/navigation/helpers.ts`

### API Integration

To add a new API endpoint:
1. Add the corresponding method to the appropriate service in the `src/services` directory
2. If needed, create a new store in the `src/store` directory to manage the state related to the new endpoint
