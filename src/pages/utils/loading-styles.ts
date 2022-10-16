const loadingStyles = `
body {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
}

#loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #111;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#spinnerContainer {
  position: relative;
  width: 50px;
  height: 50px;
}

#spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid transparent;
  border-top-color: #eee;
  animation: spin 1s infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

export default loadingStyles;
