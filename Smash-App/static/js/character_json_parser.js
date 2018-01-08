function load_JSON(callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '../images/moves/hitboxDB.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
              callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function load_character_data() {
    return new Promise(function(resolve, reject) {
        load_JSON(function(response) {
            var data_obj = JSON.parse(response);
            
            var character_names = {'Zd': 'Zelda',
                                   'Sh': 'Sheik',
                                   'CF': 'Captain Falcon',
                                   'DK': 'Donkey Kong',
                                   'DM': 'Dr. Mario',
                                   'YL': 'Young Link',
                                   'Fc': 'Falco',
                                   'Fx': 'Fox',
                                   'Bw': 'Bowser',
                                   'Lk': 'Link',
                                   'Lg': 'Luigi',
                                   'GW': 'Game & Watch',
                                   'Ry': 'Roy',
                                   'Sm': 'Samus',
                                   'Gn': 'Ganondorf',
                                   'Ns': 'Ness',
                                   'Mw': 'Mewtwo',
                                   'Ys': 'Yoshi',
                                   'Kb': 'Kirby',
                                   'Jp': 'Jigglypuff',
                                   'Pc': 'Peach',
                                   'Pi': 'Pichu',
                                   'Pk': 'Pikachu',
                                   'Ma': 'Mario',
                                   'Na': 'Nana',
                                   'Po': 'Popo',
                                   'Ms': 'Marth'
                };
            var unknowns = [];
            
            var data_name_keys = Object.keys(data_obj);
            var character_name_keys = Object.keys(character_names);
            
            for(var i=0; i < data_name_keys.length; i++) {
                 for(var y=0; y < character_name_keys.length; y++) {
                     if(data_name_keys[i] == character_name_keys[y]) {
                         data_obj[character_name_keys[y]].name = character_names[data_name_keys[i]];
                         break;
                     }
                     else if((character_name_keys.length - 1) == y) {
                         unknowns.push(data_name_keys[i]);
                     }
                 }
            }
            resolve(data_obj);
        });
    });
}