const AcessibilidadeArticle = () => (
  <article>
    <header>
      <hgroup>
        <h2>título</h2>
        <h3>subtítulo</h3>
      </hgroup>
      <p>frase do cabeçário</p>
    </header>

    <section>
      <article>
        <header>cabeçário do primeiro artigo</header>
        <p>corpo do primeiro artigo</p>
        <footer>Rodapé do primeiro artigo</footer>
      </article>

      <article>
        <header>cabeçário do segundo artigo</header>
        <p>corpo do segundo artigo</p>
        <footer>Rodapé do segundo artigo</footer>
      </article>
    </section>

    <footer>Rodapé do artigo</footer>
  </article>
);

export default AcessibilidadeArticle;
