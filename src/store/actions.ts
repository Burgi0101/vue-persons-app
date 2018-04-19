import { ActionTree, ActionContext } from 'vuex';

import { RootState } from './';
import { personService } from '../services/person.service';
import { Person } from '../models/person.interface';
import {
    GET_PERSONS_INIT, GET_PERSONS_FAIL, GET_PERSONS_SUCCESS,
    ADD_PERSON_INIT, ADD_PERSON_FAIL, ADD_PERSON_SUCCESS,
    EDIT_PERSON_INIT, EDIT_PERSON_FAIL, EDIT_PERSON_SUCCESS,
    DELETE_PERSON_INIT, DELETE_PERSON_FAIL, DELETE_PERSON_SUCCESS
} from './mutations';

export interface IPersonActions extends ActionTree<RootState, RootState> {
    getPersons(context: ActionContext<RootState, RootState>): void;
    addPerson(context: ActionContext<RootState, RootState>, payload: Person): void;
    editPerson(context: ActionContext<RootState, RootState>, payload: Person): void;
    deletePerson(context: ActionContext<RootState, RootState>, payload: Person): void;
}

export const actions: IPersonActions = {

    getPersons({ commit }: ActionContext<RootState, RootState>): void {
        commit(GET_PERSONS_INIT);

        personService
            .getPersons()
            .then(res => commit(GET_PERSONS_SUCCESS, res.data))
            .catch(error => commit(GET_PERSONS_FAIL, error));
    },

    addPerson({ commit }: ActionContext<RootState, RootState>, person: Person): void {

        /* Once the ADD_PERSON_INIT "muation" is dispatched 
           the person will be added to the state but is not
           yet persisted with the backend.
        */
        commit(ADD_PERSON_INIT, person);

        personService
            .addPerson(person)
            /* Once the person was added in the backend it is returning
               the persited person and i dispatch a ADD_PERSON_SUCCESS "muation"
               with this persisted person.  
            */
            .then(res => commit(ADD_PERSON_SUCCESS, res.data))
            .catch(error => commit(ADD_PERSON_FAIL, error));
    },

    editPerson({ commit }: ActionContext<RootState, RootState>, person: Person): void {
        commit(EDIT_PERSON_INIT);

        personService
            .updatePerson(person)
            .then(res => commit(EDIT_PERSON_SUCCESS, res.data))
            .catch(error => commit(EDIT_PERSON_FAIL, error));
    },

    deletePerson({ commit }: ActionContext<RootState, RootState>, person: Person): void {
        commit(DELETE_PERSON_INIT);

        personService
            .deletePerson(person)
            .then(res => commit(DELETE_PERSON_SUCCESS, person))
            .catch(error => commit(DELETE_PERSON_FAIL, error));
    }
};