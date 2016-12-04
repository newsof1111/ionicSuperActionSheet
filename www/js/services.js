angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
	address:'USA',
	twitter:'www.twitter.com/Ben-Sparrow',
	facebook:'www.facebook/Ben-Sparrow',
	googleplus:'www.googleplus.com/Ben-Sparrow',
	github:'www.github.com/Ben-Sparrow'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
	address:'USA',
	twitter:'www.twitter.com/Max-Lynx',
	facebook:'www.facebook/Max-Lynx',
	googleplus:'www.googleplus.com/Max-Lynx',
	github:'www.github.com/Max-Lynx'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
	address:'USA',
	twitter:'www.twitter.com/adam-Bradleyson',
	facebook:'www.facebook/adam-Bradleyson',
	googleplus:'www.googleplus.com/adam-Bradleyson',
	github:'www.github.com/adam-Bradleyson'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
	address:'USA',
	twitter:'www.twitter.com/Perry-Governor',
	facebook:'www.facebook/Perry-Governor',
	googleplus:'www.googleplus.com/Perry-Governor',
	github:'www.github.com/Perry-Governor'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
	address:'USA',
	twitter:'www.twitter.com/Mike-Harrington',
	facebook:'www.facebook/Mike-Harrington',
	googleplus:'www.googleplus.com/Mike-Harrington',
	github:'www.github.com/Mike-Harrington'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [{
    id: 0,
    name: 'Off-the-shoulder top',
    price: '£7.99',
    picture: 'img/p1.jpg',
	is_favorite:'false'
  }, {
     id: 1,
    name: 'Off-the-shoulder top',
    price: '£7.99',
    picture: 'img/p2.jpg',
	is_favorite:'false'
  }, {
     id: 2,
    name: 'Hooded jacket',
    price: '£14.99',
    picture: 'img/p3.jpg',
	is_favorite:'false'
  }, {
   id: 3,
    name: 'Feather Soft Low Jeggings',
    price: '£19.99',
    picture: 'img/p4.jpg',
	is_favorite:'false'
  }, {
   id: 4,
    name: 'Shaping Skinny Regular Jeans',
    price: '£39.99',
    picture: 'img/p5.jpg',
	is_favorite:'false'
  }, {
     id: 5,
    name: 'Skinny High Ankle Jeans',
    price: '£7.99',
    picture: 'img/p6.jpg',
	is_favorite:'false'
  }, {
  id: 6,
    name: 'Super Skinny Low Jeans',
    price: '£29.99',
    picture: 'img/p7.jpg',
	is_favorite:'false'
  }];

  return {
    all: function() {
      return products;
    },
    get: function(productId) {
		 var favoritProducts = [];
      for (var i = 0; i < products.length; i++) {
        if (products[i].is_favorite === 'true') {
          favoritProducts.push(products[i]);
        }
      }
      return favoritProducts;
    },
    setFav: function(product) {
		
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(product.id)) {
			 if (products[i].is_favorite === "false")
				{
					products[i].is_favorite="true";
				}
				 else if (products[i].is_favorite === "true")
				{
					products[i].is_favorite="false";
				}
        }
      }
      return products;
    }
  };
})
.factory('countries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var countries = [
    {
        "name": "Afghanistan",
        "code": "AF"
    },
    {
        "name": "Åland Islands",
        "code": "AX"
    },
    {
        "name": "Albania",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "code": "DZ"
    },
    {
        "name": "American Samoa",
        "code": "AS"
    },
    {
        "name": "AndorrA",
        "code": "AD"
    },
    {
        "name": "Angola",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "code": "AW"
    },
    {
        "name": "Australia",
        "code": "AU"
    },
    {
        "name": "Austria",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "code": "BE"
    },
    {
        "name": "Belize",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "code": "BT"
    },
    {
        "name": "Bolivia",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "code": "BW"
    },
    {
        "name": "Bouvet Island",
        "code": "BV"
    },
    {
        "name": "Brazil",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "code": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "code": "CM"
    },
    {
        "name": "Canada",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "code": "CF"
    },
    {
        "name": "Chad",
        "code": "TD"
    },
    {
        "name": "Chile",
        "code": "CL"
    },
    {
        "name": "China",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "code": "KM"
    },
    {
        "name": "Congo",
        "code": "CG"
    },
    {
        "name": "Congo, Democratic Republic",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "code": "CR"
    },
    {
        "name": "Cote D\"Ivoire",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "code": "FI"
    },
    {
        "name": "France",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "code": "PF"
    },
    {
        "name": "French Southern Territories",
        "code": "TF"
    },
    {
        "name": "Gabon",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "code": "GE"
    },
    {
        "name": "Germany",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "code": "GI"
    },
    {
        "name": "Greece",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "code": "GP"
    },
    {
        "name": "Guam",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "code": "HT"
    },
    {
        "name": "Heard Island and Mcdonald Islands",
        "code": "HM"
    },
    {
        "name": "Holy See (Vatican City State)",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "code": "IS"
    },
    {
        "name": "India",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "code": "ID"
    },
    {
        "name": "Iran",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "code": "IM"
    },
    {
        "name": "Israel",
        "code": "IL"
    },
    {
        "name": "Italy",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "code": "JM"
    },
    {
        "name": "Japan",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "code": "KI"
    },
    {
        "name": "Korea (North)",
        "code": "KP"
    },
    {
        "name": "Korea (South)",
        "code": "KR"
    },
    {
        "name": "Kosovo",
        "code": "XK"
    }
	,
    {
        "name": "Kuwait",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "code": "KG"
    },
    {
        "name": "Laos",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "code": "LU"
    },
    {
        "name": "Macao",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "code": "MV"
    },
    {
        "name": "Mali",
        "code": "ML"
    },
    {
        "name": "Malta",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "code": "MX"
    },
    {
        "name": "Micronesia",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "code": "MN"
    },
    {
        "name": "Montserrat",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "code": "NI"
    },
    {
        "name": "Niger",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "code": "NG"
    },
    {
        "name": "Niue",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "code": "MP"
    },
    {
        "name": "Norway",
        "code": "NO"
    },
    {
        "name": "Oman",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "code": "PK"
    },
    {
        "name": "Palau",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "code": "PS"
    },
    {
        "name": "Panama",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "code": "PY"
    },
    {
        "name": "Peru",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "code": "PN"
    },
    {
        "name": "Poland",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "code": "QA"
    },
    {
        "name": "Reunion",
        "code": "RE"
    },
    {
        "name": "Romania",
        "code": "RO"
    },
    {
        "name": "Russian Federation",
        "code": "RU"
    },
    {
        "name": "RWANDA",
        "code": "RW"
    },
    {
        "name": "Saint Helena",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "code": "LC"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "code": "RS"
    },
        {
        "name": "Montenegro",
        "code": "ME"
    },
    {
        "name": "Seychelles",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "code": "ZA"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "code": "GS"
    },
    {
        "name": "Spain",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "code": "SJ"
    },
    {
        "name": "Swaziland",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "code": "SY"
    },
    {
        "name": "Taiwan, Province of China",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "code": "TJ"
    },
    {
        "name": "Tanzania",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "code": "TL"
    },
    {
        "name": "Togo",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "code": "GB"
    },
    {
        "name": "United States",
        "code": "US"
    },
    {
        "name": "United States Minor Outlying Islands",
        "code": "UM"
    },
    {
        "name": "Uruguay",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "code": "VU"
    },
    {
        "name": "Venezuela",
        "code": "VE"
    },
    {
        "name": "Viet Nam",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "code": "WF"
    },
    {
        "name": "Western Sahara",
        "code": "EH"
    },
    {
        "name": "Yemen",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "code": "ZW"
    }
];

  return {
    all: function() {
      return countries;
    }
  };
})

.factory('movies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var movies = [{
    id: 0,
    name: 'Suicide Squad (2016)',
    duration: '2h 3min',
    picture: 'img/m1.jpg',
	description:'Based on the DC Comic, the government gives a team of supervillains a chance at redemption. The catch: their mission will probably kill them all.',
	Director:'David Ayer',
	Writer:'David Ayer',
	Stars:'Will Smith, Jared Leto, Margot Robbie ',
	trailerURL:'https://www.youtube-nocookie.com/embed/mMb-RrhTxIE'
  }, {
     id: 1,
    name: 'Sausage Party (2016)',
    duration: '1h 29min',
    picture: 'img/m2.jpg',
	description:'A sausage strives to discover the truth about his existence.',
	Director:'Greg Tiernan, Conrad Vernon',
	Writer:' Kyle Hunter (screenplay), Ariel Shaffir (screenplay)',
	Stars:' Seth Rogen, Kristen Wiig, Jonah Hill ',
	trailerURL:'https://www.youtube-nocookie.com/embed/UlzAJo16eww'
  }, {
     id: 2,
     name: 'Premier contact (2016)',
    duration: '1h 56min',
    picture: 'img/m3.jpg',
	description:'A linguist is recruited by the military to assist in translating alien communications.',
	Director:'Denis Villeneuve',
	Writer:' Eric Heisserer (screenplay), Ted Chiang (short story "Story of Your Life")',
	Stars:' Amy Adams, Jeremy Renner, Forest Whitaker',
	trailerURL:'https://www.youtube-nocookie.com/embed/rcOKL69bKpQ'
  }, {
   id: 3,
     name: 'Ben-Hur (2016)',
    duration: '2h 5min ',
    picture: 'img/m4.jpg',
	description:'Judah Ben-Hur, a prince falsely accused of treason by his adopted brother, an officer in the Roman army, returns to his homeland after years at sea to seek revenge, but finds redemption.',
	Director:' Timur Bekmambetov',
	Writer:'Lew Wallace (based on the novel by), Keith R. Clarke (screenplay)',
	Stars:' Jack Huston, Toby Kebbell, Rodrigo Santoro ',
	trailerURL:'https://www.youtube-nocookie.com/embed/3BmeR9GYdDU'
  }, {
   id: 4,
    name: 'Rogue One: A Star Wars Story (2016)',
    duration: '2h 3min',
    picture: 'img/m5.jpg',
	description:'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
	Director:' Gareth Edwards',
	Writer:' Chris Weitz (screenplay), Tony Gilroy (screenplay) ',
	Stars:' Felicity Jones, Riz Ahmed, Ben Mendelsohn',
	trailerURL:'https://www.youtube-nocookie.com/embed/frdj1zb9sMY'
  }, {
     id: 5,
    name: 'War Dogs (2016)',
    duration: ' 1h 54min',
    picture: 'img/m6.jpg',
	description:'Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America\'s allies in Afghanistan.',
	Director:' Todd Phillips',
	Writer:' Stephen Chin (screenplay), Todd Phillips (screenplay) ',
	Stars:' Jonah Hill, Miles Teller, Steve Lantz ',
	trailerURL:'https://www.youtube-nocookie.com/embed/wdFIkMY1SUI'
  }, {
  id: 6,
     name: 'Jason Bourne (2016)',
    duration: '2h 3min',
    picture: 'img/m7.jpg',
	description:'The CIA\'s most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.',
	Director:'Paul Greengrass',
	Writer:' Paul Greengrass, Christopher Rouse',
	Stars:' Matt Damon, Tommy Lee Jones, Alicia Vikander ',
	trailerURL:'https://www.youtube-nocookie.com/embed/v71ce1Dqqns'
  }, {
  id: 7,
     name: 'Peter et Elliott le dragon (2016)',
    duration: '1h 43min',
    picture: 'img/m8.jpg',
	description:'The adventures of an orphaned boy named Pete and his best friend Elliot, who just so happens to be a dragon.',
	Director:'David Lowery',
	Writer:' David Lowery (screenplay), Toby Halbrooks (screenplay)',
	Stars:' Bryce Dallas Howard, Robert Redford, Oakes Fegley',
	trailerURL:'https://www.youtube-nocookie.com/embed/Xhv5Kc8dmv8'
  }, {
  id: 8,
     name: 'Star Trek: Sans limites (2016)',
    duration: ' 2h 2min',
    picture: 'img/m9.jpg',
	description:'The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy who puts them and everything the Federation stands for to the test.',
	Director:' Justin Lin',
	Writer:' Simon Pegg, Doug Jung',
	Stars:' Chris Pine, Zachary Quinto, Karl Urban ',
	trailerURL:'https://www.youtube-nocookie.com/embed/dCyv5xKIqlw'
  }, {
  id: 9,
     name: 'Alliés (2016)',
    duration: '2h 3min',
    picture: 'img/m10.jpg',
	description:'In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.',
	Director:'Robert Zemeckis',
	Writer:' Steven Knight',
	Stars:' Brad Pitt, Lizzy Caplan, Marion Cotillard ',
	trailerURL:'https://www.youtube-nocookie.com/embed/22PY59GHQgU'
  }];

  return {
    all: function() {
      return movies;
    }
  };
});
