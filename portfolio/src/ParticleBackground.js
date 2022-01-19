import React from 'react';
import particlesConfig from './Config/particle-config'
import Particles from 'react-tsparticles';
import './ParticleBackground.css';
export default function ParticleBackground(){
    return (
        <Particles options = {particlesConfig} className='particles'></Particles>
    );
}