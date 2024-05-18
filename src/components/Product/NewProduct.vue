<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Productos
      </div>
      <div class="card-body">
        <form @submit.prevent="saveProduct">
          <div class="row mb-3"> 
            <label for="id" class="form-label">Código</label> 
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="id" placeholder="Código Producto" disabled
                v-model="product.id">
            </div>
          </div>

          <div class="row mb-3"> 
            <label for="name" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="name" placeholder="Nombre Producto"
                v-model="product.name">
            </div>
          </div> 

          <div class="row mb-3"> 
            <label for="price" class="form-label">Price:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="price" placeholder="Precio Producto"
                v-model="product.price">
            </div>
          </div> 

          <div class="row mb-3"> 
            <label for="stock" class="form-label">Stock:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="stock" placeholder="Stock Producto"
                v-model="product.stock">
            </div>
          </div> 

          <div class="row mb-3"> 
            <label for="muni_codi" class="form-label">Categoría :</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
              <select class="form-select" v-model="product.category_id">
                <option selected value="0">Seleccione una Categoria</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
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
  name: "NuevoProyecto",
  data() {
    return {
      product: {
        id: 0,
        name: "",
        price: 0,
        stock: 0,
        category_id: 0,
      },
      categories: [],
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Products" });
    },

    async saveProduct() {
      const res = await axios.post("http://127.0.0.1:8000/api/products", this.product);
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Products" });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto ha sido guardado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },

  mounted() {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      this.categories = response.data.categories;
    });
  },
};
</script>