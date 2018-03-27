<template>
    <div>
      <h1>Person Dashboard</h1>
        <PersonItem 
          v-for="person of persons" 
          :key="person.id"
          :person="person">
        </PersonItem>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import PersonItem from "../person-item/PersonItem.vue";
import { personService } from "../../services/person.service";
import { Person } from "../../models/person.interface";

@Component({
  components: {
    PersonItem
  }
})
export default class PersonDashboard extends Vue {
  persons: Person[] = [];

  created() {
    this.getPersons();
  }

  getPersons() {
    personService.getPersons().then(response => (this.persons = response.data));
  }
}
</script>

<style scoped>

</style>