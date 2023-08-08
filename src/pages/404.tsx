import CustomError from "pages/_error";

// 커스텀 404 페이지
const Page404 = () => {
  return <CustomError statusCode={404} title="페이지를 찾을 수 없습니다." />;
};

export default Page404;
