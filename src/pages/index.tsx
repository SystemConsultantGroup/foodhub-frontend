import Head from "next/head";
import PageMarker from "components/pageMarker/PageMarker";
import { useForm } from "react-hook-form";
import TextInput from "components/inputs/TextInput/TextInput";
import { ErrorMessage } from "@hookform/error-message";

function Home() {
  const { register, handleSubmit, formState, setError } = useForm();
  const { errors } = formState;

  console.log(errors);

  return (
    <>
      <Head>
        <title>Foodhub</title>
        <meta name="description" content="나만의 맛집 저장소 - 푸드허브" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TextInput
          placeholder="이메일"
          {...register("email", {
            validate: (value) => {
              setError("email", {
                type: "manual",
                message: "이메일 형식이 아닙니다.",
              });
              return value.includes("@");
            },
          })}
        />
        <TextInput placeholder="비밀번호" {...register("password")} errors={errors} />
        <input type="submit" />
      </form>
      <PageMarker
        title="푸드허브 메인 페이지"
        description="최근 추가된 맛집, 평점이 높은 맛집, 데일리 맛잘알 BEST 단체"
      />
    </>
  );
}

Home.showHero = true;

export default Home;
