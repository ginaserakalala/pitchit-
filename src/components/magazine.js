import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "../contexts/NewsContext";
import News from "./News";
import { NEWS_API_KEY } from "./config";

// import "../mag.css";

function Magazine() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default Magazine;