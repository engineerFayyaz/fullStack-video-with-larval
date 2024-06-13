import React, { useState, useEffect } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import { initializeApp } from 'firebase/app';
import { Button, Form, Badge } from 'react-bootstrap';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useUser } from "../../redux/UserContext";
import "../../components/ChatComponent/chat.css";
import axios from 'axios';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDmP8ZRFu1G1IpiD_aYeFq-8EoaeeGwbg",
  authDomain: "web-video-straming.firebaseapp.com",
  projectId: "web-video-straming",
  storageBucket: "web-video-straming.appspot.com",
  messagingSenderId: "200003565474",
  appId: "1:200003565474:web:759f6c524639c6e0f7e4fb",
  measurementId: "G-97QRRJ639P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Chats = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);
    const { userEmail } = useUser();
    const emailPrefix = userEmail ? userEmail.split("@")[0] : "";

    // Fetch users from API
    useEffect(() => {
      const fetchUsers = async () => {
          try {
              const response = await axios.get('https://ourbrandtv.com/mobile/public/api/get_user');
              const userEmails = response.data.data.map(user => ({
                  email: user.email,
                  name: user.email.split('@')[0]
              }));
              setUsers(userEmails);
          } catch (error) {
              console.error('Error fetching users from API:', error);
          }
      };

      fetchUsers();
  }, []);

    useEffect(() => {
        const unsubscribeUsers = onSnapshot(collection(db, 'users'), snapshot => {
            const usersData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(prevUsers => [...prevUsers, ...usersData]);
        });

        let unsubscribeMessages;
        if (selectedUser) {
            const participants = ['admin', emailPrefix, selectedUser.email].filter(Boolean);
            unsubscribeMessages = onSnapshot(
                query(
                    collection(db, 'messages'),
                    orderBy('timestamp'),
                    where('participants', 'array-contains-any', participants)
                ),
                snapshot => {
                    const initialMessages = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setMessages(initialMessages);
                }
            );
        }

        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => {
            unsubscribeUsers();
            if (unsubscribeMessages) unsubscribeMessages();
            unsubscribeAuth();
        };
    }, [db, auth, selectedUser, emailPrefix]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            try {
                const participants = selectedUser ? [emailPrefix, selectedUser.email] : [emailPrefix];
                await addDoc(collection(db, 'messages'), {
                    message: text,
                    senderName: emailPrefix,
                    participants,
                    timestamp: new Date()
                });
                setText('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedUser(null);
    };

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <>
            <Button className="chat-button" onClick={handleOpenPopup}>Start Chat</Button>
            {showPopup && (
                <div className="chat-popup-overlay">
                    <div className="chat-popup-content">
                        <div className="chat-popup-sidebar">
                            <div className="chat-popup-header">
                                <h5>Select User to Chat With</h5>
                                <button className="chat-popup-close-button" onClick={handleClosePopup}>&times;</button>
                            </div>
                            <div className="chat-popup-list">
                                <div
                                    key="admin"
                                    className="chat-popup-list-item"
                                    onClick={() => handleSelectUser({ name: "Admin", email: "admin" })}
                                >
                                    Admin
                                </div>
                                {users.map(user => (
                                    <div
                                        key={user.email}
                                        className="chat-popup-list-item"
                                        onClick={() => handleSelectUser(user)}
                                    >
                                        {user.name} {user.unreadMessages > 0 && <Badge bg="secondary">{user.unreadMessages}</Badge>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="chat-popup-main">
                            {selectedUser && (
                                <div className="chat-container">
                                    <div className="chat-header">
                                        <h2>Chat with {selectedUser.name}</h2>
                                    </div>
                                    <ChatFeed
                                        className="chat-feed"
                                        messages={messages.map(message => new Message({
                                            id: message.id,
                                            message: message.message,
                                            senderName: message.senderName,
                                            sender: message.senderName === emailPrefix ? 0 : 1 // sender ID 0 for current user, 1 for others
                                        }))}
                                        hasInputField={false}
                                        showSenderName
                                        bubblesCentered={false}
                                        bubbleStyles={{
                                            text: {
                                                fontSize: 15,
                                                color: 'white' // White text color for bubbles
                                            },
                                            chatbubble: {
                                                borderRadius: 20,
                                                padding: 10,
                                                marginBottom: 10,
                                                backgroundColor: '#007bff', // Default bubble color
                                            }
                                        }}
                                    />
                                    <div className="chat-input-container">
                                        <Form className="w-100" onSubmit={handleSendMessage}>
                                            <Form.Group controlId="messageInput" className="d-flex">
                                                <Form.Control
                                                    className="chat-input"
                                                    type="text"
                                                    placeholder="Type your message..."
                                                    value={text}
                                                    onChange={e => setText(e.target.value)}
                                                />
                                                <Button variant="primary" type="submit">Send</Button>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chats;
