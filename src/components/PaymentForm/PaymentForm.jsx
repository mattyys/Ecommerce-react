import { useForm } from "react-hook-form";

export const PaymentForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (dataForm) => {
    console.log(dataForm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          {...register("nombre", { required: true, maxLength: 40 })}
        />
        {errors.nombre?.type === 'required' && <p>El nombre del campo es requerido</p>}
        {errors.nombre?.type === 'maxLength' && <p>Maximo de 40 caracteres</p>}
      </div>
      <div>
        <label>Apellido</label>
        <input
          type="text"
          {...register("apellido", { required: true, maxLength: 40 })}
        />
      </div>
      <div>
        <label>Telefono</label>
        <input
          type="text"
          {...register("telefono", { required: true, maxLength: 15 })}
        />
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register("email", 
        { required: true,
            pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} />
            {errors.email?.type === 'email' && <p>El email no es valido</p>}
      </div>
      <input type="submit" value="pay" />
    </form>
  );
};
