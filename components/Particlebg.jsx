import React from 'react'
import Particles from 'react-particles-js';
import ParticleConfig from "./particle-config"
import { tsParticles } from "tsparticles";
import ParticleAnimation from 'react-particle-animation'

export default function Particlebg() {
 

  return (
    <div id="particles-js">
  <Particles
  params={{
    particles: {
      color: {
        value: "#ee4466"
      },
      line_linked: {
        color: {
          value: "#000000"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    }
  }}
/>
    </div>
  )
}