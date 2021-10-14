import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Project Page fo a Specific Project for a Selected CLient</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
