import { useParams, Link } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();  // URL se ID nikaal liya!

  return (
    <div style={{border: '3px solid green', padding: '30px', margin: '20px', borderRadius: '10px',background: 'lightgreen'}}>
      <h2>👤 User Profile</h2>
      <div style={{background: 'lightblue', padding: '20px', borderRadius: '8px'}}>
        <h3>User ID: <strong>{userId}</strong></h3>
        <p>User ka naam: User-{userId}</p>
        <p>Email: user{userId}@example.com</p>
      </div>
      <br />
      <Link to="/" style={{color: 'blue', fontSize: '18px'}}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default UserProfile;