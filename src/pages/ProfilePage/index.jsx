
import React from 'react';
import './style2.css';

function Card({ event }) {
  return (
    <div className="card-event">
      <img src={event.image} alt={event.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{event.name}</h2>
        <a href={`/events/${event.id}`} className="viewpfp-event-button">View event</a>
      </div>
    </div>
  );
}

function Profile() {
  const events = [
    { id: 1, name: 'Beach', image: 'https://ik.imagekit.io/tvlk/blog/2018/04/book-750x400.png?tr=dpr-2,w-675' },
    { id: 2, name: 'Party', image: 'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg' },
    { id: 3, name: 'Wedding', image: 'https://www.thebrewery.co.uk/wp-content/uploads/2020/03/LA-430-scaled.jpg' },
    { id: 4, name: 'Concert', image: 'https://skopjemetropolitan.edu.mk/wp-content/uploads/2018/08/aditya-chinchure-494048-unsplash.jpg' },
    { id: 5, name: 'Festival', image: 'https://www.valleyfest.co.uk/wp-content/uploads/2024/02/220806_ValleyFest_Saturday_GiuliaSpadafora_HiRes-00204-Web-1200x799.jpeg' },
    { id: 6, name: 'Birthday', image: 'https://cf.ltkcdn.net/celebrations/parties/images/orig/341607-1600x1066-birthday-party-names-1001540940.jpg' },
    // Add more events here
  ];

  // Filter out duplicate events
  const uniqueEvents = Array.from(new Set(events.map(event => event.id))).map(id => {
    return events.find(event => event.id === id);
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={`${process.env.PUBLIC_URL}/Photos/profile1.jpg`}
          alt="Profile Picture"
          className="profile-pic"
        />
        <div className="profile-info">
          <h1 className="name">John Doe</h1>
          <p className="username">@j_doe</p>
        </div>
      </div>
      <div className="profile-actions">
        <input type="text" placeholder="Search events" className="search-bar" />
        <button className="edit-button"><i class="bi bi-pencil-square"></i> Edit</button>
      </div>
      <div className="cardpfp-container">
        {uniqueEvents.map(event => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>

  );
}

export default Profile;


