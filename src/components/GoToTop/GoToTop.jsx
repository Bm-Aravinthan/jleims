import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.css"

const theme = {
  colors: {
    // btn: "#ffbe81",
    btn: "rgb(98 84 243)",
    hr: "#ffffff",
    shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    // shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
};

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);


  return (
    <ThemeProvider theme={theme}>
        <Wrapper className="top-wrapper">
        {isVisible && (
            <div className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn--icon" />
            </div>
        )}
        </Wrapper>
    </ThemeProvider>
  );
};



const Wrapper = styled.section`
  .top-btn {
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default GoToTop;