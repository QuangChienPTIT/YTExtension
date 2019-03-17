
function get_ip_address() {
  var ip;
  $.ajax({
    type: "GET",
    url: "https://api.ipify.org/?format=json",
    async: false,
    success: function (response) {
      ip = response.ip;
    }
  });
  return ip;
}

function get_status_load() {
  return document.readyState;
}



// ============================================= CHECK STATUS =============================================

function get_status_load() {
  return document.readyState;
}

function wait(ms) {
  console.log("Wait " + ms / 1000 + "s");
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function check_Count_Channel() {
  var countChannel = document.querySelectorAll('#ytcc-existing-channels li');
  var count = countChannel.length;
  return count;
}

function is_send_phone() {
  var btn = $('.submit-buttons #next-button');
  if (btn.length!=0) return true;
  // if ('html:contains("Verify your account")') return true;
  return false;
}


// ============================================= CLICK =============================================

function click_button_login() {
  var a = document.getElementById("gb_70");
  a.click();

}

function click_btn_next_email() {
  var button = document.getElementById("identifierNext");
  button.click();
}

function click_btn_next_password() {
  var button = document.getElementById("passwordNext");
  button.click();
}

function click_btn_subcribe() {
  // var button = $('#meta-contents a.yt-simple-endpoint.style-scope.ytd-button-renderer')  
  var button = $('paper-button.style-scope.ytd-subscribe-button-renderer')
  button.click();

}

function click_button(data) {
  var btn = $(data.selector);
  if (btn) {
    btn[0].click();
    return true;
  }
  return false;
}

function click_channel(channelID) {
  var channel = document.querySelectorAll('#ytcc-existing-channels li .highlight a');
  if (channel[channelID]) {
    channel[channelID].click();
    return true;
  };

  return false;

}
// ============================================= HANDLE=============================================

function scroll_tab(positionY){
  window.scrollBy(0,positionY);
  return true;
}
// ============================================= FILL =============================================

function fill_form_email() {
  var input = $("input#identifierId")[0];
  if (input) {
    input.click();
    wait(2000);
    input.attr('data-initial-value', "dasdasda");
    input.value = "sdadasdasd";
    return true;
  } else return false;
}

function fill_form_password(value) {
  var input = $(".Xb9hP .whsOnd.zHQkBf");
  if (input) {
    input.click();
    wait(2000);
    input.attr('data-initial-value', value);
    input.val(value);
    return true;
  } else return false;
}

function fill_form(data) {
  var input = document.querySelector(data.selector);
  if (input) {
    input.value = data.value
    input.setAttribute('data-initial-value', data.value);
    return true;
  }
  return false;
}

function fill_comment_video(content) {
  var a =document.getElementById('placeholder-area')
  a.click();
  var input = $('#contenteditable-textarea');
  if (input) {
    return true;
  }
  return false;
}


// ================================== main function =======================================

chrome.runtime.onMessage.addListener(

  function (request, sender, sendResponse) {

    data = {};
    if (request.action == 'click_btn_next_email') {
      click_btn_next_email();
      sendResponse("Click button next email");
    }
    if (request.action == 'fill_form_password') {
      var res = fill_form_password(request.data.value)
      sendResponse(res)
    }
    if (request.action == 'click_btn_next_password') {
      click_btn_next_password();
      sendResponse("Click button next password")
    }
    if (request.action == 'click_btn_subcribe') {
      click_btn_subcribe()
      sendResponse("Click subcriber")
    }
    if (request.action == 'get_status_load') {
      var res = get_status_load()
      sendResponse(res)
    }
    if (request.action == 'click_button') {
      var res = click_button(request.data);
      sendResponse(res)
    }
    if (request.action == 'fill_form') {
      var res = fill_form(request.data)
      sendResponse(res)
    }
    if (request.action == 'check_Count_Channel') {
      var res = check_Count_Channel()
      sendResponse(res);
    }
    if (request.action == 'is_send_phone') {
      var res = is_send_phone();
      sendResponse(res);
    }
    if (request.action == 'click_channel') {
      var res = click_channel(request.data.channelID);
      sendResponse(res);
    }
    if (request.action == 'fill_comment_video') {
      var res = fill_comment_video(request.data.content);
      sendResponse(res);
    }
    if (request.action == 'scroll_tab') {
      var res = scroll_tab(request.data.positionY);
      sendResponse(res);
    }

  });