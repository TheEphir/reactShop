export function Footer() {
  return (
    <footer className='page-footer blue lighten-3 '>
      <div className='footer-copyright grey-text text-darken-2'>
        © {new Date().getFullYear()} Copyright Text
        <a
          className='right grey-text text-darken-2'
          href='https://t.me/TheEphir_321'
        >
          You can text me in telegram
        </a>
      </div>
    </footer>
  );
}
