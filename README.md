# 📝 Cross-Platform Todo App

A sleek, modern, and highly performant cross-platform **Todo Application** built with **React Native**, **Expo SDK 56**, and **TypeScript**. It features local persistence via `@react-native-async-storage/async-storage` and dynamic real-time filtering/search functionality.

[![React Native](https://img.shields.io/badge/React_Native-0.85-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-56-000000?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Key Features

* **⚡ Offline Persistence**: Automatically saves and loads your tasks using device local storage (`AsyncStorage`).
* **🔍 Real-Time Search**: Seamlessly search and filter through task lists on the fly.
* **📱 Cross-Platform**: Optimized to run beautifully on **Android**, **iOS**, and the **Web**.
* **✨ Smooth UX**: Interactive checkboxes, swipe-to-delete support, and a clean, responsive layout built using modern style guides.
* **🛠️ Native Routing**: Powered by **Expo Router** using robust file-based navigation.

---

## 🛠️ Tech Stack & Dependencies

* **Core Framework:** [React Native](https://reactnative.dev/) with [Expo (v56)](https://expo.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based navigation)
* **Storage:** [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
* **UI Icons:** [@expo/vector-icons](https://icons.expo.fyi/)
* **Animations:** [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

## 📂 Project Structure

Here are the key directories and files:

```
├── assets/                  # App assets (icons, images, splash screens)
├── src/
│   ├── app/                 # Main app screens & routing configuration
│   │   ├── _layout.tsx      # Main layout wrapper
│   │   ├── index.tsx        # Dashboard, task list, search, and logic
│   │   └── explore.tsx      # Secondary page layout
│   ├── components/          # Reusable UI components
│   ├── constants/           # Styling tokens & global configurations
│   ├── hooks/               # Custom React Hooks
│   └── global.css           # Global stylesheets
├── package.json             # Scripts & dependency definitions
└── app.json                 # Expo system configurations
```

---

## ⚙️ Getting Started

### 📋 Prerequisites

Ensure you have **Node.js** (v18+) and **npm** or **yarn** installed on your system.

### 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:farzeenkhantareen/react-native-todo-app.git
   cd react-native-todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 🏃 Running the Application

Start the Expo local development server:
```bash
npm start
```

Once the Metro Bundler starts, you can choose where to preview the app:
* Press **`a`** to open the **Android Emulator**.
* Press **`i`** to open the **iOS Simulator**.
* Press **`w`** to open the **Web Browser**.

Alternatively, you can run the platform-specific scripts directly:
```bash
npm run android    # Run directly on Android emulator/device
npm run ios        # Run directly on iOS simulator/device
npm run web        # Start local web development server
```

---

## 📦 Building for Production

This project includes pre-configured scripts for producing build assets:

#### Android
To build a local debug/release APK or an AAB bundle:
```bash
# Clean prebuild and compile APK
npm run assemble-release

# Generate Android App Bundle (AAB) on Windows
npm run bundle-release-windows

# Generate Android App Bundle (AAB) on macOS/Linux
npm run bundle-release-mac
```

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
