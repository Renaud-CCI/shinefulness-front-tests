<template>
    <div class="navbar-container grid grid-cols-2 items-center">
        <div class="flex justify-start">
            <router-link to="/">
                <img src="@/assets/images/logos/LOGO-SHINEFULNESS-NAKIMA.png" alt="Logo" class="logo-img" />
            </router-link>
        </div>
        <div class="select-div flex justify-end">
            <label for="selectTest" class="flag-label" @click="showSelect = true">{{ selectedFlag }}</label>
            <select v-model="locale" id="selectTest" @change="updateFlag" v-show="showSelect" class="select-input">
                <option v-for="lang in languageKeys" :key="lang" :value="lang">
                    {{ languageNames[lang].name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { languages, languageNames } from '@/locales/index';

export default defineComponent({
    name: 'NavbarContainer',
    setup() {
        const { t, locale } = useI18n();
        const languageKeys = Object.keys(languages);
        const showSelect = ref(false);
        const selectedFlag = ref('');
        let lastScrollTop = 0;

        const updateFlag = () => {
            selectedFlag.value = languageNames[locale.value].emoji;
            showSelect.value = false;
        };

        const handleClickOutside = (event) => {
            const selectElement = document.getElementById('selectTest');
            const labelElement = document.querySelector('.flag-label');
            if (selectElement && labelElement && !selectElement.contains(event.target) && !labelElement.contains(event.target)) {
                showSelect.value = false;
            }
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const navbar = document.querySelector('.navbar-container');
            if (scrollTop > lastScrollTop) {
                navbar.classList.add('hidden-nav'); // Scroll down
            } else {
                navbar.classList.remove('hidden-nav'); // Scroll up
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        onMounted(async () => {
            updateFlag();
            document.addEventListener('click', handleClickOutside);
            window.addEventListener('scroll', handleScroll);
        });

        onBeforeUnmount(() => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            t,
            locale,
            languageKeys,
            languageNames,
            showSelect,
            selectedFlag,
            updateFlag
        };
    },
});
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

.navbar-container {
    position: fixed;
    z-index: 1000;
    height: 10vh;
    width: 100vw;
    box-shadow: 0px 1px 10px $dark-background;
    background-color: $light-background;
    transition: transform 0.5s ease-in-out;
    
    &.hidden-nav {
        transform: translateY(-10vh);
    }

    .logo-img {
        height: 6.5vh;
        margin-left: 1rem;
    }
    
    .select-div{
        margin-right: 1rem;
        font-size: 1.5rem;

        .select-input {
            margin-left: 0.5rem;
            padding: 0.1rem;
            border-radius: 5px;
            appearance: auto;
        
            &:focus {
                outline: 2px solid $dark-yellow;
            }
        }
    }
    

    @media (min-width: $tablet) {

        .logo-img {
            height: 7.5vh;
            margin-left: 2rem;
        }
        
        .select-div{
            margin-right: 4rem;
            font-size: 2.5rem;

            .select-input {
                margin-left: 0.5rem;
                padding: 0.5rem;
            }
        }
        
    }

    @media (min-width: $desktop) {

        .logo-img {
            margin-top: -1vh;
        }
        
        .select-div{
            margin-right: 3rem;
            font-size: 1rem;

            .select-input {
                margin-left: 0.5rem;
                padding: 0.5rem;
            }
        }
    }
}


</style>