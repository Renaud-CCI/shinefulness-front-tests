export default function useReusables() {

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const roundScore = (score) => {
        return Math.round(score /10) * 10;
    }

    return {
        capitalizeFirstLetter,
        roundScore
    };
}