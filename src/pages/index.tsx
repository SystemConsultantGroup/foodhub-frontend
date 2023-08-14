import Head from "next/head";
import Tags from "components/tag/Tags";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodhub</title>
        <meta name="description" content="나만의 맛집 저장소 - 푸드허브" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>푸드허브</h1>
        <Tags deletable={true}>
          <Tags.Item>Tag1</Tags.Item>
          <Tags.Item>Tag2</Tags.Item>
          <Tags.Item>Tag3</Tags.Item>
        </Tags>
      </main>
    </>
  );
}
