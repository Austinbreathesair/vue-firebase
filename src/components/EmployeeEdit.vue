<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Employee Details</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text"
                 class="form-control"
                 v-model="user.name"
                 required>
        </div>
        <div class="form-group">
          <label>Email</label>
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
          <button class="btn btn-primary btn-block">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '../firebaseDb';

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    let dbRef = db.collection('users').doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection('users')
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log('Employee details saved successfully!');
          this.$router.push('/list');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
