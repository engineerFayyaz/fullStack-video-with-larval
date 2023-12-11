import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from 'components/Header1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LiveStreamings = () => {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [streamKey, setStreamKey] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const videoRef = useRef(null);

  const startScreenSharing = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      const newAudioContext = new AudioContext();
      const audioSource = newAudioContext.createMediaStreamSource(stream);
      const videoTrack = stream.getVideoTracks()[0];
      const videoStream = new MediaStream([videoTrack]);

      videoRef.current.srcObject = videoStream;
      setIsScreenSharing(true);
      setSelectedScreen({ video: videoStream, audio: audioSource });
      setAudioContext(newAudioContext);
    } catch (error) {
      console.error('Error starting screen sharing:', error);
    }
  };

  const stopScreenSharing = () => {
    if (selectedScreen) {
      const tracks = selectedScreen.video.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsScreenSharing(false);
      setSelectedScreen(null);
      if (audioContext && audioContext.state !== 'closed') {
        audioContext.close();
      }
      setAudioContext(null);
    }
  };

  const startLive = async () => {
    if (!selectedPlatform || !accessToken || !selectedScreen) return;

    // Connect the audio source to the audio context's destination (speakers)
    selectedScreen.audio.connect(audioContext.destination);

    // Call server-side API to start live streaming with selectedPlatform, accessToken, and selectedScreen
    toast.success(`Starting live streaming on ${selectedPlatform} with access token: ${accessToken} and stream key: ${streamKey}`);
    setIsStreaming(true);
  };

  const stopLive = async () => {
    if (!selectedPlatform || !accessToken) return;

    // Disconnect the audio source from the audio context
    selectedScreen.audio.disconnect();

    toast.info(`Stopping live streaming on ${selectedPlatform} with access token: ${accessToken} and stream key: ${streamKey}`);

    // Call server-side API to stop live streaming with selectedPlatform and accessToken
    setIsStreaming(false);
  };

  const handleAccessTokenChange = (e) => {
    setAccessToken(e.target.value);
  };

  const handleStreamKeyChange = (e) => {
    setStreamKey(e.target.value);
  };

  useEffect(() => {
    // Cleanup audio context on component unmount
    return () => {
      if (audioContext && audioContext.state !== 'closed') {
        audioContext.close();
      }
    };
  }, [audioContext]);

  return (
    <div className="bg-gray-900 flex flex-col font-opensans gap-[45px] items-start justify-start mx-auto py-2 w-full">
      <div className="flex flex-col gap-6 items-center w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="container">
          <h1 style={{ color: "white" }}>Live Streaming</h1>
          <div className="mb-3">
            {isScreenSharing ? (
              <div style={{ color: "white" }}>
                <p>Screen sharing is active</p>
                <button className="btn btn-warning" onClick={stopScreenSharing}>
                  Stop Screen Sharing
                </button>
              </div>
            ) : (
              <button className="btn btn-primary" onClick={startScreenSharing}>
                Start Screen Sharing
              </button>
            )}
          </div>
          {isScreenSharing && (
            <div className="mb-3">
              <label className="form-label" style={{ color: "white" }}>Select Platform:</label>
              <select
                className="form-select"
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              >
                <option value="">Select Platform</option>
                <option value="facebook">Facebook</option>
                <option value="youtube">YouTube</option>
                <option value="instagram">Instagram</option>
              </select>
            </div>
          )}
          {isScreenSharing && selectedPlatform && (
            <div className="mb-3" style={{ color: "white" }}>
              <form>
                <label className="form-label">
                  Access Token:
                  <input
                    type="text"
                    className="form-control"
                    value={accessToken}
                    onChange={handleAccessTokenChange}
                  />
                </label>
                {selectedPlatform !== 'instagram' && (
                  <label className="form-label">
                    Stream Key:
                    <input
                      type="text"
                      className="form-control"
                      value={streamKey}
                      onChange={handleStreamKeyChange}
                    />
                  </label>
                )}
              </form>
            </div>
          )}
          {isScreenSharing && selectedPlatform && (
            <div className="mb-3" style={{ color: "white" }}>
              {isStreaming ? (
                <div>
                  <p>Streaming now on {selectedPlatform}!</p>
                  <button className="btn btn-danger" onClick={stopLive}>
                    Stop Streaming
                  </button>
                </div>
              ) : (
                <div>
                  <p>Not streaming</p>
                  <button className="btn btn-success" onClick={startLive}>
                    Start Streaming
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="mb-3">
            <video ref={videoRef} autoPlay controls className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamings;
