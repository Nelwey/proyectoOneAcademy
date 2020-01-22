$(() => {

  for (let i = 1; i <= 5; i++) {
    let cont = i;
    $('#casa').append(`<td><select id=${'casa' + cont} class='custom-select custom-select-sm tamano' placeholder='Default input' name='' id=''><option>Casa</option><option value='1'>Azul</option><option value='2'>Amarilla</option><option value='3'>Roja</option><option value='4'>Blanca</option><option value='5'>Verde</option></select></td>`);

    $('#nacionalidad').append(`<td><select id=${'nacionalidad' + cont} class='custom-select custom-select-sm tamano' placeholder='Default input' name='' id=''><option>Nacionalidad</option><option value='1'>Británico</option><option value='2'>Danés</option><option value='3'>Noruego</option><option value='4'>Alemán</option><option value='5'>Sueco</option></select></td>`);

    $('#bebida').append(`<td><select id=${'bebida' + cont} class='custom-select custom-select-sm tamano' placeholder='Default input' name='' id=''><option>Bebida</option><option value='1'>Cerveza</option><option value='2'>Café</option><option value='3'>Té</option><option value='4'>Leche</option><option value='5'>Agua</option></select></td>`);

    $('#cigarrillo').append(`<td><select id=${'ciga' + cont} class='custom-select custom-select-sm tamano' placeholder='Default input' name='' id=''><option>Cigarrillo</option><option value='1'>Blue Master</option><option value='2'>Prince</option><option value='3'>Dun Hill</option><option value='4'>Brends</option><option value='5'>Pall mall</option></select></td>`);

    $('#mascota').append(`<td><select id=${'mas' + cont} class='custom-select custom-select-sm tamano' placeholder='Default input' name='' id=''><option>Mascota</option><option value='1'>Caballo</option><option value='2'>Pájaro</option><option value='3'>Perro</option><option value='4'>Pecesito</option><option value='5'>Gato</option></select></td>`);

  }

  //------------------------------------------------------------------------
  $('#btnResultado').click(() => {
    let casa1 = $('#casa1').find(":selected").val();
    let casa2 = $('#casa2').find(":selected").val();
    let casa3 = $('#casa3').find(":selected").val();
    let casa4 = $('#casa4').find(":selected").val();
    let casa5 = $('#casa5').find(":selected").val();

    let nacionalidad1 = $('#nacionalidad1').find(":selected").val();
    let nacionalidad2 = $('#nacionalidad2').find(":selected").val();
    let nacionalidad3 = $('#nacionalidad3').find(":selected").val();
    let nacionalidad4 = $('#nacionalidad4').find(":selected").val();
    let nacionalidad5 = $('#nacionalidad5').find(":selected").val();

    let bebida1 = $('#bebida1').find(":selected").val();
    let bebida2 = $('#bebida2').find(":selected").val();
    let bebida3 = $('#bebida3').find(":selected").val();
    let bebida4 = $('#bebida4').find(":selected").val();
    let bebida5 = $('#bebida5').find(":selected").val();

    let ciga1 = $('#ciga1').find(":selected").val();
    let ciga2 = $('#ciga2').find(":selected").val();
    let ciga3 = $('#ciga3').find(":selected").val();
    let ciga4 = $('#ciga4').find(":selected").val();
    let ciga5 = $('#ciga5').find(":selected").val();

    let mas1 = $('#mas1').find(":selected").val();
    let mas2 = $('#mas2').find(":selected").val();
    let mas3 = $('#mas3').find(":selected").val();
    let mas4 = $('#mas4').find(":selected").val();
    let mas5 = $('#mas5').find(":selected").val();

    if (casa1 == 2 && casa2 == 1 && casa3 == 3 && casa4 == 5 && casa5 == 4 && nacionalidad1 == 3 && nacionalidad2 == 2 && nacionalidad3 == 1 && nacionalidad4 == 4 && nacionalidad5 == 5 && bebida1 == 5 && bebida2 == 3 && bebida3 == 4 && bebida4 == 2 && bebida5 == 1 && ciga1 == 3 && ciga2 == 4 && ciga3 == 5 && ciga4 == 2 && ciga5 == 1 && mas1 == 5 && mas2 == 1 && mas3 == 2 && mas4 == 4 && mas5 == 3) {

      $('.modal-title').text("Felicidades");
      $('.modal-body').text("Completaste exitosamente el acertijo, El alemán es dueño del pececito");
      $('.modal-content').css({ "background-color": "#d4edda", "border-color": "#c3e6cb", "color": "#155724" });

    } else {
      $('.modal-title').text("Le pelaste pariente!");
      $('.modal-body').text("");
      $('.modal-content').css({ "background-color": "#f8d7da", "border-color": "#f5c6cb", "color": "#721c24" });
    }
  });
});