import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './particles.css';

function Particle() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles className="container"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}

        options = {
          {particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: ["#2A0944", "#3B185F", "#A12568", "#FEC260"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 1
            },
            size: {
              value: { min: 1, max: 18 }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#3E8BAC",
              opacity: 0.4,
              width: 4
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out"
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1
                }
              },
              push: {
                quantity: 4
              }
            }
          }
        }}
    />
  )
}

export default Particle;