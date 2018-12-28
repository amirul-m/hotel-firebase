<template>
  <div>
    <h1>List Hotel</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Hotel Name</th>
          <th>Hotel Address</th>
          <th>Hotel City Id</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item['.key']">
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.cityId }}</td>
          <td>
            <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning">
              Edit
            </router-link>
          </td>
          <td>
            <button @click="deleteItem(item['.key'])" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
    name: 'ListItem'
  },
  data() {
    return {
      items: []
    }
  },
  firebase: {
    items: db.ref('items')
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.items.child(key).remove();
    }
  }
}
</script>