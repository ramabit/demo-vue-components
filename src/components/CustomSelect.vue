<script>
export default {
    name: "CustomSelect",
    props: {
        options: {
            type: Array,
            required: true,
        },
        defaultValue: [String, Number],
    },
    data() {
        return {
            value: this.defaultValue ? this.defaultValue : this.options[0],
            optionsVisible: false,
        }
    },
    methods: {
        toggleOptionVisible() {
          this.optionsVisible = !this.optionsVisible;
        },
        select(option) {
            this.value = option;
            this.$emit('valueChanged', this.value)
        }
    },
}
</script>
