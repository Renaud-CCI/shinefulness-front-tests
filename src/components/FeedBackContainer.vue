<template>
    <section id="feedback-container">
        <!-- ajout d'un commentaire -->

        <h2>Questionnaire de satisfaction</h2>

        <section v-if="show == 'general'" id="general-feedback" class="feedback-section">

            <h3>En général</h3>
              
            <div  class="feedback-div">
                <h4>
                    De manière générale, quelle note donneriez-vous à l'application ?
                </h4>
                <v-slider
                    v-model="slider1"
                    thumb-label
                    :max="10.0"
                    :min="0.0"
                    :step="1"
                    color="#fdda3e"
                    :ticks="slider1TickLabels"
                    show-ticks="always"
                    tick-size="4"
                ></v-slider>

                <h4 class="second-titles">
                    Comment avez-vous trouvé la durée du scan ?
                </h4>

                <v-slider
                    class="slider2"
                    v-model="slider2"
                    thumb-label
                    :max="10.0"
                    :min="0.0"
                    :step="1"
                    color="#fdda3e"
                    :ticks="slider2TickLabels"
                    show-ticks="always"
                    tick-size="4"
                ></v-slider>
            </div>

            <div class="w-full flex flex-col justify-center items-center my-8">
                <div class="w-1/3">
                    <Button text="Suivant" @click="handleSection('scan')"/>
                </div>
            </div>

            <div class="w-full flex justify-center items-center mb-8">
                <div class="w-2/3">
                    <FeedbackProgressBar text="Questions 1/3" progress="33.3"/>
                </div>
            </div>

        </section>

        <section id="scan-feedback" v-if="show == 'scan'" class="feedback-section">

            <h3>Côté scan</h3>
              
            <div class="feedback-div">
                <!-- relevance of questions -->
                <h4>
                    Comment avez-vu perçu la pertinence des questions ?
                </h4>

                <v-slider
                    v-model="slider3"
                    thumb-label
                    :max="10.0"
                    :min="0.0"
                    :step="1"
                    color="#fdda3e"
                    :ticks="slider1TickLabels"
                    show-ticks="always"
                    tick-size="4"
                ></v-slider>

                <h4 class="third-titles">
                    Pourquoi avez-vous attribué cette note ?
                </h4>

                <textarea
                    v-model="textArea1"
                    rows="3"
                    placeholder="Réponse facultative"
                ></textarea>

                <!-- relevance of results -->
                <h4 class="second-titles">
                    Comment avez-vu perçu la pertinence des résultats ?
                </h4>

                <v-slider
                    v-model="slider4"
                    thumb-label
                    :max="10.0"
                    :min="0.0"
                    :step="1"
                    color="#fdda3e"
                    :ticks="slider1TickLabels"
                    show-ticks="always"
                    tick-size="4"
                ></v-slider>

                <h4 class="third-titles">
                    Pourquoi avez-vous attribué cette note ?
                </h4>

                <textarea
                    v-model="textArea2"
                    rows="3"
                    placeholder="Réponse facultative"
                ></textarea>

                <!-- recommendations -->
                <h4 class="second-titles">
                    Recommanderiez-vous l'application à un proche ?
                </h4>

                <v-slider
                    v-model="slider5"
                    class="slider2"
                    thumb-label
                    :max="10"
                    :min="0"
                    :step="1"
                    color="#fdda3e"
                    :ticks="slider5TickLabels"
                    show-ticks="always"
                    tick-size="4"
                ></v-slider>

                <h4 class="third-titles">
                    Pouvez-vous nous en dire plus ?
                </h4>

                <textarea
                    v-model="textArea3"
                    rows="3"
                    placeholder="Réponse facultative"
                ></textarea>

                <!-- Improvements ideas -->
                <h4 class="second-titles">
                    Souhaitez-vous nous soumettre des idées d'amélioration ?
                </h4>

                <textarea
                    v-model="textArea4"
                    rows="3"
                    placeholder="Réponse facultative"
                ></textarea>
            </div>

            <div class="w-full flex justify-between items-center my-8">

                    <div class="w-1/3 ms-8">
                        <Button text="Retour" type="secondary" @click="handleSection('general')"/>
                    </div>
                    <div class="w-1/3 me-8">
                        <Button text="Suivant" @click="handleSection('technical')"/>
                    </div>
            </div>

            <div class="w-full flex justify-center items-center mb-8">
                <div class="w-2/3">
                    <FeedbackProgressBar text="Questions 2/3" progress="66.6"/>
                </div>
            </div>

        </section>

        <section id="technical-feedback" v-if="show == 'technical'" class="feedback-section">

            <h3>Côté technique</h3>
              
            <div  class="feedback-div">

                <!-- UX Difficulties -->
                <h4>
                    Avez-vous eu des difficultés à utiliser l'application ?
                </h4>

                <div>
                    <input type="radio" id="uxYes" name="uxDifficulties" value="yes" v-model="uxDifficulties">
                    <label for="uxYes">Oui</label>
                </div>
                <div>
                    <input type="radio" id="uxNo" name="uxDifficulties" value="no" v-model="uxDifficulties">
                    <label for="uxNo">Non</label>
                </div>

                <div v-if="uxDifficulties == 'yes'" class="mt-2">
                    <h4 class="third-titles">
                        Pouvez-vous nous en dire plus ?
                    </h4>

                    <textarea
                        v-model="textArea5"
                        rows="3"
                        placeholder="Réponse facultative"
                    ></textarea>
                </div>

                <!-- Bugs -->
                <h4 class="second-titles">
                    Avez-vous remarqué des bugs ou défauts ?
                </h4>

                <div>
                    <input type="radio" id="bugsYes" name="bugs" value="yes" v-model="bugs">
                    <label for="bugsYes">Oui</label>
                </div>
                <div>
                    <input type="radio" id="bugsNo" name="bugs" value="no" v-model="bugs">
                    <label for="bugsNo">Non</label>
                </div>

                <div v-if="bugs == 'yes'" class="mt-2">
                    <h4 class="third-titles">
                        Pouvez-vous nous en dire plus ?
                    </h4>

                    <textarea
                        v-model="textArea6"
                        rows="3"
                        placeholder="Réponse facultative"
                    ></textarea>
                </div>

                <!-- Improvements ideas -->
                <h4 class="second-titles">
                    Souhaitez-vous nous soumettre des idées d'amélioration sur l'ergonomie de l'application ?
                </h4>

                <textarea
                    v-model="textArea7"
                    rows="3"
                    placeholder="Réponse facultative"
                ></textarea>
            </div>

            <div class="w-full flex justify-between items-center my-8">
                <div class="w-2/5 ms-4">
                    <Button text="Retour" type="secondary" @click="handleSection('scan')"/>
                </div>
                <div class="w-2/5 me-4">
                    <Button text="Envoyer les réponses" />
                </div>
            </div>

            <div class="w-full flex justify-center items-center mb-8">
                <div class="w-2/3">
                    <FeedbackProgressBar text="Questions 3/3" progress="100"/>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { ref, onMounted, watch, nextTick } from 'vue';
import { VSlider } from 'vuetify/components';
import Button from './Reusables/Button.vue';
import FeedbackProgressBar from './FeedbackProgressBar.vue';

export default {
    name: 'FeedBackContainer',
    components: {
        VSlider,
        Button,
        FeedbackProgressBar,
    },
    setup() {
        const show = ref('general');
        const slider1 = ref(null);
        const slider2 = ref(null);
        const slider3 = ref(null);
        const slider4 = ref(null);
        const slider5 = ref(null);
        const textArea1 = ref(null);
        const textArea2 = ref(null);
        const textArea3 = ref(null);
        const textArea4 = ref(null);
        const textArea5 = ref(null);   
        const textArea6 = ref(null);
        const textArea7 = ref(null);
        const uxDifficulties = ref(null);
        const bugs = ref(null);   

        const slider1TickLabels = {
            0: '😭',
            2: '😞',
            4: '😐',
            6: '😊',
            8: '😁',
            10: '😍'
        };

        const slider2TickLabels = {
            0: 'Trop courte',
            5: 'Adaptée',
            10: 'Trop longue'
        };

        const slider5TickLabels = {
            0: 'Pas du tout',
            5: 'Peut-être',
            10: 'Assurément'
        };

        const setVSliderStyle = () => {
            const sliderTracks = document.querySelectorAll('.slider2 .v-slider-track__tick-label');
            sliderTracks.forEach((sliderTrack) => {
                sliderTrack.style.fontSize = '0.75rem';
            });
            
        };

        const handleSection = (section) => {
            show.value = section;
        };

        watch(show, () => {
            nextTick(() => {
            setVSliderStyle();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            });
        });

        onMounted(() => {
            nextTick(() => {
                setVSliderStyle();
            });
        });

        return {
            show,
            slider1,
            slider2,
            slider3,
            slider4,
            slider5,
            textArea1,
            textArea2,
            textArea3,
            textArea4,
            textArea5,
            textArea6,
            textArea7,
            uxDifficulties,
            bugs,
            slider1TickLabels,  
            slider2TickLabels,
            slider5TickLabels,
            handleSection,
        };
    },
};
</script>


<style scoped lang="scss">
@import '@/assets/_variables.scss';

#feedback-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    background-color: $background;
    width: 100%;

    h2 {
        font-size: 1.75rem;
        margin: 1.5rem 0;
        color: $dark-yellow;
        font-weight: 600;
        text-align: center;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: $yellow
    }

    h4 {
        font-size: 1rem;
        margin-bottom: 0.25rem;

        &.second-titles {
            margin-top: 1.5rem;
        }

        &.third-titles {
            margin-top: 0.5rem;
            margin-bottom: 0;
        }
    }

    .feedback-section{            
        accent-color: $yellow;

        .feedback-div{
            width: 90%;
            margin: 0 auto;
        }

        textarea{
            border: 1px solid $yellow;
            border-radius: 10px;
            width: 100%;
            margin-top: 0.5rem;
            padding: 0.5rem;
            font-size: 0.9rem;
            color: $darker-background;
            background-color: $light-background;
        }

        label{
            margin-left: 0.5rem;
            font-size: 0.9rem;
        }
    }



}
</style>