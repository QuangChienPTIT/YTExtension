document.addEventListener('DOMContentLoaded', function () {
  var selectFunc = document.getElementById('selectFunc');
  $('#btnTest').click(function (e) {
    e.preventDefault();
    updateUrl('https://www.youtube.com/watch?v=JnoLnsx-Cek')
    .then(r=>{
      return waitLoaded();
    })
    .then(r=>{
      return playVideo();
    })
  });
  $('#selectFunc').change(function (e) {
    e.preventDefault();
    console.log(selectFunc.options[selectFunc.selectedIndex].value);

    switch (selectFunc) {
      case 'subcribe':
        console.log('subcribe');
        break;
      case 'create':
        console.log('create');
        break;
    }
  });

  $(document).on('click', "#btnCreate", function () {
    var countChannel = document.getElementById('selectCountChannel').value;
    createManyChannel(10);
  });
  $(document).on('click', "#btnClear", function () {
    clearBrowsingData();
  });
  $(document).on('click', "#btnLogin", function () {
    var email = document.getElementById('myEmail');
    var pass = document.getElementById('password');
    clearBrowsingData()
      .then(r => {
        return dcom(false)
      })
      .then(r => {
        return dcom(true);
      })
      .then(r => {
        return login(email.value, pass.value);
      })
      .then(r => {
        console.log('complete');
      })
      .catch(e => {
        console.log(e);
      });
  });

  $(document).on('click', "#btnReact", function () {
    react();
  });
  $(document).on('click', "#btnReactSub", function () {
    reactSub();
  });
  $(document).on('click', "#btnSubcribe", function () {
    var urlSubcribe = document.getElementById('urlSubcribe').value;

    arrURL = urlSubcribe.split("\n")
    subcribeAllLink(arrURL)
      .then(r => {
        console.log('Subcribe complete : ' + r);
      });

  });
}, false);
$('#btnFunc1').click(function (e) {
  e.preventDefault();
  linkcollider();
});


//========================================================================== INIT CONST VALUE ========================================================

const URL = {
  GRAPH_API_SERVER: "https://api.facebook.com/restserver.php",
  HOMEPAGE: "https://www.google.com/",
  URLSUBCRIBE: "https://www.youtube.com/user/EmilyLadykillah",
  SERVER_CLIENT: "http://php.reg.vn",
  DCOM_CONNECT: "http://php.reg.vn/auto/auto.php?action=connect",
  DCOM_DISCONNECT: "http://php.reg.vn/auto/auto.php?action=disconnect",
};

const URLYOUTUBE = {
  HOMEPAGE: "https://www.youtube.com/",
  ALLCHANNEL: "https://www.youtube.com/channel_switcher?next=%2Faccount&feature=settings",
  SUBURL: "https://www.youtube.com/watch?v=3CAH4cDrjeQ",
  TREND:"https://www.youtube.com/feed/trending",
  URLCHANNEL: [
    "https://www.youtube.com/watch?v=Q3teJIoHBfA",
    "https://www.youtube.com/watch?v=GwCUbhE0TY0&t=24s",
    "https://www.youtube.com/watch?v=Aqq67fDCWfk",
    "https://www.youtube.com/watch?v=KQuRu1Xku8o",
    "https://www.youtube.com/watch?v=pnzuk2tNEvA",
    "https://www.youtube.com/watch?v=0DhndXPVpxw",
    "https://www.youtube.com/watch?v=BDDHQWkPDRw",
    "https://www.youtube.com/watch?v=ip6mn1gjJPc",
    "https://www.youtube.com/watch?v=mZ28AaBwkjQ",
    "https://www.youtube.com/watch?v=EQwYOOrxCx0",
    "https://www.youtube.com/watch?v=YDBIXKz7G3s",
    "https://www.youtube.com/watch?v=OYYRmWjk79s",
    "https://www.youtube.com/watch?v=nSC7Ju-c3X4",
    "https://www.youtube.com/watch?v=eyuku3PxG5s",
    "https://www.youtube.com/watch?v=RLGiEBsQ1Xg",
    "https://www.youtube.com/watch?v=fxeSvAsqzlo",
    "https://www.youtube.com/watch?v=90Y_gWG4sZY",
    "https://www.youtube.com/watch?v=9pqJT6xO3Ps",
    "https://www.youtube.com/watch?v=bnj1xUDkpBk",
    "https://www.youtube.com/watch?v=XLbOWqjmj4Q",
    "https://www.youtube.com/watch?v=aGUQsb31TEw",
  ]
}

const DEFAULT_VALUE = {
  SECRET_KEY: "c1e620fa708a1d5696fb991c1bde5662",
  API_KEY: "3e7c78e35a76a9299309885393b02d97",
  X_RAPIDAPI_KEY: "D8YCZx1CHDmshJYMoPIizkIFCc3ip1gnReujsn41SYoT2OFnBX",
  LASTNAME: [
    "Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "An", "Ánh", "Ân", "Âu", "Ấu", "Bá", "Bạc", "Bạch", "Bàn", "Bàng", "Bành", "Bảo", "Bửu", "Bế", "Bì", "Biện", "Bình", "Bồ", "Ca", "Cái", "Cam", "Cát", "Cầm", "Cấn", "Cảnh", "Chế", "Chiêm", "Chu", "Châu", "Chung", "Trung", "Chúng", "Chương", "Chử", "Cổ", "Công", "Cù", "Cung", "Cự", "Dã", "Danh", "Diêm", "Diệp", "Doãn", "Dư", "Đàm", "Đan", "Đào", "Đậu", "Điền", "Đinh", "Điêu", "Đoàn", "Đôn", "Đồng", "Đổng", "Đới", "Đức", "Đường", "Giả", "Giao", "Giang", "Giáp", "Hà", "Hạ", "Hàn", "Hán", "Hề", "Hè", "Hi", "Hình", "Hoa", "Hồng", "Hùng", "Hứa", "Hướng", "Kha", "Khương", "Khâu", "Khưu", "Khiếu", "Khoa", "Khổng", "Khu", "Khuất", "Khúc", "Kiều", "Kim", "La", "Lạc", "Lại", "Lâm", "Lều", "Lãnh", "Lăng", "Liễu", "Lò", "Lô", "Lỗ", "Luyện", "Lục", "Lư", "Lữ", "Lã", "Lương", "Lưu", "Lỳ", "Lý", "Ma", "Mã", "Mạc", "Mạch", "Mai", "Mang", "Mâu", "Ninh", "Nhâm", "Ngân", "Nghiêm", "Nghị", "Ngọ", "Ngụy", "Nhữ", "Nông", "Ong", "Ông", "Phi", "Phí", "Phó", "Phú", "Phùng", "Phương", "Phường", "Quản", "Quàng", "Quách", "Sầm", "Sơn", "Sử", "Tạ", "Tào", "Tán", "Tăng", "Thạch", "Thái", "Thành", "Thào", "Thẩm", "Thân", "Thập", "Thi", "Thiều", "Thịnh", "Thôi", "Tiêu", "Tiếp", "Tòng", "Tô", "Tôn", "Tông", "Tống", "Trang", "Trà", "Trác", "Tri", "Triệu", "Trịnh", "Trình", "Trưng", "Trừng", "Trương", "Từ", "Ti", "Uông", "Ung", "Ưng", "Ứng", "Văn", "Vi", "Viên", "Vưu", "Vương", "Vừ", "Xa", "Yên", "Ngọc", "Liêu", "Thoa"
  ],
  FIRSTNAME: [
    "Dung", "Đan", "Giang", "Hân", "Hạnh", "Hoa", "Hương", "Khánh", "Tâm", "Thu", "An", "Ba", "Bá", "Bách", "Bạch", "Bảo", "Bắc", "Bằng", "Bé", "Bích", "Biên", "Bình", "Bính", "Bùi", "Cảnh", "Chánh", "Chấn", "Châu", "Chi", "Chí", "Chiến", "Chiểu", "Chinh", "Chính", "Chỉnh", "Chuẩn", "Chung", "Công", "Cúc", "Cung", "Cường", "Cửu", "Danh", "Dạ", "Diễm", "Diệp", "Diệu", "Doanh", "Doãn", "Dục", "Dung", "Dũng", "Duy", "Duyên", "Dự", "Dương", "Dương", "Dưỡng", "Đại", "Đào", "Đan", "Đam", "Đàm", "Đảm", "Đạm", "Đạt", "Đắc", "Đăng", "Đăng", "Đặng", "Đích", "Địch", "Đinh", "Đình", "Định", "Điềm", "Điểm", "Điền", "Điện", "Điệp", "Đoan", "Đô", "Giao", "Giáp", "Quan", "Hà", "Hạ", "Hải", "Hàn", "Hạnh", "Hào", "Hảo", "Hạo", "Hằng", "Hân", "Hậu", "Hiên", "Hiền", "Hiện", "Hiển", "Hiệp", "Hiếu", "Hinh", "Hoa", "Hòa", "Hóa", "Hỏa", "Học", "Hoạch", "Hoài", "Hoan", "Hoán", "Hoạn", "Hoàn", "Hoàng", "Hồ", "Hồng", "Hợp", "Hợi", "Huân", "Huấn", "Hùng", "Huy", "Huyền", "Huỳnh", "Huynh", "Hứa", "Hưng", "Hương", "Hữu", "Kim", "Kiều", "Kiệt", "Kha", "Khang", "Khải", "Khải", "Khánh", "Khoa", "Khôi", "Khuất", "Khuê", "Kỳ", "Lã", "Lại", "Lan", "Lành", "Lãnh", "Lâm", "Lê", "Lễ", "Linh", "Liên", "Long", "Luân", "Lương", "Ly", "Lý", "Mã", "Mai", "Mạnh", "Minh", "My", "Mỹ", "Nam", "Nhật", "Nhân", "Nhi", "Nhiên", "Như", "Nga", "Ngân", "Ngọc", "Ngô", "Nguyên", "Nguyễn", "Nữ", "Phan", "Phạm", "Phi", "Phong", "Phong", "Phú", "Phương", "Phùng", "Phụng", "Phượng", "Quang", "Quách", "Quân", "Quốc", "Quyên", "Quỳnh", "Sang", "Sâm", "Song", "Sơn", "Tạ", "Tài", "Tân", "Tấn", "Tăng", "Thái", "Thanh", "Thành", "Thành", "Thành", "Thạnh", "Thảo", "Thắng", "Thế", "Thi", "Thị", "Thiêm", "Thịnh", "Thiên", "Thiện", "Thiệu", "Thoa", "Thoại", "Thuận", "Thủy", "Thúy", "Thùy", "Thụy", "Thu", "Thư", "Thương", "Thương", "Tiên", "Tiến", "Tín", "Tịnh", "Toàn", "Tô", "Tú", "Tùng", "Tuân", "Tuấn", "Tuyết", "Tường", "Tư", "Trang", "Trâm", "Trần", "Trí", "Trinh", "Trịnh", "Triển", "Trung", "Trúc", "Trương", "Tuyền", "Uyên", "Văn", "Vân", "Vĩ", "Vinh", "Vĩnh", "Việt", "Võ", "Vũ", "Vũ", "Vương", "Vy", "Yến", "Xuân", "Hoài An", "Hoài", "Huỳnh", "Tuấn", "Tinh", "Phan", "Văn", "Chí"
  ],
  DOMAIN_MAIL: [
    "@ask-mail.com",
    "@digital-message.com",
    "@digitalmail.info",
    "@directmail24.net",
    "@mail-hub.info"
    // "@getcoolmail.info",
    // "@netmail-pro.com",
    // "@netmails.info",
    // "@newairmail.com",
    // "@parcel4.net",
    // "@tempcloud.info",
    // "@themailpro.net",
    // "@webmails.top"


  ],
  DOMAIN_HOTMAIL: "@hotmail.com",
  PASSWORD: "Caoletam$123",
  COMMENTCONTENT: [
    "Hay quá",
    "Eo ơi tình thế 😒",
    "Hay quá. Chưa 1 lần được 10like",
    "Awww nghiện luôn rồi ngày nào cx nghe luôn í hai người dth cực~~~",
    "This song is my favourite ~ I love Vietnam! ",
    "Hay Phết",
    "Ai còn nghe không nhỉ. Ngày nào mk cũng nghe nghiện luôn r😊😊😊",
    "Số đứa FA đang nghe bài này",
    "I heard this song a lot whan i was at Vietnam. Like it so much!",
    "this song is so melodious to listen to.. especially after knowing the love story of the couple <3 too bad the song is just too short.. i hope it never stops! Love from Malaysia <3",
    "Một ngày nghe trên 10 lần ko thấy chán chỉ thấy nghiện",
    "có ai nghe bài này hơn 20 lần ko nhỉ điểm danh đi ...",
    "hot girl.. wellcome my home",
    "A ơi sao trên zing chưa có e đang hóng từng ngày"
  ]
};


// ========================================================================= FUNCTION ====================================================================



function wait(ms) {
  console.log("Wait " + ms / 1000 + "s");
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

async function asyncWait(ms) {
  return new Promise((resolve, reject) => {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
    if (end >= start + ms)
      resolve(true);
  })
    .then(results => {
      return results;
    });
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function md5Hash(value) {
  var MD5 = function (d) {
    result = M(V(Y(X(d), 8 * d.length)));
    return result.toLowerCase()
  };

  function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f
  }

  function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _
  }

  function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _
  }

  function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
      var h = m,
        t = f,
        g = r,
        e = i;
      f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
    }
    return Array(m, f, r, i)
  }

  function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
  }

  function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
  }

  function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
  }

  function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
  }

  function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
  }

  function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
  }

  function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
  }
  return MD5(value);
}

function randomArr(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomText(quantity) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < quantity; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function randomInfo() {
  var lastname = randomArr(DEFAULT_VALUE.LASTNAME);
  var firstname = randomArr(DEFAULT_VALUE.FIRSTNAME);
  var temp1 = ((lastname.toLowerCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, "")).replace("đ", "d");
  var temp2 = (((firstname.toLowerCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, "")).replace(" ", "")).replace("đ", "d");
  var rand_mail = (temp1 + temp2).replace("đ", "d") + "_" + random(111, 999) + randomText(4);
  return {
    lastname: lastname,
    firstname: firstname,
    mail: rand_mail
  };
}

function randomChannelName() {
  var lastname = randomArr(DEFAULT_VALUE.LASTNAME);
  var firstname = randomArr(DEFAULT_VALUE.FIRSTNAME);
  var channelname = lastname + " " + firstname;
  return channelname;
}

function randomPassword() {
  return "G" + randomText(4) + "@!em" + random(10, 99) + "z";
}



function gen_signature(list_data) {
  var signature = '';
  for (var key in list_data) {
    signature += (key + '=' + list_data[key]);
  }
  signature += DEFAULT_VALUE.SECRET_KEY;
  return (md5Hash(signature)).toString();
}


function get_link_restserver(username, password) {
  var params = {
    api_key: DEFAULT_VALUE.API_KEY,
    email: username,
    format: "JSON",
    locale: "vi_vn",
    method: "auth.login",
    password: password,
    return_ssl_resources: "0",
    v: "1.0",
  };
  params.sig = gen_signature(params);
  return URL.GRAPH_API_SERVER + '?' + jQuery.param(params);
}


// ========================================================================= CHECK FUNCTION ====================================================================

async function checkCountChannel() {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'check_Count_Channel'
    })
      .then(r => {
        if (r < 100)
          resolve(r)
        else
          reject('Channel max')
      })
  })
}

async function getChannelCount() {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'check_Count_Channel'
    })
      .then(r => {
        resolve(r);
      })
  })
}
async function getSubChannelCount() {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'check_Sub_Count_Channel'
    })
      .then(r => {
        resolve(r);
      })
  })
}



async function checkCreateChannel() {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'is_send_phone'
    })
      .then(r => {
        console.log(r);

        if (r) reject("Check Phone")
        else resolve(false)
      })
  })
}

async function checkSubcribeCount(subCount) {

}

// ========================================================================= ASYNC FUNCTION ====================================================================

async function test() {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'click_button',
      data: {
        selector: 'a:contains("1:30")'
      }
    })
      .then(r => {
        return waitLoaded()
      })
      .then(r => {
        return sendMessage({
          action: 'click_button',
          data: {
            selector: 'a:contains("1:30")'
          }
        })
      })
      .then(r => {
        wait(5000);
        return sendMessageToOther({
          action: 'click_button',
          data: {
            selector: '#submitButtons'
          },
          id: 1
        })
      })
      .then(r => {
        resolve(r);
      })
      .catch(e => {
        reject(e);
      })
  })
}

function sendMessage(data) {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, function (tabs) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: data.action,
          data: data.data
        }, function (response) {
          resolve(response);
        });
      });
    });
  })
}

function sendMessageToOther(data) {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, function (tabs) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[data.id].id, {
          action: data.action,
          data: data.data
        }, function (response) {
          resolve(response);
        });
      });
    });
  })
}

async function resetDcom() {
  return new Promise((resolve, reject) => {
    console.log('Turn OFF dcom (flag = false)');
    dcom(false)
      .then(r => {
        console.log('Turn ON dcom (flag = true)');
        return dcom(true);
      })
      .then(r => {
        resolve(r);
      })
      .catch(e => {
        reject(e);
      })
  })
}

async function updateUrl(url) {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, function (tabs) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.update(tabs[0].id, {
          url: url,
          active: true
        }, function (response) {
          chrome.tabs.onUpdated.addListener(function listenEvent(tabid, info, tab) {
            if (info.status === "complete") {
              chrome.tabs.onUpdated.removeListener(listenEvent);
              resolve(true);
            }
          });
        });
      });
    });
  });
}

async function getCookies() {
  var data = {};
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, function (tabs) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.cookies.getAll({
          domain: ".facebook.com"
        }, function (cookies) {
          cookies.forEach((cookie, index, array) => {
            if (cookie.name === "c_user" || cookie.name === "xs" || cookie.name === "fr" || cookie.name === "datr")
              data[cookie.name] = cookie.value;
            if (index === array.length - 1)
              resolve(data);
          });
        });
      });
    });
  }).then(results => {
    return results;
  });
}

async function getTokenSuccess(username, password) {
  var link = get_link_restserver(username, password);
  return new Promise((resolve, reject) => {
    var token = get_token(link);
    resolve(token);
  })
    .then(results => {
      return results;
    });
}

async function clearBrowsingData() {
  return new Promise((resolve, reject) => {
    chrome.browsingData.remove({
      "originTypes": {
        "protectedWeb": true,
        "unprotectedWeb": true,
        "extension": true
      }
    }, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "passwords": true,
        "webSQL": true
      }, function () {
        resolve(true);
      });
  });
}

async function clearBrowsingData2() {
  return new Promise((resolve, reject) => {
    chrome.browsingData.remove({
      "originTypes": {
        "protectedWeb": true,
        "unprotectedWeb": true,
        "extension": true
      }
    }, {
      "appcache": true,
        "cache": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "webSQL": true
      }, function () {
        resolve(true);
      });
  });
}

// async function waitLoaded() {
//   return new Promise((resolve, reject) => {
//     var interval = setInterval(function () {
//       sendMessage({
//           action: "get_status_load"
//         })
//         .then(function (results) {
//           if (results === 'complete') {
//             console.log('Load complete');

//             clearInterval(interval);
//             resolve(true);
//           }
//         })
//     }, 1000);
//   })
// }
async function waitLoaded() {
  return new Promise((resolve, reject) => {
    var interval = setInterval(function () {
      sendMessage({
        action: "get_status_load"
      })
        .then(function (results) {
          console.log(results);
          if (results === 'complete')
            resolve(interval);
        })
    }, 1000);
  })
    .then(results => {
      clearInterval(results);
      return true;
    });
}
/////////////////////////LOGIN//////////////////////////////////////////
async function login(email, pass) {
  return new Promise((resolve, reject) => {
    clearBrowsingData()
      .then(r => {
        return updateUrl(URL.HOMEPAGE)
      })
      .then(r => {
        console.log('Load URL : ' + r);
        wait(random(5000, 20000))
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '#gb_70'
          }
        })
      })
      .then(r => {
        console.log('CLick button login : ' + r);
        return waitLoaded();
      })
      .then(r => {
        console.log('Load complete: ' + r);
        wait(random(5000, 20000))
        return sendMessage({
          action: 'fill_form',
          data: {
            selector: 'input#identifierId',
            value: email
          }
        })
      })
      .then(r => {
        console.log('Fill email : ' + r);
        wait(random(5000, 20000))
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '#identifierNext'
          }
        })
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        console.log('Click button next email : ' + r);
        wait(random(5000, 20000))
        return sendMessage({
          action: 'fill_form_password',
          data: {
            value: pass
          }
        })
      })
      .then(r => {
        console.log('Fill pass : ' + r);
        wait(random(5000, 20000))
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '#passwordNext'
          }
        })
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        resolve(true);
      })
      .catch(e => {
        reject(false);
      })
  })
}
/////////////////////////CREATE//////////////////////////////////////////
async function createChannel() {
  return new Promise((resolve, reject) => {
    console.log('Turn ON dcom (flag = false)');
    dcom(false)
      .then(r => {
        console.log('Turn ON dcom (flag = true)');
        return dcom(true);
      })
      .then(r => {
        return updateUrl(URLYOUTUBE.HOMEPAGE)
      })
      .then(results => {
        return waitLoaded();
      })
      .then(results => {
        console.log("Load complete URL youtube.com : " + results);
        wait(5000);
        return updateUrl(URLYOUTUBE.ALLCHANNEL)
      })
      .then(results => {
        return waitLoaded();
      })
      .then(r => {
        console.log("Load complete URL allChannel : " + r);
        return checkCountChannel();
      })
      .then(results => {
        wait(random(5000, 20000));
        return sendMessage({
          action: 'click_button',
          data: {
            selector: 'ul#ytcc-existing-channels li.channel-switcher-button a',
          }
        });
      })
      .then(results => {
        return waitLoaded();
      })
      .then(results => {
        console.log('Click button create channel : ' + results);
        wait(random(5000, 20000));
        return sendMessage({
          action: 'fill_form',
          data: {
            selector: 'input#PlusPageName',
            value: randomChannelName(),
          }
        })
      })
      .then(results => {
        console.log('fill form : ' + results);
        wait(random(5000, 20000));
        return sendMessage({
          action: 'click_button',
          data: {
            selector: 'input#submitbutton',
          }
        })
      }).then(results => {
        console.log('click button submit');
      })
      .then(results => {
        return waitLoaded();
      })
      .then(r => {
        return checkCreateChannel();
      })
      .then(results => {
        console.log('No check phone');
        console.log('Create channel complete');
        resolve(true);
      })
      .catch(e => {
        reject(e);
      });
  })
}

async function createManyChannel(countChannel) {
  for (var i = 0; i < countChannel; i++) {
    await createChannel()
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log("%c" + e, "color:#FF0000;text-transform:uppercase");
        i = countChannel;
      })
  }
}
/////////////////////////SUBCRIBE//////////////////////////////////////////
async function playVideo(){
  return new Promise((resolve,reject)=>{
    waitLoaded()
    .then(r=>{
      return sendMessage({
        action:'click_button',
        data: {
          selector: '.video-stream.html5-main-video'
        }
      })
    })
    .then(r=>{
      resolve(r)
    })
    .catch(e=>{
      reject(e)
    })
    
  })
}
async function subcribe(urlSubcribe) {
  return new Promise((resolve, reject) => {
    var searchText = document.getElementById('searchText').value;
    var text = searchText.split("\n");
    var txt = text[random(0, text.length - 1)]
    searchByText(txt)
      .then(r => {
        return updateUrl(urlSubcribe)
      })
      .then(r=>{
        wait(2000);
        return waitLoaded();
      })
      .then(r=>{
        wait(random(1000,2000));
        return sendMessage({
          action : 'click_button',
          data:{
            selector: '#thumbnail'
          }
        })
      })
      .then(r=>{
        wait(2000);
        return waitLoaded();
      })
      .then(results => {
        console.log("Load URL subcribe : " + results);
        var r = random(111, 999);
        if (r % 3 == 0) {
          wait(random(2000, 5000));
          sendMessage({
            action: 'click_button',
            data: {
              selector: '.style-scope.ytd-menu-renderer.force-icon-button.style-text'
            }
          })
            .then(results => {
              console.log('CLick button like video : ' + results);
            })
        }
        wait(random(10000, 20000));
        return sendMessage({
          action: 'click_button',
          data: {
            selector: 'paper-button.style-scope.ytd-subscribe-button-renderer'
          }
        })
      })
      .then(results => {
        wait(10000);
        console.log("CLick button subcribe video : " + results);
      })
      .then(results => {
        resolve(true);
      })
      .catch(e => {
        reject(e);
      })
  })
}

async function subcribeOneChannel(channelID, urlSubcribe) {
  return new Promise((resolve, reject) => {
    resetDcom()
      .then(r => {
        return updateUrl(URLYOUTUBE.ALLCHANNEL)
      })
      .then(r => {
        wait(random(5000, 10000));
        return waitLoaded();
      })
      .then(r => {
        console.log('Load all channel');
        wait(random(5000, 10000));
        return sendMessage({
          action: 'click_channel',
          data: {
            channelID: channelID
          }
        })
      })
      .then(r => {
        console.log("CLick channel " + channelID+" : "+r);
        wait(5000);
        return waitLoaded();
      })
      .then(r => {
        return subcribe(urlSubcribe);
      })
      .then(r => {
        resolve(r);
      })
      .catch(e => {
        reject(e);
      })
  })
}

async function subcribeAllChannel(urlSubcribe) {
  return new Promise((resolve, reject) => {
    updateUrl(URLYOUTUBE.ALLCHANNEL)
      .then(r => {
        return waitLoaded()
      })
      .then(r => {
        wait(random(5000, 10000));
        return getChannelCount();
      })
      .then(
        async function (r) {
          console.log("Số lượng channel : " + r);

          for (var i = 1; i < r; i++) {
            await subcribeOneChannel(i, urlSubcribe);
          }
          console.log('================Subcribe all channel=============');
        }

      )
  })
}

async function subcribeAllLink(arrSub) {
  return new Promise((resolve, reject) => {
    var loop = async function () {
      for (var i = 0; i < arrSub.length; i++) {
        var textSub = arrSub[i].split(" ");
        await subcribeAllChannel(textSub[0])
      }
    }
    loop();
  })
    .then(r => {
      resolve(r)
    })
    .catch(e => {
      reject(e);
    })
}
/////////////////////////REACT//////////////////////////////////////////
async function react() {
  return new Promise((resolve, reject) => {
    updateUrl(URLYOUTUBE.ALLCHANNEL)
      .then(r => {
        return waitLoaded()
      })
      .then(r => {
        return getChannelCount();
      })
      .then(
        async function (r) {
          for (var i = 1; i < r; i++) {
            await reactOneChannel(i)
          }
          console.log('================React all channel=============');
        }

      )
  })
}

async function reactOneChannel(channelID) {
  return new Promise((resolve, reject) => {
    resetDcom()
      .then(r => {
        return updateUrl(URLYOUTUBE.ALLCHANNEL)
      })
      .then(r => {
        wait(random(5000, 10000));
        return waitLoaded();
      })
      .then(r => {
        console.log('Load all channel');
        wait(random(5000, 10000));
        return sendMessage({
          action: 'click_channel',
          data: {
            channelID: channelID
          }
        })
      })
      .then(r => {
        console.log("CLick channel : " + r);
        return waitLoaded();
      })
      .then(r => {
        wait(random(5000, 10000));
        return updateUrl(URLYOUTUBE.TREND);
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r=>{
        wait(2000);
        return sendMessage({
          action:'click_video_random'
        })
      })
      .then(r=>{
        wait(2000);
        return waitLoaded();
      })
      .then(r => {
        wait(random(20000, 30000));
        console.log('Click to Video trend: ' + r);
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '.style-scope.ytd-menu-renderer.force-icon-button.style-text'
          }
        })
      })
      .then(r => {
        console.log('Like video : ' + r);
        return likeComment();
      })
      .then(r => {
        console.log('Like comment :' + r);
        wait(random(5000, 10000));
        return updateUrl(URLYOUTUBE.TREND);
      })      
      .then(r => {
        wait(2000);
        return waitLoaded();
      })
      .then(r=>{
        console.log("Update URL Trend : "+r);
        return sendMessage({
          action: 'click_video_random'
        })
      })
      .then(r=>{
        wait(2000);
        return waitLoaded();
      })
      .then(r => {
        wait(random(20000, 30000));
        console.log('Click to video trend : ' + r);
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '.style-scope.ytd-menu-renderer.force-icon-button.style-text'
          }
        })
      })
      .then(r => {
        console.log('Like video : ' + r);
        return likeComment();
      })
      .then(r => {
        console.log('Like comment :' + r);
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
  })
}
/////////////////////////REACTSUB//////////////////////////////////////////
async function reactSub() {
  return new Promise((resolve, reject) => {
    updateUrl(URLYOUTUBE.ALLCHANNEL)
      .then(r => {
        return waitLoaded()
      })
      .then(r => {
        return getChannelCount();
      })
      .then(
        async function (r) {
          for (var i = 1; i < r; i++) {
            await reactSubOneChannel(i)
          }
          console.log('================React sub all channel=============');
        }
      )
  })
}


async function reactSubOneChannel(channelID) {
  return new Promise((resolve, reject) => {
    resetDcom()
      .then(r => {
        return updateUrl(URLYOUTUBE.ALLCHANNEL)
      })
      .then(r => {
        wait(random(5000, 10000));
        return waitLoaded();
      })
      .then(r => {
        console.log('Load all channel');
        return sendMessage({
          action: 'click_channel',
          data: {
            channelID: channelID
          }
        })
      })
      .then(r => {
        console.log("CLick channel : " + r);
        return waitLoaded();
      })
      .then(r => {
        wait(random(5000, 10000));
        updateUrl(URLYOUTUBE.HOMEPAGE)
      })
      .then(r => {
        console.log("Load Homepage : " + r);
        return waitLoaded();
      })
      .then(r => {
        wait(random(5000, 10000));
        updateUrl('https://www.youtube.com/feed/channels')
      })
      .then(r => {
        wait(random(5000, 6000));
        return waitLoaded();
      })
      .then(r => {
        return getSubChannelCount();
      })
      .then(
        async function (r) {
          console.log('Chanel sub count : ' + r)
          for (var i = 0; i < r; i++) {
            await reactSubChannel(i);
          }
          console.log('====React sub for one channel complete===== ')
        }
      )
      .then(r => {
        resolve(r);
      })
      .catch(e => {
        reject(e);
      })
  })
}
async function reactSubChannel(channelID) {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'click_channel_sub',
      data: {
        channelID: channelID
      }
    })
      .then(r => {
        wait(random(3000, 5000))
        console.log('Click channel sub:' + r);
        return waitLoaded();
      })
      .then(r => {
        wait(random(3000, 5000))
        sendMessage({
          action: 'click_video_random'
        })
      })
      .then(r => {
        console.log('Click to video ' + r);
        return waitLoaded();
      })
      .then(r => {
        wait(random(3000, 5000))
        return reactVideo();
      })
      .then(r => {
        resolve(r);
      })
      .catch(e => {
        reject(e);
      })
  })
}

async function reactVideo() {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'click_button',
      data: {
        selector: '.style-scope.ytd-menu-renderer.force-icon-button.style-text'
      }
    })
      .then(r => {
        console.log('Like video : ' + r);
        return likeComment();
      })
      .then(r => {
        wait(random(20000,30000))
        resolve('React video ' + r)
      })
      .catch(e => {
        reject('react video failed ' + e)
      })

  })
}


async function searchByText(searchText) {
  return new Promise((resolve, reject) => {
    updateUrl(URLYOUTUBE.HOMEPAGE)
      .then(r => {
        waitLoaded();
        return sendMessage({
          action: 'fill_form',
          data: {
            selector: 'input#search',
            value: searchText
          }
        })
      })
      .then(r => {
        console.log('Fill Form ' + r);
        wait(random(2000, 3000));
        return sendMessage({
          action: 'click_button',
          data: {
            selector: 'button#search-icon-legacy'
          }
        })
      })
      .then(r=>{
        wait(3000);
        return waitLoaded();
      })
      .then(r => {
        console.log('Click search : ' + r);
        resolve(r)
      })
      .catch(e => {
        reject(e);
      })
  })
}

async function change_GoogleAcc_React() {
  return new Promise((resolve, reject) => {
    updateUrl('https://accounts.google.com/SignOutOptions?hl=vi&continue=https://www.google.com/')
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        return sendMessage({
          action: 'get_count_of_element',
          data: {
            selector: 'button'
          }
        })
      })
      .then(async function (r) {
        for (var i = 0; i < r - 3; i++) {
          await reactOneGoogleAcc(i)
        }
        console.log('================React all google Account=============');
        resolve(r);
      })
      .catch(e => {
        reject(e)
      })
  })
}

async function reactOneGoogleAcc(id) {
  return new Promise((resolve, reject) => {
    resetDcom()
      .then(r => {
        return updateUrl('https://accounts.google.com/SignOutOptions?hl=vi&continue=https://www.google.com/')
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '#choose-account-' + id
          }
        })
      })
      .then(r => {
        console.log('Click choose google account ' + r);
        wait(2000);
        return waitLoaded()
      })
      .then(r => {
        return updateUrl('http://www.linkcollider.com/page/activity/autosurf');
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        wait(3300000);
        resolve(r)
      })
      .catch(e => {
        reject(e);
      })
  })
}

async function linkcollider() {
  return new Promise((resolve, reject) => {
    var contentAll = document.getElementById('urlSubcribe').value;
    var content = contentAll.split("\n");
    updateUrl('https://www.google.com')
      .then(async function (r) {
        for (var i = 0; i < content.length; i++) {
          var oneContent = content[i].split(" ");
          await oneLinkcollider(oneContent)
        }
        console.log('================ALl Linkcollider=============');
        resolve(r);
      })


  })
}

async function oneLinkcollider(oneContent) {
  return new Promise((resolve, reject) => {
    var mail = oneContent[0];
    var pass = oneContent[1];
    resetDcom()
      .then(r => {
        return updateUrl('https://www.linkcollider.com/page/login')
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        wait(2000)
        return sendMessage({
          action: 'fill_input',
          data: {
            selector: '#email',
            value: mail
          }
        })
      })
      .then(r => {
        wait(2000)
        return sendMessage({
          action: 'fill_input',
          data: {
            selector: '#pw',
            value: pass
          }
        })
      })
      .then(r => {
        wait(2000)
        return sendMessage({
          action: 'click_button',
          data: {
            selector: '.btn-u.btn-u-lg.pull-right.rounded-4x'
          }
        })
      })
      .then(r => {
        wait(5000);
        return waitLoaded();
      })
      .then(async function (r) {
        for (var i = 0; i < 10; i++) {
          await linkcollider5min()
        }
      })
      .then(r => {
        return updateUrl('https://www.linkcollider.com/page/logout')
      })
      .then(r => {
        return waitLoaded();
      })
      .then(r => {
        console.log("LINKCOLLIDER ONE ACCOUNT");
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
  })
}

async function linkcollider5min(){
  return new Promise((resolve,reject)=>{
    console.log("Load url autosurf");    
    updateUrl('http://www.linkcollider.com/page/activity/autosurf')
    .then(r=>{
      return waitLoaded();
    })
    .then(r=>{
      wait(300000);
      resolve(r)
    })
    .catch(e=>{
      reject(e);
    })
  })
}



// ========================================================================= AJAX FUNCTION ====================================================================

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

function check_status_network() {
  var status;
  $.ajax({
    type: "GET",
    url: "https://api.ipify.org?format=json",
    async: false,
    success: function (response) {
      status = true;
    },
    error: function (XMLHttpRequest, response, errorThrown) {
      if (response == 'error') {
        status = false;
      }
    }
  });
  return status;
}

function get_name_computer() {
  var name;
  $.ajax({
    type: "GET",
    url: URL.SERVER_CLIENT + "/system/name",
    async: false,
    success: function (response) {
      name = response.name;
    }
  });
  return name;
}

function get_token(url) {
  var data = {};
  $.ajax({
    type: "GET",
    url: url,
    async: false,
    success: function (response) {
      console.log('response get_token function', response);
      data.uid = response.uid;
      data.token = response.access_token;
    }
  });
  return data;
}




// ========================================================================= HANDLER FUNCTION ====================================================================
async function dcom(flag) {
  var temp = (flag) ? URL.DCOM_CONNECT : URL.DCOM_DISCONNECT;
  return new Promise((resolve, reject) => {
    updateUrl(temp).then(function (results) {
      resolve(true);
    });
  })
}

async function scrollTabY(positionY) {
  return new Promise((resolve, reject) => {
    sendMessage({
      action: 'scroll_tab',
      data: {
        positionY: positionY
      }
    })
      .then(r => {
        resolve(r)
      })
  })
}

async function commentVideo(url) {
  updateUrl(url)
    .then(r => {
      return waitLoaded();
    })
    .then(r => {
      return scrollTabY(700);
    })
    .then(r => {
      wait(5000)
      return waitLoaded();
    })
    .then(r => {
      wait(2000);
      return sendMessage({
        action: 'fill_comment_video',
        data: {
          content: randomArr(DEFAULT_VALUE.COMMENTCONTENT)
        }
      })
    })
    .then(r => {
      wait(random(2000, 5000))
      return sendMessage({
        action: 'click_button',
        data: {
          selector: '#submit-button a.yt-simple-endpoint.style-scope.ytd-button-renderer'
        }
      })
    })
    .then(r => {
      console.log('CLick comment : ' + r);
      return waitLoaded();
    })
}

async function likeComment() {
  return new Promise((resolve, reject) => {
    scrollTabY(5000)
      .then(r => {
        wait(10000);
        return waitLoaded()
      })
      .then(r => {
        wait(5000)
        return sendMessage({
          action: 'like_comment'
        })
      })
      .then(r => {
        resolve(r)
      })
      .catch(e => {
        reject(e);
      })
  })
}
// ========================================================================= MAIN FUNCTION ====================================================================
function main() {
  console.log('======================== START ==========================');
  // clearBrowsingData()
  //   .then(r => {
  //     return login(email.value,pass.value);
  //   })
  //   .then(r => {
  //     console.log(r);
  //   })
  //   .catch(err => console.error('final', err))
  console.log('Turn ON dcom (flag = false)');

  dcom(false)
    .then(r => {
      console.log('Turn ON dcom (flag = true)');
      return dcom(true)
    })
    .then(r => {
      return createChannel();
    })
    .then(results => {
      console.log('Create Channel : ' + results);
      wait(10000);
      return dcom(false);
    })
    .then(r => {
      main();
    })
    .catch(e => {
      console.log(e)
      console.log('Stop create');
    })
}