import { ActionContext, Commit, Dispatch } from "vuex";

import { actions } from './actions';
import { RootState } from "./";
import { GET_PERSONS_INIT, ADD_PERSON_INIT, GET_PERSONS_SUCCESS, EDIT_PERSON_INIT, DELETE_PERSON_INIT } from "./mutations";
import { Person } from "../models/person.interface";

describe('actions', () => {

    let testContext: ActionContext<RootState, RootState>;

    beforeEach(() => {
        testContext = {
            dispatch: jasmine.createSpy('dispatch') as Dispatch,
            commit: jasmine.createSpy('commit') as Commit,
            state: {} as RootState,
            getters: {},
            rootState: {} as RootState,
            rootGetters: {},
        }
    })

    describe('getPersons', () => {
        it('should call GET_PERSONS_INIT mutation', () => {
            actions.getPersons(testContext);

            expect(testContext.commit).toHaveBeenCalled();
            expect(testContext.commit).toHaveBeenCalledWith(GET_PERSONS_INIT);
        });
    });

    describe('addPerson', () => {
        it('should call ADD_PERSON_INIT mutation', () => {
            const person: Person = { id: 1, name: 'person' };

            actions.addPerson(testContext, person);

            expect(testContext.commit).toHaveBeenCalled();
            expect(testContext.commit).toHaveBeenCalledWith(ADD_PERSON_INIT, person);
        });

        it('should call ADD_PERSON_FAIL mutation', () => {
            const person: Person = { id: 1, name: 'person' };

            actions.addPerson(testContext, person);

            expect(testContext.commit).toHaveBeenCalled();
            expect(testContext.commit).toHaveBeenCalledWith(ADD_PERSON_INIT, person);
        });
    });

    describe('editPerson', () => {
        it('should call EDIT_PERSON_INIT mutation', () => {
            const person: Person = { id: 1, name: 'person' };

            actions.editPerson(testContext, person);

            expect(testContext.commit).toHaveBeenCalled();
            expect(testContext.commit).toHaveBeenCalledWith(EDIT_PERSON_INIT);
        });
    });


    describe('deletePerson', () => {
        it('should call DELETE_PERSON_INIT mutation', () => {
            const person: Person = { id: 1, name: 'person' };

            actions.deletePerson(testContext, person);

            expect(testContext.commit).toHaveBeenCalled();
            expect(testContext.commit).toHaveBeenCalledWith(DELETE_PERSON_INIT);
        });
    });
});