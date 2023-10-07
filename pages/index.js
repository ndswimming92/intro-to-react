// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

import Counter from '../components/Counter';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'Nicholas' }; // TODO: COMMENT OUT FOR AUTH

  const titles = [
    { id: 1, title: 'Nicholas Counter' },
    { id: 2, title: 'Pual Counter' },
    { id: 3, title: 'Lucas Counter' },
  ];

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      {titles.map((obj) => (
        <Counter key={obj.id} title={obj.title} />
      ))}
      <Counter />
    </div>
  );
}

export default Home;
