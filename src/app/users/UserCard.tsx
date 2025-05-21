type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function UserCard({ user }: { user: User }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, margin: 8, maxWidth: 400 }}>
      <h2>{user.name} <span style={{ color: '#888', fontSize: 16 }}>@{user.username}</span></h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <div style={{ marginTop: 8 }}>
        <strong>Address:</strong>
        <div style={{ marginLeft: 12 }}>
          <div>{user.address.street}, {user.address.suite}</div>
          <div>{user.address.city}, {user.address.zipcode}</div>
          <div>Geo: {user.address.geo.lat}, {user.address.geo.lng}</div>
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <strong>Company:</strong>
        <div style={{ marginLeft: 12 }}>
          <div>{user.company.name}</div>
          <div style={{ fontStyle: 'italic' }}>{user.company.catchPhrase}</div>
          <div>{user.company.bs}</div>
        </div>
      </div>
    </div>
  );
}
