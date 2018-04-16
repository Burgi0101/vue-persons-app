import { mutations, GET_PERSONS_SUCCESS } from './mutations';

import { Person } from '../models/person.interface';
import { RootState } from '.';

describe('mutations', () => {

    describe('GET_PERSONS_SUCCESS', () => {
        it('should get the persons successfully', () => {

            const state: RootState = {
                persons: [],
                loading: true,
                errors: []
            };

            const persons: Person[] = [{ id: 1, name: 'Charlie' }];

            mutations[GET_PERSONS_SUCCESS](state, persons);

            expect(state).toEqual({
                persons: persons,
                loading: false,
                errors: []
            });
        });
    });
});