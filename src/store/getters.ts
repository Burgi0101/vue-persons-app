import { GetterTree } from 'vuex';

import { RootState } from '.';
import { Person } from '../models/person.interface';

// GetterTree<[current state], [root state]>
export const getters: GetterTree<RootState, RootState> = {

    getPersons(state: RootState): Person[] {
        return state.persons;
    },

    getLoading(state: RootState): boolean {
        return state.loading;
    }
};