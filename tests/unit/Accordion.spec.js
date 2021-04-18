import { createLocalVue, shallowMount } from '@vue/test-utils'
import Accordion from "../../src/components/Accordion";
import SvgIcon from "../../src/components/SvgIcon";

const localVue = createLocalVue()

describe('Accordion.spec.js', () => {

    beforeEach(() => {
        localVue.component('svg-icon', SvgIcon);
    })

    it('default showContent value is false', () => {
        const accordionComponent = shallowMount(Accordion, {
            propsData: {
                title: 'title',
                content: 'sample content'
            }
        });
        expect(accordionComponent.vm.showContent).toBe(false);
    });

    it('test toggleShowContent 1 time', () => {
        const accordionComponent = shallowMount(Accordion, {
            propsData: {
                title: 'title',
                content: 'sample content'
            }
        });
        expect(accordionComponent.vm.showContent).toBe(false);
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(true);
    });

    it('test toggleShowContent several times', () => {
        const accordionComponent = shallowMount(Accordion, {
            propsData: {
                title: 'title',
                content: 'sample content'
            }
        });
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(true);
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(false);
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(true);
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(false);
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(true);
        accordionComponent.vm.toggleShowContent();
        expect(accordionComponent.vm.showContent).toBe(false);
    });
})
