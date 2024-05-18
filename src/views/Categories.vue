<template>
  <div class="container">
    <h1>
      Listado Categorie
      <button @click="newCategorie" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(categorie, index) in categories" :key="index">
          <th scope="row">{{ categorie.id }}</th>
          <td>{{ categorie.name }}</td>
          <td>{{ categorie.description }}</td>
          <td>
            <button
              @click="deleteCategorie(categorie.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editCategorie(categorie.id)"
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
  name: "CategorieList",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async deleteCategorie(id) {
      const result = await Swal.fire({
        title: `Do you want to delete the categorie with id ${id}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      });

      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
          if (response.data.success) {
            Swal.fire("Deleted!", "", "success");
            this.categories = this.categories.filter(categorie => categorie.id !== id);
          }
        } catch (error) {
          Swal.fire("Error!", "There was an error deleting the categorie.", "error");
        }
      }
    },
    editCategorie(id) {
      this.$router.push({ name: 'EditarCategorie', params: { id } });
    },
    newCategorie() {
      this.$router.push({ name: 'NewCategorie' });
    }
  },
  async mounted() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories");
      this.categories = response.data.categories;
    } catch (error) {
      Swal.fire("Error!", "There was an error fetching the categories.", "error");
    }
  }
};
</script>