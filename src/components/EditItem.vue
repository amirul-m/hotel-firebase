<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Hotel</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Hotel Name:</label>
            <input type="text" class="form-control" v-model="newItem.name"/>
          </div>
          <div class="form-group">
            <label>Hotel Address:</label>
            <input type="text" class="form-control" v-model="newItem.address" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item"/>
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
    name: 'EditItem'
  },
  firebase: {
    items: db.ref('items'),
    itemsObj: {
      source: db.ref('items'),
      asObject: true
    }
  },
  data () {
    return {
      newItem: {}
    }
  },
  created() {
    let item = this.itemsObj[this.$route.params.id]
    this.newItem = {
      name: item.name,
      address: item.address
    }
  },
  methods: {
    updateItem() {
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
      this.$router.push('/index')
    }
  }
}
</script>