import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  

    const addToCart = (item, cantidad) => {
        if (isOnCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isOnCart = (id) => cart.some((prod) => prod.id === id);

    const sumarCantidad = (item, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    const totalPrice = () => {
        
    };

    const totalUnidades = () => {
        
    };

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const deleteAll = (_) => setCart([]);

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart,
                deleteItem,
                totalPrice,
                deleteAll,
                totalUnidades,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

/*
export const contexto = createContext()

const Provider = contexto.Provider
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const MiProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const agregarProducto = (producto,cantidad) => {
        const copia = [...carrito]
        const nuevoProducto={
            ...producto,
            cantidad:cantidad
        }
        copia.push(nuevoProducto)
        setCarrito(copia)
    }

    

    const eliminarProducto = (producto) => {
        //setCarrito()
    }
    
    const actualizarCantidad = (producto, cantidad) => {
        //setCarrito()
    }

   
    const vaciarCarrito = () => {}

    const valorDelContexto = {
        carrito : carrito,
        agregarProducto:agregarProducto,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        
    }


    }*/