import {
    mutations,
    GET_PERSONS_INIT, GET_PERSONS_SUCCESS, GET_PERSONS_FAIL
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
        it('should fail on getting the persons', () => {

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
});