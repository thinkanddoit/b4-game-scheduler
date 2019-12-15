
var player_number=1//등록된 선수 명수
var kk=1;

function add_player(){

  var player_name = document.getElementById("player_name").value;
  var player_position =  document.getElementById("player_position").value;
  if(player_number<=11){
    var newplayer = $('<div />', {
      text: player_name,
      id: "player"+(player_number),
      class: "player"
    });
    $('#playground').append(newplayer);
    player1();
    player2();
    player3();
    player4();
    player5();
    player6();
    player7();
    player8();
    player9();
    player10();
    player11();
    AddPlayerInTable(kk);//임시
    kk=kk+3;
    alert((player_number++)+"번째 선수가 등록되었습니다.");

  }
  else{
    if(kk>43){
      alert("table에 선수가 가득 찼습니다")
    }
    else{
      alert("11명의 선수가 넘습니다. 후보로 등록합니다.");
      AddPlayerInTable(kk);//임시
      kk=kk+3;
    }
  }

}

function player1(){
  var dragItem = document.querySelector("#player1");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player2(){
  var dragItem = document.querySelector("#player2");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player3(){
  var dragItem = document.querySelector("#player3");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player4(){
  var dragItem = document.querySelector("#player4");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player5(){
  var dragItem = document.querySelector("#player5");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player6(){
  var dragItem = document.querySelector("#player6");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player7(){
  var dragItem = document.querySelector("#player7");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player8(){
  var dragItem = document.querySelector("#player8");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player9(){
  var dragItem = document.querySelector("#player9");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player10(){
  var dragItem = document.querySelector("#player10");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
function player11(){
  var dragItem = document.querySelector("#player11");
  //item 객체 접근
  var container = document.querySelector("#playground");

  var active = false;//활동중?
  var currentX;//현재x
  var currentY;//현재y
  var initialX;//초기x
  var initialY;//초기y
  var xOffset = 0;//x변위
  var yOffset = 0;//y변위

  container.addEventListener("touchstart", dragStart);
  container.addEventListener("touchend", dragEnd);
  container.addEventListener("touchmove", drag);

  container.addEventListener("mousedown", dragStart);
  container.addEventListener("mouseup", dragEnd);
  container.addEventListener("mousemove", drag);
  //이벤트 처리함수 추가

  function dragStart(event) {
    if (event.type === "touchstart") {
      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    } else {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    }

    if (event.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(event) {
    if (active) {

      event.preventDefault();

      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;
      } else {
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}
//drag and drop 구현//////////////////////////////////////////////////////////

//table에 선수 추가 구현
  // var player1_name = $('#player1').innerHTML;
  // var player1_position = $('#player1').className;
  // alert(player1_name+","+player1_position);

function AddPlayerInTable(i){
  var player_name = document.getElementById("player_name").value;
  var player_position =  document.getElementById("player_position").value;

  $("td").eq(i).html(player_position);
  $("td").eq(i+1).html(player_name);
}

function makecolor(){
  var makingcolor1 = document.getElementById("makingcolor1").value;
  var makingcolor2 = document.getElementById("makingcolor2").value;
  $(".player").css("background-color",makingcolor1);
  $(".player").css("color",makingcolor2);
}

function fix(){
  jQuery('#aa').attr('disabled', true);
  jQuery('#bb').attr('disabled', true);
  jQuery('#cc').attr('disabled', true);
  $("#dd").css("background-color","yellow");
}

//kakaotalk api
