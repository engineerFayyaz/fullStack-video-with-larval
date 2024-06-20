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
    const [showModal, setShowModal] = useState(false);
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
                setUsers(userEmails);  // Update state with fetched users
            } catch (error) {
                console.error('Error fetching users from API:', error);
            }
        };

        fetchUsers();
    }, []);


    useEffect(() => {
        let unsubscribeMessages;
        if (selectedUser) {
            const participants = [emailPrefix, selectedUser.email].sort().join('|');
            unsubscribeMessages = onSnapshot(
                query(
                    collection(db, 'messages'),
                    orderBy('timestamp'),
                    where('participants', '==', participants)
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

        return () => {
            if (unsubscribeMessages) unsubscribeMessages();
        };
    }, [db, selectedUser, emailPrefix]);


    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            try {
                const participants = selectedUser ? [emailPrefix, selectedUser.email].sort() : [emailPrefix];
                const newMessage = {
                    message: text,
                    senderName: emailPrefix,
                    participants,
                    timestamp: new Date()
                };

                await addDoc(collection(db, 'messages'), newMessage);

                // Note: You might want to optimize how messages are updated in state,
                // especially if you have a large number of messages.
                setMessages(prevMessages => [...prevMessages, newMessage]);

                setText('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
        // setShowModal(false); // Close the modal after selecting a user (if needed)
    };


    return (
        <>
            <Button className="chat-button" onClick={handleOpenModal}>Start Chat</Button>
            {showModal && (
                <div className="chat-popup-overlay">
                    <div className="chat-popup-content">
                        <div className="chat-popup-sidebar">
                            <div className="chat-popup-header">
                                <h5>Select User to Chat With</h5>
                                <button className="chat-popup-close-button" onClick={handleCloseModal}>&times;</button>
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
                                    <div className="chat-header mb-3">
                                        <h5>Chat with {selectedUser.name}</h5>
                                    </div>
                                    <ChatFeed
    className="chat-feed"
    messages={messages.filter(message => {
        if (!message.participants) return false; // Handle undefined or null participants

        const sortedParticipants = message.participants.sort(); // Ensure participants is defined before sorting
        const participants = sortedParticipants.join('|');
        const selectedParticipants = [emailPrefix, selectedUser.email].sort().join('|');

        return participants === selectedParticipants;
    }).map(message => new Message({
        id: message.id,
        message: message.message,
        senderName: message.senderName,
        sender: message.senderName === emailPrefix ? 0 : 1
    }))}
    hasInputField={false}
    showSenderName
    bubblesCentered={false}
    bubbleStyles={{
        text: {
            fontSize: 15,
            color: 'white'
        },
        chatbubble: {
            borderRadius: 20,
            padding: 10,
            marginBottom: 10,
            backgroundColor: '#007bff',
        }
    }}
/>

                                    <div className="chat-input-container mt-3">
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
