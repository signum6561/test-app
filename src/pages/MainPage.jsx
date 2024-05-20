const MainPage = () => {
  const MENU_LINKS = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Users',
      path: '/users',
    },
    {
      title: 'Blog Post',
      path: '/blogpost',
    },
    {
      title: 'Login',
      path: '/login',
    },
    {
      title: 'Sign Up',
      path: '/signup',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <div className='fixed w-full flex items-center justify-center border-b-2 border-solid'>
      {MENU_LINKS.map((item, index) => (
        <a
          className='text-gray-500 px-5 py-5 h-full hover:bg-sky-100/50 font-bold'
          href={item?.path}
          key={index}
        >
          {item?.title}
        </a>
      ))}
    </div>
  );
};

export default MainPage;
