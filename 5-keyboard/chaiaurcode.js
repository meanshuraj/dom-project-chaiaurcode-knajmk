console.log('Project 5');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key==='' ? 'space' : e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `
  ;
});
