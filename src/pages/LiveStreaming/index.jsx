import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LiveStreaming = () => {
  const [isYouTubeStreaming, setIsYouTubeStreaming] = useState(false);
  const [isFacebookStreaming, setIsFacebookStreaming] = useState(false);

  const startYouTubeStream = async () => {
    try {
      setIsYouTubeStreaming(true);

      const broadcastResponse = await axios.post(
        'https://www.googleapis.com/youtube/v3/liveBroadcasts',
        {
          snippet: {
            title: 'Your Broadcast Title',
            scheduledStartTime: '2023-11-17T12:00:00Z', // Set a future date and time
          },
          contentDetails: {
            monitorStream: { enableMonitorStream: false },
            enableEmbed: false,
            enableDvr: false,
          },
        },
        {
          params: {
            part: 'snippet,contentDetails',
            key: 'AIzaSyCECu1YvzajnUKfnvpy3igvEwqEQbchLMo', // Replace with your YouTube API key
          },
        }
      );

      const { id: broadcastId } = broadcastResponse.data;

      const ingestionResponse = await axios.post(
        'https://www.googleapis.com/youtube/v3/liveBroadcasts/bind',
        {
          id: broadcastId,
          stream: {
            id: 'mhzh-c65f-5s7w-dr18-091v', // Replace with your YouTube stream key
          },
        },
        {
          params: {
            part: 'id,snippet,contentDetails,status',
            key: 'AIzaSyCECu1YvzajnUKfnvpy3igvEwqEQbchLMo', // Replace with your YouTube API key
          },
        }
      );

      console.log('YouTube Stream Started:', ingestionResponse.data);
    } catch (error) {
      console.error('Error starting YouTube stream:', error.message);
      toast.error(`YouTube Stream Error: ${error.message}`);
    } finally {
      setIsYouTubeStreaming(false);
    }
  };

  const startFacebookStream = async () => {
    try {
      setIsFacebookStreaming(true);

      const response = await axios.post(
        'https://graph.facebook.com/v12.0/me/live_videos',
        {
          access_token:
            'EAApZBFo6nAcMBOZB2Ncw6p9kHZBK9vkV5tkSZBnVntTfvVF90h2PhcuEWBnRxQaIW96jFQI4qzAjRDHsovgvETWzCltZAiJB5j5DyWTob8rTZBpd3uaiNerhkWvXdIyMZAs8ualW2kQ4KOYdwpq4enoFtZAUCqKRB8tW6FLoDFQQkIoVtbWKCeQscU2nliX0yZBBAlN4xJDpCTG1UegBiQiztZAciTllwTSFfKNJ7VZBqZAzTOZCaMEIliQ9ZBEv0HS7OVmEYZD',
          title: 'Your Broadcast Title',
          description: 'Your Broadcast Description',
          encoding_settings: {
            stream_key: 'FB-2089472344770823-0-AbwAVOl2ktHZ0ewh', // Replace with your Facebook stream key
          },
        }
      );

      console.log('Facebook Stream Started:', response.data);
    } catch (error) {
      console.error('Error starting Facebook stream:', error.message);
      toast.error(`Facebook Stream Error: ${error.message}`);
    } finally {
      setIsFacebookStreaming(false);
    }
  };

  return (
    <div>
      <button onClick={startYouTubeStream} disabled={isYouTubeStreaming}>
        {isYouTubeStreaming ? 'YouTube Streaming...' : 'Start YouTube Stream'}
      </button>
      <button onClick={startFacebookStream} disabled={isFacebookStreaming}>
        {isFacebookStreaming ? 'Facebook Streaming...' : 'Start Facebook Stream'}
      </button>
      <ToastContainer />
    </div>
  );
};

export default LiveStreaming;
