// import { GetStaticProps } from 'next';

// import { getPrismicClient } from '../services/prismic';

// import commonStyles from '../styles/common.module.scss';
import { FiCalendar,FiUser } from 'react-icons/fi';
import Head from 'next/head';

// interface Post {
//   uid?: string;
//   first_publication_date: string | null;
//   data: {
//     title: string;
//     subtitle: string;
//     author: string;
//   };
// }

// interface PostPagination {
//   next_page: string;
//   results: Post[];
// }

// interface HomeProps {
//   postsPagination: PostPagination;
// }

export default function Home() {
  return (
    <>
        <Head>
        <title>Spacetraveling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className="title">
          <h1>Como utilizar Hooks</h1>
          <span>Pensando em sincronização em vez de ciclos de vida.</span>
        </div>

        <div className="info-post">
          <div>
            <FiCalendar/>
            <span>15 Mar 2021</span>
          </div>

          <div>
            <FiUser/>
            <span>Joseph Oliveira</span>
          </div>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
// return true
// };
