<template>
    <div class="dashboard-container">
      <div v-if="!loading">
        <h1>Person Dashboard</h1>
          <PersonItem 
            v-for="person of persons" 
            :key="person.id"
            :person="person">
          </PersonItem>

          <button @click="onAdd({ id: persons.length, name: 'what'})">Add Person</button>
        </div>
      <loading-spinner v-if="loading"></loading-spinner>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
  loading: boolean = false;
  persons: Person[] = [];

  created() {
    this.getPersons();
  }

  getPersons() {
    this.loading = true;

    personService.getPersons().then(response => {
      this.persons = response.data;
      this.loading = false;
    });
  }

  onAdd(person: Person) {
    this.loading = true;

    personService.addPerson(person).then(response => {
      if (response.status === 201) {
        this.persons.push(response.data);
        this.loading = false;
      }
    });
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