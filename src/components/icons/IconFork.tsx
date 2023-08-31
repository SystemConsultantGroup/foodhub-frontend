import styled from "@emotion/styled";

interface Props {}

const IconFork = ({}: Props) => {
  return (
    <EmotionWrapper>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5L16.5 16.5M3 7L6.05 10.15C6.59809 10.672 7.32853 10.959 8.08536 10.9498C8.84218 10.9406 9.56541 10.6358 10.1006 10.1006C10.6358 9.56541 10.9406 8.84218 10.9498 8.08536C10.959 7.32853 10.672 6.59809 10.15 6.05L7 3M19.347 16.5749L20.427 17.6539C20.7945 18.0217 21.001 18.5204 21.0009 19.0403C21.0008 19.5602 20.7942 20.0589 20.4265 20.4264C20.0587 20.794 19.56 21.0005 19.0401 21.0004C18.5202 21.0003 18.0215 20.7937 17.654 20.4259L16.574 19.3469C16.2064 18.9792 15.9999 18.4805 16 17.9606C16.0001 17.4406 16.2067 16.942 16.5745 16.5744C16.9422 16.2068 17.4409 16.0004 17.9608 16.0005C18.4808 16.0006 18.9794 16.2072 19.347 16.5749Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </EmotionWrapper>
  );
};

export default IconFork;

const EmotionWrapper = styled.div``;
