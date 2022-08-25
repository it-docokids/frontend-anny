import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./components/router/routing";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";
import Footer from "./components/common/footer";
import Arrow from "./components/common/arrow";
import Navbar from "./components/common/navbar";

import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
axios.defaults.baseURL = process.env.REACT_APP_API;
declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean;
  }
}
interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const isInWebApp = window.matchMedia("(display-mode: standalone)").matches;

function useAddToHomeScreenPrompt() {
  const [prompt, setPrompt] = useState<IBeforeInstallPromptEvent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasFinishedInstallation, setHasFinishedInstallation] =
    useState(isInWebApp);

  const finishInstallation = useCallback(function () {
    setHasFinishedInstallation(true);
  }, []);

  const promptToInstall = useCallback(
    function () {
      if (prompt) {
        prompt.prompt();
        prompt.userChoice.then(function (choiceResult) {
          if (choiceResult.outcome === "accepted") {
            finishInstallation();
          }
        });
        return;
      }

      return Promise.reject(
        new Error(
          'Tried installing before browser sent "beforeinstallprompt" event'
        )
      );
    },
    [finishInstallation, prompt]
  );

  useEffect(
    function () {
      if (prompt) {
        setIsReady(true);
      }
    },
    [prompt]
  );

  useEffect(function () {
    function ready(e: IBeforeInstallPromptEvent) {
      e.preventDefault();
      setPrompt(e);
    }

    window.addEventListener("beforeinstallprompt", ready as any);

    return function () {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  }, []);

  return useMemo(
    () => ({
      isReady,
      promptToInstall,
      hasFinishedInstallation,
      finishInstallation,
    }),
    [isReady, promptToInstall, hasFinishedInstallation, finishInstallation]
  );
}

function App() {
  const { isReady, promptToInstall, hasFinishedInstallation } =
    useAddToHomeScreenPrompt();
  return (
    <div className="container">
      <div className="App">
        <Provider store={store}>
          <Navbar />
          <button onClick={() => promptToInstall()}>Instalar</button>
          <Routing />
          <Arrow />
        </Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
