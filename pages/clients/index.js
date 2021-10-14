import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'anth', name: 'Anthony' },
    { id: 'manu', name: 'Manuel' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
