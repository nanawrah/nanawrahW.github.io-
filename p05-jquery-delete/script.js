$(document).ready(function(){
    // alert(0)
   $('.nama').click(function(){
     // alert(1)
     let isi = $(this).text();
     // alert(isi);
     let isi2 = prompt('Apakah anda ingin mengubahnya?:',isi);
     if(!isi2) return;
     // alert(isi2);

     $(this).text(isi2);
   })

   $('.alamat').click(function(){
    // alert(1)
    let isi = $(this).text();
    // alert(isi);
    let isi2 = prompt('Apakah anda ingin mengubahnya?:',isi);
    if(!isi2) return;
    // alert(isi2);

    $(this).text(isi2);
   })


   $('.hapus').click(function(){
     // alert(1)
    let betul = confirm('Anda yakin ingin menghapusnya?');
    if(!betul) return;

    let id = $(this).prop('id');
    // alert(id);


    let rid = id.split('__');
    let baris_ke = rid[1];

    // alert(baris_ke);

    $('#row__'+baris_ke).slideUp()



    // alert('Anda yakin')


   })

 })