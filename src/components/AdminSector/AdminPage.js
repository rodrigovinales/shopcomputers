// import React, { useState } from "react";
// import { useCollection } from "../../hooks/useCollection";
// import { collection, getDocs, query, where, addDoc, Timestamp, writeBatch, documentId, doc, updateDoc } from "firebase/firestore/lite";
// import { db } from "../../Firebase/Config";
// import { Form, FloatingLabel } from "react-bootstrap";
// import Swal from 'sweetalert2';

// const AdminPage = () => {

//     const { productos: productos } = useCollection("productos")
//     const [orderId, setOrderId] = useState(null)
//     const [values, setValues] = useState({

//         nombre: "",
//         precio: "",
//         categoria: "",
//         stock: "",
//         descripcion: "",
//         tamano: "",
//         compatibilidad: "",
//         conexion: "",
//         imagen:""
//     })

//     const handleInputChange = (e) => {
//         setValues({
//             ...values, [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmitPrimary = (e) => {
//         e.preventDefault()

//         productos.filter(element => {
//             if (values.id === "null") {
//                 setValues({
//                     nombre: "",
//                     precio: "",
//                     categoria: "",
//                     stock: "",
//                     descripcion: "",
//                     tamano: "",
//                     compatibilidad: "",
//                     conexion: "",
//                     imagen:""
//                 })
//             }
//             if (values.id === element.id) {
//                 setValues({
//                     id: element.id,
//                     nombre: element.nombre,
//                     precio: element.precio,
//                     categoria: element.categoria,
//                     stock: element.stock,
//                     descripcion: element.descripcion,
//                     tamano: element.tamano,
//                     compatibilidad: element.compatibilidad,
//                     conexion: element.conexion,
//                 })
//             }
//         });
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const addItem = {
//             nombre: (values.nombre).toUpperCase(),
//             categoria: (values.categoria).toUpperCase(),
//             precio: values.precio,
//             imagen: e.target.imagen.files[0].name,
//             stock: values.stock,
//             descripcion: (values.descripcion).toUpperCase(),
//             compatibilidad: (values.compatibilidad).toUpperCase(),
//             conexion: (values.conexion).toUpperCase(),
//             tamano: values.tamano,
//             date: Timestamp.fromDate(new Date())
//         }
//         const modifyItem = {
//             nombre: values.nombre,
//             categoria: values.categoria,
//             precio: values.precio,
//             stock: values.stock,
//             imagen: e.target.imagen.files[0].name,
//             descripcion: values.descripcion,
//             compatibilidad: values.compatibilidad,
//             conexion: values.conexion,
//             tamano: values.tamano,
//             date: Timestamp.fromDate(new Date())
//         }
//         const updateItem = () => {
//             const modificaItem = doc(db, "productos", values.id)
//             updateDoc(modificaItem, modifyItem)
//             Swal.fire({
//                 title: 'Producto modificado',
//                 timer: 2000,
//                 icon: 'success'
//             })
//         }

//         Swal.fire({
//             title: 'Producto agregado al stock',
//             timer: 2000,
//             icon: 'success'
//         })

//         if (values.id) {
//             updateItem()
//         }
//         else {
//             const batch = writeBatch(db)
//             const addProductos = collection(db, "productos")
//             const productosRef = collection(db, "productos")
//             const q = query(productosRef, where(documentId(), "in", productos.map(el => el.id)))
//             getDocs(q)
//                 .then((res) => {
//                     addDoc(addProductos, addItem)
//                         .then((res) => {
//                             batch.commit()
//                             setOrderId(res.id)
//                         })
//                 })
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmitPrimary}>
//                 <Form.Select
//                     className="me-sm-2"
//                     id="inlineFormCustomSelect"
//                     name="id"
//                     type="text"
//                     onChange={handleInputChange}
//                 >
//                     <option value="null">Ingresar Producto Nuevo</option>
//                     {productos.map(e => (
//                         <option value={e.id} key={e.id}>{`Nombre Producto: ${e.nombre} **** ID: ${e.id}`}  </option>))}
//                 </Form.Select>
//                 <button type='submit' className='btn btn-info btn-sm my-2'>LLENAR CAMPOS</button>

//             </form>
//             <form onSubmit={handleSubmit}>
//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Nombre del Producto"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="nombre"
//                         type="text"
//                         value={values.nombre}
//                         placeholder="NOMBRE DEL PRODUCTO" />
//                 </FloatingLabel>

//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Categoria del Producto"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="categoria"
//                         type="text"
//                         value={values.categoria}
//                         placeholder="CATEGORIA DEL PRODUCTO" />
//                 </FloatingLabel>

//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Descripcion del Producto"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="descripcion"
//                         type="text"
//                         value={values.descripcion}
//                         placeholder="DESCRIPCION DEL PRODUCTO" />
//                 </FloatingLabel>

//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Compatibilidad"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="compatibilidad"
//                         type="text"
//                         value={values.compatibilidad}
//                         placeholder="COMPATIBILIDAD" />
//                 </FloatingLabel>

//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Conexion"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="conexion"
//                         type="text"
//                         value={values.conexion}
//                         placeholder="CONEXION" />
//                 </FloatingLabel>

//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Tamaño / Dimensiones"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="tamano"
//                         type="text"
//                         value={values.tamano}
//                         placeholder="TAMAÑO" />
//                 </FloatingLabel>

//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Cantidad"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="stock"
//                         type="number"
//                         value={values.stock}
//                         min="0"
//                         max="200"
//                         placeholder="Cantidad" />
//                 </FloatingLabel>


//                 <FloatingLabel
//                     controlId="floatingInput"
//                     label="Precio en Pesos"
//                     className="my-2"
//                 >
//                     <Form.Control
//                         onChange={handleInputChange}
//                         name="precio"
//                         type="number"
//                         value={values.precio}
//                         min="0"
//                         placeholder="Precio" />
//                 </FloatingLabel>

//                 <Form.Group controlId="formFile">
//                     <Form.Label>Seleccione de imagen para el producto</Form.Label>
//                     <Form.Control
//                         name="imagen"
//                         type="file"
//                         required
//                         onChange={handleInputChange}
//                         value={values.imagen}
//                         className="mb-3" />
//                 </Form.Group>
//                 <br />
//                 <button type='submit' className='btn btn-success'>Enviar</button>
//             </form>

//             <div className="container mt-5" align="center">
//                 <h4>Lista de Productos</h4>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <table className="table table-bordered">
//                             <thead className="thead-dark">
//                                 <tr>
//                                     <th scope="col">ID</th>
//                                     <th scope="col">Categoria</th>
//                                     <th scope="col">Nombre</th>
//                                     <th scope="col">Cantidad</th>
//                                     <th scope="col">Precio</th>
//                                     <th scope="col">Imagen</th>

//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {productos.map(e => (
//                                     <tr key={e.id}>
//                                         <td>{e.id}</td>
//                                         <td>{e.categoria}</td>
//                                         <td>{e.nombre}</td>
//                                         <td>{e.stock} Unidades</td>
//                                         <td>$ {e.precio}</td>
//                                         <td><img src={`${process.env.PUBLIC_URL}/productos/${e.imagen}`} alt={e.nombre} width="50px" className="img-fluid" /></td>
//                                     </tr>

//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminPage;