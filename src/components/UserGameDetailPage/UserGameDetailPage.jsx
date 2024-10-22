// UserGameDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import games from '../Assets/data3';
import './UserGameDetailPage.css';

const UserGameDetailPage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const gameData = games.find(g => g.id === parseInt(gameId));
    setGame(gameData);
  }, [gameId]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: new Date().getTime(), // Using timestamp instead of crypto
        text: newComment,
        timestamp: new Date().toLocaleString(),
        author: 'Current User'
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  if (!game) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="game-detail-container">
      <div className="game-detail-grid">
        {/* Left Box - User Info */}
        <div className="detail-box user-info-box">
          <div className="user-header">
            <div className="user-avatar">
              {game.user.name.charAt(0)}
            </div>
            <div className="user-title">
              <h2>{game.user.name}</h2>
              <p className="sport-name">{game.sport}</p>
            </div>
          </div>
          <div className="event-details">
            <div className="detail-item">
              <span className="icon">🕒</span>
              <span>{game.eventTime}</span>
            </div>
            <div className="detail-item">
              <span className="icon">👤</span>
              <span>Level: {game.level}</span>
            </div>
          </div>
        </div>

        {/* Right Box - Venue Info */}
        <div className="detail-box venue-info-box">
          <h3>Location Details</h3>
          <div className="venue-details">
            <div className="detail-item">
              <span className="icon">📍</span>
              <span>{game.venue}</span>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(game.venue)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-button"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <form onSubmit={handleAddComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button type="submit">Post Comment</button>
        </form>

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{comment.timestamp}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserGameDetailPage;