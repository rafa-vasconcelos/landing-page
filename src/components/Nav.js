/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Nav() {
  const rollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      <nav className='d-flex align-items-center justify-content-center'>
        <a
          className='d-flex align-items-center'
          onClick={rollTop}
          href='#home'
        >
          Home{' '}
        </a>
        <a
          className='d-flex align-items-center'
          href='#projetos'
        >
          Projetos{' '}
        </a>
        <a
          className='d-flex align-items-center'
          href='/curriculo/'
        >
          Currículo{' '}
        </a>
        <a
          className='d-flex align-items-center'
          href='/contato/'
        >
          Contato
        </a>
      </nav>
    </div>
  );
}
