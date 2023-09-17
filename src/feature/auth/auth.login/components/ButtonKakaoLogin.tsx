import Image from "next/image";
import { API_ENDPOINT } from "constant/api";
import { processEnv } from "constant/processEnv";

const KAKAO_LOGIN_URL = processEnv.NEXT_PUBLIC_API_ENDPOINT + API_ENDPOINT.auth.kakao.login;

const ButtonKakaoLogin = () => {
  return (
    <a href={KAKAO_LOGIN_URL}>
      <Image
        alt="카카오 로그인 버튼"
        src="/images/buttons/kakao_login_large_wide.png"
        width={300}
        height={45}
      />
    </a>
  );
};

export default ButtonKakaoLogin;
