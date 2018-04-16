import {
    mutations,
    GET_PERSONS_INIT, GET_PERSONS_SUCCESS, GET_PERSONS_FAIL,
    ADD_PERSON_INIT, ADD_PERSON_SUCCESS, ADD_PERSON_FAIL
} from './mutations';

import { Person } from '../models/person.interface';
import { RootState } from '.';

describe('mutations', () => {

    describe('GET_PERSONS_INIT', () => {
        it('should initiate get persons successfully', () => {

            const state: RootState = {
                persons: [{ id: 1, name: 'Charlie' }],
                loading: false,
                errors: []
            };

            mutations[GET_PERSONS_INIT](state, null);

            expect(state).toEqual({
                persons: [],
                loading: true,
                errors: []
            });
        });
    });

    describe('GET_PERSONS_SUCCESS', () => {
        it('should get the persons successfully', () => {

            const state: RootState = {
                persons: [],
                loading: true,
                errors: []
            };

            const payload: Person[] = [{ id: 1, name: 'Charlie' }];

            mutations[GET_PERSONS_SUCCESS](state, payload);

            expect(state).toEqual({
                persons: payload,
                loading: false,
                errors: []
            });
        });
    });

    describe('GET_PERSONS_FAIL', () => {
        it('should push a message to the errors array on fail', () => {

            const state: RootState = {
                persons: [],
                loading: true,
                errors: []
            };

            const payload: string = 'Persons could not be loaded!';

            mutations[GET_PERSONS_FAIL](state, payload);

            expect(state).toEqual({
                persons: [],
                loading: false,
                errors: [payload]
            });
        });
    });

    describe('ADD_PERSON_INIT', () => {
        it('should initiate add person successfully', () => {

            const state: RootState = {
                persons: [],
                loading: false,
                errors: []
            };

            const payload: Person = { id: null, name: 'Charlie' };

            mutations[ADD_PERSON_INIT](state, payload);

            expect(state).toEqual({
                persons: [payload],
                loading: true,
                errors: []
            });
        });
    });

    describe('ADD_PERSON_SUCCESS', () => {
        it('should add a person successfully', () => {

            const state: RootState = {
                persons: [],
                loading: true,
                errors: []
            };

            const payload: Person = { id: 1, name: 'Charlie' };

            mutations[ADD_PERSON_SUCCESS](state, payload);

            expect(state).toEqual({
                persons: [payload],
                loading: false,
                errors: []
            });
        });

        it('should persist the non persisted person', () => {

            const state: RootState = {
                persons: [{ id: null, name: 'Sepp' }],
                loading: true,
                errors: []
            };

            const payload: Person = { id: 1, name: 'Sepp' };

            mutations[ADD_PERSON_SUCCESS](state, payload);

            expect(state).toEqual({
                persons: [payload],
                loading: false,
                errors: []
            });
        });
    });

    describe('ADD_PERSON_FAIL', () => {
        it('should push a message to the errors array on fail', () => {

            const state: RootState = {
                persons: [],
                loading: true,
                errors: []
            };

            const payload: string = 'Persons could not be loaded!';

            mutations[ADD_PERSON_FAIL](state, payload);

            expect(state).toEqual({
                persons: [],
                loading: false,
                errors: [payload]
            });
        });

        it('should remove non persisted persons from the state on fail', () => {

            const state: RootState = {
                persons: [{ id: null, name: 'Sepp' }],
                loading: true,
                errors: []
            };

            const payload: string = 'Persons could not be loaded!';

            mutations[ADD_PERSON_FAIL](state, payload);

            expect(state).toEqual({
                persons: [],
                loading: false,
                errors: [payload]
            });
        });
    })

});