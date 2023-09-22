import Head from "next/head";
import ViewMainPage from "feature/main/views/ViewMainPage";

function Home() {
  return (
    <>
      <Head>
        <title>Foodhub</title>
        <meta name="description" content="나만의 맛집 저장소 - 푸드허브" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewMainPage />
    </>
  );
}

Home.showHero = true;

export default Home;
