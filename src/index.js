import React from "react";
import { createRoot } from "react-dom/client"; // createRoot를 react-dom/client에서 import합니다.
import FollowButton from "./components/FollowButton.js";

const domContainer = document.querySelector("#root");
createRoot(domContainer).render(<FollowButton />);
