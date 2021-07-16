import React from 'react';
import Particles from 'react-particles-js';

import Particle1 from 'common/assets/image/agency/particles/particle-1.png';
import Particle2 from 'common/assets/image/agency/particles/particle-2.png';
import Particle3 from 'common/assets/image/agency/particles/particle-3.png';
import Particle4 from 'common/assets/image/agency/particles/particle-4.png';
import Particle5 from 'common/assets/image/agency/particles/particle-5.png';
import Particle6 from 'common/assets/image/agency/particles/particle-2.png';
import Particle7 from 'common/assets/image/agency/particles/particle-4.png';

import Smoke10 from 'common/assets/image/agency//Smoke10.png';


const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 30,
              density: { enable: true, value_area: 800 },
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
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 150,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'top',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
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
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;
