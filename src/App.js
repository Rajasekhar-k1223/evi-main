// App.js
import React,{ useEffect, useMemo, useState } from "react";
import "./style.css"; // Assuming style.css is available in the project
import BackgroundVideo from "./BackgroundVideo";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import { tsParticles } from "@tsparticles/engine";



// const particlesInit = useCallback(async engine => {
//   console.log(engine);
//   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   // starting from v2 you can add only the features you need reducing the bundle size
//   //await loadFull(engine);
//   await loadSlim(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//   await console.log(container);
// }, []);

// Overlay component for the clickable overlay effect
const Overlay = () => <a href="#" className="overlay"></a>;

// Main App component that renders the hex layout
const App = () => {
  const [init, setInit] = useState(false);
  const [displayStates, setDisplayStates] = useState({});
  // Hex component to represent individual hex elements
const Hex = ({ dataH1, dataH2, dataH3, backgroundImage, className }) => (
  <div
    className={`hex ${className}`}
    style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    data-h1={dataH1}
    data-h2={dataH2}
    data-h3={dataH3}
  />
);

// HexLayer component with dynamic class and display control
const HexLayer = ({ id, dataH3, imageUrl, display, onClick }) => (
  <div className="hex hex-layer" id={id} onClick={onClick}>
    <Hex className="slide-reveal" dataH3={dataH3} />
    <a
      className="hex"
      href={`#${id}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></a>
    <div
      className={`explain-board explain-${id}`} // Dynamic class name based on ID
      style={{ display: display ? "block" : "none" }} // Conditional display
    >
      <h3>{dataH3}</h3>
    </div>
  </div>
);
  // Toggle display for each HexLayer by id
  const changeDisplay = (id) => {
    setDisplayStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle display for specific ID
    }));
  };
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 500,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <><h2 className="evi-head">EVI</h2>
      <div className="hex-wrap">
        
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <BackgroundVideo />
    <Hex className="tar negr" dataH2="Jeff Buzz" />
    <Hex className="a1" dataH1="Our" />
    <Hex className="a2" dataH1="Team" />
    <Hex dataH2="Jisim Dove" />
    
    <Hex className="a2" />
    <HexLayer
          id="m1"
          dataH3="Jeff, CEO"
          imageUrl="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MjB8fHBvcnRyYWl0JTJDbWFufGVufDB8fHx8MTYyNjg1NjU0Mg&ixlib=rb-1.2.1&q=80&w=400"
          display={displayStates["m1"]}
          onClick={() => changeDisplay("m1")}
        />
    <HexLayer
          id="m2"
          dataH3="Jisim, Design Lead"
          imageUrl="https://images.unsplash.com/photo-1530785602389-07594beb8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fHx8MTYyNjg1NTk4NA&ixlib=rb-1.2.1&q=80&w=400"
          display={displayStates["m2"]}
          onClick={() => changeDisplay("m2")}
        />
    
    <Hex className="a2" />
    <Hex className="tar" dataH2="Simar Chan" />

    <HexLayer
          id="m3"
          dataH3="Simar, Project Lead"
          imageUrl="https://images.unsplash.com/photo-1518518873111-6ca469aa4560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MjN8fHBvcnRyYWl0c3xlbnwwfHx8fDE2MjY4NTU5ODQ&ixlib=rb-1.2.1&q=80&w=400"
          display={displayStates["m3"]}
          onClick={() => changeDisplay("m3")}
        />
      <HexLayer
          id="m4"
          dataH3="Tim, Developer"
          imageUrl="https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHx8fDE2MjY4NTU5ODQ&ixlib=rb-1.2.1&q=80&w=400"
          display={displayStates["m4"]}
          onClick={() => changeDisplay("m4")}
        />
    <Hex className="negr" dataH2="Tim Lake" />

    <Hex className="a1" backgroundImage="url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MXx8dGVhbXxlbnwwfHx8fDE2MjY4NTg0Mjc&ixlib=rb-1.2.1&q=80&w=400')" />
    <Hex className="a1" />
    <Hex className="a1" />

    <Overlay />
  </div>
  </>

    );
  }

  
  // return <div className="hex-wrap">
  //   {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}
  //   <BackgroundVideo />
  //   <Hex className="tar negr" dataH2="Jeff Buzz" />
  //   <Hex className="a1" dataH1="Our" />
  //   <Hex className="a2" dataH1="Team" />
  //   <Hex dataH2="Jisim Dove" />
    
  //   <Hex className="a2" />
  //   <HexLayer
  //     id="m1"
  //     dataH3="Jeff, CEO"
  //     imageUrl="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MjB8fHBvcnRyYWl0JTJDbWFufGVufDB8fHx8MTYyNjg1NjU0Mg&ixlib=rb-1.2.1&q=80&w=400"
  //   />
  //   <HexLayer
  //     id="m2"
  //     dataH3="Jisim, Design lead"
  //     imageUrl="https://images.unsplash.com/photo-1530785602389-07594beb8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fHx8MTYyNjg1NTk4NA&ixlib=rb-1.2.1&q=80&w=400"
  //   />
    
  //   <Hex className="a2" />
  //   <Hex className="tar" dataH2="Simar Chan" />

  //   <HexLayer
  //     id="m3"
  //     dataH3="Simar, Project Lead"
  //     imageUrl="https://images.unsplash.com/photo-1518518873111-6ca469aa4560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MjN8fHBvcnRyYWl0c3xlbnwwfHx8fDE2MjY4NTU5ODQ&ixlib=rb-1.2.1&q=80&w=400"
  //   />
  //   <HexLayer
  //     id="m4"
  //     dataH3="Tim, Developer"
  //     imageUrl="https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHx8fDE2MjY4NTU5ODQ&ixlib=rb-1.2.1&q=80&w=400"
  //   />
  //   <Hex className="negr" dataH2="Tim Lake" />

  //   <Hex className="a1" backgroundImage="url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MXx8dGVhbXxlbnwwfHx8fDE2MjY4NTg0Mjc&ixlib=rb-1.2.1&q=80&w=400')" />
  //   <Hex className="a1" />
  //   <Hex className="a1" />

  //   <Overlay />
  // </div>
};

export default App;
