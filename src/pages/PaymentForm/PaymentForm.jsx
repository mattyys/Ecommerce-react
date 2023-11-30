import { useForm } from "react-hook-form";
import "./PaymentForm.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { createDocument } from "../../Utils/firestore";
import { useNavigate } from "react-router-dom";

export const PaymentForm = () => {

  const onDate = new Date().toISOString().substring(0, 10);

  const { cart, deleteCart } = useContext(CartContext);
  const invoiceCollection = 'invoices';
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      date: onDate,
    },
  });

  const onSubmit = (dataForm) => {
    const invoiceData = {...dataForm, cart};
    createDocument(invoiceData, invoiceCollection);
    deleteCart();
    alert("Pago realizado correctamente");
    navigate("/");
    
  };

  const addComment = watch("isAddComment");

  return (
    <main className="main-container">
      <div className="form-container">
        <h2>Payment</h2>
        <form  className="border p-3 form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            type="text"
            {...register("date", { required: true })}
          />
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            {errors.firstName?.type === "required" && (
              <p>El nombre del campo es requerido</p>
            )}
            {errors.firstName?.type === "maxLength" && (
              <p>Maximo de 20 caracteres</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              className="form-control"
              type="text"
              placeholder="Apellido"
              {...register("lastName", { required: true, maxLength: 25 })}
            />
            {errors.lastName?.type === "required" && (
              <p>El apellido es requerido</p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p>Maximo de 25 caracteres</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              className="form-control"
              type="tel"
              placeholder="+598123456891"
              {...register("phone", { required: true, maxLength: 15 })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="ejemplo@email.com"
              {...register("email", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p>Formato de email no valido</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Agregar comentario</label>
            <input
              className="form-check-label"
              type="checkbox"
              {...register("isAddComment")}
            />
          </div>
          {addComment && (
            <div className="mb-3">
              <label className="form-label">Comentario</label>

              <textarea
                className="form-control"
                type="text"
                placeholder="Agrega tu comentario"
                {...register("comment")}
              ></textarea>
            </div>
          )}
          <div className="">
            <button className="btn btn-danger m-3">Cancelar</button>
            <input className="btn btn-primary " type="submit" value="Pagar" />
           
          </div>
        </form>

      </div>
    </main>
  );
};
