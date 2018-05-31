import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

import { Person } from '../models/person.interface';

Vue.use(Vuex);

export interface RootState {
    persons: Person[];
    loading: boolean;
    errors: string[];
};

const store: StoreOptions<RootState> = {
    state: {
        persons: [],
        loading: false,
        errors: []
    },
    actions,
    mutations,
    getters
};

export default new Vuex.Store<RootState>(store);