import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/porfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/porfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
