const App = {
	data(){
		return{
			inputPlaceholder: 'Введите текст',
			inputValue: '',
			notes: []	
		}
	},
	methods:{
		imputFunc(event) {
			this.inputValue = event.target.value
		},

		addItem(){
			if (this.inputValue !== ''){
				this.notes.push(this.inputValue)
				this.inputValue=''
			}

		},

		deleteItem(i){
				this.notes.splice(i, 1)
			}
			
	}
}

Vue.createApp(App).mount('#app')