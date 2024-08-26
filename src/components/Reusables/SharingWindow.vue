<template>
    <v-expansion-panels class="expansion-panel" variant="accordion">
        <v-expansion-panel>

            <v-expansion-panel-title class="share-expansion-panel" expand-icon="mdi-share-variant-outline" collapse-icon="mdi-share-variant">
                <div class="w-full text-center">
                    <p style="display: inline-flex; align-items: center; padding-left: 0.5rem;">
                        {{ t('sharing.share') }}
                        <img style="width: 30px; height: 30px; margin-left: 0.5rem;" src="@/assets/images/logos/clockwise_logo.gif">
                    </p>
                </div>
            </v-expansion-panel-title>

            <v-expansion-panel-text  class="expansion-panel-text">
                <div class="button-div pdf-button">
                    <button @click="openPdf">
                        <font-awesome-icon class="pdf-icon" :icon="['far', 'file-pdf']" />
                        {{ t('sharing.download_pdf') }}
                    </button>
                </div>

                <div class="button-div">
                    TEST
                </div>
            </v-expansion-panel-text>

        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { VExpansionPanels, VExpansionPanel, VExpansionPanelTitle, VExpansionPanelText } from 'vuetify/components';

export default {
	name: 'SharingWindow',
    components: {
        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelTitle,
        VExpansionPanelText,
    },
    props: {
        userScanRef: {
            type: String,
            required: true
        }
    },
    setup(props){
        const { t, locale } = useI18n();

		const openPdf = () => {
			window.open(`/api/userScan/test/${props.userScanRef}/${locale.value}`, '_blank');
		};

        return {
            t,
            openPdf
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/../sass/_variables.scss';

.share-expansion-panel {
    background-color: $dark-yellow;
    color: $darker-background;
    font-size: 1.25rem;

    &:hover {
        background-color: $light-yellow;
    }
}

.expansion-panel-text{
    background-color: $light-background;
    .button-div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem;
        font-size: 1rem;
    }
    
    .pdf-button button{
        background-color: $yellow;
        color: $darker-background;
        border: none;
        border-radius: 10px;
        padding: 0.5rem 1.5rem;
    
        &:hover {
            background-color: $dark-yellow;
        }
    }
}
</style>