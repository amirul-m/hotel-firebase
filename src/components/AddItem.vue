<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Hotel</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Hotel Name:</label>
            <input type="text" class="form-control" v-model="newItem.name"/>
          </div>
          <div class="form-group">
            <label>Hotel City Id:</label>
            <input type="number" class="form-control" v-model="newItem.cityId" min="1" max="15" />
          </div>
          <div class="form-group">
            <label>Hotel Address:</label>
            <input type="text" class="form-control" v-model="newItem.address"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Hotel"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../config/db';

export default {
  components: {
    name: 'AddItem'
  },
  firebase: {
    items: db.ref('items')
  },
  data () {
    return {
      newItem: {
        name: '',
        address: '',
        cityId: ''
      }
    }
  },
  methods: {
    addItem() {
      this.$firebaseRefs.items.push({
        name: this.newItem.name,
        address: this.newItem.address,
        cityId: this.newItem.cityId
      })
      this.newItem.name = '';
      this.newItem.address = '';
      this.newItem.cityId = '';
      this.$router.push('/index')
    }
  }
}
</script>