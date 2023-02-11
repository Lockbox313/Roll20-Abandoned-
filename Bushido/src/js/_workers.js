<script type="text/worker">
const weapons = [ 
    {
        "Weapon": "aiguchi",
        "Damage": "1D3",
        "DmgType": "L",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "0.5",
        "MinSTR": "2",
        "Form": "thrust",
        "Form_list": "1",
        "Bugei": "Tantojutsu"
    },
    {
        "Weapon": "bo",
        "Damage": "1D6",
        "DmgType": "S",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "6",
        "MinSTR": "8",
        "Form": "second strike",
        "Form_list": "9",		
        "Bugei": "Bojutsu"
    },
    {
        "Weapon": "club",
        "Damage": "1D3+1",
        "DmgType": "S",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "6",
        "MinSTR": "2",
        "Form": "Strike",
        "Form_list": "13",		
        "Bugei": "Brawling"
    },
    {
        "Weapon": "fumata-yari",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "11",
        "MinSTR": "20",
        "Form": "disarm",
        "Form_list": "5",		
        "Bugei": "Sojutsu"
    },
    {
        "Weapon": "jitte",
        "Damage": "1D5",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "5",
        "MinSTR": "7",
        "Form": "butt stroke, disarm",
        "Form_list": "4",		
        "Bugei": "Jittejutsu"
    },
    {
        "Weapon": "jo",
        "Damage": "1D6",
        "DmgType": "S",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "3",
        "MinSTR": "5",
        "Form": "Strike",
        "Form_list": "13",		
        "Bugei": "Jojutsu"
    },
    {
        "Weapon": "kama",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "5",
        "MinSTR": "7",
        "Form": "",
        "Form_list": "13",		
        "Bugei": "Kamajutsu"
    },
    {
        "Weapon": "katana",
        "Damage": "1D6+2",
        "DmgType": "L",
        "Range": "Mdm",
        "Size": "1½H",
        "Weight": "5",
        "MinSTR": "15",
        "Form": "thrust",
        "Form_list": "11",		
        "Bugei": "Kenjutsu"
    },
    {
        "Weapon": "kawa-naga",
        "Damage": "1D3/hook",
        "DmgType": "L",
        "Range": "varies",
        "Size": "2H",
        "Weight": "1/rope and hook",
        "MinSTR": "10",
        "Form": "special, thrust",
        "Form_list": "11",		
        "Bugei": "Kusarijutsu"
    },
    {
        "Weapon": "kiseru",
        "Damage": "1D6+1",
        "DmgType": "S",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "5",
        "MinSTR": "10",
        "Form": "",
        "Form_list": "1",		
        "Bugei": "Kiserujutsu"
    },
    {
        "Weapon": "kusari-gama (kama)",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "Mdm",
        "Size": "2H",
        "Weight": "10",
        "MinSTR": "10",
        "Form": "",
        "Form_list": "1",		
        "Bugei": "Kusari-Jutsu"
    },
    {
        "Weapon": "kusari-gama (chain)",
        "Damage": "1D5",
        "DmgType": "S",
        "Range": "variable",
        "Size": "2H",
        "Weight": "",
        "MinSTR": "10",
        "Form": "entangle, trip",
        "Form_list": "8",		
        "Bugei": "Kusari-Jutsu"
    },
    {
        "Weapon": "Kyotetsu-shoge (knife)",
        "Damage": "1D5",
        "DmgType": "L",
        "Range": "Shrt",
        "Size": "2H",
        "Weight": "10",
        "MinSTR": "10",
        "Form": "",
        "Form_list": "1",		
        "Bugei": "Kusari-jutsu"
    },
    {
        "Weapon": "Kyotetsu-shoge (rope)",
        "Damage": "1D5",
        "DmgType": "S",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "",
        "MinSTR": "10",
        "Form": "entangle, trip",
        "Form_list": "8",		
        "Bugei": "Shuriken-jutsu"
    },
    {
        "Weapon": "manrikigusari",
        "Damage": "1D5",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "",
        "Weight": "2/yd",
        "MinSTR": "10",
        "Form": "entangle, trip",
       "Form_list": "8",				
        "Bugei": "Kusari-jutsu"
    },
    {
        "Weapon": "masakari",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "9",
        "MinSTR": "15",
        "Form": "thrust",
		"Form_list": "11",				
        "Bugei": "Masakarijutsu"
    },
    {
        "Weapon": "nagamaki",
        "Damage": "1D6+2 ",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "10",
        "MinSTR": "15",
        "Form": "thrust",
		"Form_list": "11",				
        "Bugei": "Naginatajutsu"
    },
    {
        "Weapon": "naginata",
        "Damage": "2D6",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "12",
        "MinSTR": "20",
        "Form": "thrust,butt stroke",
		"Form_list": "3",						
        "Bugei": "Naginatajutsu"
    },
    {
        "Weapon": "no-dachi",
        "Damage": "2D6",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "8",
        "MinSTR": "22",
        "Form": "Thrust",
		"Form_list": "11",						
        "Bugei": "Kenjutsu"
    },
    {
        "Weapon": "nunchaku",
        "Damage": "1D6",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "2",
        "MinSTR": "15",
        "Form": "second strike",
		"Form_list": "9",						
        "Bugei": "Nunchaku-te"
    },
    {
        "Weapon": "ono",
        "Damage": "2D6",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "20",
        "MinSTR": "21",
        "Form": "bash",
		"Form_list": "2",						
        "Bugei": "Onojutsu"
    },
    {
        "Weapon": "rock",
        "Damage": "+1",
        "DmgType": "",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "1",
        "MinSTR": "2",
        "Form": "",
		"Form_list": "1",						
        "Bugei": "Brawling"
    },
    {
        "Weapon": "sai",
        "Damage": "1D5",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "5",
        "MinSTR": "7",
        "Form": "disarm, thrust",
		"Form_list": "6",						
        "Bugei": "Sai-te"
    },
    {
        "Weapon": "sasumata",
        "Damage": "pecia",
        "DmgType": "",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "12",
        "MinSTR": "11",
        "Form": "entangle",
		"Form_list": "7",						
        "Bugei": "Sodegaramijutsu"
    },
    {
        "Weapon": "shuriken",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "N/A",
        "Size": "n/a",
        "Weight": "2 each",
        "MinSTR": "2",
        "Form": " ",
		"Form_list": "1",						
        "Bugei": "Shurikenjutsu"
    },
    {
        "Weapon": "sodegarami",
        "Damage": "1D6/",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "12",
        "MinSTR": "11",
        "Form": "throw",
        "Bugei": "Sodegaramijutsu"
    },
    {
        "Weapon": "tanto",
        "Damage": "1D5",
        "DmgType": "L",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "1",
        "MinSTR": "5",
        "Form": "thrust",
		"Form_list": "11",						
        "Bugei": "Tantojutsu"
    },
    {
        "Weapon": "tessen",
        "Damage": "1D5",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "3",
        "MinSTR": "7",
        "Form": "",
		"Form_list": "1",						
        "Bugei": "Tessenjutsu"
    },
    {
        "Weapon": "tetsubo",
        "Damage": "2D6",
        "DmgType": "S",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "25",
        "MinSTR": "20",
        "Form": "bash",
		"Form_list": "2",						
        "Bugei": "Bojutsu"
    },
    {
        "Weapon": "tonfa",
        "Damage": "1D6",
        "DmgType": "S",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "3",
        "MinSTR": "10",
        "Form": "Strike + Grapple if used with unarmed skill ",
		"Form_list": "13",						
        "Bugei": "Tonfa-te OR Atemi-waza"
    },
    {
        "Weapon": "uchi-ne",
        "Damage": "1D3",
        "DmgType": "L",
        "Range": "N/A",
        "Size": "1H",
        "Weight": "2",
        "MinSTR": "10",
        "Form": "",
		"Form_list": "1",						
        "Bugei": "Yari-nage-jutsu"
    },
    {
        "Weapon": "unarmed",
        "Damage": "",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "0",
        "MinSTR": "0",
        "Form": "Strike, Grapple, Throw",
		"Form_list": "1",						
        "Bugei": "Brawling Atemi-waza Jujutsu"
    },	
    {
        "Weapon": "wakizashi",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "Mdm",
        "Size": "1H",
        "Weight": "3",
        "MinSTR": "10",
        "Form": "thrust",
		"Form_list": "11",						
        "Bugei": "Kenjutsu"
    },
    {
        "Weapon": "yari",
        "Damage": "1D10",
        "DmgType": "L",
        "Range": "Lng",
        "Size": "2H",
        "Weight": "10",
        "MinSTR": "10",
        "Form": "butt stroke thrust",
		"Form_list": "3",						
        "Bugei": "Sojutsu "
    },
    {
        "Weapon": "yari-nage",
        "Damage": "1D6",
        "DmgType": "L",
        "Range": "(Mdm)",
        "Size": "1H",
        "Weight": "5",
        "MinSTR": "15",
        "Form": "",
		"Form_list": "1",								
        "Bugei": "Yari-nage-jutsu "
    },
    {
        "Weapon": "yawara",
        "Damage": "0",
        "DmgType": "S",
        "Range": "Shrt",
        "Size": "1H",
        "Weight": "0.5",
        "MinSTR": "2",
        "Form": "Strike, Grapple, Throw",
		"Form_list": "1",								
        "Bugei": "Atemi-Waza"
    }	
];

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const weapon_list = ['BRAWLING', 'UNARMED', 'ATEMI-WAZA',"YAWARA","JUJUTSU","SUMAI"];
const no_damage_forms=["DISARM","DISARM - BREAK","ENTANGLE","GRAPPLE","THROW - TAKEDOWN","THROW - TOSS","TRIP"];

const short_range_weapons_range_mods = 
    {
        "Cntct": "1",
        "Shrt": "0",
        "Mdm": "-1",
        "Lng": "-99",
        "XLng": "-99"
    }


const medium_range_weapons_range_mods = 
    {
        "Cntct": "-2",
        "Shrt": "-1",
        "Mdm": "0",
        "Lng": "-1",
        "XLng": "-99"
    }


const long_range_weapons_range_mods = 
    {
        "Cntct": "-3",
        "Shrt": "-2",
        "Mdm": "-1",
        "Lng": "0",
        "XLng": "-1"
    }

const damage_steps = {
		"1":"0",
		"1D3":"1",
		"1D5":"2",
		"1D6":"2",
		"1D10":"3",
		"2D6":"4",
		"2D10":"5"
}

const damage_die = {
		"0":"1",
		"1":"1D3",
		"2":"1D6",
		"3":"1D10",
		"4":"2D6",
		"5":"10"
}


    on("sheet:opened", function() {
  
        getAttrs(["show_npc","setup_done","profession"], function (values) {
            setSheet(values.show_npc);
			console.log("check profession");
			if (values.profession=="Ninja"){													
				$20("div[data-tab=gimmickry]").removeClass("sheet-hideIt");
			}
			else {
				console.log("add hideIt");												
				$20("div[data-tab=gimmickry]").addClass("sheet-hideIt");		
			}			

        });
  
    });

	on("change:show_npc", function() {
		getAttrs(["show_npc"], function (values) {
				console.log("show_npc: "+values.show_npc);
                setSheet(values.show_npc);
		});          
	
	});	


    function  setSheet(show_npc){
          if (parseInt(show_npc)===1){
            console.log("marker 1");                    
            $20('div[data-tab=sheet-pc]').addClass("sheet-showIt");
            $20('button[data-tab=pc-secondary-attributes]').addClass('active');
            $20('div[data-tab=sheet-npc]').removeClass("sheet-showIt"); 
            $20('div[data-tab=sheet-squad]').removeClass("sheet-showIt"); 
            
            $20('span[data-tab=showPC]').addClass("sheet-redText");
            $20('span[data-tab=showNPC]').removeClass("sheet-redText");
            $20('span[data-tab=showSQUAD]').removeClass("sheet-redText");				
  
  
          } else if (parseInt(show_npc)===2) {
            console.log("marker 2");
            $20('div[data-tab=sheet-npc]').addClass("sheet-showIt");  					                    
            $20('div[data-tab=sheet-pc]').removeClass("sheet-showIt");
            $20('div[data-tab=sheet-squad]').removeClass("sheet-showIt");    
            
            $20('span[data-tab=showNPC]').addClass("sheet-redText");
            $20('span[data-tab=showPC]').removeClass("sheet-redText");					
            $20('span[data-tab=showSQUAD]').removeClass("sheet-redText");				
  
            
          } else if (parseInt(show_npc)===3) {
            console.log("marker 3");
            $20('div[data-tab=sheet-squad]').addClass("sheet-showIt");                      
            $20('div[data-tab=sheet-pc]').removeClass("sheet-showIt");
            $20('div[data-tab=sheet-npc]').removeClass("sheet-showIt");	
            
            $20('span[data-tab=showSQUAD]').addClass("sheet-redText");
            $20('span[data-tab=showNPC]').removeClass("sheet-redText");
            $20('span[data-tab=showPC]').removeClass("sheet-redText");					
  
          }
    }
  

	const menulist = ["character","magictab","configuration"];
   		 menulist.forEach(button => {
        on(`clicked:${button}`, function() {
			console.log("button pressed");
            setAttrs({
                sheetMenu: button
            });
        });
    });
   
	const menulist2 = ["npc2","configuration2"];
		menulist2.forEach(button => {
		on(`clicked:${button}`, function() {
			console.log("button pressed");
			setAttrs({
				sheetMenu2: button
			});
		});
	}); 
      
	
	
	function getRepeatClass(source){
		const row_arr	= source.split("_");
		console.log("row arr:"+JSON.stringify(row_arr));
		return row_arr[0]+"_"+row_arr[1];
		
	}
	
	function getRepeatSection(source){
		const row_arr	= source.split("_");
		console.log("row arr:"+JSON.stringify(row_arr));
		return row_arr[1];
		
	}



    function getRowID(source){
		const row_arr	= source.split("_");
		console.log("row arr:"+JSON.stringify(row_arr));
		return row_arr[0]+"_"+row_arr[1]+"_"+row_arr[2];
    }
	

	
	function getSkillValuesXXXXX(wpnSkill,section,section2){
			 getSectionIDs(section, function(idArray) {
				if (idArray.length > 0) {
		
					_.each(idArray, function(currentID, i) {
						getAttrs([section+"_" + currentID + "_skillName",section+"_" + currentID + "_skillTotal"], function(values) {
																														
							console.log("!!!!!! stuff2 aaaaaaaaaa "+JSON.stringify(values));

							/*let wStr = values[section+"_" + idArray[i] + "_skillName"];*/
							/*console.log("!!!!!! Look for skill "+wStr);*/
							let skillname = values[section+"_" + idArray[i] + "_skillName"];
							var skillTotal =0 ;
							console.log("skillname:"+skillname);
							console.log("wpnSkill:"+wpnSkill);
							if (skillname == wpnSkill){	
								console.log("!!!!!!!!!!!! found "+wpnSkill);
								skillTotal = values[section+"_" + idArray[i] + "_skillTotal"];
								console.log("!!!!!! Skilltotal "+skillTotal);
								let attrsToSet = {[section2 + '_skillTotal']: skillTotal};								
								setAttrs(attrsToSet);
							}								

								
						});
					});
				}
				
			});						
	}
	
    
    
///// START BEAST SHEET  WORKERS //////
    on("change:beast_budo", function(event) {			
        console.log(`change beast budo ${JSON.stringify(event)}`);
        getAttrs(["beast_budo","beast_intelligence_st_base"], function(values) {
            console.log(`change budo values ${JSON.stringify(values)}`);
            let budo = parseInt(values.beast_budo);
            let physical_st = budo+6;
            let physical_strong_st = (budo*2)+6;
            let intelligence_st = parseInt(values.beast_intelligence_st_base)+budo;  
            setAttrs({beast_physical_st:physical_st,beast_physical_strong_st:physical_strong_st,beast_intelligence_st:intelligence_st});
        });    
	}); 
    
    on("change:beast_bap change:beast_mna change:beast_zanshin", function(event) {			
        console.log(`change beast bap man zanshin ${JSON.stringify(event)}`);
        getAttrs(["beast_bap","beast_mna","beast_zanshin"], function(values) {
            let bap = parseInt(values.beast_bap);
            let mna = parseInt(values.beast_mna);
            let zanshin = parseInt(values.beast_zanshin);            
            setMinorNPCPhases(bap, mna, zanshin,"beast") 
        });    
	});
    
    on("change:legendarybeing_bap change:legendarybeing_budo", function(event) {			
        console.log(`change legendary being bap ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_bap","legendarybeing_budo"], function(values) {
            console.log(`values ${JSON.stringify(values)}`);
            let dft = parseInt(values.legendarybeing_bap)*2;
            let st = Math.floor(dft/3)+parseInt(values.legendarybeing_budo);;
            setAttrs({legendarybeing_dft_cur: dft,legendarybeing_dft_base_st:st});
        });    
	});
    
    on("change:legendarybeing_mna change:legendarybeing_budo", function(event) {			
        console.log(`change legendary being mna ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_mna","legendarybeing_budo"], function(values) {
            let spd = parseInt(values.legendarybeing_mna)*10; 
            console.log("spd: "+spd);
            let st = Math.floor(spd/3)+parseInt(values.legendarybeing_budo);
            console.log("st: "+st);
            setAttrs({legendarybeing_spd_cur: spd,legendarybeing_spd_base_st:st});
        });    
	}); 


    on("change:legendarybeing_hlh_cur change:legendarybeing_budo", function(event) {			
        console.log(`change legendary being hlh change ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_hlh_cur","legendarybeing_budo"], function(values) {
            console.log(`values ${JSON.stringify(values)}`);
            let hlh = parseInt(values.legendarybeing_hlh_cur); 
            console.log("hlh: "+hlh);
            let st = Math.floor(hlh/3)+parseInt(values.legendarybeing_budo);
            console.log("st: "+st);
            setAttrs({legendarybeing_hlh_base_st:st});
        });    
	});    
    
const legendarybeing_str_default = ["2", "5", "8", "20","25","30","40","50","60"];
    
    on("change:legendarybeing_damage_mod", function(event) {			
        console.log(`change legendary dam ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_damage_mod"], function(values) {
            //calculate h2h damage modifier
            let damage_mod = parseInt(values.legendarybeing_damage_mod);
            let unarmed_damage="";
            if (damage_mod < -3){
                unarmed_damage="0";    
            } else if (damage_mod == -2 || unarmed_damage == -1 ){
                unarmed_damage="1D3";    
            }  else if (damage_mod == 0){
                unarmed_damage="1D3";    
            } else if (damage_mod == 1){
                unarmed_damage="1D6";    
            } else if (damage_mod >= 2){
                unarmed_damage="1D10";    
            }
            
            let str = legendarybeing_str_default[damage_mod+2];
            
            setAttrs({legendarybeing_str_cur: str,legendarybeing_unarmd_damage: unarmed_damage});
        });    
	});  
    
 
    on("change:legendarybeing_str_cur change:legendarybeing_budo", function(event) {			
        console.log(`change legendary being hlh change ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_str_cur","legendarybeing_budo"], function(values) {
            console.log(`values ${JSON.stringify(values)}`);
            let str = parseInt(values.legendarybeing_str_cur); 
            console.log("str: "+str);
            let st = Math.floor(str/3)+parseInt(values.legendarybeing_budo);
            console.log("st: "+st);
            setAttrs({legendarybeing_str_base_st:st});
        });    
	});    
    
    on("change:legendarybeing_intelligence change:legendarybeing_budo change:legendarybeing_has_magic", function(event) {			
        console.log(`change legendary intelligence ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_intelligence","legendarybeing_budo","legendarybeing_has_magic"], function(values) {
            console.log(`values ${JSON.stringify(values)}`);
            let base =  parseInt(values.legendarybeing_intelligence);
            console.log("base: "+base);
            let budo = parseInt(values.legendarybeing_budo);
            console.log("budo: "+budo);
            let bonus = parseInt(values.legendarybeing_budo)     
            console.log("bonus: "+bonus);
            let budo_base =   values.legendarybeing_has_magic=="1" ? bonus*2 : bonus;
            console.log("budo_base: "+budo_base);            
            let st = base + budo_base;
            console.log("st: "+st);                        
            setAttrs({legendarybeing_wit_base_st: st,legendarybeing_wit_cur:base*3});
        });    
	});     
    
    on("change:legendarybeing_bap change:legendarybeing_mna change:legendarybeing_zanshin", function(event) {			
        console.log(`change legendary being bap man zanshin ${JSON.stringify(event)}`);
        getAttrs(["legendarybeing_bap","legendarybeing_mna","legendarybeing_zanshin"], function(values) {
            let bap = parseInt(values.legendarybeing_bap);
            let mna = parseInt(values.legendarybeing_mna);
            let zanshin = parseInt(values.legendarybeing_zanshin);            
            setMinorNPCPhases(bap, mna, zanshin,"legendary_being") 
        });    
	});

 	const attribute_list = ["str","dft","spd","hlh","wit","wil"];
	attribute_list.forEach(attribute => {   
        on(`change:spirit_rank_perm change:supernatural_being_${attribute}_st_grade change:`, function(event) {			
            console.log(`change supternatural being ST values  ${JSON.stringify(event)}`);
            getAttrs(["spirit_rank_perm",`supernatural_being_${attribute}_st_grade`], function(values) {
                let st = Math.ceil(parseInt(values.spirit_rank_perm)/2)+parseInt(values[`supernatural_being_${attribute}_st_grade`]);
                console.log("st: "+st);
                setAttrs({[`supernatural_being_${attribute}_st`]: st,[`supernatural_being_${attribute}_cur`]:st*3,[`supernatural_being_${attribute}_perm`]:st*3});
            });    
        });    
    });
    
    on("change:spirit_rank_perm", function(event) {			
        console.log(`change supternatural being spirit rank perm ${JSON.stringify(event)}`);
        getAttrs(["spirit_rank_perm"], function(values) {
            let level = Math.ceil(parseInt(values.spirit_rank_perm)/2)
            console.log("level: "+level);
            setAttrs({"level":level})
        });    
    });
    
    
    on("change:supernatural_being_wil_perm change:supernatural_being_dft_perm change:supernatural_being_spd_perm change:spirit_rank_perm", function(event) {
        console.log(`set supernatural_being zanshin  ${JSON.stringify(event)}`);
        getAttrs(["supernatural_being_wil_perm","supernatural_being_dft_perm","supernatural_being_spd_perm","spirit_rank_perm"], function(values) {
            console.log(`values zanshin  ${JSON.stringify(values)}`);
            setSBZanshin(values.supernatural_being_wil_perm,values.supernatural_being_dft_perm,values.supernatural_being_spd_perm,values.spirit_rank_perm);
        });    
	});
    
    
    on("change:supernatural_being_dft_cur", function(event) {
        console.log(`set supernatural_being bap  ${JSON.stringify(event)}`);
        getAttrs(["supernatural_being_dft_cur"], function(values) {
            console.log(`values dft_cur change ${JSON.stringify(values)}`);
            let bap = Math.floor(parseInt(values.supernatural_being_dft_cur)/2);
            setAttrs({"supernatural_being_bap":bap})
        });    
	});  

    on("change:supernatural_being_spd_cur", function(event) {
        console.log(`set supernatural_being mna  ${JSON.stringify(event)}`);
        getAttrs(["supernatural_being_spd_cur"], function(values) {
            console.log(`values spd_cur change ${JSON.stringify(values)}`);
            let mna = Math.round(parseInt(values.supernatural_being_spd_cur)/10);
            let bma = Math.ceil(parseInt(values.supernatural_being_spd_cur)/3);
            setAttrs({"supernatural_being_mna":mna,supernatural_being_bma:bma})
        });    
	});  
    
    
    on("change:supernatural_being_bap change:supernatural_being_mna change:supernatural_being_zanshin", function(event) {			
        console.log(`change legendary being bap man zanshin ${JSON.stringify(event)}`);
        getAttrs(["supernatural_being_bap","supernatural_being_mna","supernatural_being_zanshin"], function(values) {
            let bap = parseInt(values.supernatural_being_bap);
            let mna = parseInt(values.supernatural_being_mna);
            let zanshin = parseInt(values.supernatural_being_zanshin);            
            setMinorNPCPhases(bap, mna, zanshin,"supernatural_being") 
        });    
	});    
    
    
	function setSBZanshin(wil_perm,dft_perm,spd_perm,spirit_rank_perm){
		let tot = parseInt(wil_perm)+parseInt(dft_perm)+parseInt(spd_perm);
        console.log("tot:"+tot);
        let level = Math.min(Math.floor(parseInt(spirit_rank_perm)/2),6);
	    console.log("level:"+level);  	
		let zanshin = 0;
		if (tot<=29){
			if (level>=1 && level <= 3){
				console.log("marker 1a");
				zanshin =1; 	
			} else if (level >= 4){
				zanshin =2; 	
			}
		} else if (tot>=30 && tot <= 59){
			if (level >= 1 && level <= 2){
				console.log("marker 2a");
				zanshin =1; 	
			} else if (level >= 3 && level <= 5){
				zanshin =2; 	
			} else if (level > 5){
				zanshin =3; 	
			}
		} else if (tot>=60 && tot <= 89){
			if (level == 1){
				console.log("marker 3a");
				zanshin =1; 	
			} else if (level >= 2 && level <= 4){
				zanshin =2; 	
			} else if (level > 4){
				zanshin =3; 	
			}
		} else if (tot > 89){
			if (level>=1 && level <= 3){
				zanshin =2; 	
			} else if (level >= 4){
				zanshin =3; 	
			}			
		}			
		

		console.log("set zanshin 2:"+zanshin);
		setAttrs({"supernatural_being_zanshin":zanshin});
	}    

    
	function setMinorNPCPhases(bap, mna, zanshin,source) {
		console.log("bap:" + bap);
		console.log("mna:" + mna);
		console.log("zanshin:" + zanshin);
		let pmaStr = "";
		let sapStr = "";
		mna = parseInt(mna);
		if (mna >= 2) {
			zanshin = parseInt(zanshin);
			bap = parseInt(bap);
			let curPhase = 0;
			for (let p = 2; p <= mna; p++) {
				let curPhase = Math.floor(bap / p);
				console.log("curPhase:" + curPhase);
				if (curPhase > 1){
					if (p <= zanshin) {
						if (pmaStr.length > 0) {
							pmaStr = pmaStr + ",";
						}
						pmaStr = pmaStr + curPhase;
					} else {
						if (sapStr.length > 0) {
							sapStr = sapStr + ",";
						}
						sapStr = sapStr + curPhase;
					}
				}
			}
		}
        if (source=="beast"){
            setAttrs({beast_pma: pmaStr,beast_sap: sapStr});
        } else if (source=="legendary_being"){
            setAttrs({legendarybeing_pma: pmaStr,legendarybeing_sap: sapStr});
        } else if (source=="supernatural_being"){
            setAttrs({supernatural_being_pma: pmaStr,supernatural_being_sap: sapStr});
        }
	}    
    
///// END BEAST SHEET  WORKERS //////      
    
    
	
	const rank_status = {"high":30,"middle":20,"low":10};

	
	//setup personal status listeners 
	const personal_status_roll_listeners = ["change:rank","change:level","change:on","change:profession","change:XP"];
	personal_status_roll_listeners.forEach(attribute => {
		on(`${attribute}`, function(event) {
			console.log(`personal status listener event ${JSON.stringify(event)}`);
			getAttrs(["rank","level","on","profession","XP"], function(values) {
			   console.log(`values ${JSON.stringify(values)}`);
			   let personal_status = rank_status[values.rank]+(values.level*5);
			   console.log("personal_status: "+personal_status);
			   if (values.profession=="Ninja"){
				   personal_status = personal_status + Math.floor((values.XP/50));
			   } else {
				   personal_status = personal_status + Math.floor((values.on/50));
			   }
			    console.log("personal_status: "+personal_status);
				setAttrs({personal_status:personal_status});
			});
			
		});
	});	
	
	
	const xp_types = {"Bushi":"BUDO","Budoka":"BUDO","Gakusho (Buddhist)":"SHUGENDO","Gakusho (Shintoist)":"SHUGENDO","Shugenja":"SHUGENDO","Ninja":"BUDO","Yakuza":"BUDO"};
	on("change:profession", function(event) {			
		console.log(`change profession event ${JSON.stringify(event)}`);
		getAttrs(["on","XP","profession"], function(values) {
			console.log(`values ${JSON.stringify(values)}`);
			XPType = xp_types[values.profession];							
			setAttrs({XPType:XPType});
		});
		
	});	
    
    
    
	on("change:wit_cur change:wil_cur", function(event) {			
		console.log(`change profession event ${JSON.stringify(event)}`);
		getAttrs(["wit_cur","wil_cur","wil_perm","wit_perm"], function(values) {
			console.log(`change wit_cur or will_cur values ${JSON.stringify(values)}`);
            let reduction = Math.max(parseInt(values.wit_perm) - parseInt(values.wit_cur),0) + Math.max(parseInt(values.wil_perm) - parseInt(values.wil_cur),0);
            console.log("reduction: "+reduction);
            let mod = Math.ceil(reduction/5);
            mod = -Math.abs(mod);
            console.log("mod: "+mod);
			setAttrs({shugenja_mental_loss_mod:mod});
		});
		
	});    
    
    
    on("change:profession change:ki_perm change:pow_perm change:level change:magic_resist_mod change:religious_pow_mod", function(event) {			
		console.log(`change religious pow & magic resistance event ${JSON.stringify(event)}`);
		getAttrs(["profession","pow_perm","level","magic_resist_mod","religious_pow_mod","ki_perm"], function(values) {
			console.log(`values ${JSON.stringify(values)}`);            
            let religious_pow = 0 
            let ki_magic_resist =  Math.floor(parseInt(values.ki_perm/10));
            let magic_resist= 0;
            let profession = values.profession
            let level = parseInt(values.level);
            let magic_resist_mod = parseInt(values.magic_resist_mod);
            let religious_pow_mod = parseInt(values.religious_pow_mod);
             console.log("religious_pow_mod: "+religious_pow_mod);
            if (profession=="Gakusho (Buddhist)" || profession =="Gakusho (Shintoist)"){
                religious_pow = Math.max(Math.floor(parseInt(values.pow_perm)/10),level);
                 console.log("religious_pow 1: "+religious_pow);
                  console.log("religious_pow_mod: "+religious_pow_mod);
                religious_pow = Math.max((religious_pow + religious_pow_mod),0);  
                 console.log("religious_pow 2: "+religious_pow);
                
                if (religious_pow > ki_magic_resist){
                    magic_resist = religious_pow + parseInt(magic_resist_mod);
                } else {
                    magic_resist = ki_magic_resist +  parseInt(magic_resist_mod);
                }                               
            } else if (profession == "Shugenja"){
                magic_resist = ki_magic_resist+level+parseInt(magic_resist_mod);
            } else {
               magic_resist = parseInt(ki_magic_resist)+parseInt(magic_resist_mod);     
            }
            console.log("religious_pow 3: "+religious_pow);
			setAttrs({"magic_resistance":magic_resist,"religious_pow":religious_pow});
		});
		
	});	
    
    
	
	//group status listeners 
	
	const standing_status = {"member":0,"smember":20,"supervisor":40,"manager":60,"advisor":75,"elder":90,"head":100};

	on("change:repeating_groups:factor   change:repeating_groups:standing  change:repeating_groups:bonus", function(event) {
		console.log(`group status listener event ${JSON.stringify(event)}`);
		getAttrs(["personal_status","repeating_groups_factor","repeating_groups_standing","repeating_groups_bonus","repeating_groups_"], function(values) {
		   console.log(`values ${JSON.stringify(values)}`);
		    let personal_standing_max = standing_status[values.repeating_groups_standing]+10
			console.log("personal_standing_max: "+personal_standing_max);
			let status_tot = Math.min(parseInt(values.personal_status),personal_standing_max);
			status_tot = Math.min(status_tot + parseInt(values.repeating_groups_bonus),99);
			console.log("status_tot: "+status_tot);
			let society_status = Math.min(Math.ceil(status_tot*(parseFloat(values.repeating_groups_factor))),99);
			console.log("society_status: "+society_status);
			setAttrs({repeating_groups_personal:personal_standing_max,repeating_groups_score:status_tot,repeating_groups_society: society_status,repeating_groups_bcs:Math.floor(status_tot/5),repeating_groups_society_bcs:Math.floor(society_status/5)});
		});
		
	});
	
	//need a listerner on pesonal status change and loop through groups
	
	on("change:repeating_groups:score  ", function(event) {
		console.log(`group status listener event ${JSON.stringify(event)}`);
		getAttrs(["repeating_groups_score"], function(values) {
		   console.log(`values ${JSON.stringify(values)}`);

			//setAttrs({personal_status:personal_status});
		});
		
	});

	
	
       // level listener
		on("change:on change:XP change:profession", function(event) {
			console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
			console.log(`roll level listener event ${JSON.stringify(event)}`);
			getAttrs(["on","XP","profession"], function(values) {
				console.log(`values ${JSON.stringify(values)}`);
				console.log("&&&&&&&&&&& ARE WE THERE &&&&&&&&&&&&&&&&&&&&")
				const on = parseInt(values.on);
				console.log("on: "+on);
				const xp = parseInt(values.XP);
				console.log("xp: "+xp);
				let level = 1;
				
				if (values.profession=="Ninja"){
					if (xp >= 0  && xp <= 19){
						level = 1;
					} 
					else if (xp >= 20 && xp <= 99){
						level = 2;
					} 
					else if (xp >= 100 && xp <= 199){
						level = 3;					
					} 	
					else if (xp >= 200 && xp <= 999){
						level = 5;					
					} 
					else if (xp >= 1000 && xp <= 1999){
						level = 5;					
					} 
					else if (xp >= 2000){
						level = 6;					
					} 					
				} else {
				
				
					if ( xp > 9 && on > 9 ){
						level = 2;
					}
					if ( xp > 49 && on > 49 ){
						level = 3;
					} 
					if ( xp > 99 && on > 99 ){
						level = 4;
					} 
					if ( xp > 499 && on > 499 ){
						level = 5;
					} 					
					if ( xp > 999 && on > 999 ){
						level = 6;
					} 				
				}
				console.log("level: "+level);
				console.log("&&&&&&&dd&&&& DONE &&&&&&&&&&&&&&&&&&&&")				
				setAttrs({level:level});
			});
			
		});	
	
	//setup man-rating listeners for bow ranges, weight and damage
	on("change:repeating_bowWpns:wpnName change:repeating_bowWpns:manRating", function() {
		getAttrs(["repeating_bowWpns_wpnName","repeating_bowWpns_manRating"], function (values) {
				console.log(`^^^^^^^^^^^setting up bow values ${JSON.stringify(values)}`);
				const Dai_Kyu_weights = ["6","8","9","10"];
				const Han_Kyu_weights = ["4","6","7"];
				let man_rating = parseInt(values.repeating_bowWpns_manRating);
				let wpnName = values.repeating_bowWpns_wpnName.toUpperCase();
				let weight = "Err"
				let range_str="Error"
				let damage_str ="Err"
				let str_range_str = ""
				//wpnName =  wpnName.toUpperClass()
				console.log("man_rating:"+man_rating);
				console.log("wpnName:"+wpnName);
				console.log("man_rating:"+man_rating);
				console.log("wpnName:"+wpnName);
				
				if (wpnName.includes("DAI-KYU")){
				  str_range_str = Math.max((man_rating*10)-9,2)+" - " + man_rating*10; 
console.log("str_range_str:"+str_range_str);				  
				  damage_str = man_rating+"D6"
				  range_str="2-10/11-60/61-";
				  let extra_range = 150+(10*man_rating);
				  range_str=range_str+extra_range;
				  weight = Dai_Kyu_weights[man_rating-1]
				} else if  (wpnName.includes("HAN-KYU")){
				  if (man_rating == 1){
					  str_range_str = "2 - 20";
				  } else if (man_rating == 2){
					 str_range_str = "21 - 30";
				  } else if (man_rating == 3){
					 str_range_str = "31 - 40";
				  }	else {
					  str_range_str = "err";
				  }					  
console.log("str_range_str:"+str_range_str);				  
				  if (man_rating>= 1 && man_rating<=3){	
					  damage_str = man_rating+"D6"
					  range_str="2-10/11-40/100-";
					  let extra_range = 100+(10*man_rating);
					  range_str=range_str+extra_range;				  
					  weight = Han_Kyu_weights[man_rating-1]
				  }
				}
							
				console.log("weight:"+weight);
				console.log("range_str:"+range_str);
				
                setAttrs({repeating_bowWpns_str_range:str_range_str,repeating_bowWpns_weight:weight,repeating_bowWpns_damage:damage_str,repeating_bowWpns_ranges:range_str});
		});          
	
	});

	
	//setup listeners for skill used
	//averaging_skill_listeners = ["change:repeating_bugeiskills:avg_skill_used","change:repeating_finearts:avg_skill_used","change:repeating_bugeiskills:avg_skill_used"]
	//averaging_skill_listeners.forEach(attribute => {
	//	on(`${attribute}`, function(event) {
	//		console.log(`avg listener event ${JSON.stringify(event)}`);
	//		const source = event.sourceAttribute;
	//		console.log("source: " + source);
	//		const repeat_section = getRepeatClass(source);
	//	   getAttrs([repeat_section+"_avg_skill_used"], function(values) {
	//		   console.log(`average skill listeners values ${JSON.stringify(values)}`);
	//		    getSkillValues(values.repeating_bugeiskills_avg_skill_used,"repeating_bugeiskills",repeat_section)
	//			findSkill(values.repeating_bugeiskills_avg_skill_used, "repeating_bugeiskills",repeat_section);				
	//		   //setAttrs({[repeat_section+"_raw_bcs"]:raw_bcs,[repeat_section+"_base_bcs"]:base_bcs});
	//	   });			
	//	});
	//});	


	//setup saving throw listeners	
	$20('button.saving_throw').on('click', async (event) => {
		console.log(JSON.stringify(event));
		const skill_row = event.htmlAttributes.name.replace("act_","");	
		console.log("skill_row: " + skill_row);
		console.log("alt key: "+event.altKey)
		let alt_key=0;
		if (event.altKey){
			alt_key=1;
		}
		let source = "";
		if (skill_row=="str_st"){
			source="Strength ST";
		} else if (skill_row=="dft_st"){
			source="Deftness ST";
		} else if (skill_row=="spd_st"){
			source="Speed ST";
		} else if (skill_row=="hlh_st"){
			source="Health ST";
		} else if (skill_row=="wit_st"){
			source="Wit ST";
		} else if (skill_row=="wil_st"){
			source="Will ST";
		} else if (skill_row=="legendarybeing_str_st"){
			source="LB Strength ST";
		} else if (skill_row=="legendarybeing_dft_st"){
			source="LB Deftness ST";
		} else if (skill_row=="legendarybeing_spd_st"){
			source="LB Speed ST";
		} else if (skill_row=="legendarybeing_hlh_st"){
			source="LB Health ST";
		} else if (skill_row=="legendarybeing_wit_st"){
			source="LB Wit ST";
		} else if (skill_row=="legendarybeing_wil_st"){
			source="LB Will ST";
		} else if (skill_row=="legendarybeing_wit_st"){
			source="LB Wit ST";
		} else if (skill_row=="beastphysicalst"){
			source="Beast Physical ST";
		} else if (skill_row=="beastphysicalstrongst"){
			source="Beast strong ST";
		} else if (skill_row=="beastintelligencest"){
            source="Beast Intelligence ST";
		}  else if (skill_row=="spiritstrst"){
			source="SB Strength ST";
		} else if (skill_row=="spiritdftst"){
			source="SB Deftness ST";
		} else if (skill_row=="spiritspdst"){
			source="SB Speed ST";
		} else if (skill_row=="spirithlhst"){
			source="SB Health ST";
		} else if (skill_row=="spiritwitst"){
			source="SB Wit ST";
		} else if (skill_row=="spiritwilst"){
			source="SB Will ST";
		} else if (skill_row=="spiritwitst"){
			source="SB Wit ST";
		}

		console.log("source: " + source);
        if ( source != ""){
            console.log("doRoll 1-------------------->");
            doRoll(event,"saving",event.name,skill_row,source,"",alt_key);
        }
	});
	



	//setup capability listeners 
	const capability_roll_listeners = ["clicked:brawling","clicked:climbing","clicked:leaping","clicked:magic","clicked:swimming","clicked:gimmickry"];
	capability_roll_listeners.forEach(attribute => {
		on(`${attribute}`, function(event) {
			console.log(`roll listener event ${JSON.stringify(event)}`);
			const source = event.htmlAttributes.name.replace("act_","").toProperCase();
			console.log("source: " + source);
			let skill_row = "";	
			if (source=="Brawling"){
				skill_row = "brawlBCS"
			} else if (source=="Climbing"){
				skill_row = "climbBCS"
			} else if (source=="Leaping"){
				skill_row = "leapBCS"
			}
			if (source=="Magic"){
				skill_row = "magicBCS"
			} else if (source=="Swimming"){
				skill_row = "Swimmming";				
			} else if (source=="Gimmickry"){
				skill_row = "GimmickryBCS"
			}
			//function doRoll(event,rollType,button_name,skill_row,rollSource2,avg_skill_row,raw_roll)
            console.log("doRoll 2-------------------->");
			doRoll(event,"capability",event.name,skill_row,source,"",0);
		});
	});
    
    
    //setup human npc skill listeners
    on("clicked:humannpcimport", function(event) {
		console.log(`spell roll listener event ${JSON.stringify(event)}`);
		const source = event.sourceAttribute;
		const button_clicked = event.htmlAttributes.name
		getAttrs(["human_npc_import_area"], function(values) {
            let import_text = values.human_npc_import_area;
            console.log("import_text: "+import_text)
            console.log("marker 1")
            let importArray = [];
            if (import_text.includes(";") || import_text.includes(",") ) {
                console.log("marker 2")
              if (import_text.includes(";")){
                  console.log("marker 3a")
                importArray = import_text.split(";")     
              } else {
                  console.log("marker 3b")
                importArray = import_text.split(",")
              }
              console.log("marker 4")              
              console.log(`result of split ${JSON.stringify(importArray)}`);
				if (importArray.length > 0) {
		
					_.each(importArray, function(currentSkill, i) {
                          currentSkill = currentSkill.trim();  
                          console.log("currrent skill: "+currentSkill);
                          let skillArray = currentSkill.split("(");
                          let skill_name = skillArray[0].trim();
                          let raw_bcs = skillArray[1].trim().replace(")","")
                          
                          console.log("skill name: "+skill_name+" skill bcs: "+raw_bcs)
                          let newrowid = generateRowID();
                          setAttrs({["repeating_humannpcskills_"+newrowid+"_skill_name"]:skill_name,["repeating_humannpcskills_"+newrowid+"_raw_bcs"]:raw_bcs});
					});
				}              
              
            }
            else {
                //send the text block back with Error added to the end
                console.log("marker 5")              
            }
		});
	});
    
     on("change:repeating_humannpcskills:raw_bcs change:repeating_humannpcskills:bonus", function(event) {
         console.log(`human skills raw_bcs or bonus changed event ${JSON.stringify(event)}`);
		const source = event.sourceAttribute;
		let row_id = getRowID(event.sourceAttribute);
		getAttrs([row_id+"_raw_bcs",row_id+"_bo	nus","level"], function(values) {
          console.log(`human skills raw_bcs getAttrs ${JSON.stringify(values)}`);  
          let base_bcs = parseInt(values[row_id+"_raw_bcs"]);
          let score = base_bcs*5;
          if (score>=95){
              score =100;
          }
           console.log("marker 1")
           console.log("base_bcs: "+base_bcs);
          if (values[row_id+"_bonus"]=="1"){
              console.log("marker 2")
              base_bcs = base_bcs + parseInt(values.level);
              console.log("base_bcs: "+base_bcs);
          }
          console.log("marker 3")
          console.log(row_id+"_base_bcs")
          setAttrs({[row_id+"_base_bcs"]:base_bcs,[row_id+"_score"]:score});
		});        
     });
    
	on("clicked:repeating_spells:spell", function(event) {
		console.log(`spell roll listener event ${JSON.stringify(event)}`);
		const source = event.sourceAttribute;
		const button_clicked = event.htmlAttributes.name
		console.log("button_clicked: " + button_clicked);
		let row_id = getRowID(event.sourceAttribute);
		const rollSource = getRepeatSection(source);			
		console.log("source: " + source);
		console.log("rollSource: "+rollSource);
		getAttrs([row_id+"_spell",row_id+"_skills_used_rowid","show_npc","npc_sheet_type"], function(values) {
			let roll_for=values[row_id+"_spell"]+" Spell"
			console.log(`spell action button click x values ${JSON.stringify(values)}`);
            console.log("hidhoe: "+values[row_id+"_skills_used_rowid"])
            console.log("doRoll 3-------------------->");
            let what_button = "spell_button"
            if (values.show_npc=="2" && values.npc_sheet_type=="3"){
                what_button = "npc_spell_button"
            }            
            //doRoll(event,rollType,button_name,skill_row,rollSource2,avg_skill_row,do_raw)
			doRoll(event,"spell",what_button,row_id,roll_for,values[row_id+"_skills_used_rowid"],0);
		});
	});    
    
    
	on("clicked:repeating_npcspells:spell", function(event) {
		console.log(`npc spell roll listener event ${JSON.stringify(event)}`);
		const source = event.sourceAttribute;
		const button_clicked = event.htmlAttributes.name
		console.log("button_clicked: " + button_clicked);
		let row_id = getRowID(event.sourceAttribute);
		const rollSource = getRepeatSection(source);			
		console.log("source: " + source);
		console.log("rollSource: "+rollSource);
		getAttrs([row_id+"_spell",row_id+"_skills_used_rowid"], function(values) {
			let roll_for=values[row_id+"_spell"]+" Spell"
			console.log(`spell action button click x values ${JSON.stringify(values)}`);
            console.log("hidhoe: "+values[row_id+"_skills_used_rowid"])
            console.log("doRoll 3-------------------->");
			doRoll(event,"spell","npc_spell_button", row_id,roll_for,values[row_id+"_skills_used_rowid"],0);
		});
	});
    
    //basic powers  and spells range listener
	on("change:repeating_bscpowers:range change:repeating_spells:range", function(event) {			
		console.log(`change basic powers range event ${JSON.stringify(event)}`);
        let repeatSection = getRepeatClass(event.sourceAttribute);
        console.log("repeatSection1: "+repeatSection)
		getAttrs([repeatSection+"_range","level"], function(values) {
			console.log(`values  ${JSON.stringify(values)}`);
            
            if (event.sourceAttribute.includes("repeating_spells")){
                range_value=get_range_value(values["repeating_spells_range"],parseInt(values.level))
                console.log("range_value: "+range_value)
                setAttrs({repeating_spells_range_value:range_value});                
            } else {
                let cur_range=values["repeating_bscpowers_range"];
                console.log("cur_range: "+cur_range)
                range_value=get_range_value(cur_range,parseInt(values.level))
                console.log("range_value: "+range_value)
                setAttrs({repeating_bscpowers_range_value:range_value});
            }    
		});
		
	}) ;   
    
    function get_range_value(range,level){
         console.log("get_range_value called");   
        let range_str="Self"
        let yard_trans = getTranslationByKey("Yard");
        let yards_trans = getTranslationByKey("Yards");
        if (range=="Touch"){
            range_str="1 " + yard_trans
        }
        if (range=="Very Short"){
            range_str = level
            if (level<= 1){
                range_str="1 " + yard_trans
            } else {
                range_str= level + " " + yards_trans
            }
        }
        if (range=="Short"){
            range_str= 2*level + " " + yards_trans
        }
        if (range=="Medium"){
            range_str= 5*level + " " + yards_trans
        }
        if (range=="Long"){
            range_str= 10*level + " " + yards_trans        
        }
        if (range=="Very Long"){
            range_str= 20*level + " " + yards_trans                
        }
        if (range=="Special"){
            range_str = "See Details"
        }
        console.log("range_str: "+range_str)
        return range_str;
    }
    
    

	//setup group status roll listeners
	//put raw back in
	on("clicked:repeating_groups:base clicked:repeating_groups:society-base", function(event) {
		console.log(`roll listener event ${JSON.stringify(event)}`);
		const source = event.sourceAttribute;
		const button_clicked = event.htmlAttributes.name
		console.log("button_clicked: " + button_clicked);
		let row_id = getRowID(event.sourceAttribute);
		const rollSource = getRepeatSection(source);			
		console.log("source: " + source);
		console.log("rollSource: "+rollSource);
		getAttrs([row_id+"_group"], function(values) {
			let roll_for="";
			console.log("button_clicked: " + button_clicked);
			if (button_clicked=="act_base"){
				console.log("button_clicked AAAA");
				roll_for=values[row_id+"_group"]+" Status"
			} else {
				console.log("button_clicked BBBBB");
				roll_for=values[row_id+"_group"]+" Society Status"
			}
            console.log("doRoll 4-------------------->");
			doRoll(event,"status",event.name, row_id,roll_for,"",0);
		});
	});


	//setup skill listeners
	//put raw back in
	const skill_roll_listeners = ["clicked:repeating_bugeiskills:raw clicked:repeating_bugeiskills:base","clicked:repeating_practicalskills:raw clicked:repeating_practicalskills:base","clicked:repeating_finearts:raw clicked:repeating_finearts:base"];
	skill_roll_listeners.forEach(attribute => {
		on(`${attribute}`, function(event) {
			console.log(`roll listener event ${JSON.stringify(event)}`);
			const source = event.sourceAttribute;
			const button_clicked = event.htmlAttributes.name
			console.log("button_clicked: " + button_clicked);
			const raw_roll = (button_clicked=="act_raw") ? 1 : 0;
			console.log("raw_roll: " + raw_roll);
			let row_id = getRowID(event.sourceAttribute);
			const rollSource = getRepeatSection(source);			
			console.log("source: " + source);
			console.log("rollSource: "+rollSource);
		   getAttrs([row_id+"_avg_skill_used_rowid"], function(values) {
				let avg_skill_row = values[row_id+"_avg_skill_used_rowid"];
				console.log("Please work avg_skill_row : "+avg_skill_row );
                console.log("doRoll 6-------------------->");
				doRoll(event,"bugeiskill",event.name, row_id,rollSource,avg_skill_row,raw_roll);
		   });
		});
	});
    
              
    on("clicked:repeating_humannpcskills:npcskillroll", function(event) {
        console.log(`roll listener event ${JSON.stringify(event)}`);
        const source = event.sourceAttribute;
        const button_clicked = event.htmlAttributes.name
        console.log("button_clicked: " + button_clicked);
        let row_id = getRowID(event.sourceAttribute);
        const rollSource = getRepeatSection(source);			
        console.log("source: " + source);
        console.log("rollSource: "+rollSource);
        doRoll(event,"npcskill",event.name, row_id,rollSource,"",0);
    });    

	
	//setup attack listeners 
	const attack_roll_listeners = ["clicked:repeating_meleewpns:base","clicked:repeating_bowwpns:base","clicked:repeating_hurledwpns:base","clicked:repeating_meleewpns:minornpcbase","clicked:repeating_bowwpns:minornpcbase","clicked:repeating_hurledwpns:minornpcbase"];
	attack_roll_listeners.forEach(attribute => {
		on(`${attribute}`, function(event) {
			console.log(`roll listener event ${JSON.stringify(event)}`);
			const source = event.sourceAttribute;
			let row_id = getRowID(event.sourceAttribute);
			const rollSource = getRepeatSection(source);			
			console.log("source: " + source);
			console.log("rollSource: "+rollSource);
		   getAttrs([row_id+"_skills_used_rowid",row_id+"_avg_skill_used_rowid"], function(values) {
				console.log(`------------>values ${JSON.stringify(values)}`);
                let skill_row = values[row_id+"_skills_used_rowid"];			                                 
				console.log("---------->skill_row: "+skill_row);
				let avg_skill_row = values[row_id+"_avg_skill_used_rowid"];
				console.log("Please work avg_skill_row : "+avg_skill_row );
                console.log("doRoll 7-------------------->");
				doRoll(event,"combat",event.htmlAttributes.name,skill_row,rollSource,avg_skill_row,0);
		   })			
			
			
		});
	});


	
	const skill_attribute_listeners = ["change:repeating_bugeiskills:bonus change:repeating_bugeiskills:score","change:repeating_practicalskills:bonus change:repeating_practicalskills:score","change:repeating_finearts:bonus change:repeating_finearts:score"];
	
	skill_attribute_listeners.forEach(attribute => {
		on(`${attribute}`, function(event) {
		   const source = event.sourceAttribute;
		   const repeat_section = getRepeatClass(source);
		   getAttrs([repeat_section+"_score",repeat_section+"_bonus","level"], function(values) {
			   console.log(`values ${JSON.stringify(values)}`);
			   let raw_bcs = Math.floor(parseInt(values[repeat_section+"_score"])/5);
			   let bonus = values[repeat_section+"_bonus"];
			   let base_bcs = raw_bcs;
			   if (bonus=="1"){
					base_bcs = raw_bcs+parseInt(values.level);
			   }
			   setAttrs({[repeat_section+"_raw_bcs"]:raw_bcs,[repeat_section+"_base_bcs"]:base_bcs});
		   });
		});
	});	
	


	

	function doRoll(event,rollType,button_name,skill_row,rollSource2,avg_skill_row,do_raw){
        
        //getAttrs_obj
        //combat  1196
        //skill (and other) 1132
        //status 1134
        //saving 1147
        //spell 1148
        //capability 1169   
        console.log("&*&*&*&*&*&*& button_name : "+button_name);        
		console.log("&*&*&*&*&*&*& skill_row : "+skill_row);
		console.log("&*&*&*&*&*&*& avg_skill_row : "+avg_skill_row);3
		console.log("&*&*&*&*&*&*& rollType : "+rollType);
		console.log("&*&*&*&*&*&*& do_raw : "+do_raw);
		console.log("rollSource2: "+rollSource2);
		console.log("rollType: "+rollType);        
		//Penalties
		// min_str_bcs_pen  default 0 	a penalty to BCS should be subtracted
		// min_str_step_pen a penalty weapon damage step  should be subtracted
		//brawl_bcs_multiplier default 1 a multiplier to bcs (make sure to do it before the reductions) 
		//Atemi_Waza_damage_mod  default 0  Damage modifier added to unarmed damage if a Budoka uses Atemi-waza 
		// quality_bcs_mod deafult 0
		// quality_damage_mod default 0
		// yawara_atemi_waza_damage  default 0
		// tonfa_atemi_waza_damage default 0
		// jujutsu_grapple_hold_mod default = 0
		// flat_blade_damage_step_mod = 0;	
		// quality_damage_mod = 0;
		// thrust_bcs_mod = 0;
		// piercing_thrust_full_damage=0;
		// smashing_blow=0;
		// range_mod = 0;
		// thrust_damage_step_mod = 0;

		var raw_roll=0;
        if (rollType=="npcskill"){
            var getAttrs_obj = [skill_row+"_skill_name",skill_row+"_raw_bcs",skill_row+"_bonus","0","level"];	
        }
		if (rollType=="bugeiskill"){
			var rollSource=event.name;
			var row = getRowID(event.sourceAttribute);
			console.log("row: "+row);
			var getAttrs_obj = [row+"_raw_bcs",row+"_base_bcs",row+"_bugeiName",row+"_mod",row+"_useAvg",row+"_avg_skill_used",avg_skill_row+"_bonus",avg_skill_row+"_raw_bcs",avg_skill_row+"_base_bcs",row+"_bonus",row+"_skill_name","SwimBCS","level","str_base_st","dft_st_mod","dft_base_st"];
		}
		if (rollType=="status"){
			if (button_name="act_society-base"){
				var getAttrs_obj = [skill_row+"_society_bcs",skill_row+"_society_mod"];
			} else {
				var getAttrs_obj = [skill_row+"_bcs",skill_row+"_mod"];
			}
		}
        if (rollType=="spell"){
            var rollSource=event.name;
            
            // The avg_skill_row parameter has been repurposed to hold the rowid for connected spell
			var getAttrs_obj = ["magicBCS","magicMod","level",avg_skill_row+"_score",skill_row+"_duration",skill_row+"_range_value",skill_row+"_knowledge","shugenja_wound_penalty","shugenja_mental_loss_mod",skill_row+"_cost",skill_row+"_die_roll"];            
        }
		if (rollType=="saving") {
			var rollSource=event.name;
			if (rollSource2=="Strength ST"){
				var getAttrs_obj = ["str_base_st","str_st_mod","level"];			
			}
			else if (rollSource2=="Deftness ST"){
				var getAttrs_obj = ["dft_base_st","dft_st_mod","level"];			
			}
			else if (rollSource2=="Speed ST"){
				var getAttrs_obj = ["spd_base_st","spd_st_mod","level"];			
			}	
			else if (rollSource2=="Health ST"){
				var getAttrs_obj = ["hlh_base_st","hlh_st_mod","level"];			
			}	
			else if (rollSource2=="Wit ST"){
				var getAttrs_obj = ["wit_base_st","wit_st_mod","level"];			
			}	
			else if (rollSource2=="Will ST"){
				var getAttrs_obj = ["wil_base_st","wil_st_mod","level"];			
			} else if (rollSource2=="LB Strength ST"){
				var getAttrs_obj = ["legendarybeing_str_base_st","0","0"];			
			}
			else if (rollSource2=="LB Deftness ST"){
				var getAttrs_obj = ["legendarybeing_dft_base_st","0","0"];			
			}
			else if (rollSource2=="LB Speed ST"){
				var getAttrs_obj = ["legendarybeing_spd_base_st","0","0"];			
			}	
			else if (rollSource2=="LB Health ST"){
				var getAttrs_obj = ["legendarybeing_hlh_base_st","0","0"];			
			}	
			else if (rollSource2=="LB Wit ST"){
				var getAttrs_obj = ["legendarybeing_wit_base_st","0","0"];			
			}	
			else if (rollSource2=="LB Will ST"){
				var getAttrs_obj = ["legendarybeing_wil_base_st","0","0"];			
			}
            else if (rollSource2=="Beast Physical ST"){
				var getAttrs_obj = ["beast_physical_st","0","0"];			
            } 
            else if (rollSource2=="Beast strong ST"){
				var getAttrs_obj = ["beast_physical_strong_st","0","0"];		
            } 
            else if (rollSource2=="Beast Intelligence ST"){
				var getAttrs_obj = ["beast_intelligence_st","0","0"];	
            }  
            else if (rollSource2=="SB Strength ST"){
				var getAttrs_obj = ["supernatural_being_str_st","0","0"];			
			}
			else if (rollSource2=="SB Deftness ST"){
				var getAttrs_obj = ["supernatural_being_dft_st","0","0"];			
			}
			else if (rollSource2=="SB Speed ST"){
				var getAttrs_obj = ["supernatural_being_spd_st","0","0"];			
			}	
			else if (rollSource2=="SB Health ST"){
				var getAttrs_obj = ["supernatural_being_hlh_st","0","0"];			
			}	
			else if (rollSource2=="SB Wit ST"){
				var getAttrs_obj = ["supernatural_being_wit_st","0","0"];			
			}	
			else if (rollSource2=="SB Will ST"){
				var getAttrs_obj = ["supernatural_being_wil_st","0","0"];			
			}

		}				
		if (rollType=="capability") {
			var rollSource=event.name;
			if (rollSource2=="Brawling"){
				var getAttrs_obj = ["brawlBCS","brawlMod","level"];			
			}
			else if (rollSource2=="Climbing"){
				var getAttrs_obj = ["climbBCS","climbMod","level"];			
			}
			else if (rollSource2=="Leaping"){
				var getAttrs_obj = ["leapBCS","leapMod","level"];			
			}	
			else if (rollSource2=="Magic"){
                console.log("scobby doo **************************************************")
				var getAttrs_obj = ["magicBCS","magicMod","level","profession","shugenja_wound_penalty","shugenja_mental_loss_mod"];
                console.log("getAttrs_obj AAAAAA: "+getAttrs_obj);                
			}	
			else if (rollSource2=="Swimming"){
				var getAttrs_obj = ["swimBCS","swimMod","level"];			
			}	
			else if (rollSource2=="Gimmickry"){
				var getAttrs_obj = ["GimmickryBCS","GimmickryMod","level"];			
			}	
			
		} 
        console.log("getAttrs_obj BBBBBBBB: "+getAttrs_obj);                
		if (rollType=="combat") {
			var rollSource=event.name;
			var row = getRowID(event.sourceAttribute);
			console.log("look at this row: "+row);
            console.log("button name: "+button_name);
			// Need to change this for Brawling used skill_row+"_bonus",skill_row+"_raw_bcs",skill_row+	
			var getAttrs_obj = [row+"_range",row+"_curRange",skill_row+"_bonus",skill_row+"_raw_bcs",skill_row+"_base_bcs",avg_skill_row+"_bonus",avg_skill_row+"_raw_bcs",avg_skill_row+"_base_bcs",row+"_multiplier",row+"_mod",row+"_form",row+"_avg_skill_used",row+"_useAvg",row+"_quality",row+"_arrowType",row+"_manRating",row+"_damage",row+"_damage_mod",row+"_damage_step_mod",row+"_min_str","damage_mod","unarmd_damage",row+"_skill_used",row+"_wpnName",row+"_hands",row+"_size",row+"_form",row+"_type",row+"_default_type",row+"_okuden","SwimBCS","level","str_base_st","dft_st_mod","dft_base_st","brawlBCS","brawlMod","profession",row+"_base_bcs"];
            console.log("getAttrs_obj cccccccccccc: "+getAttrs_obj);                			
		}
		console.log("getAttrs_obj xxxx: "+getAttrs_obj);
		getAttrs(getAttrs_obj, function(values) {
			console.log(`do roll x values ${JSON.stringify(values)}`);
			console.log("rollType: "+rollType);
			var combat = 0;
			var show_damage = 0;
			var modded_damage = "";
			var wpnName  = values[row+"_wpnName"];
			/*var form_type = values[row+"_form"].toUpperCase();*/
			var skill_name = "";
			if (rollType=="combat"){
				skill_name = values[row+"_skill_used"]
			} else if (rollType=="bugeiskill") {
				skill_name = values[row+"_skill_name"];
			} else if (rollType=="spell" || rollType=="capability" || rollType=="status" || rollType=="saving") {
				skill_name = rollSource2;
			} else if (rollType=="npcskill")	{
                skill_name = values[skill_row+"_skill_name"];
                console.log(">>>>>>>>>>>>>>> "+skill_name+" <<<<<<<<<<<<<<<<<<<<<<<<<<");
            }
			console.log("skill_nameYYY:"+skill_name);
			var  level = parseInt(values.level);
			console.log("level:"+level);
			if (rollType=="combat" && skill_row=="brawlBCS"){
				console.log("!!!!!!!!!!!!!!! Doing combat and brawlBCS")
				var bonus = 0;                  
                let brawl_multiplier = getBrawlMultiplier(wpnName.toUpperCase())
                console.log("brawl_multiplier: "+brawl_multiplier)
                var  base_target=parseInt(values["brawlBCS"])*brawl_multiplier;				
                var  raw_target=parseInt(values["brawlBCS"]);
                var  mod = parseInt(values["brawlMod"]);
                    
			} else if (rollType=="spell"){ 
                console.log("******* Doing spell");
					var  base_target=parseInt(values["magicBCS"]);				
					var  raw_target=0;
					var  mod = parseInt(values["magicMod"]);                
            } else if (rollType=="capability"){
				console.log("!!!!!!!!!!!!!!! Doing capability");
				console.log("!!!!!!!!!!!!rollSource2: "+rollSource2);
				var bonus = 0;
				if (rollSource2=="Brawling"){				
					var  base_target=parseInt(values["brawlBCS"]);				
					var  raw_target=0;
					var  mod = parseInt(values["brawlMod"]);
				} else if (rollSource2=="Climbing"){
					                                  
					var  base_target=parseInt(values["climbBCS"]);
					var  raw_target=0;
					var  mod = parseInt(values["climbMod"]);									
				} else if (rollSource2=="Leaping"){
					var  base_target=parseInt(values["leapBCS"]);				
					var  raw_target=0;
					var  mod = parseInt(values["leapMod"]);									
				} else if (rollSource2=="Magic"){
                    console.log("####################################################################################")
					var  base_target=parseInt(values["magicBCS"]);
                    console.log    
					var  raw_target=0;
					var  mod = parseInt(values["magicMod"]);
                    console.log("####################################################################################")                    
				}	else if (rollSource2=="Swimming"){
					var  base_target=parseInt(values["swimBCS"]);				
					var  raw_target=0;
					var  mod = parseInt(values["swimMod"]);									
				} else if (rollSource2=="Gimmickry"){
					var  base_target=parseInt(values["GimmickryBCS"]);				
					var  raw_target=0;
					var  mod = parseInt(values["GimmickryMod"]);									
				} 
			}  else if (rollType=="saving"){
				console.log("!!!!!!!!!!!!!!! Doing saving");
				console.log("!!!!!!!!!!!!rollSource2: "+rollSource2);
				raw_target=0;
				var bonus = 0;
				if (rollSource2=="Strength ST"){				
					var  base_target=parseInt(values["str_base_st"])-(do_raw==1? level:0);				
					var  mod = parseInt(values["str_st_mod"]);
				} else if (rollSource2=="Deftness ST"){				                                 
					var  base_target=parseInt(values["dft_base_st"])-(do_raw==1? level:0);
					var  mod = parseInt(values["dft_st_mod"]);									
				} else if (rollSource2=="Speed ST"){
					var  base_target=parseInt(values["spd_base_st"])-(do_raw==1? level:0);				
					var  mod = parseInt(values["spd_st_mod"]);
				} else if (rollSource2=="Health ST"){
					var  base_target=parseInt(values["hlh_base_st"])-(do_raw==1? level:0);				
					var  mod = parseInt(values["hlh_st_mod"]);			
				} else if (rollSource2=="Wit ST"){
					var  base_target=parseInt(values["wit_base_st"])-(do_raw==1? level:0);				
					var  mod = parseInt(values["wit_st_mod"]);									
				}	else if (rollSource2=="Will ST"){
					var  base_target=parseInt(values["wil_base_st"])-(do_raw==1? level:0);				
					var  mod = parseInt(values["wil_st_mod"]);									
				} else if (rollSource2=="LB Strength ST"){				
					var  base_target=parseInt(values["legendarybeing_str_base_st"]);				
					var  mod = 0;
				} else if (rollSource2=="LB Deftness ST"){				                                 
					var  base_target=parseInt(values["legendarybeing_dft_base_st"]);
					var  mod = 0;									
				} else if (rollSource2=="LB Speed ST"){
					var  base_target=parseInt(values["legendarybeing_spd_base_st"]);				
					var  mod = 0;
				} else if (rollSource2=="LB Health ST"){
					var  base_target=parseInt(values["legendarybeing_hlh_base_st"]);				
					var  mod = 0;			
				} else if (rollSource2=="LB Wit ST"){
					var  base_target=parseInt(values["legendarybeing_wit_base_st"]);				
					var  mod = 0;									
				} else if (rollSource2=="LB Will ST"){
					var  base_target=parseInt(values["legendarybeing_wil_base_st"]);				
					var  mod = 0;									
				} else if (rollSource2=="Beast Physical ST"){
                        var  base_target=parseInt(values["beast_physical_st"]);							
                        var  mod = 0;					
                } else if (rollSource2=="Beast strong ST"){
                    var  base_target=parseInt(values["beast_physical_strong_st"]);
                    var  mod = 0;			
                } else if (rollSource2=="Beast Intelligence ST"){
                    var  base_target=parseInt(values["beast_intelligence_st"]);
                    var  mod = 0;		
                }  else if (rollSource2=="SB Strength ST"){
                    var  base_target=parseInt(values["supernatural_being_str_st"]);				
                    var  mod = 0;			
                }   else if (rollSource2=="SB Deftness ST"){
                    var  base_target=parseInt(values["supernatural_being_dft_st"]);				
                    var  mod = 0;				
                }
                else if (rollSource2=="SB Speed ST"){
                    var  base_target=parseInt(values["supernatural_being_spd_st"]);				
                    var  mod = 0;				
                }	
                else if (rollSource2=="SB Health ST"){
                    var  base_target=parseInt(values["supernatural_being_hlh_st"]);				
                    var  mod = 0;			
                }	
                else if (rollSource2=="SB Wit ST"){
                    var  base_target=parseInt(values["supernatural_being_wit_st"]);				
                    var  mod = 0;				
                }	
                else if (rollSource2=="SB Will ST"){
                    var  base_target=parseInt(values["supernatural_being_wil_st"]);				
                    var  mod = 0;			
                }	
			}  else if (rollType=="status"){
				var  raw_target=0;				
				if (button_type="act_attr_society_bcs"){
					var  base_target=parseInt(values[skill_row+"_society_bcs"]);				
					var  mod = parseInt(values[skill_row+"_society_mod"]);
				} else {
					var  base_target=parseInt(values[skill_row+"_bcs"]);				
					var  mod = parseInt(values[skill_row+"_mod"]);					
				}
			}  else if (rollSource2=="hurledwpns" && skill_name=="DFT ST"){
				console.log("!!!!!!!!!!!!!!! Doing hurledwpns and DFT ST")
				var bonus = 0;				
				var  base_target=parseInt(values["dft_base_st"])+parseInt(values["dft_st_mod"]);				
				var  raw_target=parseInt(values["dft_base_st"])+parseInt(values["dft_st_mod"]);
				var  mod = parseInt(values[row+"_mod"]);				
			} else if(rollType=="npcskill") {
                    console.log("<------------------***************------------------------>");
                    var bonus = values[skill_row+"_bonus"];
                    console.log("bonus: "+bonus);
                    var level = parseInt(values["level"])
                    console.log("level: "+level);
					var raw_target=parseInt(values[skill_row+"_raw_bcs"]);
                    console.log("raw_target: "+raw_target);                    
                    var base_target=raw_target+(bonus=="1"? level:0);;
                    console.log("base_target: "+base_target);                                        
					var mod = 0;
                    console.log("<------------------***************------------------------>");
            }                
			else {	
				console.log("!!!!!!!!!!!!!!! Doing else")
                
                if (button_name=="act_minornpcbase"){
                    var bonus = 0
                    var  base_target=parseInt(values[row+"_base_bcs"]); 
                    var  raw_target=parseInt(values[row+"_base_bcs"]);                     
                } else {
                    var bonus = parseInt(values[skill_row+"_bonus"])
                    if (do_raw==0){
                        console.log("**************************using BASE")
                        var  base_target=parseInt(values[skill_row+"_base_bcs"]);
                    } else {
                        console.log("**************************using raw")
                        var  base_target=parseInt(values[skill_row+"_raw_bcs"]);
                    }					
                    var  raw_target=parseInt(values[skill_row+"_raw_bcs"]);                
                }
                var  mod = parseInt(values[row+"_mod"]);
			}
			console.log("multiplier AAAa");
			if (rollType=="combat"){
				console.log("multiplier bbbb");	
				var form_type = ""	
				console.log("rollSource2: "+rollSource2)				
				if (rollSource2=="bowwpns"){
					form_type="STRIKE";
				} else if (rollSource2=="hurledwpns"){
					form_type="HURL WEAPON";
				} else 	if (rollSource2=="meleewpns") {
				   form_type = values[row+"_form"].toUpperCase();
				}
				console.log("form_type: "+form_type);
				
				if (no_damage_forms.includes(form_type)){
					show_damage=0;	
				} else {
					show_damage=1;	
				}
				console.log("show_damage: "+show_damage);
				var bcs_multiplier = parseFloat(values[row+"_multiplier"]);
				if (form_type.includes("SECOND STRIKE") || form_type.includes("BUTT STROKE - S S")){
					bcs_multiplier = bcs_multiplier * 0.5;
				}
			} else {
				console.log("multiplier cccc");
				var bcs_multiplier = 1;
			}
			console.log("\\\\\\\\\\\\\\\\\\\\\\\\");
			console.log("skill_row:"+skill_row)
			console.log("row:"+row)
			console.log("bonus:"+bonus);
			console.log("bcs_multiplier:"+bcs_multiplier);
			console.log("base_target:"+base_target);
			console.log("raw_target:"+raw_target);
			console.log("mod:"+mod);
			console.log("\\\\\\\\\\\\\\\\\\\\\\\\");			
			var mod_str = "";	
			/* Need to pull in the averaging skill here */	
			var  avg_skill = values[row+"_avg_skill_used"] || "";
			console.log("avg_skill:"+avg_skill);			
			if (avg_skill.length > 0)	{
				console.log("AVG 1");
				avg_skill = avg_skill.trim();
				var  use_avg =  parseInt(values[row+"_useAvg"]);
				var avg_skill_raw_bcs =  parseInt(values[avg_skill_row+"_raw_bcs"]);
				console.log(" avg_skill_raw_bcs:"+ avg_skill_raw_bcs);
				var avg_skill_base_bcs =  parseInt(values[avg_skill_row+"_base_bcs"]);
				console.log(" avg_skill_base_bcs:"+ avg_skill_base_bcs);
				var avg_skill_bonus =  parseInt(values[avg_skill_row+"_bonus"]);
				console.log("avg_skill_bonus: "+ avg_skill_bonus);
				console.log("avg_skill.length:"+avg_skill.length);
			} else { 
				console.log("AVG 2");
				var  avg_skill = "";
				var  use_avg =  0;
				var avg_skill_raw_bcs =  0;
				var avg_skill_base_bcs =  0;
				var avg_skill_bonus =  0;
			}			
			var  avg_with_str = "";
			var  avg_with = 0;
			var arrow_type="";
			console.log("use_avg:"+use_avg);			
			if (rollType=="combat") {
				combat = 1;
				//show_damage = 1;
				
				if (rollSource2=="bowwpns"){
					arrow_type=values[row+"_arrowType"];				
					var man_rating = parseInt(values[row+"_manRating"]); 
					console.log("%%%%% Man rating 2:"+man_rating);
				}

				var form_uses_effect = 0;
				var str_cur =  parseInt(values.str_cur);
				var min_str = parseInt(values[row+"_min_str"]);
				console.log("min_str: "+min_str);				
				var size = values[row+"_size"];
				var hands = values[row+"_hands"];
				//check for strength requirement penalties
				var min_str_bcs_mod = 0;
				var min_str_step_mod = 0; 	
				if (size=="1H" && min_str > str_cur){
					min_str_bcs_mod = str_cur - min_str;
					min_str_step_mod = -1;						
				} else if (size=="1½H"){
					if (hands=="1H"){	
					  if (Math.ceil(min_str*1.25) > str_cur){
						min_str_bcs_mod = -1 + (str_cur - Math.ceil(min_str*1.25));
						min_str_step_mod = -1;
					  } else {
						min_str_bcs_mod = -1;						
					  } 						  
					} else if (min_str > str_cur) {
						min_str_bcs_mod = str_cur - min_str;
						min_str_step_mod = -1;
					}
				} else if (size=="2H"){
					
					if (hands=="1H"){
						if (Math.ceil(min_str*1.5) > str_cur){
							console.log("marker min_str 7");									
							min_str_bcs_mod = -2 + (str_cur - Math.ceil(min_str*1.5))  ;
						} else {
							console.log("marker min_str 8");									
							min_str_bcs_mod = -2;												
						}							
						min_str_step_mod = -2;		
					} else {
						if (min_str > str_cur){
							min_str_bcs_mod = str_cur - min_str;
							min_str_step_mod = -1;							
						}
					}					
				}
				console.log(" !!!!!min_str_bcs_mod: "+ min_str_bcs_mod);
				console.log("  !!!!!min_str_step_mod: "+  min_str_step_mod);
				var skill_name = values[row+"_skill_used"];				
				var bonus = parseInt(values[skill_row+"_bonus"])
				var  level = parseInt(values.level);
				var profession = values.profession;
				var quality =  values[row+"_quality"];
				console.log("check form type:"+form_type)
				if (form_type.includes("BUTT STROKE")){
					var damage_type = "S";
				} else {
					var damage_type = values[row+"_type"];
				}
				console.log("^^^^^^^^^^ damage_type a:"+damage_type);
				var damage = values[row+"_damage"];
				var default_damage_type = values[row+"_default_type"];
				var unarmd_damage = values.unarmd_damage;
				var Atemi_Waza_damage_mod = 0;
				var tonfa_atemi_waza_damage = 0;
				var yawara_atemi_waza_damage = 0;
				var jujutsu_grapple_hold_mod = 0
				let brawl_bcs_multiplier = 1;
				var is_bow = 0;

				if (rollSource2=="bowwpns"){
					is_bow =1;
					damage_type="L";
					var arrow_type_bc_mod=0;
					if (arrow_type=="Bowel Raker"){
						arrow_type_bc_mod=-2;
					} else if (arrow_type=="Armor Piercer") {
						arrow_type_bc_mod=1;
					} else if (arrow_type=="Humming Bulb") {
						arrow_type_bc_mod=-1;
					}
				} else if (rollSource2=="hurledwpns"){
				} else {
					
				console.log("^^^^^^^^^^ damage_type b:"+damage_type);
					if (skill_name.toUpperCase()=="BRAWLING"){
						brawl_bcs_multiplier = 0.5;
					}
					else if (skill_name.toUpperCase()=="ATEMI-WAZA" &&  profession=="Budoka"){
						Atemi_Waza_damage_mod = level;
					}				
					console.log("Atemi_Waza_damage_mod: " +Atemi_Waza_damage_mod);
					console.log(" wpnName: " + wpnName);
					if (skill_name.toUpperCase()=="ATEMI-WAZA" &&  wpnName.toUpperCase().includes("TONFA")){
						tonfa_atemi_waza_damage = "1D3";
					}
					console.log("tonfa_atemi_waza_damage: " +tonfa_atemi_waza_damage);
					if (skill_name.toUpperCase()=="ATEMI-WAZA" &&  wpnName.toUpperCase().includes("YAWARA") && form_type=="STRIKE" ){
						yawara_atemi_waza_damage = "2";
					}
					console.log("yawara_atemi_waza_damage: " +yawara_atemi_waza_damage);			
					if (skill_name.toUpperCase()=="JUJUTSU" &&  form_type=="GRAPPLE" &&  wpnName.toUpperCase().includes("YAWARA")){
						jujutsu_grapple_hold_mod = "2";
					}
					console.log("jujutsu_grapple_hold_mod: " +jujutsu_grapple_hold_mod);					
					console.log("quality: "+quality);
					var quality_bcs_mod = 0;
					var quality_damage_mod = 0;
					if (quality=="Inferior"){
						quality_bcs_mod = -1;
						quality_damage_mod = -1;
					} else if (quality=="Good"){
						quality_bcs_mod = 1;
						quality_damage_mod = 1;
					} else if (quality=="Superior"){
						quality_bcs_mod = 2;
						quality_damage_mod = 2;
					}  else if (quality=="Master"){
						quality_bcs_mod = 3;
						quality_damage_mod = 3;
					}
					var flat_blade_damage_step_mod = 0
					if (damage_type.toUpperCase()=="S" && default_damage_type.toUpperCase()=="L" &&  (form_type=="STRIKE" | form_type=="SECOND STRIKE" ) &&  !wpnName.toUpperCase().includes("SODEGARAMI")){
						flat_blade_damage_step_mod = -1;	
						quality_damage_mod = 0;
					}
					console.log("flat_blade_damage_step_mod: " +flat_blade_damage_step_mod);
					var thrust_bcs_mod = 0;
					var thrust_damage_step_mod = 0;
					if (form_type=="THRUST" ){
						thrust_bcs_mod = 1;
						thrust_damage_step_mod = -1;
					}
					console.log("form_type: "+form_type);
					console.log("thrust_bcs_mod: " +thrust_bcs_mod);
					
					console.log("quality_bcs_mod: "+quality_bcs_mod);
					console.log("quality_damage_mod: "+quality_damage_mod);	
				}

				console.log("^^^^^^^^^^ damage_type c:"+damage_type);

				

				//check for Okuden
				var okuden_name=values[row+"_okuden"].trim();
				console.log("okuden_name: "+okuden_name);
				var piercing_thrust_full_damage=0;
				if (okuden_name.toUpperCase().includes("PIERCING THRUST")){
					piercing_thrust_full_damage=1;
				}
				
				var smashing_blow=0;
				if (okuden_name.toUpperCase().includes("SMASHING BLOW")){
					smashing_blow=1;
				}
								
				var precision_strike_step_mod =0;
				
				if (okuden_name.toUpperCase().includes("PRECISION STRIKE")  || okuden_name.toUpperCase().includes("GENKOTSU-JUTSU"))
				{
					precision_strike_step_mod =1;
				};	
				
				//Form modifiers
				var second_strike_mod = 0;
				if (form_type=="SECOND STRIKE" || form_type=="BUTT STROKE - S S"){
					second_strike_mod = -1;
				}
				
				let range_mod = 0;
				if (rollSource2=="meleewpns"){
						//check the melee ranges values
						if (form_type=="SECOND STRIKE" || form_type=="BUTT STROKE - S S"){
							var range="Mdm"	
						} else {
							var range =  values[row+"_range"];
						}
						var curRange =  values[row+"_curRange"];
						if  (range=="Shrt"){
						  range_mod = parseInt(short_range_weapons_range_mods[curRange]);
						} else if  (range=="Mdm"){
							range_mod =  parseInt(medium_range_weapons_range_mods[curRange]);
						} if  (range=="Lng"){
						  range_mod =  parseInt(long_range_weapons_range_mods[curRange]);
						} 
						console.log("range_mod: "+range_mod);
				}	
				console.log("^^^^^^^^^^ damage_type d:"+damage_type);
					console.log("****************** damage mod"+values[row+"_damage_mod"]);
					var total_damage_mod = parseInt(values["damage_mod"])+parseInt(values[row+"_damage_mod"])+Atemi_Waza_damage_mod+tonfa_atemi_waza_damage+yawara_atemi_waza_damage+quality_damage_mod;
					console.log("total_damage_mod: "+total_damage_mod);
					
					var damage_modifier_str = "{{damage_modifiers=[["+values["damage_mod"]+"[attribute damage modifier]+"+values[row+"_damage_mod"]+"[attack row damage modifier]+"+Atemi_Waza_damage_mod+"[Atemi Waza damage mod]+"+tonfa_atemi_waza_damage+"[tonfa atemi waza damage mod]+"+yawara_atemi_waza_damage+"[yawara atemi waza damage_mod]+"+quality_damage_mod+"[quality_damage_mod]]]}}";
					console.log("damage_modifier_str: "+damage_modifier_str);
					
					var damage_step_modifier_str = "{{damage_step_modifiers=[["+values[row+"_damage_step_mod"]+"[attack row damage step modifier]+"+flat_blade_damage_step_mod+"[flat blade damage step_mod]+"+min_str_step_mod+"[+min_str_step_mod]+"+precision_strike_step_mod+"[Precision strike step_mod]"+thrust_damage_step_mod+"[Thrust damage step mod]]]}}";
					console.log("damage_step_modifier_str: "+damage_step_modifier_str);					
					
					var total_damage_step_mod = parseInt(values[row+"_damage_step_mod"])+flat_blade_damage_step_mod+min_str_step_mod + precision_strike_step_mod+thrust_damage_step_mod  ;	
					console.log("total_damage_step_mod: "+total_damage_step_mod);
									
					//var base_target=parseInt(values[skill_row+"_base_bcs"]);
					//console.log("base target from skill row base_bcs:"+base_target);	
					//var  raw_target=parseInt(values[skill_row+"_raw_bcs"]);
					//var  mod = parseInt(values[row+"_mod"]);
							
					 if (rollSource2=="meleewpns"){
						 console.log(typeof mod);
						  console.log(typeof min_str_bcs_mod);
						 console.log(typeof quality_bcs_mod);
						  console.log(typeof thrust_bcs_mod);
						 console.log(typeof range_mod);

						 
						 var  total_attack_modifiers  = mod+min_str_bcs_mod+quality_bcs_mod+thrust_bcs_mod+range_mod+second_strike_mod;
						 var attack_bcs_modifier_str = "{{modifiers=[["+mod+"[attack row modifier]+"+min_str_bcs_mod+"[Minimum Strength/Hands]+"+quality_bcs_mod+"[Quality]+"+thrust_bcs_mod+"[Thrust]+"+range_mod+"[Range]"+second_strike_mod+"[Second Strike]"+"]]}}";
					//find final damage
					// check if unarmed 
					let current_step  = 0;
				console.log("^^^^^^^^^^ damage_type e:"+damage_type);
					let base_damage = damage.toUpperCase();	
					weapon_list.forEach(item => {
						if (wpnName.toUpperCase().includes(item)){
							base_damage = unarmd_damage;
						}
						if (form_type.includes("BUTT STROKE")){
							base_damage = "1D3";
						}
					});
					//check if the damage incluse a +				
					let adds = 0; 
					 if (base_damage.includes("+")){
						 console.log("There is a +");
						 let damage_array = base_damage.split("+");
						 console.log("damage_array:"+damage_array);
						 current_step  = damage_steps[damage_array[0]];
						 adds = damage_array[1];
						 console.log("adds: "+adds);
					 } else {
						 current_step  = damage_steps[base_damage];
					 }		
					console.log("current_step:"+current_step);
					let modded_step = parseInt(current_step) + parseInt(total_damage_step_mod);
					console.log("modded_step:"+modded_step);
					let modded_damage_die = damage_die[modded_step];
					console.log("modded_damage_die:"+modded_damage_die);
					modded_damage="";
					if (adds!=0){
						modded_damage = modded_damage_die+"+"+adds
					} else {
						modded_damage = modded_damage_die;
					}
					if (total_damage_mod!=0){
						modded_damage = modded_damage+"+"+total_damage_mod; 
					}	
					
					console.log("modded_damage: "+modded_damage);	
					console.log("^^^^^^^^^^ damage_type 1: "+damage_type);					
					 
					 
				 } else if (rollSource2=="bowwpns"){
					 
					 var curRange =  values[row+"_curRange"];
					 let range_mod = 0;
					 let str_range_mod  =0	
					 
					 user_man_rating= Math.min(Math.ceil((str_cur/10)),4);
					 
					 if (user_man_rating < man_rating){
						str_range_mod = 0-((man_rating - user_man_rating)*4)
					 } else if (user_man_rating > man_rating){
						 str_range_mod = 0-((user_man_rating - man_rating)*2)
					 }
					 console.log("Overbowing / Underbowing mod: "+str_range_mod);
					 
					 let range_man_rating_mod = 0;
					 if (curRange=="Pnt Blnk"){
						 range_mod = 2;
						 range_man_rating_mod = 1;
					 } else if (curRange=="Lng"){
						range_mod = -4;
						range_man_rating_mod = -2;						 
					 }						 
					 console.log("£$£43 range_mod: "+range_mod);
					 var  total_attack_modifiers  = mod+arrow_type_bc_mod+range_mod+str_range_mod;
					 console.log("£$£43 total_attack_modifiers: "+total_attack_modifiers);
					 var attack_bcs_modifier_str="{{modifiers=[["+mod+"[attack row modifier]+"+arrow_type_bc_mod+"[Arrow type bc mod]+"+range_mod+"[Range mod]+"+str_range_mod+"[Overbowing / Underbowing mod  ] ]]}}";					  
					console.log("%%%%% Man rating 3:"+man_rating);
					man_rating = Math.max(man_rating+range_man_rating_mod,1);  
					console.log("%%%%% Man rating 4:"+man_rating);
                    console.log("%%%%% precision_strike_step_mod:"+precision_strike_step_mod);
					if (precision_strike_step_mod==1){
						modded_damage = man_rating+"D10"
					}	
					else { 	 
						modded_damage = man_rating+"D6"						
					}
					if (arrow_type=="Bowel Raker"){
						if (precision_strike_step_mod==1){
							modded_damage=man_rating+"D10+"+man_rating+"D3";
						} else {
							modded_damage=man_rating+"D6+"+man_rating+"D3";
						}
					} else if (arrow_type=="Armor Piercer") {
                       console.log("ap man_rating:"+man_rating);
						if (precision_strike_step_mod==1){
							modded_damage=man_rating+"D6";
						} else {
							modded_damage=man_rating+"D5";
						}
                         console.log("modded_damage:"+modded_damage);
					} else if (arrow_type=="Humming Bulb") {
						if (precision_strike_step_mod==1){
							modded_damage=man_rating+"D5";
						} else {
							modded_damage=man_rating+"D3";
						}
					}
					  
				 }  else if (rollSource2=="hurledwpns"){
					 console.log("DO HURLED WEAPON STUFF");
					 var curRange =  values[row+"_curRange"];
					 let range_mod = 0;
					 let range_step_mod = 0;
					 let precision_strike_step_mod = 0;
					 let base_damage = damage.toUpperCase();
					 let total_damage_mod = 0; //this may be need of a damage mod added to attack 					 
					 console.log("$%$%$% base damage: "+base_damage)
					 console.log("curRange: "+curRange);	
					if (curRange=="Shrt"){
						range_step_mod = 1;
					} else if (curRange=="Mdm"){
						range_mod = -2;
						range_step_mod = 0;				
					} else if (curRange=="Lng"){
						range_mod = -4;
						range_step_mod = -1;										
					}
					console.log("range_step_mod: "+range_step_mod);					
					if (okuden_name.toUpperCase().includes("PRECISION STRIKE")  || okuden_name.toUpperCase().includes("GENKOTSU-JUTSU"))
					{
						precision_strike_step_mod =1;
					};				 
					 var  total_attack_modifiers  = mod+range_mod;
					 console.log("£$£43 total_attack_modifiers: "+total_attack_modifiers);
					 var attack_bcs_modifier_str="{{modifiers=[["+mod+"[attack row modifier]+"+range_mod+"[Range mod]  ]]}}";

					let total_damage_step_mod = range_step_mod+precision_strike_step_mod;
					console.log(" total_damage_step_mod: "+ total_damage_step_mod);					


					 //get modded damage
					 let adds = 0; 
					 if (base_damage.includes("+")){
						 console.log("There is a +");
						 let damage_array = base_damage.split("+");
						 console.log("damage_array:"+damage_array);
						 current_step  = damage_steps[damage_array[0]];
						 adds = damage_array[1];
						 console.log("adds: "+adds);
					 } else {
						 console.log("There is NO +");
						 console.log("FIND CURRRENT STEP");
						 current_step  = damage_steps[base_damage];
					 }		
					console.log("current_step:"+current_step);
					let modded_step = parseInt(current_step) + parseInt(total_damage_step_mod);
					console.log("modded_step:"+modded_step);
					let modded_damage_die = damage_die[modded_step];
					console.log("modded_damage_die:"+modded_damage_die);
					modded_damage="";
					if (adds!=0){
						modded_damage = modded_damage_die+"+"+adds
						console.log("modded_damage 1a: "+modded_damage);
					} else {
						modded_damage = modded_damage_die;
						console.log("modded_damage 1b: "+modded_damage);
					}
					
					if (total_damage_mod!=0){
						modded_damage = modded_damage+"+"+total_damage_mod; 
					}	
					
					console.log("modded_damage: "+modded_damage);					 
					 					 
						

				 }

			}
			console.log("^^^^^^^^^^ damage_type 2: "+damage_type);					
			let adjusted_bcs_target = 0;
			if (avg_skill.length > 0 && use_avg==1){
				//take the code from findSkill and put it in here
				// the repeat the code in the else
					
				console.log("avg_skill ssss: "+avg_skill);
				avg_skill = avg_skill.toUpperCase();
				let avg_bcs = 0;
				if (avg_skill=="SWIMMING"){
					console.log("avg Markre 1");
					avg_with_str = "Swimming";
					avg_with = 1;
					avg_bcs =  Math.ceil((parseInt(values.SwimBCS)+raw_target)/2);
					console.log("avg_bcs 1: "+avg_bcs);		
					if (bonus==1){
						console.log("avg Markre 2");
						avg_bcs = avg_bcs + level;
						console.log("avg_bcs 2: "+avg_bcs);						
					}
					console.log("avg Markre 3");
				} else {
					console.log("%^%^%^%^%^%^%^ Using the row id of the avg skill stored in the attack row");
					//use the row id for averaging skill stored with the attack
					console.log("avg Marker 1a");
					avg_with_str = avg_skill.toProperCase();;
					avg_with = 1;
					console.log("avg_skill_raw_bcs 1a: "+avg_skill_raw_bcs);
					console.log("raw_target 1a: "+raw_target);
					avg_bcs =  Math.ceil((avg_skill_raw_bcs+raw_target)/2);
					console.log("avg_bcs 1a: "+avg_bcs);		
					if (bonus==1){
						console.log("avg Marker 2");
						avg_bcs = avg_bcs + level;
						console.log("avg_bcs 2a: "+avg_bcs);						
					}
					console.log("avg Marker 3a");					
					
					
				}
				
				
				console.log("avg Markre 4");
				console.log("avg_bcs: "+avg_bcs);
                console.log("check if avg is less than base")
                console.log("Marker 1")
				if (avg_bcs < base_target){
					console.log("Marker 2a")
					if (combat==1){
						adjusted_bcs_target = avg_bcs+total_attack_modifiers
					} else {
                        if (rollType=="spell"){
                            let knowledge = parseInt(values[skill_row+"_knowledge"]);
                            let score = 0; 
                            if (button_name=="npc_spell_button"){
                                let raw_magic_bcs = base_target - level;
                                if  (raw_magic_bcs==19){
                                    score = 99;
                                }  else {
                                    score = Math.ceil(raw_magic_bcs*5,99);    
                                }                                    
                            }
                            else {   
                                score = parseInt(values[avg_skill_row+"_score"   ]);
                            }            
                            let wound_penalty = parseInt(values["shugenja_wound_penalty"]);
                            let mental_loss_penalty = parseInt(values["shugenja_mental_loss_mod"]);
                            console.log("<------------ spell knowledge -------------->")
                            console.log("score: "+score);
                            console.log("knowledge: "+knowledge);
                            let complexity_factor =  Math.floor(score-knowledge/10);
                            console.log("complexity_factor: "+complexity_factor);
                            console.log("<------------ spell knowledge -------------->")
                            adjusted_bcs_target = avg_bcs+mod+wound_penalty+mental_loss_penalty+complexity_factor;
                            mod_str = "{{modifiers=[["+mod+"["+getTranslationByKey("modifier")+"]+"+wound_penalty +"["+getTranslationByKey("wound_penalty")+"]+"+ mental_loss_penalty +"["+getTranslationByKey("mental_loss_penalty")+"]+"+complexity_factor+"["+getTranslationByKey("complexity factor")+"]"+"]]}}"
                        } else {
                            adjusted_bcs_target = avg_bcs+mod
                            mod_str = "{{modifiers=[["+mod+"[modifier]]]}}"	
                        }    
					}	
				} else {
                    console.log("Marker 2b")
					if (combat==1){
						adjusted_bcs_target = base_target+total_attack_modifiers
					} else {
                        if (rollType=="spell"){
                            let knowledge = parseInt(values[skill_row+"_knowledge"]);
                            let score = parseInt(values[avg_skill_row+"_score"   ]);
                            let wound_penalty = parseInt(values["shugenja_wound_penalty"]);
                            let complexity_factor =  Math.floor(score-knowledge/10);
                            let mental_loss_penalty = parseInt(values["shugenja_mental_loss_mod"]);                            
                            adjusted_bcs_target = avg_bcs+mod+wound_penalty+mental_loss_penalty+complexity_factor;
                            mod_str = "{{modifiers=[["+mod+"["+getTranslationByKey("modifier")+"]+"+wound_penalty +"["+getTranslationByKey("wound_penalty")+"]+"+ mental_loss_penalty +"["+getTranslationByKey("mental_loss_penalty")+"]+"+complexity_factor+"["+getTranslationByKey("complexity factor")+"]"+"]]}}"                            
                        } else {
                            adjusted_bcs_target = base_target+mod;
                            mod_str = "{{modifiers=[["+mod+"[modifier]]]}}"							
                        }
					}
					console.log("avg Markre 6");
				}
			
			} else {
                console.log("Marker3 b start")
				if (combat==1){
					console.log("base_target: "+base_target);
					console.log("total_attack_modifiers: "+total_attack_modifiers);
					adjusted_bcs_target = base_target+total_attack_modifiers;
				} else {
					console.log("rollType: "+rollType);
					console.log("rollSource2: "+rollSource2);
					console.log("profession: "+values.profession);
					if (rollType == "capability" && rollSource2=="Magic" && values.profession=="Shugenja"){	
                        console.log("capability")	                            
						let shugenja_wound_penalty = parseInt(values.shugenja_wound_penalty);
						adjusted_bcs_target = base_target+mod+shugenja_wound_penalty;
						mod_str = "{{modifiers=[["+mod+"[modifier] +"+shugenja_wound_penalty+" [shugenja woundpenalty]]]}}"
                    } else if (rollType=="spell"){
                        console.log("spell")	                                                    
                        let knowledge = parseInt(values[skill_row+"_knowledge"]);
                        console.log("knowledge: "+knowledge);
                        let score = 0; 
                        if (button_name=="npc_spell_button"){
                            console.log("use npc magic bcs as score");
                            let raw_magic_bcs = base_target - level;
                            if  (raw_magic_bcs==19){
                                score = 99;
                            }  else {
                                score = Math.ceil(raw_magic_bcs*5,99);    
                            }                                    
                        }
                        else {   
                             console.log("use magoc skill score");
                            score = parseInt(values[avg_skill_row+"_score"   ]);
                        } 
                        console.log("score: "+score);
                        let wound_penalty = parseInt(values["shugenja_wound_penalty"]);
                        let mental_loss_penalty = parseInt(values["shugenja_mental_loss_mod"]);
                        console.log("<------------ spell knowledge -------------->")
                        console.log("avg_skill_row: "+avg_skill_row);
                        console.log("score: "+score);
                        console.log("knowledge: "+knowledge);                        
                        let complexity_factor = -99
                        if (score >= knowledge){
                            complexity_factor =  Math.floor((score-knowledge)/10);
                        }                        
                        console.log("$$$$$$$$$$$$$$wound_penalty: "+wound_penalty);
                        console.log("$$$$$$$$$$$$$$ mental_loss_penalty: "+ mental_loss_penalty);                        
                        console.log("$$$$$$$$$$$$$$complexity_factor: "+complexity_factor);
                        adjusted_bcs_target =  base_target+mod+wound_penalty+mental_loss_penalty+complexity_factor;
                        mod_str = "{{modifiers=[["+mod+"["+getTranslationByKey("modifier")+"]+"+wound_penalty +"["+getTranslationByKey("wound_penalty")+"]+"+ mental_loss_penalty +"["+getTranslationByKey("mental_loss_penalty")+"]+"+complexity_factor+"["+getTranslationByKey("complexity factor")+"]"+"]]}}"                      
					} else {
                        console.log("$$$$$$$$$$$$$$did the default")
						adjusted_bcs_target = base_target+mod;
						mod_str = "{{modifiers=[["+mod+"[modifier]]]}}"
					}		
				}
                 console.log("Marker3 b end")
			}
			console.log("adjusted_bcs_target: "+adjusted_bcs_target);
			//apply the multiplier for full half or quafter bcs for secondary phase attacks and lightning strike.
			adjusted_bcs_target = Math.floor(adjusted_bcs_target * bcs_multiplier);
			console.log("adjusted_bcs_target with mulipltier: "+adjusted_bcs_target);
			console.log("^^^^^^^^^^ damage_type 3: "+damage_type);					

			//All damage modifiers
			//{{roll=[[1D20]]}}
			if (combat==1){
				var roll_obj = ["&{template:roll} {{result=[[0]]}} {{effect=[[0]]}} {{effect_crit=[[2D6]]}} {{combat_critical_success=[[1D10]]}}  {{combat_special_effect=[[1D20]]}} {{critical_special_effect_str=[[0]]}} {{limb_sever=[[1D100]]}} {{which_limb=[[1D6]]}} {{critical_damage=[[2D10]]}} {{critical_damage_str=[[0]]}} {{critical_reduction_str=[[0]]}} {{raw_used=[[0]]}} {{name=@{character_name}}} {{roll=[[1D20]]}} {{roll_success=[[0]]}} {{raw_roll=[[1d20]]}} {{roll_for="+skill_name+"}} {{avg_with_str=[[0]]}} {{avg_with=[[0]]}} {{adjusted_bcs_target=[["+adjusted_bcs_target+"]]}} {{raw_target=[["+raw_target+"]]}} {{combat=[["+combat+"]]}} {{attack_name="+wpnName+"}}  {{form_type="+form_type.toProperCase()+"}}    {{fumble_str=[[0]]}} {{was_crit=[[0]]}} {{critical_str=[[0]]}} {{fumble_damage=[[1D6]]}} {{show_damage=[["+show_damage+"]]}}  {{damage_roll=[["+modded_damage+"]]}}  {{damage_type="+damage_type+"}}  {{is_bow=[["+is_bow+"]]}} {{arrow_type="+arrow_type+"}} {{do_raw=[[0]]}} {{raw_roll=[[0]]}}  {{counter_roll=[[1D20]]}} {{counter=[[0]]}} "]+attack_bcs_modifier_str;
				if (bcs_multiplier!=1){
					if (bcs_multiplier==0.5){
						roll_obj=roll_obj+"{{show_multiplier=[[1]]}} {{multiplier_str=½}}"
					} else {
						roll_obj=roll_obj+"{{show_multiplier=[[1]]}} {{multiplier_str=¼}}"
					}
				}
				console.log("^^^^^^^^^^^^^^^^^^form_type:"+form_type)
				if (form_type=="BASH"){
					roll_obj=roll_obj+" {{form=[[1]]}} {{bash_roll=[[1D100]]}} {{bash_mod=[[?{Bash Mod.|0}]]}} {{bash_target=[[0]]}}";
				} else if (form_type=="DISARM"){
					roll_obj=roll_obj+" {{form=[[3]]}} {{break=[[0]]}} {{thrown_distance=[[1D3]]}}";
				} else if (form_type=="DISARM - BREAK"){
					roll_obj=roll_obj+" {{form=[[3]]}}{{break=[[1]]}} {{break_roll=[[1D10]]}} {{break_target=[[6+?{Target Weapon Quality|Average,0|Inferior, -1|Good,1|Superior,2|Master,3}]] }} ";
				} else if (form_type=="ENTANGLE"){
					roll_obj=roll_obj+" {{form=[[4]]}}";				
				} else if (form_type=="GRAPPLE"){
					roll_obj=roll_obj+" {{form=[[5]]}}";
				} else if (form_type=="THROW - TAKEDOWN"){
					roll_obj=roll_obj+" {{form=[[9]]}}  {{throw_roll=[[1D10]]}} {{throw=[[1]]}}  ";
				} else if (form_type=="THROW - TOSS"){
					roll_obj=roll_obj+" {{form=[[9]]}}  {{throw_roll=[[1D10]]}} {{throw_distance=[[1D3]]}} {{throw=[[2]]}}";					
				} else if (form_type=="THRUST"){
					roll_obj=roll_obj+" {{form=[[10]]}} {{thrust_roll=[[1D100]]}} {{thrust_target=[[0]]}}";
				} else if (form_type=="TRIP"){
					roll_obj=roll_obj+" {{form=[[11]]}}";
				} 				
				else {
					roll_obj=roll_obj+" {{form=[[8]]}}";
				}

				
			} else {
				var roll_obj = ["&{template:roll} {{result=[[0]]}} {{effect=[[0]]}} {{{raw_used=[[0]]}} {{name=@{character_name}}} {{roll=[[1D20]]}} {{roll_success=[[0]]}} {{raw_roll=[[1d20]]}} {{roll_for="+skill_name+"}} {{avg_with_str=[[0]]}} {{avg_with=[[0]]}} {{adjusted_bcs_target=[["+adjusted_bcs_target+"]]}} {{raw_target=[["+raw_target+"]]}} {{do_raw=[["+do_raw+"]]}}  {{combat=[["+combat+"]]}} {{show_damage=[["+show_damage+"]]}}"]+mod_str;
                
                
                if (rollType=="spell"){
                    //ask for level of spell

                    var duration = values[skill_row+"_duration"];
                    var duration_base = "";
                    var get_level_of_spell = false;
                    //var spell_die_roll = values[skill_row+"_die_roll"];
                    //spell_die_roll = spell_die_roll.trim().toUpperCase()
                    //console.log("spell_die_roll: "+spell_die_roll);
                    duration_obj = getDurationBase(duration,parseInt(values["level"]));
                    duration_base = duration_obj.duration_base;
                    console.log("arghh duration_base: "+duration_base); 
                    get_level_of_spell = duration_obj.get_level_of_spell;
                    console.log("arghh get_level_of_spell: "+get_level_of_spell); 
                    var cost = values[skill_row+"_cost"];
                    if (cost.includes("LoS")){
                        get_level_of_spell =  true; 
                    }                        
                    console.log("skill_row: "+skill_row);
                    console.log(`do roll x values ${JSON.stringify(values)}`);                    
                    console.log("************Duration: "+duration);
                    console.log("************duration_base: "+duration_base);
                    roll_obj = roll_obj + " {{spell=[[1]]}}  {{duration_str=[[0]]}} {{cost_str=[[0]]}} "
                    if (duration_base.length >0 ){  
                        console.log("add the duration die roll to the roll object")
                         roll_obj = roll_obj + "{{duration_base=[["+duration_base+"]]}}"
                    }
                    if (get_level_of_spell){ 
                       roll_obj = roll_obj + "{{spell_level=[[?{Level of Spell|"+values["level"]+"}]]}}"     
                    }
                    //if (spell_die_roll.length > 0){
                    //    roll_obj = roll_obj + "{{spell_die_roll=[["+spell_die_roll+"]]}}"
                   //}
                    
                }
				
				if (rollType=="status"){
					roll_obj = roll_obj + "{{status_result=[[1]]}}" 	
				}
			}
			console.log(`roll_obj: ${JSON.stringify(roll_obj)}`);
			startRoll(roll_obj, (results) => {
				
				console.log(`roll infor ${JSON.stringify(results)}`);				
				const roll = results.results.roll.result;
				if (combat==1){
					var combat_critical_success = results.results.combat_critical_success.result;
					var effect_crit = results.results.effect_crit.result; /*2D6*/
					var combat_special_effect = results.results.combat_special_effect.result; /*1D20*/
					var critical_special_effect_str = 0;
					var limb_sever = results.results.limb_sever.result; /*1D100*/
					var damage_roll =  results.results.damage_roll.result;
					var which_limb =  results.results.which_limb.result;
					var fumble_damage =  results.results.fumble_damage.result;
					var critical_damage_str = 0;
					var critical_reduction_str = 0;
					var fumble_str = 0;
					var critical_damage =  results.results.critical_damage.result;
					var was_crit=0;
					var thrust_target=0;
					var bash_target=0;
				}					
				console.log("status_result: "+status_result);
				const raw_roll = results.results.raw_roll.result;
				let crit =   Math.max(Math.round(adjusted_bcs_target/10),1);
				let effect = 0;
				let raw_used =0;
				let roll_success = 0;
				//test for crti less < 2 in the template when checking for fumbles
				let roll_result = ""
				if (adjusted_bcs_target <1){
					//if the adjusted BCS is less then one then check the raw roll if succeeds then t it a success thre is no chnace of a crit 
					// rolls of 2o on the raw roll do not force a fumble
					if (roll == 20){
							roll_result="Critical Failure";
							effect = adjusted_bcs_target-roll
					} else {
						if (button_name=="act_raw" || do_raw==1 || rollType=="status"){
							console.log("marker 3aaaa 4")
							roll_result="Failure";
						} else 
						{
							raw_used = 1;
							if (raw_roll <= raw_target){
								roll_result="Success";
								roll_success="1";
								effect=0
							} else{
								roll_result="Failure";
								effect = adjusted_bcs_target-roll
							}
						}	
					}
				} 
				else if (adjusted_bcs_target ==1){
					console.log("why are you here")
					// if the adjusted BCS = 1 the check the raw roll. If that roll succeeds it is crit
					//if the adjusted BCS is less then one then check the raw roll if succeeds then t it a success thre is no chnace of a crit 
					// rolls of 2o on the raw roll do not force a fumble
					
					if (roll == 20){
							roll_result="Critical Failure";
							effect = adjusted_bcs_target-roll
					} else {
						if (button_name=="act_raw" || rollType=="status"){
							console.log("marker 5b");
							if (roll==1){
								roll_result="Success";
								roll_success="1";
							} else 
							{
							  roll_result="Failure"
							}
						} else
						{	
							raw_used = 1;
							if (raw_roll==1){
								roll_result="Critical Success";
							}  else if (raw_roll<=raw_target){
								roll_result="Success";
								roll_success="1";
							} else {
								roll_result="Failure";
							}
						}
						effect = adjusted_bcs_target-roll						
					}
					
				}
				else {
					if (roll <= adjusted_bcs_target){
						if (roll <= crit){
							roll_result="Critical Success";
							roll_success="1";
						}	else {
							roll_result="Success"
							roll_success="1";							
						}
							
					} else{
						if (adjusted_bcs_target < 20 && roll==20){
							roll_result="Critical Failure"
						} else {
							roll_result="Failure"
						}							
					}
					effect = adjusted_bcs_target-roll
				}
				if (rollType=="status"){
					if (effect < -6){
						var status_result = 1
					} else if (effect >= -6 && effect <= -3){
						var status_result = 2
					} else if (effect >= -2 && effect <= 0){
						var status_result = 3
					} else if (effect >= 1 && effect <= 3){
						var status_result = 4
					} else if (effect >= 4 && effect <= 6){
						var status_result = 5
					} else if (effect >= 7 && effect <= 10){
						var status_result = 6
					} else if (effect >= 11 && effect <= 15){
						var status_result = 7
					} else if (effect >= 16){
						var status_result = 8
					}
				} else {
					var status_result = 0;
				}

				//combat_critical_success 1d10 roll to see if thre is a damage mutiplier or roll on crtical special effect table
				//effect_crit = results.results.effect_crit.result; /*2D6*/
				//combat_special_effect = results.results.combat_special_effect.result; /*1D20*/
				//limb_sever = results.results.limb_sever.result; /*1D100*/
				//critical_failure = results.results.critical_failure.result; /*1D20*/				
				
				if (combat==1 && roll_result=="Critical Success"){
					var roll_critical_effect=0;
					var critical_str = 0;
					was_crit = 1;
					if (form_uses_effect==0){
						//combat_critical_success 
						//Die Roll Result
						//1-3 Double the normal damage done
						//4-5 Triple the normal damage done
						//6-8 Special Effect. Roll 1D20 on Special Effect Table below
						//9 	Double damage plus Special Effect
						//10 	Triple damage plus Special Effect
						console.log("&&&&&&combat_critical_success: "+combat_critical_success);
						if (combat_critical_success >= 1 && combat_critical_success <=3 ){
							// x2 Damage
							critical_str = "Double damage";
							console.log("!!!!!!!!!damage_roll before double:"+damage_roll)
							damage_roll = damage_roll*2;
							console.log("!!!!!!!!!damage_roll after double:"+damage_roll)
						} 
						else if (combat_critical_success >= 4 && combat_critical_success <=5 ){
							// x3 Damage
							critical_str = "Triple damage";	
							console.log("!!!!!!!!!damage_roll before Triple:"+damage_roll)
							damage_roll = damage_roll*3;
							console.log("!!!!!!!!!damage_roll after Triple:"+damage_roll)
						}
						else if (combat_critical_success >= 6 && combat_critical_success <=8 ){
							roll_critical_effect=1;	
							//Special Effect. only
						} else if (combat_critical_success == 9){
							// x2 Damage	
							critical_str = "Double damage";
							roll_critical_effect=1;
							console.log("!!!!!!!!!damage_roll before double:"+damage_roll)							
							damage_roll = damage_roll*2;
							console.log("!!!!!!!!!damage_roll after double:"+damage_roll)							
						} else if (combat_critical_success == 10){
						   roll_critical_effect=1;
						   // x3 Damage
						   critical_str = "Triple damage"
						   console.log("!!!!!!!!!damage_roll before Triple:"+damage_roll)
						   damage_roll = damage_roll*3;
						   console.log("!!!!!!!!!damage_roll after Triple:"+damage_roll);						   
						}
					}
					console.log("*******roll_critical_effect:"+roll_critical_effect)
					console.log("*******combat_special_effect: "+combat_special_effect)
					if (form_uses_effect==1 || roll_critical_effect==1){
						if (form_uses_effect==1){
							//effect
							combat_special_effect = effect_crit+effect ;
							//use this total and and look up critical effect
						} 
						if (combat_special_effect >=1 && combat_special_effect <= 2){
							critical_special_effect_str = "Target Dazed. Target forfeits next Available Action Phase";
						} else 
						if (combat_special_effect >= 3 && combat_special_effect <= 4){
							critical_special_effect_str = "Target knocked back 1 yard and Dazed";
						}  else 
						if (combat_special_effect >= 5 && combat_special_effect <= 6){
							critical_special_effect_str = "Target knocked down";
						}  else 
						if (combat_special_effect == 7){
							critical_special_effect_str = "Target knocked down and Dazed";
						}  else 
						if (combat_special_effect >= 8 && combat_special_effect <= 9){
							critical_special_effect_str = "Target Stunned. Target forfeits any Available Action Phases remaining in that Detailed Turn and all on the next Detailed Turn. The target is considered Passive during this time and loses any benefits for Defense";
						}  else 
						if (combat_special_effect >= 10 && combat_special_effect <= 11){
							critical_special_effect_str = "Target knocked back 1 yard and Stunned";
						}  else 
						if (combat_special_effect == 12){
							critical_special_effect_str = "Target knocked down and Stunned";
						} else 
						if (combat_special_effect == 13){
							critical_special_effect_str = "Target Stunned and must make a Health Saving Throw to avoid being knocked unconscious";
						} else 
						if (combat_special_effect >= 14 && combat_special_effect <= 15){
							let limb_str = "Left";
							if (which_limb >= 1 && which_limb <= 3){
								limb_str = "Right";
							}
							critical_special_effect_str = `Target's ${limb_str} arm or forelimb Disabled` 
							critical_damage_str = `Critical Damage: ${critical_damage}`
							critical_reduction_str = "Reduce DFT by 50%";							
						} else 
						if (combat_special_effect >= 16 && combat_special_effect <= 17){
							let limb_str = "Left";
							if (which_limb >= 1 && which_limb <= 3){
								limb_str = "Right";
							}
							critical_special_effect_str = `Target's ${limb_str} leg or hindlimb Disabled` 				
							critical_damage_str = `Critical Damage: ${critical_damage}`;
							critical_reduction_str = "Reduce SPD by 50%";							
						} else 
						if (combat_special_effect == 18){
							let eye_str = "Left";
							if (which_limb >= 1 && which_limb <= 3){
								eye_str = "Right";
							}							
							critical_special_effect_str = `Target's ${eye_str} eye is struck`;
							critical_damage_str= `Critical Damage ${critical_damage}` ;
							critical_reduction_str = "Reduce DFT by 50%.See pg 65 for further details";
						}  else 
						if (combat_special_effect == 19){
							critical_special_effect_str = "Target is rendered unconscious";
						} else 
						if (combat_special_effect >= 20){
							critical_special_effect_str = "Target is killed outright";
						} 
						console.log("*******critical_special_effect_str: "+critical_special_effect_str);
						
					} 
					
				}
				
				
				if (combat==1 && roll_result=="Critical Failure"){
					if (rollSource2=="meleewpns"){
						
						if (combat_special_effect >= 1 && combat_special_effect <= 5){
							fumble_str = "No special effect. A normal miss occurs";
						}
						else 
						if (combat_special_effect >= 6 && combat_special_effect <= 7){
							fumble_str = "Attacker gives himself a Daze Special Effect";
						}
						else 
						if (combat_special_effect >= 8 && combat_special_effect <= 9){
							fumble_str = "Attacker gives himself a Stun Special Effect";
						}
						else
						if (combat_special_effect >= 10 && combat_special_effect <= 11){
							fumble_str = "Attacker loses his balance. He suffers a Daze Special Effect and must make a Speed Saving Throw to avoid falling down";
						}
						else
						if (combat_special_effect >= 12 && combat_special_effect <= 13){
							fumble_str = "Attacker falls down and suffers a Daze Special Effect";
						}
						else
						if (combat_special_effect >= 14 && combat_special_effect <= 15){
							fumble_str = "Attacker falls down and suffers a Stun Special Effect";
						}
						else				
						if (wpnName == "UNARMED" || wpnName == "JUJUTSU" || wpnName ==  "ATEMI-WAZA" || wpnName ==  "SUMAI"){
							//unarmed combat
							
							if (combat_special_effect >= 16 && combat_special_effect <= 17){
								fumble_str = "Attacker damages the limb used in the attack. It is useless for 24 hours. A Health Saving Throw will reduce the time by the Effect Number in hours. If the Saving Throw fails, the limb has taken Critical Damage equal to the absolute value of the failed Effect Number";
							}
							if (combat_special_effect >= 18 && combat_special_effect <= 19){
								fumble_str = "Attacker Disables the limb used in the attack";
							}
							//`roll_obj: ${JSON.stringify(roll_obj)}`
							if (combat_special_effect == 20){
								let half_damage=Math.ceil(damage_roll/2);
								fumble_str = "Attacker manages to injure himself. If using a Striking attack,he receives " +half_damage+"+points of damage. If using some other form of attack, he receives "+fumble_damage+" points of Subdual damage";
							}							
						} else {
							//armed combat
							if (combat_special_effect >= 16 && combat_special_effect <= 17){
								fumble_str = "Attacker treated as receiving a successful Disarm attack of the Remove weapon form";
							}
							if (combat_special_effect >= 18 && combat_special_effect <= 19){
								fumble_str = "Attacker treated as receiving a successful Disarm attack of the Break weapon form";
							}
							if (combat_special_effect == 20){
								let half_damage=Math.ceil(damage_roll/2);
								fumble_str = "Attacker inadvertently hits himself. Attacker receives "+half_damage+" points of damage";
							}									
						}	
					}
					if (rollSource2=="bowwpns"){
                        //bows
						if (combat_special_effect >= 1 && combat_special_effect <= 5){
							fumble_str = "No special effect. A normal miss occurs";
						}
						else 
						if (combat_special_effect >= 6 && combat_special_effect <= 8){
							fumble_str = "String frays. Bow functions at 1 less man-rating than normal.If multiple fray results reduce Man-Rating below 1, thebowstring breaks";
						}
						else 
						if (combat_special_effect >= 9 && combat_special_effect <= 11){
							fumble_str = "String breaks. Bow is useless until restrung. To restring the bow the character must have a spare string. He will choose the Option for Loosing with the type of bow to be restrung and must make a Strength Saving Throw. Additional attempts to string the bow do not receive a bonus. Each attempt stands on its own";
						}
						else
						if (combat_special_effect >= 12 && combat_special_effect <= 14){
							fumble_str = "Bow cracks. The effective man-rating of the bow is lowered by 1. If this reduces the man-rating to 0 the bow is broken";
						}
						else
						if (combat_special_effect >= 15 && combat_special_effect <= 17){
							fumble_str = "Bow breaks";
						}
						else
						if (combat_special_effect >= 18 && combat_special_effect <= 20){
							fumble_str = " Arrow breaks";
						}						
                    }  
					if (rollSource2=="hurledwpns"){
                        //hurled
						if (combat_special_effect >= 1 && combat_special_effect <= 5){
							fumble_str = "No special effect. A normal miss occurs";
						}
						else 
						if (combat_special_effect >= 6 && combat_special_effect <= 10){
							fumble_str = "Weapon breaks on impact";
						}
						else 
						if (combat_special_effect >= 11 && combat_special_effect <= 15){
							fumble_str = "Weapon lost and unrecoverable";
						}
						else
						if (combat_special_effect >= 16 && combat_special_effect <= 17){
							let half_damage=Math.ceil(damage_roll/2);
							fumble_str = "Weapon thrown wildly. All characters in area are possible targets. Gamesmaster determines one at random and uses the attacker's Raw BCS to determine if the weapon hits "+half_damage+ " points of damage are done";
						}
						else
						if (combat_special_effect >= 18 && combat_special_effect <= 19){
							fumble_str = "Attacker damages hsi throwing arm. It is useless for 24 hours. A Health Saving Throw will reduce the time by the Effect Number in hours. If the Saving Throw fails, the limb has taken Critical Damage equal to the absolute value of the failed Effect Numbe";
						}
						else
						if (combat_special_effect == 20){
							fumble_str = "Attacker Disables his throwing arm";
						}						
                    }								
				}
				
				if (combat==1){  
					if (form_type=="THRUST"){
						console.log(JSON.stringify(results.results));
						thrust_target=damage_roll;	
						console.log("**************thrust_target: "+thrust_target);
					} else if (form_type=="BASH") {
						console.log(JSON.stringify(results.results));
						console.log("damage_roll: "+damage_roll);
						console.log("bash_mod: "+results.results.bash_mod.result);
						bash_target=damage_roll+results.results.bash_mod.result;	
						console.log("**************bash_target: "+bash_target);						
					}
				}

               if (rollType=="spell"){
                   console.log("spell marker 1")
                    var cost_str =  cost
                    if (cost.includes("LoS")){
                        const spell_level = results.results.spell_level.result;
                        const cost_array = cost.split("xLoS")
                        const LoS_muliptlier = cost_array[0];
                        cost_str = spell_level * LoS_muliptlier;
                        console.log("total spell cost: "+cost_str)    
                    } else if(cost=="Kn/10"){
                        cost_str = ""+Math.ceil(parseInt(values[skill_row+"_knowledge"])/10);
                    }                        
                    var duration_str = ""
                    if (duration=="-"){
                        duration_str ="-"
                    } else if (duration=="10  minutes"){
                        duration_str ="10 "+getTranslationByKey("Minutes");
                    }    
                    else if (duration=="10 DT x LoC"){
                        duration_str  = 10*parseInt(values["level"])+" "+getTranslationByKey("DT");   
                    }
                    else if (duration=="10 minutes x LoC."){
                        duration_str  = 10*parseInt(values["level"])+" "+getTranslationByKey("Minutes");     
                    }
                    else if (duration=="1D10 DT + LoC"){
                       duration_str = results.results.duration_base.result+parseInt(values["level"])+" "+getTranslationByKey("DT"); 
                    }
                    else if (duration=="1D10 DT per LoC."){
                       duration_str = results.results.duration_base.result+" "+getTranslationByKey("DT");
                    }
                    else if (duration=="1D6 DT"){
                        duration_str = results.results.duration_base.result+" "+getTranslationByKey("DT");
                    }
                    else if (duration=="1D6 DT per LoC"){
                        duration_str = results.results.duration_base.result+" "+getTranslationByKey("DT");
                    }
                    else if (duration=="1D6+LoS in DT"){
                        duration_str = results.results.spell_level.result+results.results.duration_base.result+" "+getTranslationByKey("DT");
                    }
                    else if (duration=="20 minutes x LoC"){
                        duration_str = parseInt(values["level"])*20+" "+getTranslationByKey("Minutes");
                    }
                    else if (duration=="2D6 + LoC DT"){
                        duration_str = results.results.duration_base.result+parseInt(values["level"])+" "+getTranslationByKey("DT"); 
                    }
                    else if (duration=="1 hour x LoC"){
                        duration_str = parseInt(values["level"])+" "+getTranslationByKey("Hours"); 
                    }                    
                    else if (duration=="Special"){
                        duration_str =  getTranslationByKey("Special");
                    }
                    else if (duration=="Variable"){
                        duration_str = getTranslationByKey("Variable");
                    }
                    else if (duration=="1 hour"){
                        duration_str = getTranslationByKey("1 hour");
                    }                    
                    
                    //if (spell_die_roll.length > 0){
                    //    var die_roll_str = ""
                    //    console.log(">>>>>>>>>>>>>> skill_name: "+skill_name+" <<<<<<<<<<<<<<<<<<<"); 
                    //}
                    
                    duration_str =  getTranslationByKey("Duration")+": " +duration_str; 
                    cost_str = getTranslationByKey("Cost")+": " + cost_str                    
                    console.log("duration_str:"+duration_str);
                }                    

				
				console.log("adjusted_bcs_target:"+adjusted_bcs_target);
				console.log("avg_with_str:"+avg_with_str);
				console.log("avg_with:"+avg_with);
console.log("!!!!!!!!!!!!!!!critical_str:"+critical_str);				
				console.log("finish roll");
				finishRoll(
					results.rollId,
					{
						avg_with_str:avg_with_str,
						avg_with:avg_with,
						result: roll_result,
						effect: effect,
						raw_used: raw_used,
						damage_roll: damage_roll,
						critical_str: critical_str,
						critical_special_effect_str:critical_special_effect_str,
						critical_damage_str:critical_damage_str ,
						critical_reduction_str:critical_reduction_str,
                        duration_str:duration_str,
                        cost_str:cost_str,
						was_crit: was_crit,
						thrust_target: thrust_target,
						bash_target: bash_target,
						fumble_str: fumble_str,
						arrow_type: arrow_type,
						roll_success: roll_success
						
					}
				);
			});
			
		});
	};
	//setup attribute listeners
	
	const attributes = ["str_perm","str_mod","str_spell_mod","str_st_mod","str_st_spell_mod","dft_perm","dft_mod","dft_spell_mod","dft_st_mod","dft_st_spell_mod","spd_perm","spd_mod","spd_spell_mod","spd_st_mod","spd_st_spell_mod","hlh_perm","hlh_mod","hlh_spell_mod","hlh_st_mod","hlh_st_spell_mod","wit_perm","wit_mod","wit_spell_mod","wit_st_mod","wit_st_spell_mod","wil_perm","wil_mod","wil_spell_mod","wil_st_mod","wil_st_spell_mod","level","damage_mod_focus","damage_mod_spell_mod","bap_focus","bap_spell_mod","mna_focus","mna_spell_mod","zanshin_mod","zanshin_spell_mod","bma_focus","bma_spell_mod","profession","bap","mna","zanshin","zanshin_focus","enc_pen","enc_reduction","shugenja_wound_penalty"];
	

attributes.forEach(attribute => {

	on(`change:${attribute}`, function(info) {
		const source = info.sourceAttribute;
		console.log("source: " + source);
		processListeners(source);
	});
});



function getDurationBase(duration,level){
    let duration_base = "";
    let get_level_of_spell = false;    
    if (duration=="-"){
    } else if (duration=="10  minutes"){
        duration_base="10";
    }    
    else if (duration=="10 DT x LoC"){
        duration_base="10";
    }
    else if (duration=="10 minutes x LoC."){
        duration_base="10";
    }
    else if (duration=="1D10 DT + LoC"){
        duration_base="1d10";
    }
    else if (duration=="1D10 DT per LoC."){
        duration_base=level+"D10";
    }
    else if (duration=="1D6 DT"){
        duration_base="1D6";
    }
    else if (duration=="1D6 DT per LoC"){
        duration_base=level+"D6";
    }
    else if (duration=="1D6+LoS in DT"){
        duration_base="1D6";
        get_level_of_spell = true;                        
    }
    else if (duration=="20 minutes x LoC"){
       duration_base="20";
    }
    else if (duration=="2D6 + LoC DT"){
        duration_base="2D6";
    }
    else if (duration=="5 x LoS."){
        duration_base="5";
        get_level_of_spell = true;
    }
    else if (duration=="1 hour x LoC"){
        duration_base="1";
    }
    else if (duration=="Special"){
    } 

    var duration_obj = {duration_base:duration_base,get_level_of_spell:get_level_of_spell};
    return duration_obj;
}


function processListeners(source){

		if (source == "spd_cur" || source == "wil_cur" || source == "dft_cur" || source == "zanshin_focus" || source == "level") {
			console.log("prosess zanshin");
			getAttrs(["wil_perm", "wil_mod", "wil_spell_mod", "dft_perm", "dft_mod", "dft_spell_mod", "spd_perm", "spd_mod", "spd_spell_mod", "level", "zanshin_focus", "enc_pen", "enc_reduction"], function(pvalue) {
				console.log("pvalue" + JSON.stringify(pvalue));
				setZanshin(pvalue.wil_perm, pvalue.wil_mod, pvalue.wil_spell_mod, pvalue.dft_perm, pvalue.dft_mod, pvalue.dft_spell_mod, pvalue.spd_perm, pvalue.spd_mod, pvalue.spd_spell_mod, pvalue.level, pvalue.zanshin_focus);
			});
		}

		switch (source) {
			case "damage_mod_spell_mod":
			case "damage_mod_focus":
			case "str_perm":
			case "str_mod":
			case "str_spell_mod":
			case "str_st_mod":
			case "str_st_spell_mod":
				console.log("prosess str");
				getAttrs(["str_perm", "str_mod", "str_spell_mod", "str_st_mod", "str_st_spell_mod", "level", "damage_mod_focus", "damage_mod_spell_mod", "enc_pen", "enc_reduction", "dft_perm", "wil_perm","hlh_perm","level","profession"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					setAttribValues("str", pvalue.str_perm, pvalue.str_mod, pvalue.str_spell_mod, pvalue.str_st_mod, pvalue.str_st_spell_mod, pvalue.level, pvalue.enc_pen, pvalue.enc_reduction);
					getDamage(pvalue.str_perm, pvalue.str_mod, pvalue.str_spell_mod, pvalue.damage_mod_focus, pvalue.damage_mod_spell_mod);
					if (source == "str_perm") {
						setBrawling(pvalue.dft_perm, pvalue.str_perm, pvalue.wil_perm, pvalue.enc_pen, pvalue.enc_reduction);
						setSwimming(pvalue.dft_perm,pvalue.str_perm,pvalue.hlh_perm,pvalue.enc_pen,pvalue.profession,pvalue.level);
					}
				});
				break;
			case "bap_spell_mod":
			case "bap_focus":
			case "zanshin_focus":
			case "zanshin_spell_mod":
			case "dft_perm":
			case "dft_mod":
			case "dft_spell_mod":
			case "dft_st_mod":
			case "dft_st_spell_mod":
				console.log("prosess dft");
				getAttrs(["dft_perm", "dft_mod", "dft_spell_mod", "dft_st_mod", "dft_st_spell_mod", "level", "bap_focus", "bap_spell_mod", "zanshin_mod", "zanshin_spell_mod", "enc_pen", "enc_reduction", "str_perm", "wil_perm","wit_perm","profession","str_perm","hlh_perm"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setAttribValues("dft", pvalue.dft_perm, pvalue.dft_mod, pvalue.dft_spell_mod, pvalue.dft_st_mod, pvalue.dft_st_spell_mod, pvalue.level, pvalue.enc_pen, pvalue.enc_reduction);
					setBAP(pvalue.dft_perm, pvalue.dft_mod, pvalue.dft_spell_mod, pvalue.bap_focus, pvalue.bap_spell_mod);
					if (source == "dft_perm") {
						setBrawling(pvalue.dft_perm, pvalue.str_perm, pvalue.wil_perm, pvalue.enc_pen, pvalue.enc_reduction);
						setClimibing(pvalue.dft_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);
						setSwimming(pvalue.dft_perm,pvalue.str_perm,pvalue.hlh_perm,pvalue.enc_pen,pvalue.profession,pvalue.level);
						console.log("p1");
						setGimmickry(pvalue.dft_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.enc_pen);
						console.log("p2");
					}
				});
				break;
			case "bma_focus":
			case "bma_spell_mod":
			case "mna_focus":
			case "mna_spell_mod":
			case "zanshin_focus":
			case "zanshin_spell_mod":
			case "spd_perm":
			case "spd_mod":
			case "spd_spell_mod":
			case "spd_st_mod":
			case "spd_st_spell_mod":
				console.log("prosess spd");
				getAttrs(["spd_perm", "spd_mod", "spd_spell_mod", "spd_st_mod", "spd_st_spell_mod", "level", "mna_focus", "mna_spell_mod", "bma_focus", "bma_spell_mod", "zanshin_mod", "zanshin_spell_mod", "enc_pen", "enc_reduction"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setAttribValues("spd", pvalue.spd_perm, pvalue.spd_mod, pvalue.spd_spell_mod, pvalue.spd_st_mod, pvalue.spd_st_spell_mod, pvalue.level, pvalue.enc_pen, pvalue.enc_reduction);
					setMNA(pvalue.spd_perm, pvalue.spd_mod, pvalue.spd_spell_mod, pvalue.mna_focus, pvalue.mna_spell_mod);
					setBMA(pvalue.spd_perm, pvalue.spd_mod, pvalue.spd_spell_mod, pvalue.bma_focus, pvalue.bma_spell_mod);
					if (source == "spd_perm") {
						setLeaping(pvalue.spd_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);
					}
				});
				break;
			case "hlh_perm":
			case "hlh_mod":
			case "hlh_spell_mod":
			case "hlh_st_mod":
			case "hlh_st_spell_mod":
				console.log("process hlh");
				getAttrs(["dft_perm","str_perm","hlh_perm", "hlh_mod", "hlh_spell_mod", "hlh_st_mod", "hlh_st_spell_mod","enc_pen", "level","profession"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setAttribValues("hlh", pvalue.hlh_perm, pvalue.hlh_mod, pvalue.hlh_spell_mod, pvalue.hlh_st_mod, pvalue.hlh_st_spell_mod, pvalue.level,pvalue.enc_pen, pvalue.enc_reduction);
					if (source=="hlh_perm"){
						setSwimming(pvalue.dft_perm,pvalue.str_perm,pvalue.hlh_perm,pvalue.enc_pen,pvalue.profession,pvalue.level);
					}
				});
				break;
			case "wit_perm":
			case "wit_mod":
			case "wit_spell_mod":
			case "wit_st_mod":
			case "wit_st_spell_mod":
				console.log("prosess wit");
				getAttrs(["wit_perm", "wit_mod", "wit_spell_mod", "wit_st_mod", "wit_st_spell_mod", "level", "profession", "wil_perm","dft_perm","enc_pen","shugenja_wound_penalty"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setAttribValues("wit", pvalue.wit_perm, pvalue.wit_mod, pvalue.wit_spell_mod, pvalue.wit_st_mod, pvalue.wit_st_spell_mod, pvalue.level,pvalue.enc_pen, pvalue.enc_reduction);
					setLearningRate(pvalue.wit_perm, pvalue.wil_perm, pvalue.profession);
					if (source == "wit_perm") {
						setMagic(pvalue.wil_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.shugenja_wound_penalty);
						console.log("p3");
						setGimmickry(pvalue.dft_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.enc_pen);						
						console.log("p4");						
					}					
				});
				break;
			case "zanshin_mod":
			case "zanshin_spell_mod":
			case "wil_perm":
			case "wil_mod":
			case "wil_spell_mod":
			case "wil_st_mod":
			case "wil_st_spell_mod":
				console.log("prosess wil");
				getAttrs(["wil_perm", "wil_mod", "wil_spell_mod", "wil_st_mod", "wil_st_spell_mod", "level", "zanshin_mod", "zanshin_spell_mod", "profession", "wit_perm", "dft_perm", "str_perm", "enc_pen", "enc_reduction","shugenja_wound_penalty"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setAttribValues("wil", pvalue.wil_perm, pvalue.wil_mod, pvalue.wil_spell_mod, pvalue.wil_st_mod, pvalue.wil_st_spell_mod, pvalue.level,pvalue.enc_pen, pvalue.enc_reduction);
					setLearningRate(pvalue.wit_perm, pvalue.wil_perm, pvalue.profession);
					if (source == "wil_perm") {
						setBrawling(pvalue.dft_perm, pvalue.str_perm, pvalue.wil_perm, pvalue.enc_pen, pvalue.enc_reduction);
						setMagic(pvalue.wil_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.shugenja_wound_penalty)
					}
				});
				break;
			case "level":
				console.log("process level");
				getAttrs(["str_perm", "str_mod", "str_spell_mod", "str_st_mod", "str_st_spell_mod", "dft_perm", "dft_mod", "dft_spell_mod", "dft_st_mod", "dft_st_spell_mod", "spd_perm", "spd_mod", "spd_spell_mod", "spd_st_mod", "spd_st_spell_mod", "hlh_perm", "hlh_mod", "hlh_spell_mod", "hlh_st_mod", "hlh_st_spell_mod", "wit_perm", "wit_mod", "wit_spell_mod", "wit_st_mod", "wit_st_spell_mod", "wil_perm", "wil_mod", "wil_spell_mod", "wil_st_mod", "wil_st_spell_mod", "level", "profession", "enc_pen", "enc_reduction","shugenja_wound_penalty"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					setAttribValues("str", pvalue.str_perm, pvalue.str_mod, pvalue.str_spell_mod, pvalue.str_st_mod, pvalue.str_st_spell_mod, pvalue.level);
					setAttribValues("dft", pvalue.dft_perm, pvalue.dft_mod, pvalue.dft_spell_mod, pvalue.dft_st_mod, pvalue.dft_st_spell_mod, pvalue.level);
					setAttribValues("spd", pvalue.spd_perm, pvalue.spd_mod, pvalue.spd_spell_mod, pvalue.spd_st_mod, pvalue.spd_st_spell_mod, pvalue.level);
					setAttribValues("hlh", pvalue.hlh_perm, pvalue.hlh_mod, pvalue.hlh_spell_mod, pvalue.hlh_st_mod, pvalue.hlh_st_spell_mod, pvalue.level);
					setAttribValues("wit", pvalue.wit_perm, pvalue.wit_mod, pvalue.wit_spell_mod, pvalue.wit_st_mod, pvalue.wit_st_spell_mod, pvalue.level);
					setAttribValues("wil", pvalue.wil_perm, pvalue.wil_mod, pvalue.wil_spell_mod, pvalue.wil_st_mod, pvalue.wil_st_spell_mod, pvalue.level);
					setClimibing(pvalue.dft_perm, pvalue.profession,pvalue.enc_pen,pvalue.level)
					setLeaping(pvalue.spd_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);	
					setMagic(pvalue.wil_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.shugenja_wound_penalty)
					setSwimming(pvalue.dft_perm,pvalue.str_perm,pvalue.hlh_perm,pvalue.enc_pen,pvalue.profession,pvalue.level)
					console.log("p5");
					setGimmickry(pvalue.dft_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.enc_pen);
					console.log("p6");
                    resetPowersSpellsDurations(pvalue.level);
				});
				break;
			case "profession":
				console.log("profession");
				getAttrs(["spd_perm","dft_perm","wil_perm", "wit_perm", "hlh_perm","level", "profession","enc_pen","str_perm","shugenja_wound_penalty"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setLearningRate(pvalue.wit_perm, pvalue.wil_perm, pvalue.profession);
					setClimibing(pvalue.dft_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);
					setLeaping(pvalue.spd_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);
					setMagic(pvalue.wil_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.shugenja_wound_penalty)
					setSwimming(pvalue.dft_perm,pvalue.str_perm,pvalue.hlh_perm,pvalue.enc_pen,pvalue.profession,pvalue.level);
					console.log("p7");
					if (pvalue.profession=="Ninja"){
						setGimmickry(pvalue.dft_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.enc_pen);
console.log("remove hideIt");												
						$20("div[data-tab=gimmickry]").removeClass("sheet-hideIt");
					}
					else {
						console.log("add hideIt");												
						$20("div[data-tab=gimmickry]").addClass("sheet-hideIt");		
					}
					console.log("p8");
				});
				break;
			case "bap":
			case "mna":
			case "zanshin":
				console.log("set phases");
				getAttrs(["bap", "mna", "zanshin"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					setPhases(pvalue.bap, pvalue.mna, pvalue.zanshin);
				});
				break;
			case "enc_pen":
				console.log("process enc_pen");
				getAttrs(["wil_perm", "level", "profession", "dft_perm", "dft_mod", "dft_spell_mod", "dft_st_mod", "dft_st_spell_mod","str_perm", "str_mod", "str_spell_mod", "str_st_mod", "str_st_spell_mod", "spd_perm", "spd_mod", "spd_spell_mod", "spd_st_mod", "spd_st_spell_mod", "wit_perm", "hlh_perm", "hlh_mod", "hlh_spell_mod", "hlh_st_mod", "hlh_st_spell_mod", "enc_pen", "enc_reduction","profession"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("process enc_pen");
					setBrawling(pvalue.dft_perm, pvalue.str_perm, pvalue.wil_perm, pvalue.enc_pen, pvalue.enc_reduction);
					setClimibing(pvalue.dft_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);
					setLeaping(pvalue.spd_perm, pvalue.profession,pvalue.enc_pen,pvalue.level);
					setSwimming(pvalue.dft_perm,pvalue.str_perm,pvalue.hlh_perm,pvalue.enc_pen,pvalue.profession,pvalue.level);
					console.log("finnished set swimming");
					setGimmickry(pvalue.dft_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.enc_pen)
					console.log("finnished set Gimmickry");
					setAttribValues("str", pvalue.str_perm, pvalue.str_mod, pvalue.str_spell_mod, pvalue.str_st_mod, pvalue.str_st_spell_mod, pvalue.level, pvalue.enc_pen, pvalue.enc_reduction);

					setAttribValues("dft", pvalue.dft_perm, pvalue.dft_mod, pvalue.dft_spell_mod, pvalue.dft_st_mod, pvalue.dft_st_spell_mod, pvalue.level, pvalue.enc_pen, pvalue.enc_reduction);

					setAttribValues("spd", pvalue.spd_perm, pvalue.spd_mod, pvalue.spd_spell_mod, pvalue.spd_st_mod, pvalue.spd_st_spell_mod, pvalue.level, pvalue.enc_pen, pvalue.enc_reduction);

					setAttribValues("hlh", pvalue.hlh_perm, pvalue.hlh_mod, pvalue.hlh_spell_mod, pvalue.hlh_st_mod, pvalue.hlh_st_spell_mod, pvalue.level,pvalue.enc_pen, pvalue.enc_reduction);					
				});
				break;
			case "shugenja_wound_penalty":
				getAttrs(["wit_perm", "wit_mod", "wit_spell_mod", "wit_st_mod", "wit_st_spell_mod", "level", "profession", "wil_perm","dft_perm","enc_pen","shugenja_wound_penalty"], function(pvalue) {
					console.log("pvalue" + JSON.stringify(pvalue));
					console.log("pvalue.level: " + pvalue.level);
					setMagic(pvalue.wil_perm,pvalue.wit_perm, pvalue.profession,pvalue.level,pvalue.shugenja_wound_penalty);
				});
				break;
		}	
}



    function resetPowersSpellsDurations(level){
        doRestDurations("repeating_bscpowers",level); 
        doRestDurations("repeating_spells",level); 
    }
    
    function doRestDurations(section,level){
         getSectionIDs(section, function(idArray) {
            if (idArray.length > 0) {
    
                _.each(idArray, function(currentID, i) {
                    console.log("currentID: "+currentID)
                    getAttrs([section+"_" + currentID + "_range","level"], function(values) {
                        console.log(`values  ${JSON.stringify(values)}`); 
                        console.log(values[section+"_" + currentID + "_range"])
                        let range = values[section+"_" + currentID + "_range"];   
                        let range_str = get_range_value(range,level)
                        console.log("range_str: "+range_str);
                        setAttrs({[section+"_" + currentID+"_range_value"]:range_str});
                            
                    });
                });
            }
            
        });						
	}
    
    


	function setSwimming(dft_perm,str_perm,hlh_perm,enc_pen,profession,level){
		console.log("set Swimming");
		console.log("dft_perm: "+dft_perm);
		console.log("str_perm: "+str_perm);
		console.log("hlh_perm: "+hlh_perm);
		console.log("level: "+level);
		console.log("profession: "+profession);		
		console.log("enc_pen: "+enc_pen);
		let swimming = Math.floor((Math.floor(Math.floor(dft_perm/3)+Math.floor(str_perm/3)+Math.floor(hlh_perm/3)))/3);
		swimming = Math.min(swimming,19);
		swimming=swimming-enc_pen;
		console.log("swimming: "+swimming);	
		if (profession=="Ninja"){
			swimming = swimming+parseInt(level);
		}
		console.log("swimming: "+swimming);	
		setAttrs({"SwimBCS":swimming});
		
	}
	
	
	
	function setGimmickry(dft_perm,wit_perm, profession,level,enc_pen){
		dft_perm = parseInt(dft_perm);
		wit_perm = parseInt(wit_perm);
		let gimmickry =   Math.floor((Math.floor(Math.floor(dft_perm/3)+Math.floor(wit_perm/3)))/2);
		console.log("gimmickry : "+gimmickry);	
		if (profession=="Ninja"){
			gimmickry =	gimmickry+parseInt(level);
		}
		gimmickry = gimmickry - enc_pen; 
		console.log("gimmickry : "+gimmickry);	
		setAttrs({"GimmickryBCS":gimmickry});
	}


	function setMagic(wil_perm,wit_perm, profession,level,shugenja_wound_penalty){
		console.log("process magic capability");
		wil_perm = parseInt(wil_perm);
		wit_perm = parseInt(wit_perm);
		shugenja_wound_penalty = parseInt(shugenja_wound_penalty);
		console.log("shugenja_wound_penalty: "+shugenja_wound_penalty);
		let magic =  Math.floor((wil_perm+wit_perm)/5);
		if (profession=="Gakusho (Buddhist)" || profession=="Gakusho (Shintoist)"){
			magic =	magic+parseInt(level);
		} else if (profession=="Shugenja"){
			console.log("found shugenja")
			//magic =	magic+parseInt(level)+parseInt(shugenja_wound_penalty);
			magic =	magic+parseInt(level);
		}
		setAttrs({"magicBCS":magic});
	}



	function setLeaping(spd_perm, profession,enc_pen,level){
		spd_perm=parseInt(spd_perm);
		enc_pen=parseInt(enc_pen);
		let leapBCS =  Math.floor(spd_perm/2)-enc_pen;
		if (profession=="Ninja"){
			leapBCS = 	leapBCS+parseInt(level);
		}
		setAttrs({"leapBCS":leapBCS});
	}

	function setClimibing(dft_perm, profession,enc_pen,level){
		dft_perm=parseInt(dft_perm);
		enc_pen=parseInt(enc_pen);
		let climbBCS =  Math.floor(dft_perm/2)-enc_pen;
		if (profession=="Ninja"){
			climbBCS = 	climbBCS+parseInt(level);
		}
		setAttrs({"climbBCS":climbBCS});
	}
	
	
	function setBrawling(dft_perm,str_perm,wil_perm,enc_pen){
		console.log("set Brawling");
		let brawling = Math.floor((Math.floor(Math.floor(dft_perm/3)+Math.floor(str_perm/3)+Math.floor(wil_perm/3)))/3);
		brawling = Math.min(brawling,19);
		brawling=brawling-enc_pen;
		setAttrs({"brawlBCS":brawling});
	}
	
	
	
	// functions setup abilities
	// attributes 
	// wt_perm wt_cur wt_perm wt_cur str_perm str_cur 
	// dft_perm dft_cur spd_perm spd_cur hlh_perm hlh_cur  
	function setAttribValues(attrib,perm,mod,spell_mod,st_mod,st_spell_mod,level,enc_pen,enc_reduction){
		perm = parseInt(perm);
        mod = parseInt(mod);
		console.log("setup current attributes and saving throws")
		console.log("perm: "+perm);
		//mod = parseInt(mod);		
		spell_mod = parseInt(spell_mod);
		console.log("spell_mod: "+spell_mod);
		//st_mod = parseInt(st_mod);			
		st_spell_mod = parseInt(st_spell_mod);
		console.log("spell_mod: "+st_spell_mod);
		console.log("setAttribValues marker 1");
		level = parseInt(level);
		console.log("setAttribValues marker 2");
		console.log("level: "+level);
		console.log("attrib: "+attrib);
		let cur = perm+mod+spell_mod;
        console.log("---------> enc reduction: "+enc_reduction);
        console.log("---------> mod: "+mod);
		if (attrib == "dft" || attrib == "spd" ){
           cur = Math.floor(cur*enc_reduction)
        }        
		console.log("cur: "+cur);
		console.log("setAttribValues marker 3");
		//let st = Math.round(cur/3)+st_mod+st_spell_mod+level;
		let st = Math.round(cur/3)+0+st_spell_mod+level;
		if (attrib == "str" || attrib == "dft" || attrib == "spd" || attrib == "hlh"){
			st = st - enc_pen;
		}
		console.log("enc_pen: "+enc_pen);
		console.log("enc_reduction: "+enc_reduction);
		console.log("st: "+st);
		/*console.log("marker 4");
		console.log("perm: "+perm);	
		console.log("mod: "+mod);
		console.log("spell_mod: "+spell_mod);
		console.log("st_mod: "+st_mod);		
		console.log("st_spell_mod: "+st_spell_mod);
		console.log("cur: "+cur);
		console.log("st: "+st);
		console.log("level: "+level);*/	
		setAttrs({[attrib+"_cur"]:cur,[attrib+"_base_st"]:st});		
		
	}
	
	function getDamage(perm,str_mod,str_spell_mod,damage_mod_focus,damage_mod_spell_mod){
		//For every 5 Full points of current Strength over 15 +1 to the damage
		// Str 5-7 -1 STR 2-4 -2
		// STR 1 no damage (-999!)
		let cur = parseInt(perm)+parseInt(str_mod)+parseInt(damage_mod_focus)+parseInt(str_spell_mod);
		console.log("dam mod cur: "+cur);
		console.log("marker 1");
		let dam_mod = 0;
		let unarmdDam = "0";
		if (cur === 1){
			dam_mod = -999;	
		} 
		else if (cur >=2 && cur <= 4){
			dam_mod = -2;	
		}				
		else if (cur >=5 && cur <= 7){
			dam_mod = -1;
		} else  if (cur > 19){
			dam_mod = Math.floor((cur-15)/5);
		}
		dam_mod = dam_mod + parseInt(damage_mod_spell_mod);
        if (cur >= 2 && cur <= 10){
			unarmdDam="1D3";
		} else if (cur >=11 && cur <=30) {
			unarmdDam="1D6";
		} else if (cur > 30){
			unarmdDam="1D10";
		}
		
		console.log("unarmd_damage: "+unarmdDam);
		console.log("dam mod: "+dam_mod);
		setAttrs({"damage_mod":dam_mod,"unarmd_damage":unarmdDam});
	}
	
	
	//Bushido see 1043.7a
	function setLearningRate(wit_perm, wil_perm,profession) {

		let lr = 1;
		let avg = Math.round((parseInt(wit_perm) + parseInt(wil_perm)) / 2);
	console.log("avg: "+avg);
	console.log("profession: "+profession);

		if (profession == "Bushi") {
			if (avg >= 8 && avg <= 17) {
				lr = 2;
			} else if (avg >= 18) {
				lr = 3;
			}
		} else if (profession == "Budoka" || profession == "Ninja") {
			console.log("do ninja stuff");
			if (avg >= 10 && avg <= 19) {
				console.log("nj 1");
				lr = 2;
			} else if (avg >= 20) {
				console.log("nj 2");
				lr = 3;
			}
		} else if (profession == "Shugenja" || profession == "Gakusho (Buddhist)" || profession == "Gakusho (Shintoist)") {
			if (avg >= 20 && avg <= 29) {
				lr = 2;
			} else if (avg >= 30) {
				lr = 3;
			}
		} else if (profession == "Yakuza") {
			if (avg >= 15 && avg <= 24) {
				lr = 2;
			} else if (avg >= 25) {
				lr = 3;
			}
		}
		setAttrs({"learning_rate":lr});
	}

	function setPhases(bap, mna, zanshin) {
		console.log("bap:" + bap);
		console.log("mna:" + mna);
		console.log("zanshin:" + zanshin);
		let pmaStr = "";
		let sapStr = "";
		mna = parseInt(mna);
		if (mna >= 2) {
			zanshin = parseInt(zanshin);
			bap = parseInt(bap);
			let curPhase = 0;
			for (let p = 2; p <= mna; p++) {
				let curPhase = Math.floor(bap / p);
				console.log("curPhase:" + curPhase);
				if (curPhase > 1){
					if (p <= zanshin) {
						if (pmaStr.length > 0) {
							pmaStr = pmaStr + ",";
						}
						pmaStr = pmaStr + curPhase;
					} else {
						if (sapStr.length > 0) {
							sapStr = sapStr + ",";
						}
						sapStr = sapStr + curPhase;
					}
				}
			}
		}
		setAttrs({"pma": pmaStr,"sap": sapStr});
	}	

	function setBAP(dft_perm,dft_mod,dft_spell_mod,bap_focus,bap_spell_mod){
		console.log("set BAP 1");	
    /*console.log("dft_perm:"+dft_perm);
    console.log("dft_mod:"+dft_mod);
    console.log("dft_spell_mod:"+dft_spell_mod);
    console.log("bap_focus:"+bap_focus);
    console.log("bap_spell_mod:"+bap_spell_mod);*/

		let bap = (Math.floor((parseInt(dft_perm)+parseInt(dft_mod)+parseInt(bap_focus)+parseInt(dft_spell_mod))/2))+parseInt(bap_spell_mod);		
		console.log("set BAP 2");
		console.log("BAP:"+bap);
		setAttrs({"bap":bap});
	}
	
	
	function setMNA(spd_perm,spd_mod,spd_spell_mod,mna_focus,mna_spell_mod){
	/*console.log("set MNA 1");	
    console.log("spd_perm:"+spd_perm);
    console.log("spd_mod:"+spd_mod);
    console.log("spd_spell_mod:"+spd_spell_mod);
    console.log("mna_focus:"+mna_focus);
    console.log("mna_spell_mod:"+mna_spell_mod);*/

		let mna = (Math.floor((parseInt(spd_perm)+parseInt(spd_mod)+parseInt(mna_focus)+parseInt(spd_spell_mod))/10))+parseInt(mna_spell_mod);
		if ((parseInt(spd_perm)+parseInt(spd_mod)-40)+parseInt(mna_focus)+parseInt(spd_spell_mod)<0){
				console.log("mna maxed out");
			mna = Math.round(mna,3);	
		}
		console.log("set mna 2");
		console.log("mna:"+mna);
		setAttrs({"mna":mna});
	}	
	
	
	function setBMA(spd_perm,spd_mod,spd_spell_mod,bma_focus,bma_spell_mod){
	/*console.log("set BMA 1");	
    console.log("spd_perm:"+spd_perm);
    console.log("spd_mod:"+spd_mod);
    console.log("spd_spell_mod:"+spd_spell_mod);
    console.log("bma_focus:"+bma_focus);
    console.log("bma_spell_mod:"+bma_spell_mod);*/

		let bma = (Math.ceil((parseInt(spd_perm)+parseInt(spd_mod)+parseInt(bma_focus)+parseInt(spd_spell_mod))/3))+parseInt(bma_spell_mod);

		console.log("set bma 2:"+bma);
		setAttrs({"bma":bma});
	}	
	
	function setZanshin(wil_perm,wil_mod,wil_spell_mod,dft_perm,dft_mod,dft_spell_mod,spd_perm,spd_mod,spd_spell_mod,level,zanshin_focus){
	/*console.log("set zanshin 1");	
    console.log("spd_perm:"+spd_perm);
    console.log("spd_mod:"+spd_mod);
    console.log("spd_spell_mod:"+spd_spell_mod);
    console.log("dft_perm:"+dft_perm);
    console.log("dft_mod:"+dft_mod);
    console.log("dft_spell_mod:"+dft_spell_mod);	
    console.log("wil_perm:"+wil_perm);
    console.log("wil_mod:"+wil_mod);
    console.log("wil_spell_mod:"+wil_spell_mod);	
    console.log("zanshin_focus:"+zanshin_focus);
    console.log("level:"+level);*/

		let tot = parseInt(wil_perm)+parseInt(wil_mod)+parseInt(wil_spell_mod)+parseInt(dft_perm)+parseInt(dft_mod)+parseInt(dft_spell_mod)+parseInt(spd_perm)+parseInt(spd_mod)+parseInt(spd_spell_mod)+parseInt(zanshin_focus);
	    console.log("zanshin tot:"+tot);  	
		let zanshin = 0;
		if (tot<=29){
			if (level>=1 && level <= 3){
				console.log("marker 1a");
				zanshin =1; 	
			} else if (level >= 4){
				zanshin =2; 	
			}
		} else if (tot>=30 && tot <= 59){
			if (level >= 1 && level <= 2){
				console.log("marker 2a");
				zanshin =1; 	
			} else if (level >= 3 && level <= 5){
				zanshin =2; 	
			} else if (level > 5){
				zanshin =3; 	
			}
		} else if (tot>=60 && tot <= 89){
			if (level == 1){
				console.log("marker 3a");
				zanshin =1; 	
			} else if (level >= 2 && level <= 4){
				zanshin =2; 	
			} else if (level > 4){
				zanshin =3; 	
			}
		} else if (tot > 89){
			if (level>=1 && level <= 3){
				zanshin =2; 	
			} else if (level >= 4){
				zanshin =3; 	
			}			
		}			
		

		console.log("set zanshin 2:"+zanshin);
		setAttrs({"zanshin":zanshin});
	}
	
	
	
	function getDamageReistanceTotal(hlh_perm,str_perm,wl_perm){
		//Bushido uses Hit Points HLTH + Profession's Hit Point Die Roll
	}
	
	
	function getEncumbranceCapacity(str_cur){
		//Bushido
		//UNENCUMBERED up to 2 x Strength in pounds
		// PARTIALLY ENCUMBERED up to 4 x Strength in pounds 
		// FULLY ENCUMBERED 6 x Strength
		//Lift 10 x Strength
		let enc = {};
		enc.unenc = str_cur*2;
		enc.partEnc= str_cur*4;
		enc.fullEnc=str_cur*6;
		enc.lift=str_cur*10;	
		return enc;
	}
	
	
	function getFreelyImprovableSkills(perm){
		//Bushido: permanent Wit score
		setAttrs({repeating_melee2_skillTotal:0});
	}
	

	
	//end functions to setup abilities
	
	//functions to handle the links between weapon skills in a skill list and weapons in 
	// a repeating section
	
	
	//listerner to check if a skill removed will be done for all skill groups as players will be players.
	
	on("remove:repeating_bugeiskills remove:repeating_practicalskills remove:repeating_finearts ", function(eventInfo) {
		//console.log(`removed skill listener event ${JSON.stringify(eventInfo)}`);
		let deleted_skill_rowId = eventInfo.sourceAttribute.toLowerCase();
		//console.log(`deleted_skill_rowId ${deleted_skill_rowId}`);
		findSkillUsed("repeating_meleewpns","repeating_bugeiskills",deleted_skill_rowId)
	});
	
	
	function findSkillUsed(attack_section,skill_section,deleted_skill_rowId){	
		getSectionIDs(attack_section, function(idArray) {			
			if (idArray.length > 0) {

				_.each(idArray, function(currentID, i) {
					getAttrs([attack_section+"_" + currentID + "_skills_used_rowid"], function(values) {
						//console.log(`values ${JSON.stringify(values)}`);
						let attack_rowid = values[attack_section+"_" + currentID + "_skills_used_rowid"];
						//console.log(`attack_rowid ${attack_rowid}`)
						console.log(`${deleted_skill_rowId} = ${attack_rowid}`)
						if (attack_rowid == deleted_skill_rowId){
							console.log("found it");
							let row_str = attack_section+"_"+currentID;
							setAttrs({[row_str+"_skills_used_rowid"]:"0",[row_str+"_base_bcs"]:"-1",[row_str+"_skill_used"]:"SKILL DELETED"});
						}							
					});
				});
				
			}			
		});
	}
	
    //listern to see if skill governing spell is removed               
    on("remove:repeating_finearts", function(eventInfo) {
		console.log(`removed fine arts skill listener event ${JSON.stringify(eventInfo)}`);
		let deleted_skill_rowId = eventInfo.sourceAttribute.toLowerCase();
		//console.log(`deleted_skill_rowId ${deleted_skill_rowId}`);
		getSectionIDs("repeating_spells", function(idArray) {			
			if (idArray.length > 0) {

				_.each(idArray, function(currentID, i) {
					getAttrs(["repeating_spells_" + currentID + "_skills_used_rowid"], function(values) {
						//console.log(`values ${JSON.stringify(values)}`);
						let spell_rowid = values["repeating_spells_" + currentID + "_skills_used_rowid"];
						console.log(`hhhhh ${deleted_skill_rowId} = ${spell_rowid}`)
						if (spell_rowid == deleted_skill_rowId){
							console.log("found it");
							let row_str = "repeating_spells_"+currentID;
							setAttrs({[row_str+"_skills_used_rowid"]:"0",[row_str+"_skill_used"]:"SKILL DELETED"});
						}							
					});
				});
				
			}			
		});
	});
	
    
    //may need to add in the other skill categories becuaser players will be players.
	on("change:repeating_bugeiskills:base_bcs", function(eventInfo) {
        console.log(`bugei skill bcs change eventinfo ${JSON.stringify(eventInfo)}`);
        let skill_rowId = eventInfo.sourceAttribute.toLowerCase();
        skill_rowId = skill_rowId.replace("_base_bcs","");
        let new_bcs = eventInfo.newValue;
        setAttackBCS("repeating_meleewpns",skill_rowId,new_bcs);
        setAttackBCS("repeating_bowwpns",skill_rowId,new_bcs);
        setAttackBCS("repeating_hurledwpns",skill_rowId,new_bcs);

	});
    
    function setAttackBCS(section,skill_rowId,new_bcs){
		getSectionIDs(section, function(idArray) {
            console.log("size of array:"+idArray.length);
			if (idArray.length > 0) {
				_.each(idArray, function(currentID, i) {
					getAttrs([section+"_"+ currentID + "_skills_used_rowid"], function(values) {
						//console.log(`values ${JSON.stringify(values)}`);                        
						let attack_rowid = values[section+"_"+currentID + "_skills_used_rowid"];
						console.log(`hhhhh ${skill_rowId} = ${attack_rowid}`)
						if (attack_rowid == skill_rowId){
							console.log("found it");
							let row_str = section+"_"+currentID;
							setAttrs({[section+"_"+currentID + "_base_bcs"]:new_bcs});
						}							
					});
				});
				
			}			
		});        
                
    }
    
    
    
	
	//setup listeners for weapon skill used
	averaging_skill_listeners = ["change:repeating_meleeWpns:skill_used","change:repeating_bowWpns:skill_used","change:repeating_hurledWpns:skill_used","change:repeating_meleeWpns:wpnName","change:repeating_bowWpns:wpnName","change:repeating_hurledWpns:wpnName"]
	averaging_skill_listeners.forEach(attribute => {
		on(`${attribute}`, function(event) {
			console.log("///////////// start averageing skill listener ///////////////" );
			console.log(`skill used listener event ${JSON.stringify(event)}`);
			const source = event.sourceAttribute;
			console.log("source: " + source);
			const repeat_section = getRepeatClass(source);
			console.log("repeat_section: " + repeat_section);			
		   getAttrs([repeat_section+"_skill_used","brawlBCS","dft_base_st","dft_st_mod",repeat_section+"_wpnName","show_npc","npc_sheet_type"], function(values) {
			   console.log(`weapon skill used listeners values ${JSON.stringify(values)}`);	
				let wpnSkill = "";
				/*if  (source.includes("repeating_bowwpns")){
				  wpnSkill = "Kyujutsu";
				} else {
					wpnSkill = values[repeat_section+"_skill_used"];
				}*/  
				wpnSkill = values[repeat_section+"_skill_used"];
				let wpnSkill2 = wpnSkill;
				wpnSkill = wpnSkill.toUpperCase();
				let wpnName = values[repeat_section+"_wpnName"];			
				wpnName = wpnName.toUpperCase(); 
				wpnName = wpnName.trim(); 				
				console.log("wpnSkill:"+wpnSkill);
				//function getSkillValues(wpnSkill,section,section2,brawlBCS,wpnName,wpnSkill2)
				console.log("///////////// call getSkillValues  ///////////////" );
                let repeatClass="repeating_bugeiskills";
                if (values.show_npc=="2"){
                    
                   if (values.npc_sheet_type=="1"){ 
                        repeatClass="repeating_humannpcskills";     
                   }
                } 
                
				getSkillValues(wpnSkill,repeatClass,repeat_section,values.brawlBCS,wpnName,wpnSkill2,values.dft_base_st,values.dft_st_mod);	
				console.log("///////////// start averageing skill listener ///////////////" );
			   //setAttrs({[repeat_section+"_raw_bcs"]:raw_bcs,[repeat_section+"_base_bcs"]:base_bcs});
		   });			
		});
	});
	
	
	on("change:repeating_hurledWpns:wpnName", function(eventInfo) {
		getAttrs(["str_base_st","str_st_mod"], function(values) {
			let str_st = parseInt(values.str_base_st)+parseInt(values.str_st_mod);
			let range_str = "1-"+str_st+"/"+(str_st+1)+"-"+str_st*1.5+"/"+((str_st*1.5)+1)+"-"+(str_st*2);
			setAttrs({repeating_hurledwpns_ranges:range_str});
		});		
	});
	// Cycle through hurled weapons whne STR ST or ST Mod changed.
	on("change:str_base_st change:str_base_st", function(eventInfo) {
		getAttrs(["str_base_st","str_st_mod"], function(values) {
			let str_st = parseInt(values.str_base_st)+parseInt(values.str_st_mod);
			var range_str = "1-"+str_st+"/"+(str_st+1)+"-"+Math.ceil(str_st*1.5)+"/"+((Math.ceil(str_st*1.5))+1)+"-"+(str_st*2);		   
		   getSectionIDs("hurledWpns", function(idArray) {
			  for(var i=0; i < idArray.length; i++) {
				 let attrsToSet = {["repeating_hurledWpns_" + idArray[i] + "_ranges"]: range_str};								
				setAttrs(attrsToSet);
			  }
		   });
		});		
	});
	
		function getBrawlMultiplier(wpnName){
				let brawl_multiplier = 0.5;
				if ((wpnName == "UNARMED") || (wpnName == "JUJUTSU") || (wpnName ==  "ATEMI-WAZA") || 	(wpnName ==  "SUMAI") || (wpnName ==  "BRAWLING")){
					brawl_multiplier = 1;
				}
				console.log("brawl_multiplier: "+brawl_multiplier);
				return brawl_multiplier;
		}

		function getSkillValues(wpnSkill,section,section2,brawlBCS,wpnName,wpnSkill2,dft_base_st,dft_st_mod){
			console.log("brawlBCS: "+brawlBCS);
			wpnSkill = wpnSkill.trim();
			//Check if the wpnSkill = Brawling used is brawling and pull it from capabilities instead of looping through skills
			// check the wpn name if the wpn name is not unarmed or on of the martial arts the bcs needs to be divied by 2.
			console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
			console.log("wpnSkill: "+wpnSkill);
			console.log("section2: "+section2);
			console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
			if (wpnSkill=="DFT ST" && section2=="repeating_hurledwpns"){
				console.log("!!!!!!!!!!!!!DFT ST and hurled weapon");
				let dft_st = parseInt(dft_base_st)+parseInt(dft_st_mod);
				let attrsToSet2 = {[section2 + '"_base_bcs']: dft_st,[section + '_skills_used_rowid']:"DFT ST"};
				console.log("!!!!!!  attrsToSet2 "+JSON.stringify( attrsToSet2));			
				setAttrs(attrsToSet2)
			} else {				
				if (wpnSkill=="BRAWLING"){
					console.log("wpnName: "+wpnName);
					//let brawl_multiplier = 0.5;
					//if ((wpnName == "UNARMED") || (wpnName == "JUJUTSU") || (wpnName ==  "ATEMI-WAZA") || 	(wpnName ==  "SUMAI") || (wpnName ==  "PUNCH") || (wpnName ==  "FIST") || (wpnName ==  "KICK")){
					//	brawl_multiplier = 1;
					//}
					//console.log("brawl_multiplier: "+brawl_multiplier);
					let  brawl_multiplier = getBrawlMultiplier(wpnName);
					console.log("£$£$£$£$£$£ brawl_multiplier: "+brawl_multiplier);
					brawlBCS =  brawlBCS * brawl_multiplier;
					let attrsToSet = {[section2 + '"_base_bcs']: brawlBCS,[section + '_skills_used_rowid']:"brawlBCS"};						
					setAttrs(attrsToSet);				
				} else {
					let attrsToSet = {[section2 + '_base_bcs']: "-1"};								
					setAttrs(attrsToSet);
					getSectionIDs(section, function(idArray) {					
						if (idArray.length > 0) {
				
							_.each(idArray, function(currentID, i) {
								getAttrs([section+"_" + currentID + "_wpnName",section+"_" + currentID + "_skill_name",section+"_" + currentID + "_base_bcs"], function(values) {
									console.log("!!!!!! stuff2 bbbbbbbb  "+JSON.stringify(values));
									let skillname = values[section+"_" + idArray[i] + "_skill_name"];
									skillname = skillname.trim();
									skillname = skillname.toUpperCase();
									var skillTotal =0 ;
									console.log("skillname:"+skillname);
									console.log(" wpnSkill:"+wpnSkill);
									if (skillname == wpnSkill){	
										console.log("//////////////////////////////////////");
										console.log("!!!!!!!!!!!! found "+wpnSkill);
										skillTotal = values[section+"_" + idArray[i] + "_base_bcs"];
										console.log("!!!!!! Skilltotal "+skillTotal);
										let attrsToSet = {[section2 + '_base_bcs']: skillTotal,[section2 + '_skill_used']: wpnSkill2,[section + '_skills_used_rowid']: section+"_" + currentID};								
										setAttrs(attrsToSet);
										console.log("//////////////////////////////////////");
									}								
								});
							});
							console.log("find loop done");
						}					
					});
				}	
			}	
		};

		//setup listener for weapon range change
		on("change:repeating_meleeWpns:range", function(eventInfo) {
			getAttrs(["repeating_meleeWpns_range"], function(pvalue) {		
				console.log("melee wpn range changed  "+JSON.stringify(eventInfo.sourceAttribute));
				let range_list = "0";
				if (pvalue.repeating_meleeWpns_range=="Shrt"){
					range_list = "1";
				} else if (pvalue.repeating_meleeWpns_range=="Mdm"){
					range_list = "2";
				} else if (pvalue.repeating_meleeWpns_range=="Lng"){
					range_list = "3";
				}
				console.log("range list: "+range_list); 
				setAttrs({repeating_meleeWpns_range_list:range_list});
			});
		});	
	
	on("change:repeating_meleewpns:wpnName", function(eventInfo) {
		getAttrs(["repeating_meleewpns_wpnName","unarmd_damage"], function(values) {		
				console.log("!********* eventinfo "+JSON.stringify(eventInfo.sourceAttribute));
				console.log("!********* values "+JSON.stringify(values));
				let weapon_name = values["repeating_meleewpns_wpnName"];
				weapon_name = weapon_name.toUpperCase();
				console.log("weapon_name: "+weapon_name ); 
				let weapon_input_damage = 1;	
				weapon_list.forEach(item => {
					if (weapon_name.includes(item)){
						weapon_input_damage = 2;
					}
				});
				if (weapon_input_damage==2){
					console.log("use unarmed damage");
					
					form_list = "0";
					if (weapon_name.includes("BRAWLING") || weapon_name.includes("UNARMED")){
						form_list = "1";
					} else if (weapon_name.includes("ATEMI-WAZA")){
						form_list = "9";
					} else if (weapon_name.includes("JUJUTSU")){
						form_list = "15";
					} else if (weapon_name.includes("SUMAI")){
						form_list = "14";
					}
					
					console.log("form_list: "+form_list);
					setAttrs({repeating_meleeWpns_show_damage:weapon_input_damage,repeating_meleeWpns_damage:values.unarmd_damage,repeating_meleeWpns_form_list:form_list});
				} else {
					console.log("use weapon damage input");
					setAttrs({repeating_meleeWpns_show_damage:weapon_input_damage});
				}
				
				
		});
	});
		
	
	//change the value of the skill loop through weapon sections and change the skill value there
		on("change:repeating_meleeskills:skillTotal", function(eventInfo) {
			getAttrs(["repeating_meleeskills_skillName","repeating_meleeskills_skillTotal"], function(pvalue) {		
					console.log("!!!!!! stuff  "+JSON.stringify(eventInfo.sourceAttribute));
					let sourceA = eventInfo.sourceAttribute;
					let  repeatRow = sourceA.match(/[^_]*_[^_]*_[^_]*/g);
					var wpnSkill = pvalue.repeating_meleeskills_skillName;
					var skillTotal = pvalue.repeating_meleeskills_skillTotal;
					console.log("changed weapon skill to "+wpnSkill);
					var skillVal=getSkillValues2(wpnSkill,"repeating_melee",repeatRow,skillTotal);
			});
		});	
	
		function getSkillValues2(wpnSkill,section,section2,skillTotal){
			 getSectionIDs(section, function(idArray) {
				if (idArray.length > 0) {
		
					_.each(idArray, function(currentID, i) {
						getAttrs([section+"_" + currentID + "_skillName",section+"_" + currentID + "_skillTotal"], function(values) {
																														
							console.log("!!!!!! stuff3  "+JSON.stringify(values));

							let skillname = values[section+"_" + idArray[i] + "_skillName"];
							console.log("!!!!!! wpnSkill "+wpnSkill+" skillname "+skillname);

							if (skillname == wpnSkill){	
								console.log("!!!!!!!!!!!! found2 "+wpnSkill);
								let attrsToSet = {[section+"_" + idArray[i] +'_skillTotal']: skillTotal};								
								console.log("attrs to set "+JSON.stringify(attrsToSet));

								setAttrs(attrsToSet);
							}								

								
						});
					});
				}
				
			});	
		}		
	// end weapon and skill updates functions
	//on("change:repeating_meleewpns:wpnName change:repeating_meleewpns:skill_used change:repeating_meleewpns:size //change:repeating_meleewpns:quality  change:repeating_meleewpns:damage  change:repeating_meleewpns:damage change:repeating_meleewpns:min_str change:repeating_meleewpns:forms", function(eventInfo) {		
	//});	
    
    on("change:repeating_spells:skill_used", function(eventInfo) {
        console.log("skll used chnage eventinfo"+JSON.stringify(eventInfo.sourceAttribute));
        section2 = getRepeatClass(eventInfo.sourceAttribute)
        console.log("section2: "+section2)    ;
        getAttrs(["repeating_spells_skill_used","show_npc"], function(values) {
            let skill_used = values["repeating_spells_skill_used"];
            console.log("skill_used: "+skill_used);
            getKnwSkillRowID(skill_used,values.show_npc);
		});	            
    });

    function getKnwSkillRowID(knwSkill,show_npc){
        knwSkill = knwSkill.trim().toUpperCase();
        //knwSkill = knwSkill.toUpperCase();        
        let section = "";
        if (show_npc=="1"){
           section =  "repeating_finearts";
        } else if (show_npc=="2") {
           section =  "repeating_humannpcskills";
        }            
        getSectionIDs(section, function(idArray) {					
            if (idArray.length > 0) {        
                _.each(idArray, function(currentID, i) {
                    getAttrs([section+"_" + currentID + "_skill_name"], function(values) {
                        console.log("get knowledge skill  "+JSON.stringify(values));
                        let skillname = values[section+"_" + idArray[i] + "_skill_name"];
                        skillname = skillname.trim();
                        skillname = skillname.toUpperCase();
                        console.log("skillname:"+skillname);
                        console.log(" knwSkill:"+knwSkill);
                        if (skillname == knwSkill){	
                            console.log("//////////////////////////////////////");
                            console.log("!!!!!!!!!!!! found "+knwSkill);
                            let attrsToSet = {['repeating_spells_skills_used_rowid']: section+"_" + currentID};								
                            setAttrs(attrsToSet);
                            console.log("//////////////////////////////////////");
                        }								
                    });
                });
                console.log("find loop done");
            }
        });    
    }

    
    
    const setFineArtsRowchangeListners =["skill_name","avg_skill_used","fis","score","raw_bcs","base_bcs","useAvg"].forEach(attr => {	
	on(`change:repeating_finearts:${attr} change:repeating_bugeiskills:${attr} change:repeating_practicalskills:${attr}`, (eventinfo) => {
			console.log(JSON.stringify(eventinfo));
			const rowid = getRowID(eventinfo.sourceAttribute);
            const skillType = getRepeatClass(rowid);
            console.log(": "+skillType);
		   getAttrs([skillType+"_skill_id"], function(values) {
					const savedrowid=values[skillType+"_skill_id"].trim();
					console.log("values:"+JSON.stringify(values));
					if (savedrowid===""){
						console.log("its empty");
						let attrsToSet = {[skillType+"_skill_id"]: rowid};
						console.log("attrstoset: "+JSON.stringify(attrsToSet));
						setAttrs(attrsToSet);
						
					}
					
		   });			
			
			
		});
	});
    
	
	const setMeleeWpnRowchangeListners =["wpnName","skill_used","size","quality","damage","min_str","forms","weight"].forEach(attr => {	
		on(`change:repeating_meleeWpns:${attr}`, (eventinfo) => {
			console.log("hello");
			console.log(JSON.stringify(eventinfo));
			const rowid = getRowID(eventinfo.sourceAttribute);
			console.log("rowid: "+rowid);
		   getAttrs(["repeating_meleewpns_rowid"], function(values) {
					const savedrowid=values.repeating_meleewpns_rowid.trim();
					console.log("values:"+JSON.stringify(values));
					if (savedrowid===""){
						console.log("its empty");
						let attrsToSet = {[rowid+"_rowid"]: rowid};
						console.log("attrstoset: "+JSON.stringify(attrsToSet));
						setAttrs(attrsToSet);
						
					}
					
		   });			
			
			
		});
	});
	
	
	
	on("change:repeating_meleeWpns:avg_skill_used change:repeating_bowWpns:avg_skill_used change:repeating_hurledWpns:avg_skill_used change:repeating_bugeiskills:avg_skill_used change:repeating_practicalskills:avg_skill_used  change:repeating_finearts:avg_skill_used", (event) => {
			console.log(`avg listener event ${JSON.stringify(event)}`);
			let avg_skill = event.newValue.toUpperCase(); 
			console.log("avg_skill: "+avg_skill);	
			const source = event.sourceAttribute;
			const repeat_section = getRepeatSection(source);
			console.log("repeat_section: "+repeat_section);
			const attack_row = getRowID(source)
			console.log("attack_row: "+attack_row);		
			console.log("source: " + source);			
			if (avg_skill != "BRAWLING" && avg_skill != "CLIMBING" && avg_skill != "LEAPING" && avg_skill != "MAGIC" && avg_skill != "SWIMMING" && avg_skill != "Gimmickry"){
				setAttrs({[attack_row+"_avg_skill_used_rowid"]:"Err"});
				let section1 = "repeating_bugeiskills";
				getSectionIDs(section1, function(idArray) {					
					if (idArray.length > 0) {
						_.each(idArray, function(currentID, i) {
							getAttrs([section1+"_" + currentID + "_skill_name",section1+"_" + currentID + "_raw_bcs",section1+"_" + currentID + "_base_bcs",section1+"_" + currentID + "_bonus",section1+"_" + currentID + "_mod"], function(values) {	
								console.log(` ${JSON.stringify(values)}`);
								let skillname = values[section1+"_" + idArray[i] + "_skill_name"].toUpperCase();
								console.log("skillname: "+skillname + "=" +"skill: "+avg_skill);
								if (skillname == avg_skill){
									console.log("found it");
									setAttrs({[attack_row+"_avg_skill_used_rowid"]:section1+"_"+currentID});
								}								
									
							});
						});				
					}					
				});
			} else {
				setAttrs({[attack_row+"_avg_skill_used_rowid"]:avg_skill});
				console.log("Capability found");
			}				
	});
	
	on("change:repeating_meleeWpns:avg_skill_used change:repeating_bowWpns:avg_skill_used change:repeating_hurledWpns:avg_skill_used change:repeating_bugeiskills:avg_skill_used change:repeating_practicalskills:avg_skill_used  change:repeating_finearts:avg_skill_used", (event) => {
			console.log(`avg listener event ${JSON.stringify(event)}`);
			const source = event.sourceAttribute;
			const repeat_section = getRepeatSection(source);
			console.log("repeat_section: "+repeat_section);
			const attack_row = getRowID(source)
			console.log("attack_row: "+attack_row);
			let avg_skill = event.newValue.toUpperCase(); 
			console.log("avg_skill: "+avg_skill);
			console.log("source: " + source);
			if (avg_skill != "BRAWLING" && avg_skill != "CLIMBING" && avg_skill != "LEAPING" && avg_skill != "MAGIC" && avg_skill != "SWIMMING" && avg_skill != "Gimmickry"){
				let section2 = "repeating_practicalskills";
				getSectionIDs(section2, function(idArray) {					
					if (idArray.length > 0) {
						_.each(idArray, function(currentID, i) {
							getAttrs([section2+"_" + currentID + "_skill_name",section2+"_" + currentID + "_raw_bcs",section2+"_" + currentID + "_base_bcs",section2+"_" + currentID + "_bonus",section2+"_" + currentID + "_mod"], function(values) {	
								console.log(` ${JSON.stringify(values)}`);
								let skillname = values[section2+"_" + idArray[i] + "_skill_name"].toUpperCase();
								console.log("skillname: "+skillname + "=" +"skill: "+avg_skill);
								if (skillname == avg_skill){
									console.log("found it");
									setAttrs({[attack_row+"_avg_skill_used_rowid"]:section2+"_"+currentID});
								}								
									
							});
						});				
					}					
				});	
			}			
	});

	on("change:repeating_meleeWpns:avg_skill_used change:repeating_bowWpns:avg_skill_used change:repeating_hurledWpns:avg_skill_used change:repeating_bugeiskills:avg_skill_used change:repeating_practicalskills:avg_skill_used  change:repeating_finearts:avg_skill_used", (event) => {
			console.log(`avg listener event ${JSON.stringify(event)}`);
			const source = event.sourceAttribute;
			const repeat_section = getRepeatSection(source);
			console.log("repeat_section: "+repeat_section);
			const attack_row = getRowID(source)
			console.log("attack_row: "+attack_row);
			let avg_skill = event.newValue.toUpperCase(); 
			console.log("avg_skill: "+avg_skill);
			console.log("source: " + source);
			if (avg_skill != "BRAWLING" && avg_skill != "CLIMBING" && avg_skill != "LEAPING" && avg_skill != "MAGIC" && avg_skill != "SWIMMING" && avg_skill != "Gimmickry"){			
				setAttrs({[attack_row+"_avg_skill_used_rowid"]:"Err"});
				let section3 = "repeating_finearts";
				getSectionIDs(section3, function(idArray) {					
					if (idArray.length > 0) {
						_.each(idArray, function(currentID, i) {
							getAttrs([section3+"_" + currentID + "_skill_name",section3+"_" + currentID + "_raw_bcs",section3+"_" + currentID + "_base_bcs",section3+"_" + currentID + "_bonus",section3+"_" + currentID + "_mod"], function(values) {	
								console.log(` ${JSON.stringify(values)}`);
								let skillname = values[section3+"_" + idArray[i] + "_skill_name"].toUpperCase();
								console.log("skillname: "+skillname + "=" +"skill: "+avg_skill);
								if (skillname == avg_skill){
									console.log("found it");
									setAttrs({[attack_row+"_avg_skill_used_rowid"]:section3+"_"+currentID});
								}								
									
							});
						});				
					}					
				});	
			}
	});
	
		
		
	//check if a melee weapon has been added and get the row id assigend
	
	
	
	//end check if a melee weapon has been added and get the row id assigend
	function findWeapon(weapon){
	 let result = weapons.filter(obj => {
		return obj.Weapon.toLowerCase() === weapon.toLowerCase();
	  })
		return result;
	};
		
	function findSkill(skill, section){
		 getSectionIDs(section, function(idArray) {
			let result = {"result":0};
			console.log("findskill array: "+idArray);
			if (idArray.length > 0) {

				_.each(idArray, function(currentID, i) {
					getAttrs([section+"_" + currentID + "_skill_name",section+"_" + currentID + "_raw_bcs",section+"_" + currentID + "_base_bcs",section+"_" + currentID + "_bonus",section+"_" + currentID + "_mod"], function(values) {
																													
						console.log("!!!!!! stuff2 cccccccc  "+JSON.stringify(values));

						let skillname = values[section+"_" + idArray[i] + "_skill_name"];
						console.log("skillname: "+skillname);
						console.log("=");
						console.log("skill: "+skill);
						if (skillname == skill){
							console.log("findskill 1");	
							result.result = 1;
							console.log("findskill 2");		
							result.raw_bcs= values[section+"_" + idArray[i] + "_raw_bcs"];
							console.log("findskill 3");	
							result.base_bcs= values[section+"_" + idArray[i] + "_base_bcs"];
							console.log("findskill 4");	
							result.bonus= values[section+"_" + idArray[i] + "_bonus"];
							console.log("findskill 5");	
							/*result.mod= values[section+"_" + idArray[i] + "_mod"];										*/
						}								
							
					});
				});				
			}
			/*console.log(`result in findSkill ${JSON.stringify(result)}`)			*/
			console.log("findskill 6");	
			return result;
		});						
	};		
	
	// lookup button for melee weapos
	on('clicked:repeating_meleeWpns:lookup clicked:repeating_hurledWpns:lookup', (event)=>{
		console.log(`clicked:repeating_meleeWpns:lookup event: ${JSON.stringify(event)}`);
		let rowid = getRowID(event.sourceAttribute);
		getAttrs([rowid+"_wpnName",rowid+"_skill_used"], function(values) {
			console.log(`lookup ${JSON.stringify(values)}`);
			console.log("check if it is an unarmed attack");
			let wpnName =  values[rowid+"_wpnName"];
			console.log("wpn name to lookup:"+wpnName);				
			if (!wpnName.includes("UNARMED") && !wpnName.includes("BRAWLING") && !wpnName.includes("JUJUTSU") && !wpnName.includes("ATEMI-WAZA") && !wpnName.includes("SUMAI")){
				
				let skill_used=values[rowid+"_skill_used"].toUpperCase();		
				let wpnValues = findWeapon(wpnName)[0];
				let form_list = wpnValues.Form_list;
				wpnName = wpnName.toUpperCase();
				console.log(JSON.stringify(wpnValues));
				console.log(wpnValues.Damage);
				console.log(wpnValues.Range);
				let hands = "2H";
				if (wpnValues.Size=="1H"){
					hands = "1H";
				}
				let range_list = "0";	
				if (wpnValues.Range=="Shrt"){
					console.log("range list 1");
					range_list = "1";
				} else if (wpnValues.Range=="Mdm"){
					console.log("range list 2");
					range_list = "2";
				} else if (wpnValues.Range=="Lng"){
					console.log("range list 3");
					range_list = "3";
				}			
				console.log("range_list: "+range_list);
				let attrsToSet = {
					[rowid+"_form"]: "Strike",
					[rowid+"_form_list"]: form_list,
					[rowid+"_damage"]: wpnValues.Damage,
					[rowid+"_range"]: wpnValues.Range,
					[rowid+"_size"]: wpnValues.Size,
					[rowid+"_hands"]: hands,
					[rowid+"_weight"]: wpnValues.Weight,
					[rowid+"_forms"]: wpnValues.Form,
					[rowid+"_min_str"]: wpnValues.MinSTR,
					[rowid+"_type"]: wpnValues.DmgType,
					[rowid+"_range_list"]: range_list,
					[rowid+"_default_type"]: wpnValues.DmgType
				};
				setAttrs(attrsToSet);
			}	
		});		
		
	});	
	// end of lookup button for weapons 
	// event listener for worn armor checkbox
	
		on("change:repeating_armorClothing:worn change:repeating_armorClothing:carried", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
			console.log("!!!!!! eventinfo worn checkbox  "+JSON.stringify(eventInfo.sourceAttribute));
			let source = eventInfo.sourceAttribute;
			console.log("^^^^^^^^^^^^^!!!!!! source attribute worn or carried changed"+source);
			getAttrs(["repeating_armorClothing_worn","repeating_armorClothing_carried"], function(values) {	
				console.log("^^^^!!!!!! values "+JSON.stringify(values))
				if (source.includes("carried") && values.repeating_armorClothing_carried=="1" ){
					setAttrs({"repeating_armorClothing_worn":""});
				} else if (source.includes("worn") && values.repeating_armorClothing_worn=="1" ) {
					setAttrs({"repeating_armorClothing_carried":""});;
				}
			});
		});
	
    
    
    	on("change:repeating_armorClothing:worn change:repeating_armorClothing:ac", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
			console.log("!!!!!! eventinfo worn checkbox  "+JSON.stringify(eventInfo.sourceAttribute));
			let source = eventInfo.sourceAttribute;
			console.log("!!!!!! source attribute for worn checkbox  "+source);
			let rowID = getRowID(source);
			console.log("row id: "+rowID);
            getAttrs([rowID+"_ac",rowID+"_worn"], function(values) {
                console.log("!!!!!! worn change getattrs values "+JSON.stringify(values));                 
                let ac = values[rowID+"_ac"]; 
                let worn = values[rowID+"_worn"]; 
                console.log("ac: "+ac)
                console.log("worn: "+worn)
                if (worn=="1"){
                    setAttrs({"worn_ac":ac,[rowID+"_carried"]:""});
                }                
            });
            resetWorn(rowID.replace("repeating_armorclothing_",""));
		});
	
	
		on("change:repeating_armorClothing:worn", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
			console.log("!!!!!! eventinfo worn checkbox  "+JSON.stringify(eventInfo.sourceAttribute));
			let source = eventInfo.sourceAttribute;
			console.log("!!!!!! source attribute for worn checkbox  "+source);
			let rowID = getRowID(source);
			console.log("row id: "+rowID);
			
			if (eventInfo.newValue=="1"){
				getAttrs([rowID+"_ac"], function(values) {	
                                  
					let ac = values[rowID+"_ac"];
					console.log("ac: "+ac)
					setAttrs({"worn_ac":ac,[rowID+"_carried"]:""});
				    
				});
				resetWorn(rowID.replace("repeating_armorclothing_",""));
			}
		});	
		
		
		
		
		function resetWorn(selectedID){
			 getSectionIDs("repeating_armorClothing", function(idArray) {
				if (idArray.length > 0) {
		
					_.each(idArray, function(currentID, i) {
						console.log(currentID+" = "+selectedID)						
						if (currentID != selectedID){
								let attrsToSet = {["repeating_armorClothing_" + idArray[i] +'_worn']:0};								
								console.log("attrs to set "+JSON.stringify(attrsToSet));
								setAttrs(attrsToSet,{silent:true});
						}						
					});
				}
				
			});	
		}
	// end of lookup button for weapons 
	// event listen for armor class attributes.
	// event listener for worn armor checkbox
		on("change:worn_ac change:worn_ac change:defense_ac change:parry_ac  change:spell_ac change:other_ac", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["worn_ac","defense_ac","parry_ac","spell_ac","other_ac"], function(values) {	
					console.log("!!!!!! values "+JSON.stringify(values));	
					let effective_ac = parseFloat(values.worn_ac)+parseInt(values.defense_ac)+parseFloat(values.parry_ac)+parseInt(values.spell_ac)+parseInt(values.other_ac);
					console.log("effective_ac: "+effective_ac);
					setAttrs({"effective_ac":effective_ac});
				
				});
		});	
		
		
		// total damage listener
		on("change:lethal change:subdual", function(eventInfo) {
			console.log("!!!!!! total damage eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["lethal","subdual","total_hit_points","level","profession","show_npc","npc_sheet_type"], function(values) {
					console.log("!!!!!! total damage values "+JSON.stringify(values));	
					let lethal = parseInt(values.lethal);
					console.log("lethal: "+lethal);
					let tot_damage = lethal+parseInt(values.subdual);
					let total_hit_points = parseInt(values.total_hit_points);
                    let death_target = total_hit_points
                    if (values.show_npc=="1" || (values.npc=="2" && values.npc_sheet_type=="1")){
                        death_target = death_target+parseInt(values.level);
                    }
					console.log("lethal: "+lethal);
					console.log("death_target: "+death_target);
					let effect = "";
					console.log(" damage listener marker 1");
					if (tot_damage >= parseInt(values.total_hit_points)){
						console.log(" damage listener marker 2");
						effect=getTranslationByKey("unconscious")
					} 
					if (lethal > death_target)
					{
						console.log(" damage listener marker 3");
						effect=getTranslationByKey("dead")
					}
					setAttrs({"total_damage":tot_damage,"damage_effect":effect});
					if (values.profession="Shugenja"){
						let damage_ratio = tot_damage/total_hit_points;
						console.log("damage ratio:"+damage_ratio)
						let magic_bcs_mod = 0;
						if (damage_ratio > 0.5 &&  damage_ratio <= 0.75){
							magic_bcs_mod = -1;
						} else if (damage_ratio > 0.75 && damage_ratio <= 1){
							magic_bcs_mod = -3;
						} else if (damage_ratio > 1){
							magic_bcs_mod = -5;
						}
						console.log("magic_bcs_mod:"+magic_bcs_mod);
						setAttrs({"shugenja_wound_penalty":magic_bcs_mod});
					}
				});
		})	

		
        //legendary being armor listener
        on("change:repeating_members:lb_nat_ac change:repeating_members:lb_worn_ac", function(eventInfo) {
			console.log("!!!!!! legendary being change ac eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["repeating_members_lb_nat_ac","repeating_members_lb_worn_ac"], function(values) {	
                
                    tot_ac = parseInt(values["repeating_members_lb_nat_ac"])+parseInt(values["repeating_members_lb_worn_ac"])
                    console.log("tot_ac: "+tot_ac);
					setAttrs({"repeating_members_lb_tot_ac":tot_ac});
				});
		});


        //beast damage listener
		on("change:repeating_members:beast_lethal change:repeating_members:beast_subdual change:repeating_members:beast_total_hit_points", function(eventInfo) {
			console.log("!!!!!! total damage eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["repeating_members_beast_lethal","repeating_members_beast_subdual","repeating_members_beast_total_hit_points"], function(values) {	
					console.log("!!!!!! total damage values "+JSON.stringify(values));	
					let lethal = parseInt(values["repeating_members_beast_lethal"]);
					console.log("lethal: "+lethal);
					let tot_damage = lethal+parseInt(values["repeating_members_beast_subdual"]);
					let total_hit_points = parseInt(values["repeating_members_beast_total_hit_points"]);
                    let death_target = total_hit_points
					console.log("tot_damage: "+tot_damage);                    
                    console.log("total_hit_points: "+total_hit_points);
					console.log("lethal: "+lethal);
					console.log("death_target: "+death_target);
					let effect = "";
					console.log(" damage listener marker 1");
					if (tot_damage >= total_hit_points){
						console.log(" damage listener marker 2");
						effect=getTranslationByKey("unc")
					} 
					if (lethal > death_target)
					{
						console.log(" damage listener marker 3");
						effect=getTranslationByKey("dead")
					}
					setAttrs({"repeating_members_beast_total_damage":tot_damage,"repeating_members_beast_damage_effect":effect});
				});
		});        
		
		
		// healing rate listener 
		on("change:healing_rate change:healing_rate_mod", function(eventInfo) {
			console.log("!!!!!! healing rate eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["healing_rate","healing_rate_mod"], function(values) {	
					console.log("!!!!!! healing rate values "+JSON.stringify(values));	
					let tot_hr = Math.max(parseInt(values.healing_rate)+parseInt(values.healing_rate_mod),0);
					console.log("tot_hr: "+tot_hr);
						setAttrs({"total_healing_rate":tot_hr});
				});
		})
		
		// listener  to cacluate total hit points
		on("change:hlh_perm change:hit_dice_total change:hit_points_mod change:human_npc_type", function(eventInfo) {
			console.log("!!!!!! total hit points eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["hlh_perm","hit_dice_total","hit_points_mod","show_npc","human_npc_type"], function(values) {	
					console.log("!!!!!! total hit points values "+JSON.stringify(values));	
					console.log("hlh_perm.: "+parseInt(values.hlh_perm));
					console.log("hit_dice_total.: "+parseInt(values.hit_dice_total));
					console.log("hit_points_mod: "+parseInt(values.hit_points_mod));
                    let total_hit_points = 0;
                    if (values.show_npc==1 || (values.show_npc=="2" && values.human_npc_type=="Personality")){
                        total_hit_points = parseInt(values.hlh_perm)+parseInt(values.hit_dice_total)+parseInt(values.hit_points_mod);
                    } else if(values.show_npc=="2" && values.human_npc_type=="Rabble"){
                        total_hit_points = parseInt(values.hit_dice_total)+parseInt(values.hit_points_mod);                    
                    } else if(values.show_npc=="2" && values.human_npc_type=="Extra"){
                        total_hit_points = 1; 
                    }
					let hr = Math.max(Math.floor(parseInt(values.hlh_perm)/5),1);
					console.log("total_hit_points: "+total_hit_points);
					if (eventInfo.sourceAttribute=="hlh_perm"){
						setAttrs({"total_hit_points":total_hit_points,"healing_rate":hr});
					} else {
						setAttrs({"total_hit_points":total_hit_points});
					}
				});
		});			
		
		
		// listener  to cacluate total power pointsa
		on("change:wil_perm change:powerpoints_mod", function(eventInfo) {
			console.log("!!!!!! total power points eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["wil_perm","powerpoints_mod"], function(values) {	
					console.log("!!!!!! power points values "+JSON.stringify(values));	
					console.log("wil_perm.: "+parseInt(values.wil_perm));
					console.log("powerpoints_mod.: "+parseInt(values.powerpoints_mod));
					let total_power_points = parseInt(values.wil_perm)+parseInt(values.powerpoints_mod);
					console.log("total_power_points : "+total_power_points );
					setAttrs({"pow_perm":total_power_points});

				});
		});			
		
		// listener on strength to cacluate encumberance
		on("change:str_cur", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["str_cur"], function(values) {	
					console.log("!!!!!! encumberance calcualtor values "+JSON.stringify(values));	
					let str_cur = values.str_cur;
					setAttrs({"enc_unecumbered":str_cur*2,"enc_partial":str_cur*4,"enc_fully":str_cur*6,"enc_over":str_cur*8});
				});
		});	



		// listener set encumberance level and calculate penatlies
		on("change:str_cur change:total_weight_carried", function(eventInfo) {
			console.log("!!!!!! eventinfo calculate encumberance level "+JSON.stringify(eventInfo));
				getAttrs(["str_cur","total_weight_carried"], function(values) {	
					console.log("!!!!!! encumberance level "+JSON.stringify(values));	
					
					let str_cur = parseFloat(values.str_cur);
					let total_weight_carried = parseFloat(values.total_weight_carried);					
					let enc_pen = 0;
					let enc_reduction = 1;						
					if (total_weight_carried > str_cur*2 && total_weight_carried <= str_cur*4){
						enc_pen = 1;
						enc_reduction=0.75;						
					} else if (total_weight_carried > str_cur*4 && total_weight_carried <= str_cur*6){
						enc_pen = 2;
						enc_reduction=0.5;
					} else if(total_weight_carried > str_cur*6){
						enc_pen = 20;
						enc_reduction=0.5;
					}
					console.log("enc_pen: "+enc_pen);
					console.log("enc_reduction: "+enc_reduction);						
					setAttrs({"enc_pen":enc_pen,"enc_reduction":enc_reduction});				
					
				});
		});	

		// listener on armor & gear weights to cacluate total weight
		on("change:armor_total_weight change:gear_total_weight", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["armor_total_weight","gear_total_weight"], function(values) {	
					console.log("!!!!!! encumberance total weight values "+JSON.stringify(values));	
					let total_weight = parseInt(values.armor_total_weight)+parseInt(values.gear_total_weight);
					setAttrs({"total_weight_carried":total_weight});				
				});
		});		
		
		// listener for worn or carried armor change to calculate total weight
		on("change:repeating_armorClothing:weight change:repeating_armorClothing:worn change:repeating_armorClothing:carried", function(eventInfo) {
					//TAS.repeatingSimpleSum('equipment','equipment_weight','carry_total2');
					TAS.repeating("armorclothing")
						.attr("armor_total_weight")
						.field("weight","carried","worn")
						.reduce(function(m,r){
								
								console.log("carried "+(r.F["carried"]));
								console.log("worn "+(r.F["worn"]));
								
							if ( (r.F["worn"]) == 1){
								return m + (r.F["weight"]);
							}								
							if ((r.F["carried"]) == 1){
								return m + (r.F["weight"]);
							} else{
								return m;
							}
								
									
						
						},0,function(t,r,a){
							a.S["armor_total_weight"]=t;
						})
						.execute();
		});	
		
		// listener for worn or carried gear change to calculate total weight
		on("change:repeating_equipment:weight change:repeating_equipment:carried", function(eventInfo) {
					//TAS.repeatingSimpleSum('equipment','equipment_weight','carry_total2');
					TAS.repeating("equipment")
						.attr("gear_total_weight")
						.field("weight","carried")
						.reduce(function(m,r){
								
							console.log("carried "+(r.F["carried"]));
							if ((r.F["carried"]) == 1){
								return m + (r.F["weight"]);
							} else{
								return m;
							}
								
									
						
						},0,function(t,r,a){
							a.S["gear_total_weight"]=t;
						})
						.execute();
		});			
		
              
		
/////  examples of using the arron sheet to calculate weight totals /////

//				on('change:repeating_equipment remove:repeating_equipment',function(){
//					TAS.repeatingSimpleSum('equipment','equipment_weight','enc_totalf');
//				});

//				on('change:repeating_spiritspells remove:repeating_spiritspells',function(){
//					TAS.repeatingSimpleSum('spiritspells','mpcost','spiritint');
//				});



//				on('change:repeating_equipment2 remove:repeating_equipment2',function(){
//					//TAS.repeatingSimpleSum('equipment','equipment_weight','carry_total2');
//					TAS.repeating("equipment2")
//						.attr("carry_total2")
//						.field("equipment_weight","carried")
//						.reduce(function(m,r){
//								
//								console.log("carried "+(r.F["carried"]));
//								if ( (r.F["carried"]) == 1){
//									return m + (r.F["equipment_weight"]);
//								} else{
//									return m;
//								}
									
						
//						},0,function(t,r,a){
//							a.S["carry_total2"]=t;
//						})
//						.execute();
//				});	


//////////////////////////////////////////////////////////////////////// 		
		
///////////// This should stay at the bottom ///////////////////////////////
			/* ---- BEGIN: TheAaronSheet.js ---- */
			// Github:   https://github.com/shdwjk/TheAaronSheet/blob/master/TheAaronSheet.js
			// By:       The Aaron, Arcane Scriptomancer
			// Contact:  https://app.roll20.net/users/104025/the-aaron

			var TAS = TAS || (function(){
				'use strict';

				var version = '0.2.4',
					lastUpdate = 1457098091,

					loggingSettings = {
						debug: {
							key:     'debug',
							title:   'DEBUG',
							color: {
								bgLabel: '#7732A2',
								label:   '#F2EF40',
								bgText:  '#FFFEB7',
								text:    '#7732A2'
							}
						},
						error: {
							key:     'error',
							title:   'Error',
							color: {
								bgLabel: '#C11713',
								label:   'white',
								bgText:  '#C11713',
								text:    'white'
							}
						},
						warn: {
							key:     'warn',
							title:   'Warning',
							color: {
								bgLabel: '#F29140',
								label:   'white',
								bgText:  '#FFD8B7',
								text:    'black'
							}
						},
						info: {
							key:     'info',
							title:   'Info',
							color: {
								bgLabel: '#413FA9',
								label:   'white',
								bgText:  '#B3B2EB',
								text:    'black'
							}
						},
						notice: {
							key:     'notice',
							title:   'Notice',
							color: {
								bgLabel: '#33C133',
								label:   'white',
								bgText:  '#ADF1AD',
								text:    'black'
							}
						},
						log: {
							key:     'log',
							title:   'Log',
							color: {
								bgLabel: '#f2f240',
								label:   'black',
								bgText:  '#ffff90',
								text:    'black'
							}
						},
						callstack: {
							key:     'TAS',
							title:   'function',
							color: {
								bgLabel: '#413FA9',
								label:   'white',
								bgText:  '#B3B2EB',
								text:    'black'
							}
						},
						callstack_async: {
							key:     'TAS',
							title:   'ASYNC CALL',
							color: {
								bgLabel: '#413FA9',
								label:   'white',
								bgText:  '#413FA9',
								text:    'white'
							}
						},
						TAS: {
							key:     'TAS',
							title:   'TAS',
							color: {
								bgLabel: 'grey',
								label:   'black;background:linear-gradient(#304352,#d7d2cc,#d7d2cc,#d7d2cc,#304352)',
								bgText:  'grey',
								text:    'black;background:linear-gradient(#304352,#d7d2cc,#d7d2cc,#d7d2cc,#304352)'
							}
						}
					},


					config = {
						debugMode: false,
						logging: {
							log: true,
							notice: true,
							info: true,
							warn: true,
							error: true,
							debug: false
						}
					},

					callstackRegistry = [],
					queuedUpdates = {}, //< Used for delaying saves till the last momment.

				complexType = function(o){
					switch(typeof o){
						case 'string':
							return 'string';
						case 'boolean':
							return 'boolean';
						case 'number':
							return (_.isNaN(o) ? 'NaN' : (o.toString().match(/\./) ? 'decimal' : 'integer'));
						case 'function':
							return 'function: '+(o.name ? o.name+'()' : '(anonymous)');
						case 'object':
							return (_.isArray(o) ? 'array' : (_.isArguments(o) ? 'arguments' : ( _.isNull(o) ? 'null' : 'object')));
						default:
							return typeof o;
					}
				},

				dataLogger = function(primaryLogger,secondaryLogger,data){
					_.each(data,function(m){
						var type = complexType(m);
						switch(type){
							case 'string':
								primaryLogger(m);
								break;
							case 'undefined':
							case 'null':
							case 'NaN':
								primaryLogger('['+type+']');
								break;
							case 'number':
							case 'not a number':
							case 'integer':
							case 'decimal':
							case 'boolean':
								primaryLogger('['+type+']: '+m);
								break;
							default:
								primaryLogger('['+type+']:=========================================');
								secondaryLogger(m);
								primaryLogger('=========================================================');
								break;
						}
					});
				},


				colorLog = function(options){
					var coloredLoggerFunction,
						key = options.key,
						label = options.title || 'TAS',
						lBGColor = (options.color && options.color.bgLabel) || 'blue',
						lTxtColor = (options.color && options.color.label) || 'white',
						mBGColor = (options.color && options.color.bgText) || 'blue',
						mTxtColor = (options.color && options.color.text) || 'white';

					coloredLoggerFunction = function(message){
						console.log(
							'%c '+label+': %c '+message + ' ',
							'background-color: '+lBGColor+';color: '+lTxtColor+'; font-weight:bold;',
							'background-color: '+mBGColor+';color: '+mTxtColor+';'
						); 
					};
					return function(){
						if('TAS'===key || config.logging[key]){
						   dataLogger(coloredLoggerFunction,function(m){console.log(m);},_.toArray(arguments)); 
						}
					};
				},

				logDebug  = colorLog(loggingSettings.debug),
				logError  = colorLog(loggingSettings.error),
				logWarn   = colorLog(loggingSettings.warn),
				logInfo   = colorLog(loggingSettings.info),
				logNotice = colorLog(loggingSettings.notice),
				logLog    = colorLog(loggingSettings.log),
				log       = colorLog(loggingSettings.TAS),
				logCS     = colorLog(loggingSettings.callstack),
				logCSA    = colorLog(loggingSettings.callstack_async),

				registerCallstack = function(callstack,label){
					var idx=_.findIndex(callstackRegistry,function(o){
						return (_.difference(o.stack,callstack).length === _.difference(callstack,o.stack).length) &&
							_.difference(o.stack,callstack).length === 0 &&
							o.label === label;
					});
					if(-1 === idx){
						idx=callstackRegistry.length;
						callstackRegistry.push({
							stack: callstack,
							label: label
						});
					}
					return idx;
				},

				setConfigOption = function(options){
					var newconf =_.defaults(options,config);
					newconf.logging=_.defaults(
						(options && options.logging)||{},
						config.logging
					);
					config=newconf;
				},
				
				debugMode = function(){
					config.logging.debug=true;
					config.debugMode = true;
				},

				getCallstack = function(){
					var e = new Error('dummy'),
						stack = _.map(_.rest(e.stack.replace(/^[^\(]+?[\n$]/gm, '')
						.replace(/^\s+at\s+/gm, '')
						.replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
						.split('\n')),function(l){
							return l.replace(/\s+.*$/,'');
						});
					return stack;
				},
				logCallstackSub = function(cs){
					var matches, csa;
					_.find(cs,function(line){
						matches = line.match(/TAS_CALLSTACK_(\d+)/);
						if(matches){
						   csa=callstackRegistry[matches[1]];
						   logCSA( '===================='+(csa.label ? '> '+csa.label+' <' : '')+'====================');
						   logCallstackSub(csa.stack);
						   return true;
						} 
						logCS(line);
						return false;
					});
				},
				logCallstack = function(){
					var cs;
					if(config.debugMode){
						cs = getCallstack();
						cs.shift();
						log('==============================> CALLSTACK <==============================');
						logCallstackSub(cs);
						log('=========================================================================');
					}
				},


				wrapCallback = function (label, callback, context){
					var callstack;
					if('function' === typeof label){
						context=callback;
						callback=label;
						label=undefined;
					}
					if(!config.debugMode){
						return (function(cb,ctx){
							return function(){
								cb.apply(ctx||{},arguments);
							};
						}(callback,context));
					}
					
					callstack = getCallstack();
					callstack.shift();
					
					return (function(cb,ctx,cs,lbl){
						var ctxref=registerCallstack(cs,lbl);

						/*jshint -W054 */
						return new Function('cb','ctx','TASlog',
							"return function TAS_CALLSTACK_"+ctxref+"(){"+
								"TASlog('Entering: '+(cb.name||'(anonymous function)'));"+
								"cb.apply(ctx||{},arguments);"+
								"TASlog('Exiting: '+(cb.name||'(anonymous function)'));"+
							"};")(cb,ctx,log);
						/*jshint +W054 */
					}(callback,context,callstack,label));
				},


				prepareUpdate = function( attribute, value ){
					queuedUpdates[attribute]=value;
				},

				applyQueuedUpdates = function() {
				  setAttrs(queuedUpdates);
				  queuedUpdates = {};
				},

				namesFromArgs = function(args,base){
					return _.chain(args)
						.reduce(function(memo,attr){
							if('string' === typeof attr) {
								memo.push(attr);
							} else if(_.isArray(args) || _.isArguments(args)){
								memo = namesFromArgs(attr,memo);
							}
							return memo;
						},(_.isArray(base) && base) || [])
						.uniq()
						.value();
				},

				addId = function(obj,value){
					Object.defineProperty(obj,'id',{
						value: value,
						writeable: false,
						enumerable: false
					});
				},

				addProp = function(obj,prop,value,fullname){
					(function(){
						var pname=(_.contains(['S','F','I','D'],prop) ? '_'+prop : prop),
							full_pname = fullname || prop,
							pvalue=value;

						_.each(['S','I','F'],function(p){
							if( !_.has(obj,p)){
								Object.defineProperty(obj, p, {
									value: {},
									enumerable: false,
									readonly: true
								});
							}
						});
						if( !_.has(obj,'D')){
							Object.defineProperty(obj, 'D', {
								value: _.reduce(_.range(10),function(m,d){
										Object.defineProperty(m, d, {
											value: {},
											enumerable: true,
											readonly: true
										});
										return m;
									},{}),
								enumerable: false,
								readonly: true
							});
						}


						// Raw value
						Object.defineProperty(obj, pname, {
							enumerable: true,
							set: function(v){
								if(v!==pvalue) {
									pvalue=v;
									prepareUpdate(full_pname,v);
								}
							},
							get: function(){
								return pvalue;
							}
						});
						
						// string value
						Object.defineProperty(obj.S, pname, {
							enumerable: true,
							set: function(v){
								var val=v.toString();
								if(val !== pvalue) {
									pvalue=val;
									prepareUpdate(full_pname,val);
								}
							},
							get: function(){
								return pvalue.toString();
							}
						});

						// int value
						Object.defineProperty(obj.I, pname, {
							enumerable: true,
							set: function(v){
								var val=parseInt(v,10) || 0;
								if(val !== pvalue){
									pvalue=val;
									prepareUpdate(full_pname,val);
								}
							},
							get: function(){
								return parseInt(pvalue,10) || 0;
							}
						});

						// float value
						Object.defineProperty(obj.F, pname, {
							enumerable: true,
							set: function(v){
								var val=parseFloat(v) || 0;
								if(val !== pvalue) {
									pvalue=val;
									prepareUpdate(full_pname,val);
								}
							},
							get: function(){
								return parseFloat(pvalue) || 0;
							}
						});
						_.each(_.range(10),function(d){
							Object.defineProperty(obj.D[d], pname, {
								enumerable: true,
								set: function(v){
									var val=(parseFloat(v) || 0).toFixed(d);
									if(val !== pvalue){
										pvalue=val;
										prepareUpdate(full_pname,val);
									}
								},
								get: function(){
									return (parseFloat(pvalue) || 0).toFixed(d);
								}
							});
						});

					}());
				},
				
				repeating = function( section ) {
					return (function(s){
						var sectionName = s,
							attrNames = [],
							fieldNames = [],
							operations = [],
							after = [],
						
						repAttrs = function TAS_Repeating_Attrs(){
							attrNames = namesFromArgs(arguments,attrNames);
							return this;
						},
						repFields = function TAS_Repeating_Fields(){
							fieldNames = namesFromArgs(arguments,fieldNames);
							return this;
						},
						repReduce = function TAS_Repeating_Reduce(func, initial, final, context) { 
							operations.push({
								type: 'reduce',
								func: (func && _.isFunction(func) && func) || _.noop,
								memo: (_.isUndefined(initial) && 0) || initial,
								final: (final && _.isFunction(final) && final) || _.noop,
								context: context || {}
							});
							return this;
						},
						repMap = function TAS_Repeating_Map(func, final, context) {
							operations.push({
								type: 'map',
								func: (func && _.isFunction(func) && func) || _.noop,
								final: (final && _.isFunction(final) && final) || _.noop,
								context: context || {}
							});
							return this;
						},
						repEach = function TAS_Repeating_Each(func, final, context) {
							operations.push({
								type: 'each',
								func: (func && _.isFunction(func) && func) || _.noop,
								final: (final && _.isFunction(final) && final) || _.noop,
								context: context || {}
							});
							return this;
						},
						repTap = function TAS_Repeating_Tap(final, context) {
							operations.push({
								type: 'tap',
								final: (final && _.isFunction(final) && final) || _.noop,
								context: context || {}
							});
							return this;
						},
						repAfter = function TAS_Repeating_After(callback,context) {
							after.push({
								callback: (callback && _.isFunction(callback) && callback) || _.noop,
								context: context || {}
							});
							return this;
						},
						repExecute = function TAS_Repeating_Execute(callback,context){
							var rowSet = {},
								attrSet = {},
								fieldIds = [],
								fullFieldNames = [];

							repAfter(callback,context);

							// call each operation per row.
							// call each operation's final
							getSectionIDs("repeating_"+sectionName,function(ids){
								fieldIds = ids;
								fullFieldNames = _.reduce(fieldIds,function(memo,id){
									return memo.concat(_.map(fieldNames,function(name){
										return 'repeating_'+sectionName+'_'+id+'_'+name;  
									}));
								},[]);
								getAttrs( _.uniq(attrNames.concat(fullFieldNames)), function(values){
									_.each(attrNames,function(aname){
										if(values.hasOwnProperty(aname)){
											addProp(attrSet,aname,values[aname]);
										}
									});

									rowSet = _.reduce(fieldIds,function(memo,id){
										var r={};
										addId(r,id);
										_.each(fieldNames,function(name){
											var fn = 'repeating_'+sectionName+'_'+id+'_'+name;  
											addProp(r,name,values[fn],fn);
										});

										memo[id]=r;

										return memo;
									},{});

									_.each(operations,function(op){
										var res;
										switch(op.type){
											case 'tap':
												_.bind(op.final,op.context,rowSet,attrSet)();
												break;

											case 'each':
												_.each(rowSet,function(r){
													_.bind(op.func,op.context,r,attrSet,r.id,rowSet)();
												});
												_.bind(op.final,op.context,rowSet,attrSet)();
												break;

											case 'map':
												res = _.map(rowSet,function(r){
													return _.bind(op.func,op.context,r,attrSet,r.id,rowSet)();
												});
												_.bind(op.final,op.context,res,rowSet,attrSet)();
												break;

											case 'reduce':
												res = op.memo;
												_.each(rowSet,function(r){
													res = _.bind(op.func,op.context,res,r,attrSet,r.id,rowSet)();
												});
												_.bind(op.final,op.context,res,rowSet,attrSet)();
												break;
										}
									});

									// finalize attrs
									applyQueuedUpdates();
									_.each(after,function(op){
										_.bind(op.callback,op.context)();
									});
								});
							});
						};
							
						return {
							attrs: repAttrs,
							attr: repAttrs,

							column: repFields,
							columns: repFields,
							field: repFields,
							fields: repFields,

							reduce: repReduce,
							inject: repReduce,
							foldl: repReduce,

							map: repMap,
							collect: repMap,

							each: repEach,
							forEach: repEach,

							tap: repTap,
							'do': repTap,

							after: repAfter,
							last: repAfter,
							done: repAfter,

							execute: repExecute,
							go: repExecute,
							run: repExecute
						};
					}(section));
				},


				repeatingSimpleSum = function(section, field, destination){
					repeating(section)
						.attr(destination)
						.field(field)
						.reduce(function(m,r){
							return m + (r.F[field]);
						},0,function(t,r,a){
							a.S[destination]=t;
						})
						.execute();
				};



				return {
					/* Repeating Sections */
					repeatingSimpleSum: repeatingSimpleSum,
					repeating: repeating,

					/* Configuration */
					config: setConfigOption,

					/* Debugging */
					callback: wrapCallback,
					callstack: logCallstack,
					debugMode: debugMode,
					_fn: wrapCallback,

					/* Logging */
					debug: logDebug,
					error: logError,
					warn: logWarn,
					info: logInfo,
					notice: logNotice,
					log: logLog
				};
			}());

			/* ---- END: TheAaronSheet.js ---- */	
/////////// DONT ADD ANYTHING BELWOW THIS ////////////////////////			
		


  </script>
