import test from '../images/user.svg'
import { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ChatHeader() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, 'users', data.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (data && data.user && currentUser) {
      fetchUserData();
    }
  }, [data, currentUser]);

  return (
    <div className="chatheader-container">
      {userInfo ? (
        <>
          <img src={test} alt="user profile picture" />
          <div className="user-name-text">
            <h1 className="user-name">{userInfo.displayName}</h1>
            <p className="status">{userInfo.status}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ChatHeader;
