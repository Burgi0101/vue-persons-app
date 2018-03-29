import { MutationTree } from 'vuex';
import { RootState } from './';
import { Person } from '../models/person.interface';

export const GET_PERSONS_INIT = '[Persons] Get Persons';
export const GET_PERSONS_SUCCESS = '[Persons] Get Persons Success';
export const GET_PERSONS_FAIL = '[Persons] Get Persons Fail';

export const ADD_PERSON_INIT = '[Persons] Add Person';
export const ADD_PERSON_SUCCESS = '[Persons] Add Person Success';
export const ADD_PERSON_FAIL = '[Persons] Add Person Fail';

export const EDIT_PERSON_INIT = '[Persons] Edit Person';
export const EDIT_PERSON_SUCCESS = '[Persons] Edit Person Success';
export const EDIT_PERSON_FAIL = '[Persons] Edit Person Fail';

export const DELETE_PERSON_INIT = '[Persons] Delete Person';
export const DELETE_PERSON_SUCCESS = '[Persons] Delete Person Success';
export const DELETE_PERSON_FAIL = '[Persons] Delete Person Fail';

export const mutations: MutationTree<RootState> = {

    // GET PERSON MUTATIONS

    [GET_PERSONS_INIT](state: RootState): void {
        state.persons = [];
        state.loading = true;
    },

    [GET_PERSONS_SUCCESS](state: RootState, payload: Person[]): void {
        state.persons = payload;
        state.loading = false;
    },

    [GET_PERSONS_FAIL](state: RootState, payload: string): void {
        state.errors = [...state.errors, payload];
        state.loading = false;
    },

    // ADD PERSON MUTATIONS

    [ADD_PERSON_INIT](state: RootState, payload: Person): void {
        state.persons = [...state.persons, payload];
        state.loading = true;
    },

    [ADD_PERSON_SUCCESS](state: RootState, payload: Person): void {
        state.persons = state.persons.filter(p => p.id !== null);
        state.persons = [...state.persons, payload];
        state.loading = false;
    },

    [ADD_PERSON_FAIL](state: RootState, payload: string): void {
        state.errors = [...state.errors, payload];
        state.loading = false;
    },

    // DELETE PERSON MUTATIONS

    [DELETE_PERSON_INIT](state: RootState): void {
        state.loading = true;
    },

    [DELETE_PERSON_SUCCESS](state: RootState, payload: Person): void {
        state.persons = state.persons.filter(p => p.id !== payload.id);
        state.loading = false;
    },

    [DELETE_PERSON_FAIL](state: RootState, payload: String): void {
        state.errors = [...state.errors, payload];
        state.loading = false;
    },

    // EDIT PERSON MUTATIONS

    [EDIT_PERSON_INIT](state: RootState): void {
        state.loading = true;
    },

    [EDIT_PERSON_SUCCESS](state: RootState, payload: Person): void {

        let id = state.persons.findIndex(p => payload.id === p.id);
        state.persons.splice(id, 1, payload);
        state.loading = false;
    },

    [EDIT_PERSON_FAIL](state: RootState, payload: String): void {
        state.errors = [...state.errors, payload];
        state.loading = false;
    }
};
