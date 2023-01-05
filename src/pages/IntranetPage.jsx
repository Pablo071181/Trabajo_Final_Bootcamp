const IntranetPage = () => {
  return (
    <section className="section">
      <div className="container elements">
        <h2 className="section__title">Regístrate</h2>
        <div className="elements">
          <div>
            <h3 className="section__subtitle">Ingresa tu usuario</h3>
            <input type="text" className="section__text"/>
          </div>
          <div>
            <h3 className="section__subtitle">Ingresa tu contraseña</h3>
            <input type="text" className="section__text"/>
          </div>
          <div>
            <h3 className="section__subtitle">Recupera tu usuario o contraseña</h3>
            <a href="https://www.google.com" className="section__subtitle">Aquí</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntranetPage;