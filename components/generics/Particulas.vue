<template lang="pug">
  client-side
    Particles(
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    )
</template>
<script>
import { loadFull } from 'tsparticles'

export default {
  name: 'ParticlesComponent',

  data() {
    return {
      options: {
        background: {
          color: {
            value: '#1b1b1b',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 3.9960039960039966,
              duration: 2,
              opacity: 8,
              speed: 2,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 90,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: false,
            speed: 2,
            bounce: false,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 4,
            random: true,
          },
        },
        detectRetina: true,
      },
    }
  },

  methods: {
    async particlesInit(engine) {
      await loadFull(engine)
    },
    particlesLoaded(container) {},
  },
}
</script>

<style lang="scss">
canvas {
  filter: brightness(0.5) !important;
}
</style>
