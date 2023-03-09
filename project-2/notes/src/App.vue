<script setup>
import {ref} from "vue";

const showModal = ref(false)
const newNote = ref("");
const notes = ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(),
    backgroundColor: getRandomColor(),
  });
  showModal.value = false;
  newNote.value = '';
}
</script>
<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote">Add note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div class="card" v-for="note in notes" :key="note.id" :style="{backgroundColor:note.backgroundColor}">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(50, 50, 0);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
}

.date {
  font-size: 13px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 300px;
  background-color: white;
  padding: 30px;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  cursor: pointer;
  color: white;
  margin-top: 15px;
}

.modal .close {
  background-color: red;
  margin-top: 7px;
}

</style>