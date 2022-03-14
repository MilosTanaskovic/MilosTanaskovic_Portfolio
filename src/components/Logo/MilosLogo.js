import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MilosLogoSvg } from "../AllSvgs";

const MilosLogoWrapper = styled.div`
    width: 55%;
    margin: auto;
     & svg {
        overflow: visible;
        stroke: #fff;
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
`

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

export const MilosLogo = () => (
  <MilosLogoWrapper>
    <MilosLogoSvg icon={icon} />
  </MilosLogoWrapper>
);