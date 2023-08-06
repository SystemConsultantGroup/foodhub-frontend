import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodhub</title>
        <meta name="description" content="나만의 맛집 저장소 - 푸드허브" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>푸드허브</h1>
        <p>푸드허브 메인 페이지입니다. </p>
      </div>
    </>
  );
}
