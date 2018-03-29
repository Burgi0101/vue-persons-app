import { ActionTree, ActionContext } from 'vuex';
import axios from 'axios';

import { RootState } from './';
import { personService } from '../services/person.service';
import { Person } from '../models/person.interface';
import {
    GET_PERSONS_INIT, GET_PERSONS_FAIL, GET_PERSONS_SUCCESS,
    ADD_PERSON_INIT, ADD_PERSON_FAIL, ADD_PERSON_SUCCESS,
    EDIT_PERSON_INIT, EDIT_PERSON_FAIL, EDIT_PERSON_SUCCESS,
    DELETE_PERSON_INIT, DELETE_PERSON_FAIL, DELETE_PERSON_SUCCESS
} from './mutations';

export const actions: ActionTree<RootState, RootState> = {
    getPersons({ commit }: ActionContext<RootState, RootState>): void {
        commit(GET_PERSONS_INIT);

        personService
            .getPersons()
            .then(res => commit(GET_PERSONS_SUCCESS, res.data))
            .catch(error => commit(GET_PERSONS_FAIL, error));
    },

    addPerson({ commit }: ActionContext<RootState, RootState>, person: Person): void {
        commit(ADD_PERSON_INIT);

        personService
            .addPerson(person)
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