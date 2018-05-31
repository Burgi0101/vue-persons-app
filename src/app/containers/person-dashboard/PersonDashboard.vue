<template>
    <div class="dashboard-container">

      <h2>Person Dashboard</h2>

      <div v-if="!loading">

        <div :class="{'persons-panel-transformed': shouldTransformUI}">

          <div class="row" v-if="!persons.length">
            There are no persons yet, please add one.
          </div>

          <person-item
            class="person-item"
            v-for="person of persons"
            :person="person"
            :key="person.id"
            @edit-person="onEdit($event)"
            @delete-person="onDelete($event)"
          >
          </person-item>
          
        </div>

        <person-add
          @add-person="onAdd($event)">
        </person-add>

      </div>

      <loading-spinner v-if="loading"></loading-spinner>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

// Child Components
import PersonItem from "../../components/person-item/PersonItem.vue";
import PersonAdd from "../../components/person-add/PersonAdd.vue";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.vue";

import { Person } from "../../models/person.interface";

@Component({
  // Registering Child Components
  components: {
    PersonItem,
    PersonAdd,
    LoadingSpinner
  }
})
export default class PersonDashboard extends Vue {
  @Action("getPersons") getPersons: any;
  @Action("addPerson") addPerson: any;
  @Action("editPerson") editPerson: any;
  @Action("deletePerson") deletePerson: any;

  @Getter("getPersons") persons: Person[];
  @Getter("getLoading") loading: boolean;

  created() {
    this.getPersons();
  }

  onAdd(person: Person) {
    this.addPerson(person);
  }

  onDelete(person: Person) {
    this.deletePerson(person);
  }

  onEdit(person: Person) {
    this.editPerson(person);
  }

  get shouldTransformUI(): boolean {
    return this.persons.length >= 6;
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/styles.scss";

h2 {
  text-align: center;
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
}

.persons-panel-transformed {
  display: flex;
  flex-wrap: wrap;
}

.person-item {
  flex-basis: 28%;
}
</style>