window.addEventListener("DOMContentLoaded", (event) => {
  document.cookie = 'monster_name=cookie';
  document.cookie = 'favorite_cookie=snickerdoodle';
  document.cookie = 'secondfave_cookie=oatmeal';
  //window.alert(document.cookie)

  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
  };

   setCookie('monster', 'rabbit');


  const getCookie = () => {
    let cookies = document.cookie
  let list = cookies.split('; ')
  return list
  }
  console.log(getCookie())
});
