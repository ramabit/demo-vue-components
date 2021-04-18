import { shallowMount } from '@vue/test-utils'
import UsersTabs from "../../src/components/UsersTabs";

describe('UsersTabs.spec.js', () => {

    it('default selected tab is 0 if not initialized as parameter', () => {
        const usersTabsComponent = shallowMount(UsersTabs, {
            propsData: {
                amount: 3,
            }
        });
        expect(usersTabsComponent.vm.selectedIndex).toBe(0);
    });

    it('default selected tab initialized', () => {
        const usersTabsComponent = shallowMount(UsersTabs, {
            propsData: {
                amount: 3,
                initialSelectedTab: 1
            }
        });
        expect(usersTabsComponent.vm.selectedIndex).toBe(1);
    });

    it('selecting a tab change the internal selected tab index value', () => {
        const usersTabsComponent = shallowMount(UsersTabs, {
            propsData: {
                amount: 3,
            }
        });
        // first tab is default
        expect(usersTabsComponent.vm.selectedIndex).toBe(0);

        // select the second tab
        usersTabsComponent.vm.select(1);
        expect(usersTabsComponent.vm.selectedIndex).toBe(1);
    });

})
