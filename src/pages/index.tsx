import Head from "next/head";
import ViewMainPage from "feature/main/views/ViewMainPage";
import PageMarker from "components/pageMarker/PageMarker";

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
      <PageMarker
        title="푸드허브 메인 페이지"
        description="최근 추가된 맛집, 평점이 높은 맛집, 데일리 맛잘알 BEST 단체"
      />
    </>
  );
}

Home.showHero = true;

export default Home;
