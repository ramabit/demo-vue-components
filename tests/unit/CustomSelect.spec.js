import { shallowMount } from '@vue/test-utils'
import CustomSelect from "../../src/components/CustomSelect";

describe('CustomSelect.spec.js', () => {

    const options = ['option1', 'option2', 'option3'];


    it('default value initialized', () => {
        const defaultValue = 'option2'
        const customSelectComponent = shallowMount(CustomSelect, {
            propsData: {
                options: options,
                defaultValue: defaultValue
            }
        });
        expect(customSelectComponent.vm.value).toBe(defaultValue);
    });

    it('default value is the first option if not initialized as parameter', () => {
        const customSelectComponent = shallowMount(CustomSelect, {
            propsData: {
                options: options
            }
        });
        expect(customSelectComponent.vm.value).toBe(options[0]);
    });

    it('selecting values change the internal value', () => {
        const customSelectComponent = shallowMount(CustomSelect, {
            propsData: {
                options: options
            }
        });
        // first value is default
        expect(customSelectComponent.vm.value).toBe(options[0]);

        // select the second value
        customSelectComponent.vm.select(options[1]);
        expect(customSelectComponent.vm.value).toBe(options[1]);

        // select the first value again
        customSelectComponent.vm.select(options[0]);
        expect(customSelectComponent.vm.value).toBe(options[0]);

        // select the third value
        customSelectComponent.vm.select(options[2]);
        expect(customSelectComponent.vm.value).toBe(options[2]);
    });

    it('toggleOptionsVisible 1 time', () => {
        const customSelectComponent = shallowMount(CustomSelect, {
            propsData: {
                options: options
            }
        });
        expect(customSelectComponent.vm.optionsVisible).toBe(false);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(true);
    });

    it('toggleOptionsVisible several times', () => {
        const customSelectComponent = shallowMount(CustomSelect, {
            propsData: {
                options: options
            }
        });
        expect(customSelectComponent.vm.optionsVisible).toBe(false);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(true);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(false);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(true);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(false);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(true);
        customSelectComponent.vm.toggleOptionsVisible();
        expect(customSelectComponent.vm.optionsVisible).toBe(false);
    });

})
