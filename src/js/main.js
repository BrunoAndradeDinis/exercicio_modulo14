$(document).ready(function () {
  // primavera - verao - outono -> background cores
  $(".carousel-info")
    .eq(0)
    .css("background-color", "rgba(0, 82, 152, 255)")
    .show();
  $(".carousel-info").eq(1).css("background-color", "rgb(107, 156, 21)").hide();
  $(".carousel-info").eq(2).css("background-color", "orangered").hide();
  $(".carousel-info").eq(3).css("background-color", "darkorange").hide();
  $(".carousel-info").eq(4).css("background-color", "lightslategrey").hide();

  // alteração do nomes das estações por click e informação do slide de catalogo
  $("a.nav-link").click(function (e) {
    e.preventDefault();

    var index = $("a.nav-link").index(this);

    var currentCarouselIndex = $(".carousel-info").filter(":visible").index();

    var nextCarouselIndex = currentCarouselIndex + 1;

    if (nextCarouselIndex >= $(".carousel-info").length) {
      nextCarouselIndex = 0;
    }

    $(".carousel-info").fadeOut().hide();
    $(".carousel-info").eq(nextCarouselIndex).fadeIn().show();
  });

  // evento de click na imagem
  $("#carrosseis .info-item img").click(function (e) {
    const destino = $("#produtos");

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      100
    );
  });

  // evento de click no botão
  $(".tab-pane .info-item").click(function () {
    const destino = $("#fale-conosco");
    const nomeProduto = $(this).find("h5").text();
    const valorProduto = $(this).find("strong").text();
    const mensagemAtual = $("#mensagem").val();
    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      100
    );

    $("#mensagem").val(mensagemAtual + `${nomeProduto} - ${valorProduto} \n`);
  });
  // evento de click no botão

  // mascaras
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(016) 4 4002-8922",
  });

  // validações
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "Informe o seu Nome!",
      email: "Informe o seu Email",
      telefone: "Informe o seu Telefone",
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert("Por favor, preencha os campos para prosseguir com a compra!");
    },
  });
});
