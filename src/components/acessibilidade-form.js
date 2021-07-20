const AcessibilidadeForm = () => (
  <form>
    <p>Formulario de envio</p>
    <fieldset>
      <legend>Dados Pessoais</legend>
      <label htmlFor='rg'>
        RG:
        <input type='text' name='rg' id='rg' placeholder='Seu RG' required />
      </label>
      <label htmlFor='cpf'>
        {' '}
        CPF:
        <input type='text' name='cpf' id='cpf' placeholder='Seu CPF' required />
      </label>
    </fieldset>

    <fieldset>
      <legend>Mensagem</legend>
      <label htmlFor='texto'>
        texto:
        <textarea name='texto' id='texto' cols='30' rows='10' required />
      </label>
    </fieldset>

    <button type='submit'>Enviar</button>
  </form>
);

export default AcessibilidadeForm;
