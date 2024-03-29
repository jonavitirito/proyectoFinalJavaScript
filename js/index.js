// DOM
const mainCompras = document.querySelector("#mainCompras");
const toggleFiltrarPuertas = document.querySelector("#filtroPuertas");
const toggleFiltrarVentanasCorredizas = document.querySelector("#filtroVentanasCorredizas");
const toggleFiltrarVentanasProyectantes = document.querySelector("#filtroVentanasProyectantes");
const toggleFiltrarPañoFijo = document.querySelector("#filtroPañoFijo");
const toggleBlanco = document.querySelector("#blanco");
const toggleNegro = document.querySelector("#negro");
const toggleSimilMadera = document.querySelector("#similMadera");

const filterProduct = document.querySelector("#filterProduct");
const toggleProduct =
    document.querySelector(".toggleProductos");
const toggleAberturas =
    document.querySelector(".toggleAberturas");
const toggleColores =
    document.querySelector(".toggleColores");
// contenido
const contentAberturas =
    document.querySelector(".aberturasContent");
const contentColores =
    document.querySelector(".contentColores");
const compras = document.querySelector("#compras");
const botonCarrito = document.querySelector("#botonCarrito");
const modalContainer = document.querySelector("#modalContainer");
const toggleTitle = document.querySelector("h1");
const cantidadCarrito = document.querySelector("#cantidadCarrito");

// eventos

filterProduct.addEventListener("click", () => {
    toggleProduct.toggleAttribute("hidden");
});
toggleAberturas.addEventListener("click", () => {
    contentAberturas.toggleAttribute("hidden");
});
toggleColores.addEventListener("click", () => {
    contentColores.toggleAttribute("hidden");
});


toggleTitle.addEventListener("click", () => {
    compras.innerHTML = "";
    mostrarArticulos();
})

// elaborando el carrito


import { producto } from "./clases.js";

let arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
if (arrayCarrito === null) {
    arrayCarrito = []
}

export let arrayProductos = [];
const puerta1 = new producto(1, "Puerta de rebatir", 105178.00, "Negro mate", "https://http2.mlstatic.com/D_NQ_NP_919280-MLA49568721252_042022-O.webp", 1);
arrayProductos.push(puerta1);
const puerta2 = new producto(2, "Puerta de rebatir", 95564.00, "Blanco brillante", "https://http2.mlstatic.com/D_NQ_NP_910890-MLA54434412001_032023-O.webp", 1);
arrayProductos.push(puerta2);
const puerta3 = new producto(3, "Puerta de rebatir", 125490.00, "Simil madera", "https://http2.mlstatic.com/D_NQ_NP_932929-MLA44161032932_112020-O.webp", 1);
arrayProductos.push(puerta3);
const ventanaCorrediza1 = new producto(4, "Ventana corrediza vidrio simple", 52547.00, "Negro mate", "https://cdn.homedepot.com.mx/productos/147820/147820-a3.jpg", 1);
arrayProductos.push(ventanaCorrediza1);
const ventanaCorrediza2 = new producto(5, "Ventana corrediza vidrio simple", 43941.00, "Blanco brillante", "https://d3ugyf2ht6aenh.cloudfront.net/stores/383/963/products/oks621236-1-ventana-aluminio-klara-100x110-oblak1-91d8fde2bcad34c8c116498597856369-480-0.webp", 1);
arrayProductos.push(ventanaCorrediza2);
const ventanaCorrediza3 = new producto(6, "Ventana corrediza vidrio simple", 72586.00, "Simil madera", "https://media.adeo.com/marketplace/LMES/82456227/1848647.jpeg?width=300", 1);
arrayProductos.push(ventanaCorrediza3);
const ventanaProyectante1 = new producto(7, "Ventana proyectante", 53792, "Negro mate", "https://http2.mlstatic.com/D_NQ_NP_937433-MLA43811767264_102020-O.webp", 1);
arrayProductos.push(ventanaProyectante1);
const ventanaProyectante2 = new producto(8, "Ventana proyectante", 42683.00, "Blanco brillante", "https://http2.mlstatic.com/D_NQ_NP_861157-MLA50290801284_062022-O.webp", 1);
arrayProductos.push(ventanaProyectante2);
const ventanaProyectante3 = new producto(9, "Ventana proyectante", 86982, "Simil madera", "https://http2.mlstatic.com/D_NQ_NP_905934-MLA69911575505_062023-O.webp", 1);
arrayProductos.push(ventanaProyectante3);
const ventanaPañoFijo1 = new producto(10, "Ventana paño fijo", 47620.00, "Negro mate", "https://http2.mlstatic.com/D_830751-MLA47694753168_092021-O.jpg", 1);
arrayProductos.push(ventanaPañoFijo1);
const ventanaPañoFijo2 = new producto(11, "Ventana paño fijo", 43272.00, "Blanco brillante", "https://http2.mlstatic.com/D_NQ_NP_695118-MLA46679224075_072021-O.webp", 1);
arrayProductos.push(ventanaPañoFijo2);
const ventanaPañoFijo3 = new producto(12, "Ventana paño fijo", 58300.00, "Simil madera", "https://teknal.casa/wp-content/uploads/2018/10/simil-madera.jpg", 1);
arrayProductos.push(ventanaPañoFijo3);




import { filtrarProductosPorColor } from "./funcionesFiltro.js";
import { filtrarProductosPorNombre } from "./funcionesFiltro.js";

toggleFiltrarPuertas.addEventListener("click", function () {
    filtrarProductosPorNombre("Puerta de rebatir");

});
toggleFiltrarVentanasCorredizas.addEventListener("click", function () {
    filtrarProductosPorNombre("Ventana paño fijo");
});
toggleFiltrarVentanasProyectantes.addEventListener("click", function () {
    filtrarProductosPorNombre("Ventana proyectante");
});
toggleFiltrarPañoFijo.addEventListener("click", function () {
    filtrarProductosPorNombre("Ventana paño fijo");

});
toggleBlanco.addEventListener("click", function () {
    filtrarProductosPorColor("Blanco brillante");

});
toggleNegro.addEventListener("click", function () {
    filtrarProductosPorColor("Negro mate");

});
toggleSimilMadera.addEventListener("click", function () {
    filtrarProductosPorColor("Simil madera");

});
const mostrarArticulos = () => {

    arrayProductos.forEach((producto) => {
        const content = document.createElement("div");
        content.className = "content";
        content.innerHTML = `<img src="${producto.img}" alt="">
    <h3 class="tituloProducto">${producto.tipoDeProducto} ${producto.color}</h3>
    <p class="price">$${producto.precio}</p>
    
    `;
        compras.append(content);


        let toggleAgregarCarrito = document.createElement("button");
        toggleAgregarCarrito.innerText = "Agregar al Carrito";
        toggleAgregarCarrito.className = "botonAgregarAlCarrito";
        content.append(toggleAgregarCarrito);

        toggleAgregarCarrito.addEventListener("click", () => {
            const repetir = arrayCarrito.some((repetirProducto) => repetirProducto.id === producto.id);
            if (repetir) {
                arrayCarrito.map((prod) => {
                    if (prod.id === producto.id) {
                        prod.cantidad++;
                    }
                });

                agregarProducto(producto.id);
                carritoContador();
                saveLocal();
            } else {
                arrayCarrito.push(producto);
                carritoContador();
                agregarProducto();
                saveLocal();
            }
        }

        )
    });

}


mostrarArticulos();

const mostrarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal_header";
    modalHeader.innerHTML = `
    <h1 class="modal_header_titulo"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #000000;"></i></h1>
    
    `
    modalContainer.append(modalHeader);
    const modalButton = document.createElement("h1");
    modalButton.className = "modalButton";
    modalButton.innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket fa-sm" style="color: #000000;"></i>`;
    modalHeader.append(modalButton);
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    arrayCarrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito";
        carritoContent.innerHTML =
            `
            <img src="${producto.img}" alt="">
                <h3 class="tituloProducto">${producto.tipoDeProducto} ${producto.color}</h3>
                <p class="price">$${producto.precio}</p>
                <div class="restar"><i class="fa-sharp fa-solid fa-caret-down fa-lg" style="color: #e6e6e6;"></i></div>
                <p>Cantidad: ${producto.cantidad}</p>
                <div class="sumar"><i class="fa-sharp fa-solid fa-sort-up fa-lg" style="color: #e6e6e6;"></i></div>
                <p>Total:$ ${producto.cantidad * producto.precio}</p>
                
                
                `;
        let restar = carritoContent.querySelector(".restar");
        let sumar = carritoContent.querySelector(".sumar");

        restar.addEventListener("click", () => {
            if (producto.cantidad !== 1) {
                producto.cantidad--
                mostrarCarrito();
            }
        });
        sumar.addEventListener("click", () => {
            producto.cantidad++
            mostrarCarrito();
        })

        modalContainer.append(carritoContent);

        const borrarCarrito = document.createElement("button");
        borrarCarrito.className = "toggleBorrarCarrito";
        borrarCarrito.innerText = "Borrar producto";
        carritoContent.appendChild(borrarCarrito);



        borrarCarrito.addEventListener("click", () => {
            eliminarProducto(producto.id);

        });

    })




    const total = arrayCarrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const footerModal = document.createElement("div");
    footerModal.className = "footerModal";
    footerModal.innerHTML = `<p class="totalContent">Total a pagar : $${total}</p>
 `;
    modalContainer.append(footerModal);
    const toggleFinalizarCompra = document.createElement("button");
    toggleFinalizarCompra.id = "finalizarCompra";
    toggleFinalizarCompra.className = "finalizar-compra";
    toggleFinalizarCompra.innerText = "Finalizar compra";
    footerModal.append(toggleFinalizarCompra);

    toggleFinalizarCompra.addEventListener("click", () => {
        mainCompras.innerHTML = `<h1> Detalles de tu compra </h1>`;

        const divCompletarDatos = document.createElement("div");
        divCompletarDatos.className = "mainCompletarDatos";
        mainCompras.append(divCompletarDatos);

        const completarDatos = document.createElement("div");
        completarDatos.className = "completar-datos";
        completarDatos.innerHTML = `


<form class="concretar-compra" action="#" method="get">
<input type="text" name="Nombre completo" placeholder="Nombre como figura en la tarjeta">
<input type="text" name="Numero de tarjeta" placeholder="Numero de tarjeta">
<input type="password" name="Clave de seguridad" placeholder="Clave de seguridad">
<input type="email" name="Email" placeholder="Email">
<input type="tel" name="Teléfono" placeholder="Teléfono">

<select class="cuotas-opciones" name="Cuotas de:" >
<option value="1 cuota">1 cuota sin interés de: $${total}</option>
          <option  value="3 cuotas">3 cuotas sin interés de: $${total / 3}</option>
          <option  value="6 cuotas">6 cuotas sin interés de: $${total / 6}</option>
          <option  value="9 cuotas">9 cuotas con 5% de interés de: $${(total + (total * (5 / 100))) / 9} ($${total * (5 / 100) + total})</option>
          <option  value="12 cuotas">12 cuotas con 10% de interés de: $${(total + (total * (10 / 100))) / 12} ($${total * (10 / 100) + total}) </option>
       </select>

    <h2 class="total">Total a pagar es: $${total}</h2>

<button class="boton-concretar-compra" id="botonConcretarCompra">Comprar</button>

</form>


`
        divCompletarDatos.append(completarDatos);

        arrayCarrito.forEach((producto) => {
            let carritoContenido = document.createElement("div");
            carritoContenido.className = "carritoContent";
            carritoContenido.innerHTML =
                `
            <img src="${producto.img}" alt="">
                <h3 class="tituloProducto">${producto.tipoDeProducto} ${producto.color}</h3>
                <p class="price">$${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Total: $${producto.cantidad * producto.precio}</p>
                
                `;

            divCompletarDatos.append(carritoContenido);

        })


        const botonComprar = document.getElementById("botonConcretarCompra");
        botonComprar.addEventListener("click", () => {

            const nombreCompleto = document.querySelector("input[name='Nombre completo']").value;
            const numeroTarjeta = document.querySelector("input[name='Numero de tarjeta']").value;
            const claveSeguridad = document.querySelector("input[name='Clave de seguridad']").value;
            const email = document.querySelector("input[name='Email']").value;
            const telefono = document.querySelector("input[name='Teléfono']").value;
            const cuotas = document.querySelector(".cuotas-opciones").value;
            if (!nombreCompleto || !numeroTarjeta || !claveSeguridad || !email || !telefono || !cuotas) {   
    let timerInterval
    Swal.fire({
      title: 'Completa tus datos para confirmar la compra',
      timer: 1500,
      customClass: {
        container: 'datos-incompletos',
        popup: 'datos-incompletos-container',         
        
      },
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

                return
            }
            let timerInterval
            Swal.fire({
                title: 'Gracias por comprar en AlumTech!',
                html: 'Redirigiendo a la tienda en <b></b> milisegundos.',
                timer: 2000,
                timerProgressBar: false,
                customClass: {
                    container: 'datos-incompletos',
                    popup: 'datos-incompletos-container',                    
                  },
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    location.href = "tienda.html";
                    localStorage.removeItem("carrito");
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        })

    })
    
}


botonCarrito.addEventListener("click", mostrarCarrito);


const agregarProducto = () => {

    arrayCarrito = arrayCarrito.filter((arrayCarritoId) => {
        return arrayCarritoId
    });
    mostrarCarrito();

}


const eliminarProducto = (id) => {
    const foundId = arrayCarrito.find((el) => el.id == id);
    arrayCarrito = arrayCarrito.filter((arrayCarritoId) => {
        return arrayCarritoId !== foundId

    });
    carritoContador();
    saveLocal();
    mostrarCarrito();

}
const carritoContador = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = arrayCarrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerHTML = JSON.parse(localStorage.getItem("carritoLength"));
}

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
}

fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((response) => { return response.json() })
    .then((data) => {
        const valorDolar = document.createElement("div");
        valorDolar.className = "valor-dolar";
        valorDolar.innerHTML = `<h3>Dolar oficial : $${data.oficial.value_sell}</h3>
    <p>Nuestros precios están sujetos al dolar BNA</p>
    `
        mainCompras.append(valorDolar);

    })




carritoContador();


