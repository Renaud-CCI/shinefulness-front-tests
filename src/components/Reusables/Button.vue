<template>
    <button :class="type" :disabled="type === 'disabled'">
        <span v-if="leftIcon" class="me-1"><font-awesome-icon :icon="leftIcon" /></span>
        {{ text }}
        <span v-if="rightIcon" class="ms-1"><font-awesome-icon :icon="rightIcon" /></span>
    </button>
  </template>
  
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'default',
        },
        leftIcon: {
            type: [String, Array],
            default: null,
        },
        rightIcon: {
            type: [String, Array],
            default: null,
        },
    },
    setup() {
        return {
        };
    },
});
</script>
  
<style scoped lang='scss'>
@import '@/assets/_variables.scss';

  button{
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    color: $darker-background;
    border-radius: 30px;

    &:hover{
      color: $darkest-background;
    }

    &.default{
      background-color: $yellow;
      border: 1px solid $yellow;

      &:hover{
        background-color: white;
      }
    }

    &.disabled{
      background-color: $light-background;
      border: 1px solid $light-background;
      color: $dark-background;
      cursor: not-allowed;

      &:hover{
        cursor: not-allowed;
      }
    }

    &.secondary{
      background-color: white;
      border: 1px solid $yellow;

      &:hover{
        background-color: $yellow;
      }
    }

    &.cta{
      background-color: $light-yellow;
      border: 1px solid $light-yellow;
      color: white;

      &:hover{
        background-color: $yellow;
      }
    }

    &.not-visible{
      background-color: $background;
      border: 1px solid $background;
      color: $darker-background;

      &:hover{
        border: 1px solid $dark-background;
      }
    }

    @media (min-width: $tablet) {
      padding: 1rem;
      font-size: 1.5rem;
    }

    @media (min-width: $desktop) {
      padding: 0.75rem;
      font-size: 1rem;
    }
  }
  
</style>