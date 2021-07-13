import React from 'react';
import Particles from 'react-particles-js';

import Smoke10 from 'common/assets/image/agency//Smoke10.png';

import { divModeExecute } from 'tsparticles/Utils';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 0,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 2,
                  sync: true
                }
              },
              shape: {
                type: ['images'],
                images: [
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                  {
                    src: `${Smoke10}`,
                    width: 80,
                    height: 80,
                  },
                 
                ],
              },
              opacity: {
                value: 1,
                random: false,
                animation: {
                  enable: true,
                  speed: 0.5,
                  minimumValue: 0,
                  sync: false
                }
              },
              size: {
                value: 104,
                random: { enable: false, minimumValue: 32 },
                animation: {
                  enable: false,
                  speed: 5,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              links: {
                enable: false,
                distance: 100,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              life: {
                duration: {
                  value: 100
                },
                count: 1
              },
              move: {
                enable: true,
                gravity: {
                  enable: true,
                  bounce: false,
                  acceleration: 0
                },
                speed: 4,
                direction: "top",
                random: false,
                straight: false,
                outModes: {
                  default: "destroy",
                  bottom: "none"
                },
                attract: {
                  enable: false,
                  distance: 300,
                  rotate: {
                    x: 60,
                    y: 120
                  }
                }
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: false
              }
            },
            detectRetina: true,
            background: {
              color: "transparent"
            },
            emitters: {
              direction: "top",
              rate: {
                quantity: 3,
                delay: 0.05
              },
              size: {
                width: 100,
                height: 10
              },
              position: { //muito importante isto, e onde comeca
                x: 50,
                y: 100
              }
            }
          }}
      />
    </>
  );
};
export default ParticlesComponent;
