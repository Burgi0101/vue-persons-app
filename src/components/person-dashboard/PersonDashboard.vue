<template>
    <div class="dashboard-container">

      <h2>Person Dashboard</h2>

      <div v-if="!loading">

        <div
          :class="{'persons-panel-shrink': shouldTransformUI}">
          <div class="row" v-if="!persons.length">
            There are no persons yet, please add one.
          </div>

          <person-item
            class="person-item"
            v-for="person of persons"
            :person="person"
            :key="person.id"
          >
          </person-item>
        </div>

        <div
          :class="{'add-person-panel-shrink': shouldTransformUI}" 
          class="add-person-panel row">
          <input
            class="input"
            type="text"
            tabindex="1"
            placeholder="Person Name"
            v-model="name"
          >

          <button
            class="btn"
            tabindex="2"
            :class="{ 'btn-disabled' : !isValid}"
            :disabled="!isValid"
            @click="onAdd({ id: null, name: name})">
            Add Person
          </button>
        </div>
      </div>

      <loading-spinner v-if="loading"></loading-spinner>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

// Child Components
import PersonItem from '../person-item/PersonItem.vue';
import LoadingSpinner from '../loading-spinner/LoadingSpinner.vue';

import { personService } from '../../services/person.service';
import { Person } from '../../models/person.interface';

@Component({
  // Registering Child Components
  components: {
    PersonItem,
    LoadingSpinner
  }
})
export default class PersonDashboard extends Vue {
  @Action('getPersons') getPersons: any;
  @Action('addPerson') addPerson: any;

  @Getter('getPersons') persons: Person[];
  @Getter('getLoading') loading: boolean;

  name: string = '';

  created() {
    this.getPersons();
  }

  onAdd(person: Person) {
    this.addPerson(person);
    this.name = '';
  }

  get isValid(): boolean {
    return this.name.trim() !== '';
  }

  get shouldTransformUI(): boolean {
    return this.persons.length >= 6;
  }
}
</script>

<style scoped>
@import '../../assets/styles.scss';

h2 {
  text-align: center;
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.persons-panel-shrink {
  display: flex;
  flex-wrap: wrap;
  width: 680px;
}

.add-person-panel-shrink {
  width: 615px;
}

.person-item {
  flex-basis: 27%;
}

.add-person-panel {
  display: flex;
  justify-content: space-between;
}
</style>