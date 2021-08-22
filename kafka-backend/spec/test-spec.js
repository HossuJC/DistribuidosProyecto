
const fetch = require('node-fetch');

async function getCorreo() {
  let resp;
  return fetch('http://localhost:3000/api/obra/3')
      .then((res)=>res.json())
      .then((json)=>json.titulo);
};


describe('Get a usuario', function() {
  it('La funcion debe traer Capítulo II', async function() {
    const value = await getCorreo();
    expect(value).toBe('Vecsus');
    // fetch('http://localhost:3000/api/seccion/2')
    // .then(res=>res.json())
    // .then(json=>{
    //     var value = json.correo


    // })
  });
});
