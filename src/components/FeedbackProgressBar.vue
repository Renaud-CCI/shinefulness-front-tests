<template>
    <div class="feedback-progress-bar">
        <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
        <div class="progress-text">{{ text }}</div>
    </div>
</template>


<script>
import { ref } from 'vue';

export default {
    name: 'FeedbackProgressBar',
    props: {
        text: {
            type: String,
            required: true,
        },
        progress: {
            type: Number,
            default: 0,
        },
    },
    setup() {

        return {
        };
    }
};
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

.feedback-progress-bar {
    position: relative;
    width: 100%;
    height: 20px;
    background-color: $light-background;
    border-radius: 10px;
}

.progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: $yellow;
    border-radius: 10px;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $darker-background;
    font-size: 0.8rem;
}
</style>