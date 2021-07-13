import React from 'react';
import Particles from 'react-particles-js';

import Particle1 from 'common/assets/image/agency/particles/particle-1.png';
import Particle2 from 'common/assets/image/agency/particles/particle-2.png';
import Particle3 from 'common/assets/image/agency/particles/particle-3.png';
import Particle4 from 'common/assets/image/agency/particles/particle-4.png';
import Particle5 from 'common/assets/image/agency/particles/particle-5.png';
import Particle6 from 'common/assets/image/agency/particles/particle-2.png';
import Particle7 from 'common/assets/image/agency/particles/particle-4.png';
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
                  speed: 20,
                  sync: true
                }
              },
              shape: {
                type: "image",
                options: {
                  image: {
                    src:
                      "https://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png",
                    width: 256,
                    height: 256
                  }
                }
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
                value: 64,
                random: { enable: true, minimumValue: 32 },
                animation: {
                  enable: false,
                  speed: 20,
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
                  value: 20
                },
                count: 1
              },
              move: {
                enable: true,
                gravity: {
                  enable: true,
                  acceleration: -0.5
                },
                speed: 0.00000001,
                direction: "top",
                random: false,
                straight: false,
                outModes: {
                  default: "destroy",
                  bottom: "none"
                },
                attract: {
                  enable: true,
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
                resize: true
              }
            },
            detectRetina: true,
            background: {
              color: "#000000"
            },
            emitters: {
              direction: "top",
              rate: {
                quantity: 50,
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
