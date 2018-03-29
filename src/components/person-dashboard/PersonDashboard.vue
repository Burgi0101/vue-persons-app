<template>
    <div class="dashboard-container">
      <div v-if="!loading">
        <h1>Person Dashboard</h1>
          <div id="persons">
            <person-item
              v-for="person of persons"
              :person="person"
              :key="person.id"
            >
            </person-item>
          </div>
          <input 
            type="text"
            placeholder="Person Name"
            v-model="name">
          <button 
            :disabled="!isValid"
            @click="onAdd({ id: persons.length, name: name})"
          >
            Add Person
          </button>
        </div>
      <loading-spinner v-if="loading"></loading-spinner>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Action, Getter } from "vuex-class";
import Component from "vue-class-component";

import PersonItem from "../person-item/PersonItem.vue";
import LoadingSpinner from "../loading-spinner/LoadingSpinner.vue";

import { personService } from "../../services/person.service";
import { Person } from "../../models/person.interface";

@Component({
  components: {
    PersonItem,
    LoadingSpinner
  }
})
export default class PersonDashboard extends Vue {
  @Action("getPersons") getPersons: any;
  @Action("addPerson") addPerson: any;

  @Getter("getPersons") persons: Person[];
  @Getter("getLoading") loading: boolean;

  name: string = "";

  created() {
    this.getPersons();
  }

  onAdd(person: Person) {
    this.addPerson(person);
    this.name = "";
  }

  get isValid(): boolean {
    return this.name !== "";
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>