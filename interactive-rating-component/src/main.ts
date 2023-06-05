import { createApp } from 'vue'
import './style.css'

createApp({
    data() {
        return {
            rating: 0,
            submitted: false,
        }
    }
}).mount('#app')
