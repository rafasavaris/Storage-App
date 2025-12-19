# Product Registration App – React Native 📦

A simple **React Native** application for **adding, editing, and deleting products**, with local data persistence using SQLite.

> This application was developed on **Windows OS** and tested using the **Expo Go** app, available for Android and iOS devices.

---

## ✨ Features

- **Add products** with:
  - Name
  - Price
  - Description (optional)
- **Edit existing products**
- **Delete products**
- Product list with sorting options:
  - By creation date
  - Alphabetically
- Quick-view **modal** to display product details
- Local data persistence using **SQLite**

---

## 🧰 Technologies & Versions

- **Node.js:** v22.18.0  
- **npm:** 10.9.3  
- **React Native:** 0.79.5  
- **Expo CLI:** 6.3.12  
- **Expo SDK:** 0.24.21  
- **React Navigation:** 7.1.17  
- **SQLite:** `expo-sqlite` 15.2.14  

> These versions were tested and are compatible with the project. Using older versions may cause build or runtime issues.

---

## 🚀 Getting Started

This guide assumes you already have **Node.js** installed.

### 1️) Clone the repository

```bash
git clone https://github.com/rafasavaris/Storage-App
```

### 2) Install Expo CLI

```bash
npm install -g expo-cli
```

This allows you to create, run, and manage React Native projects using Expo.

### 3) Install dependencies

```
npm install
```

This command installs all required dependencies for the project.

### 4) Install Expo Go on your device

* Android: Google Play Store
* iOS: App Store

### 5) Start the project

```bash
npx expo start
```

This will open the Metro Bundler.
If you encounter cache-related issues, run:

```bash
npx expo start -c
```

### 6) Run on a physical device

Scan the QR code using the Expo Go app.

## 🗂️ Project Structure

Inside the `src` folder:

- **components/**  
  Reusable components shared across screens, such as the product list item (`ProductItem`).
- **database/**  
  Contains all SQLite connection logic and CRUD (Create, Read, Update, Delete) operations.
- **screens/**  
  Application screens, each with its own logic and UI.

Both `components` and `screens` directories include `styles.js` files responsible for styling.

---

## 🧑‍💻 How to Use the App

- **Add Product:**  
  Click the **+** button or **Add Product** (when the list is empty). Fill in the required fields (Name and Price) and the optional Description. Click **Save**.

- **Edit Product:**  
  Tap a product in the list to open the modal. Click **Edit**, update the information, and save. After confirming the success alert, you are redirected to the main screen.

- **Delete Product:**  
  Click the delete button on a product and confirm the action in the alert dialog.

- **Sort Products:**  
  Use the button in the top-right corner to toggle between sorting by creation date or alphabetically.

---

## 📝 Notes

- All data is stored locally using **SQLite**.
- The products table is created automatically on the first app execution.

---

## 🚧 Possible Improvements

- Add product search functionality
- Implement filters by price or category
- Integrate a backend for cloud-based data persistence

---

If you have any questions or suggestions, feel free to reach out 😊
