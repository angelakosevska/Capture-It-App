import React, { useState } from 'react';
import './style.css';

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Feed() {
    const originalPosts = [
        {
            id: 1,
            profilePic: '/Photos/profile1.jpg',
            profileName: "John Doe",
            eventName: "Event 1",
            description: "Description for event 1",
            photos: [
                '/Photos/photo1.jpg',
                '/Photos/photo2.jpg',
                '/Photos/photo3.jpg',
                '/Photos/photo4.jpg',
                '/Photos/photo5.jpg',
                '/Photos/photo6.jpg',
                '/Photos/photo7.jpg',
                '/Photos/photo8.jpg',
                '/Photos/photo9.jpg',
                '/Photos/photo10.jpg',
                '/Photos/photo11.jpg',
                '/Photos/photo12.jpg',
            ],
        },
        {
            id: 2,
            profilePic: '/Photos/profile2.jpg',
            profileName: "Jane Smith",
            eventName: "Event 2",
            description: "Description for event 2",
            photos: [
                '/Photos/photo1.jpg',
                '/Photos/photo2.jpg',
                '/Photos/photo3.jpg',
                '/Photos/photo4.jpg',
                '/Photos/photo5.jpg',
                '/Photos/photo6.jpg',
                '/Photos/photo7.jpg',
                '/Photos/photo8.jpg',
                '/Photos/photo9.jpg',
                '/Photos/photo10.jpg',
                '/Photos/photo11.jpg',
                '/Photos/photo12.jpg',
            ],
        },
    ];

    const additionalPostsCount = 6; // Number of additional posts to create
    const additionalPosts = [];

    for (let i = 0; i < additionalPostsCount; i++) {
        const originalPost = originalPosts[i % originalPosts.length];
        additionalPosts.push({
            id: originalPosts.length + i + 1,
            profilePic: originalPost.profilePic,
            profileName: originalPost.profileName,
            eventName: originalPost.eventName,
            description: originalPost.description,
            photos: shuffleArray(originalPost.photos),
        });
    }

    const posts = [...originalPosts, ...additionalPosts];

    const handleViewMoreClick = (eventId) => {
        alert(`Redirecting to event page for event ID: ${eventId}`);
    };

    return (
        <div className="feed">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <div className="profile">
                        <img src={post.profilePic} alt="Profile" />
                        <span>{post.profileName}</span>
                    </div>
                    <div className="event-name">{post.eventName}</div>
                    <div className="description">{post.description}</div>
                    <div className="photos">
                        {post.photos.slice(0, 5).map((photo, index) => (
                            <div key={index} className="photo-wrapper">
                                <img src={photo} alt={`Photo ${index + 1}`} className="photo" />
                                {index === 4 && (
                                    <div className="view-more" onClick={() => handleViewMoreClick(post.id)}>
                                        View more photos
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="actions">
                        <LikeButton />
                        <CommentButton />
                        <ShareButton />
                    </div>
                </div>
            ))}
        </div>
    );
}

function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [pulsing, setPulsing] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
        setPulsing(true);
        setTimeout(() => setPulsing(false), 200); // Remove pulsing class after animation duration
    };

    return (
        <div className={`ui-like ${pulsing ? 'pulsing' : ''}`} onClick={toggleLike}>
            <i className={liked ? 'bi bi-suit-heart-fill' : 'bi bi-suit-heart'}></i>
        </div>
    );
}

function CommentButton() {
    return (
        <div className="ui-comment">
            <i className="bi bi-chat"></i>
        </div>
    );
}

function ShareButton() {
    return (
        <div className="ui-share">
            <i className="bi bi-share"></i>
        </div>
    );
}

export default Feed;
