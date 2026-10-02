import ProductCard from "./ProductCard";

function Productos({ productos, cart, addToCart, removeFromCart }) {
    return (
        <section id="cuadricula-productos" class="bg-white py-4">
            <div class="container text-center">
                <h3 class="text-start fw-light mb-5">Novedades populares</h3>
                <div id="container-productos" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-3">
                    {productos.map((producto) => (
                        <ProductCard
                            key={producto.sku}
                            producto={producto}
                            enElCarrito={cart.some((item) => item.sku === producto.sku)}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
                <a type="button" class="btn btn-dark text-light my-2" href="#">Explorar todos los productos</a>
            </div>
        </section>
    )
}

export default Productos