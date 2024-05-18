<template>
  <div class="container">
    <h1>
      Listado PayMode
      <button @click="newPaymode" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Observation</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paymode, index) in paymodes" :key="index">
          <th scope="row">{{ paymode.id }}</th>
          <td>{{ paymode.name }}</td>
          <td>{{ paymode.observation }}</td>
          <td>
            <button
              @click="deletePaymode(paymode.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editPaymode(paymode.id)"
              class="btn btn-warning mx-2"
            >
              <font-awesome-icon icon="pencil" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "paymode",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      paymodes: [],
    };
  },
  methods: {
    async deletePaymode(id) {
      const result = await Swal.fire({
        title: `Do you want to delete the categorie with id ${id}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      });
      
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/paymodes/${id}`);
          if (response.data.success) {
            Swal.fire("Deleted!!", "", "success");
            this.paymodes = response.data.paymodes;
          }
        } catch (error) {
          Swal.fire("Error!", "There was an error deleting the categorie." , "error");
        }
      }
    },
    editPaymode(id) {
      this.$router.push({ name: 'EditarPaymode', params: { id } });
    },
    newPaymode() {
      this.$router.push({ name: 'NewPaymode' });
    }
  },
  async mounted() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/paymodes");
      this.paymodes = response.data.paymodes;
    } catch (error) {
      Swal.fire("Error!", "There was an error fetching the paymodes.", "error");
    }
  }
};
</script>