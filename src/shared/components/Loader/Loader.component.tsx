import * as React from 'react';
import Lottie from "react-lottie";
import loadingJson from "./loading.json";
import styled from "styled-components";
import { observer } from 'mobx-react';

const LottieWrapper = styled.div<{ loading: boolean; }>`
  transform: scale(${props => props.loading ? 1 : 0});
  height: ${props => props.loading ? 30 : 0};
  transition: all .2s;
`;

export const Loader = observer((props) => {
    const {
        loading
    } = props as {loading:boolean};

  const options = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <LottieWrapper loading={loading}>
      <Lottie options={options} width={100} height={50} />
    </LottieWrapper>
  );
});
