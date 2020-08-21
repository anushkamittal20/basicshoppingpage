var app= new Vue({
		el: '#app',
		data: {
			product: 'Socks',
			image: 'socksblack.jpeg',
			inStock: true,
			details: ["80% cotton","20% polyester","Gender Neutral"],
			variants: [
				{
					variantId: 2234,
					variantColor: "black",
					variantImage: 'socksblack.jpeg'
				},
				{
					variantId: 2235,
					variantColor: "red",
					variantImage: 'socksred.jpeg'
					 
				}
			],
			cart: 0,
			name: null
		},
		methods: {
			addToCart() {
				this.cart += 1
			},
			updateProduct: function (variantImage) {
				this.image = variantImage
			}
		}
	})