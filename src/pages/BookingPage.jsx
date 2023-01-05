const BookingPage = () => {
  return (
    <section className="section">
      <div className="container elements">
        <h2 className="section__title">Reserva con Nosotros</h2>
        <div className="elements">
          <div>
            <h3 className="section__subtitle">Ingresa tus datos</h3><p></p>
            <form method="post" action="#">
            Nombres y Apellidos:<input type="text"/><br/><br/>
            Correo electrónico: <input type="email"/><br/><br/>
            Teléfono de contacto: <input type="number"/>
            
              
            </form>
            
          </div>
          <div>
            <input type="submit" value="Procesar" className="section__text"></input>
            &nbsp;
            <input type="reset" value="Limpiar" className="section__text"></input>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BookingPage;