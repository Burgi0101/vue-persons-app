import { getters } from './getters';
import { RootState } from '.';
import { Person } from '../models/person.interface';

describe('getters', () => {

    describe('getPersons', () => {
        it('should retrieve the persons from the state', () => {

            const persons: Person[] = [
                { id: 1, name: 'Sepp' },
                { id: 2, name: 'Jeff' }
            ]

            const state: RootState = {
                persons: persons,
                loading: false,
                errors: []
            };

            const actual = getters.getPersons(state, null, state, null);

            expect(actual).toBe(persons);
        });
    });

    describe('getLoading', () => {
        it('should retrieve the current loading-status from the state', () => {

            const state: RootState = {
                persons: [],
                loading: false,
                errors: []
            };

            const actual = getters.getLoading(state, null, state, null);

            expect(actual).toBe(false);
        });
    });

    describe('getErrors', () => {
        it('should retrieve the current loading-status from the state', () => {

            const errors: string [] = ['Error1', 'Error2'];

            const state: RootState = {
                persons: [],
                loading: false,
                errors: errors
            };

            const actual = getters.getErrors(state, null, state, null);

            expect(actual).toBe(errors);
        });
    });
});