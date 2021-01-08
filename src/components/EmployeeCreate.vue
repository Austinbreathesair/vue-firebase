<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Add Employee</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text"
                 class="form-control"
                 v-model="user.name"
                 required>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="text"
                 class="form-control"
                 v-model="user.email"
                 required>
        </div>
        <div class="form-group">
          <label>Contact No.</label>
          <input type="text"
                 class="form-control"
                 v-model="user.contact"
                 required>
        </div>
        <div class="form-group">
          <label>Role</label>
          <input type="text"
                 class="form-control"
                 v-model="user.role"
                 required>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Employee</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from '../firebaseDb';

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection('users')
        .add(this.user)
        .then(() => {
          alert('Employee added successfully!');
          this.user.name = '';
          this.user.email = '';
          this.user.contact = '';
          this.user.role = '';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
