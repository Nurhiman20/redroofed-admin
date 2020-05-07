<template>
  <div>
    <div class="title">
      <p class="app-title">Student List</p>
      <v-btn color="#F73631" small dark>Add Student</v-btn>
    </div>
    <v-card outlined class="px-4 py-6">
      <div class="search w-25">
        <v-form ref="form">
          <v-text-field
            v-model="search"
            label="Search Student"
            prepend-inner-icon="mdi-magnify"
            outlined
            dense
          >
          </v-text-field>
        </v-form>
      </div>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="tableList"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:item.actions="{item}">
            <div class="d-flex flex-row align-center justify-end">
              <v-btn text color="#3D87F4" small @click="goToEdit(item)" class="mr-1">View Detail</v-btn>
              <v-btn icon color="#CCCCCC" @click="goToEdit(item)">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: null,
      headers: [
        { text: 'Name', value: 'name' },        
        { text: 'Class', value: 'class' },
        { text: "Parent's Name", value: 'parent' },
        { text: 'Phone Number', value: 'number' },
        { text: 'Address', value: 'address', sortable: false },
        { text: '', value: 'actions' }
      ],
      tableList: [
        {
          id: 1,
          name: 'Peter Parker',
          class: 8,
          parent: 'Steve Roger',
          number: '0882100021',
          address: 'Jl. Jatiwangi Raya No.73 Antapani, Bandung'
        },
        {
          id: 2,
          name: 'Tony Stark',
          class: 12,
          parent: 'Howard Stark',
          number: '0882100021',
          address: 'Jl. Jatiwangi Raya No.73 Antapani, Bandung'
        }
      ]
    }
  }
}
</script>
