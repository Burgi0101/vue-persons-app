<template>
    <div class="dashboard-container">
      <div v-if="!loading">
        <h1>Person Dashboard</h1>
          <div id="persons-panel">
            <div v-if="!persons.length">
              There are no persons yet, please add one.
            </div>
            <person-item
              v-for="person of persons"
              :person="person"
              :key="person.id"
            >
            </person-item>
          </div>
          <div id="add-person-panel">
            <input 
              type="text"
              placeholder="Person Name"
              v-model="name"
            >
            <button 
              :disabled="!isValid"
              @click="onAdd({ id: null, name: name})"
            >
              Add Person
            </button>
          </div>
        </div>
      <loading-spinner v-if="loading"></loading-spinner>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

// Child Components
import PersonItem from "../person-item/PersonItem.vue";
import LoadingSpinner from "../loading-spinner/LoadingSpinner.vue";

import { personService } from "../../services/person.service";
import { Person } from "../../models/person.interface";

@Component({
  // Registering Child Components
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