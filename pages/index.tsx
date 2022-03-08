import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Loader from '../components/Loader';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Link href={'todo'}>
        <a>merp</a>
      </Link>
      <Loader show></Loader>
    </div>
  );
};

export default Home;
