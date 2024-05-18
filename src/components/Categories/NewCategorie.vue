<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Categorias
      </div>
      <div class="card-body">
        <form @submit.prevent="saveCategorie">
          <div class="row mb-3"> 
            <label for="id" class="form-label">Código</label> 
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="id" placeholder="Código Categoria" disabled
                v-model="categorie.id">
            </div>
          </div>

          <div class="row mb-3"> 
            <label for="name" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="name" placeholder="Nombre Categoria"
                v-model="categorie.name">
            </div>
          </div> 

          <div class="row mb-3"> 
            <label for="description" class="form-label">Description:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="Description" placeholder="Descripcion"
                v-model="categorie.description">
            </div>
          </div> 

          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "NuevaCategoria",
  data() {
    return {
      categorie: {
        id: 0,
        name: "",
        description: "",
      }
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Categorie" });
    },

    
    async saveCategorie() {
      const res = await axios.post("http://127.0.0.1:8000/api/categories", this.categorie);
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Categories" });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "categoria ha sido guardado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },

};
</script>