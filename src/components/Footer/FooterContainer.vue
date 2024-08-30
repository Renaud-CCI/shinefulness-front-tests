<template>
    <div id="footer-container" class="grid grid-cols-3 items-center">
        <div class="flex flex-col justify-start col-span-2">
            <p class="contact-link flex">
                <font-awesome-icon class="icon" icon="at" />
                <router-link class="router-link" to="/">{{  reusables.capitalizeFirstLetter(t('footer.contact_us')) }}</router-link>
            </p>
            <p>© {{ year }} - Shinefulness V.bêta</p>
        </div>
        <div class="logo-div flex justify-end col-span-1">
            <router-link to="/">
                <img src="@/assets/images/logos/logo_revert.png" alt="Logo" class="logo-img" />
            </router-link>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import useReusables from '@/helpers/reusables';

export default defineComponent({
    name: 'FooterContainer',
    setup() {
        const { t, locale } = useI18n();
        const reusables = useReusables();
        const year = new Date().getFullYear();

        return {
        t,
        locale,
        reusables,
        year,
        };
    },
});
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

#footer-container {
    min-height: 10vh;
    width: 100vw;
    padding: 0 1rem;
    box-shadow: 0px -1px 10px $dark-background;
    background-color: $yellow;
    color: $darker-background;

    p {
        font-size: 0.9rem;
    }

    .contact-link {

        .icon {
            font-size: 0.8rem;
            margin: 0.15rem 0.25rem 0 0; 
        }

        &:hover {
            color: $darker-background;
            cursor: pointer;
            text-decoration: underline;

        }
    }

    .logo-img {
        height: 5vh;
    }

    @media (min-width: $tablet) {
        padding: 0 3rem;

        p{
            font-size: 1.5rem;
        }

        .contact-link {

            .icon {
                font-size: 1.2rem;
                margin: 0.5rem 0.5rem 0 0; 
            }
        }
    }

    @media (min-width: $desktop) {
        padding: 0 2rem 0 1.5rem;

        p{
            font-size: 0.9rem;
        }

        .contact-link {
            margin-top: 0.8rem;
            .icon {
                font-size: 0.8rem;
                margin: 0.2rem 0.3rem 0 0; 
            }
        }
    }
}
</style>