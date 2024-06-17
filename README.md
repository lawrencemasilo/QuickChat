# QuickChat

QuickChat is a simple lightweight chat web application built with ReactJS, and Firebase, allowing users to engage in one-on-one private chats.
## Landing Page
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20L1.png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20L2.png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20L3.png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20L4.png)
## Login, Signup Page and Reset Password Page
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot(80).png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot(82).png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot(81).png)
## Home page
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20(75).png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20(76).png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20(77).png)
![](https://github.com/lawrencemasilo/QuickChat/blob/main/src/images/Screenshot%20(80).png)
## Features

- User authentication with Firebase Authentication
- Real-time messaging using Firebase Realtime Database
- User search functionality
- Responsive UI for seamless user experience

## How to Run

To run the QuickChat app locally, follow these steps:

### Deployed app: https://frabjous-bublanina-27d850.netlify.app/

### Prerequisites

- Node.js and npm installed

### Server Setup

1. Clone Repo:
   ```
   git clone https://github.com/lawrencemasilo/QuickChat.git
   ```

3. Change Directory:
   ```
   cd QuickChat
   ```
   
4. Install npm dependencies:
   ```
   npm install
   ```
  
5. Start the React development server:
   ```
    npm run dev
   ```

## Core Algorithms and Code Snippets

1. Real-Time Messaging Functionality:
   #### QuickChat's real-time messaging feature is powered by Firebase Firestore, enabling instantaneous communication between users. Below is an overview of the core algorithm and relevant code snippets:
      Algorithm:
      - When a user sends a message, it is immediately stored in the Firestore database.
      - The message is then synchronized across all clients subscribed to the chat room, ensuring real-time updates.
      - Each client listens for changes in the Firestore collection corresponding to the chat room and updates the UI accordingly.
   #### Code Snippets:
      ```
         // Sending a message
         const sendMessage = async (message) => {
          if (message.trim() === '') return;
          try {
            const messagesRef = collection(db, 'userMessages', data.chatId, 'messages');
            await addDoc(messagesRef, {
              content: message,
              senderId: currentUser.uid,
              timestamp: serverTimestamp(),
            });
          } catch (error) {
            console.error('Error sending message:', error);
          }
        };
      ```

2. User Authentication and Authorization:
   #### QuickChat implements user authentication using Firebase Auth, ensuring secure access to user accounts and personal data. Here's an overview of the core algorithm and relevant code snippets:
      Algorithm:
         Users sign up or log in using their email and password.
         Firebase Auth verifies user credentials and issues a unique authentication token.
         Authenticated users are granted access to restricted features, such as sending messages and accessing private chats.
   #### Code Snippets:
   ```
      // logging in a user
      const handleSubmit = async (e) => {
       e.preventDefault()
       const email = e.target[0].value;
       const password = e.target[1].value;
       try{
         await signInWithEmailAndPassword(auth, email, password)
         navigate("/home")
       }catch(err){
         console.log(err);
       }
     }
   ```
