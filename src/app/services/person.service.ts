import axios from 'axios';

import { Person } from '../models/person.interface';

const api = 'api';

class PersonService {

    constructor() { }

    getPersons() {
        return axios.get<Person[]>(`${api}/persons`);
    }

    addPerson(person: Person) {
        return axios.post(`${api}/persons/`, person);
    }

    deletePerson(person: Person) {
        return axios.delete(`${api}/persons/${person.id}`);
    }

    updatePerson(person: Person) {
        return axios.patch(`${api}/persons/${person.id}`, person);
    }
}

export const personService = new PersonService();