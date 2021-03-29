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

  const getCookieValue = (name) => {
  
    let list =  getCookie()
    // for(i)
    // let currentEl = list[i]
    // iscurrenEl.includes(anem)
    // let monsteranme = currentEl.split('=')
    if (list.includes(name)) {
      
      // let value = document.cookie.name.split('=')
      for (cookies in document.cookie) {
        console.log(cookies)
        if (cookies.includes(name)) {

          return cookies
        }

      }

    }

    if (document.cookie === undefined) {
      return null;
    }



  }
  console.log(getCookieValue('monster'))
});
