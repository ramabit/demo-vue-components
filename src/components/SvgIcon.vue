<template>
    <span class="c-icon"
          :class="classes"
    >
        <component :is='`icon-${iconName}`' :class="svgClasses"/>
    </span>
</template>

<script>
export default {
    name: 'SvgIcon',

    data() {
        return {
            sizeClasses: `c-icon--size-${this.size}`,
        };
    },

    props: {
        iconName: {
            type: String,
            required: true,
        },
        size: {
            type: [String, Number],
            default: 18,
        },
        svgClasses: String,
        addedClasses: String,
        customSize: Boolean,
    },
    computed: {
        classes() {
            return {
                [this.sizeClasses]: !this.customSize,
                [this.addedClasses]: this.addedClasses,
            };
        },
    },
};
</script>
