<template>
  <div>
    <div class="title">
      <p class="app-title">Student List of Attendance</p>
    </div>
    <v-card outlined class="px-4 py-6">
      <v-sheet height="64">
        <v-toolbar flat color="rgba(253, 52, 38, 0.1)">
          <v-btn fab text small color="#F73631" @click="$refs.calendar.prev()">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="#F73631" @click="$refs.calendar.next()">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ formattedDate }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn outlined class="mr-4" color="#F73631" @click="setToday">
            Today
          </v-btn>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="date"
          color="#F73631"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :show-month-on-first="false"
          :event-color="getEventColor"
          @click:date="addAttendance"
        ></v-calendar>
      </v-sheet>
    </v-card>

    <!-- modal for add attendance -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-4">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3 mb-3">
          Add Attendance
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <v-select
          :items="itemMembers"
          label="Select Member"
          outlined
        ></v-select>
        <p class="app-subtitle mb-0">Members Present :</p>
        <div class="chips mt-2 mb-3">
          <v-chip
            class="mb-2 mr-2"
            close
            color="rgba(253, 52, 38, 0.1)"
            text-color="black"
            label
            v-for="(item, index) in selectedMember"
            :key="index"
            @click:close="removeChips(index)"
          >
            {{ item.name }}
          </v-chip>
        </div>
        <v-text-field
          v-model="search"
          label="Search Member"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
        ></v-text-field>
        <div class="table mb-5" style="max-height: 300px; overflow-x:auto">
          <v-data-table
            :headers="headers"
            :items="members"
            :search="search"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.other="{item}">
              <v-checkbox v-model="selectedMember" :value="item" class="float-right"></v-checkbox>
            </template>
          </v-data-table>
        </div>
        <v-btn color="#F73631" dark block>Save</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  data () {
    return {
      search: null,
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Class',
          align: 'start',
          value: 'class'
        },
        {
          text: '',
          value: 'other',
          align: 'center',
          sortable: false
        }
      ],
      selectedMember: [],
      members: [
        {
          id: 1,
          name: 'Djamal Hamadi',
          class: 'SD'
        },
        {
          id: 2,
          name: 'Steve Aoki',
          class: 'SMP'
        },
        {
          id: 3,
          name: 'Raja Maharaja',
          class: 'SD'
        },
        {
          id: 4,
          name: 'Bagus Subagus',
          class: 'SMA'
        },
        {
          id: 5,
          name: 'Kintoki Murakami',
          class: 'SMP'
        },
        {
          id: 6,
          name: 'Conan Edogawa',
          class: 'SMA'
        }
      ],
      itemMembers: ['Student', 'Teacher'],
      dialog: false,
      today: moment().format('YYYY-MM-DD'),
      date: moment().format('YYYY-MM-DD')
    }
  },
  computed: {
    formattedDate () {
      return moment(this.date).format('MMMM, YYYY')
    }
  },
  methods: {
    setToday () {
      this.date = this.today
      this.dialog = true
    },
    addAttendance ({ date }) {
      this.dialog = true
    },
    removeChips (val) {
      if (val >= 0) this.selectedMember.splice(val, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-subtitle {
  font-weight: bold;
}
</style>
