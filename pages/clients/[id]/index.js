import { useRouter } from 'next/router';
import Link from 'next/link';

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    //do something
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'anth',
        clientprojectid: 'projectA',
      },
    });
  };

  return (
    <div>
      <h1>The Projects for a Given Client </h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
