<script type="text/worker">
	const physical_attributes = ["attack_skill","missile_skill","defence_skill","endurance","perception","speed","agility"];
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
  

	const menulist = ["character","background","equipment","configuration"];
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
      	
	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	
	
		on("change:whisper_gm", function(values) {
			console.log(JSON.stringify(values));
			console.log("newValue: "+values.newValue);
			console.log(typeof  values.newValue);
			let wstr ="" 

			if (parseInt(values.newValue)===1){
				 wstr = "/w gm "	
			} 
			console.log("wstr:" +wstr);
			setAttrs({whisper_str: wstr});

		});
	
	//// ROLLS  SHEET WORKERS ////
	
   on("clicked:initiative", function(eventInfo) {
		console.log("!!!!!! repeating section weapon roll "+JSON.stringify(eventInfo));
		getAttrs(["speed_orig","speed_temp","speed_mod","character_name"], function(values) {
			let init_base = values.speed_orig;
			let speed_temp = values.speed_temp;
			let speed_mod = values.speed_mod;

			if (speed_temp > 0){
				init_base=speed_temp;
			}
			init_base = init_base - speed_mod;
			init_tie = (init_base/100);
			roll_str = "&{template:initiative} {{name="+values.character_name+"}} {{source=Initiative}} {{initiative=[[2d10+"+init_base+"+[["+init_tie+"]]"+" &{tracker}]]}}";
			console.log("roll_str : "+roll_str);
			startRoll(roll_str, (results) => {finishRoll(results.rollId);});
			//[[2D10+@{selected|speed_orig}+[[@{selected|speed_orig}/100]] &{tracker}]]
				
		});	
		
	});


	on("clicked:repeating_npc-weapons:weapon-damage-roll clicked:repeating_npc-missiles:weapon-damage-roll", function(eventInfo) {
            console.log("!!!!!! companion weapon damage roll "+JSON.stringify(eventInfo));
			roll_source = getRowID(eventInfo.sourceAttribute);
			console.log("roll_source: "+roll_source);
			console.log("eventInfo.htmlAttributes..name: "+eventInfo.htmlAttributes.name);
            damageRoll("repeating_npc-weapons","npc_combat",eventInfo.htmlAttributes.name);
    });

	
	
	on("clicked:repeating_companions:companion-weapon-damage-roll1 clicked:repeating_companions:companion-weapon-damage-roll2 clicked:repeating_companions:companion-weapon-damage-roll3", function(eventInfo) {
            console.log("!!!!!! companion weapon damage roll "+JSON.stringify(eventInfo));
			roll_source = getRowID(eventInfo.sourceAttribute);
			console.log("roll_source: "+roll_source);
			console.log("eventInfo.htmlAttributes..name: "+eventInfo.htmlAttributes.name);
            damageRoll("repeating_companions","companion_combat",eventInfo.htmlAttributes.name);
    });
	
	on("clicked:repeating_weapons:weapon-damage-roll clicked:repeating_missiles:weapon-damage-roll", function(eventInfo) {
            console.log("!!!!!! repeating section weapon damage roll "+JSON.stringify(eventInfo));
			roll_source = getRowID(eventInfo.sourceAttribute);
			console.log("roll_source: "+roll_source);
			console.log("eventInfo.htmlAttributes..name: "+eventInfo.htmlAttributes.name);
            damageRoll(roll_source,"combat",eventInfo.htmlAttributes.name);
    });
	
	function damageRoll(roll_origin,type,weapon_button){
		console.log("damage roll_origin: "+roll_origin)
		console.log("^^^^^^ type: "+type);
		if (type=="combat"){
			var getArray = [roll_origin+"_weapon_damage",roll_origin+"_weapon_name","character_name"];
		} else if (type=="companion_combat"){
					
				if (weapon_button=="act_companion-weapon-damage-roll1"){
					var getArray = [roll_origin+"_companion_weapon_damage_1",roll_origin+"_companion_weapon_1","character_name"];
				} else if (weapon_button=="act_companion-weapon-damage-roll2"){
					var getArray = [roll_origin+"_companion_weapon_damage_2",roll_origin+"_companion_weapon_2","character_name"];
				} else if  (weapon_button=="act_companion-weapon-damage-roll3"){
					var getArray = [roll_origin+"_companion_weapon_damage_3",roll_origin+"_companion_weapon_3","character_name"];
				}			
		} else if (type=="npc_combat"){
			var getArray = [roll_origin+"_weapon_damage",roll_origin+"_weapon_name","character_name"];
		}
	
		getAttrs(getArray, function(values) {	
			var getStr=""
			console.log("************ type: "+type);
			
			if (type=="combat" || type=="npc_combat"){
				console.log("^damage rolls values "+JSON.stringify(values));
				let weapon_name = values[roll_origin+"_weapon_name"]
				console.log("weapon_name : "+weapon_name);
				rollStr="&{template:damageRoll} {{name="+values.character_name+"}} {{weapon_name="+weapon_name+"}} {{weapon_damage=[["+values[roll_origin+"_weapon_damage"]+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} "
			} else if (type=="companion_combat"){
				if (weapon_button=="act_companion-weapon-damage-roll1"){
					rollStr="&{template:damageRoll} {{name="+values.character_name+"}} {{weapon_name="+values[roll_origin+"_companion_weapon_1"]+"}} {{weapon_damage=[["+values[roll_origin+"_companion_weapon_damage_1"]+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} "										
				} else if (weapon_button=="act_companion-weapon-damage-roll2"){
					rollStr="&{template:damageRoll} {{name="+values.character_name+"}} {{weapon_name="+values[roll_origin+"_companion_weapon_2"]+"}} {{weapon_damage=[["+values[roll_origin+"_companion_weapon_damage_2"]+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} "						
				} else if  (weapon_button=="act_companion-weapon-damage-roll3"){
					rollStr="&{template:damageRoll} {{name="+values.character_name+"}} {{weapon_name="+values[roll_origin+"_companion_weapon_3"]+"}} {{weapon_damage=[["+values[roll_origin+"_companion_weapon_damage_3"]+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} "						
				}										
			} 
			
	       console.log("rollStr: "+rollStr);
		   startRoll(rollStr, (results) => {
			console.log("!!!!!!  damage startRoll "+JSON.stringify(results));
			
			let weapon_damage = parseInt(results.results.weapon_damage.result);
			let half_damage = Math.ceil(weapon_damage*0.5);
			console.log("***********half_damage: "+half_damage)
			let double_damage = weapon_damage*2;
			console.log("**********double_damage: "+double_damage)
			
            finishRoll(
                results.rollId,
                {
					half_damage:half_damage,
					double_damage:double_damage
					
                }
            );
        });		
		})				
	}
	
	    on("clicked:repeating_companions:companion-weapon-as-roll1 clicked:repeating_companions:companion-weapon-ds-roll1 clicked:repeating_companions:companion-weapon-as-roll2 clicked:repeating_companions:companion-weapon-ds-roll2 clicked:repeating_companions:companion-weapon-as-roll3 clicked:repeating_companions:companion-weapon-ds-roll3   ", function(eventInfo) {
            console.log("!!!!!! repeating section weapon roll "+JSON.stringify(eventInfo));
			roll_source = getRowID(eventInfo.sourceAttribute);
			console.log("roll_source: "+roll_source);
			console.log("eventInfo.htmlAttributes..name: "+eventInfo.htmlAttributes.name);
			attributeRoll(roll_source,"companion_combat",eventInfo.htmlAttributes.name);
        });
	
	const attributteButtons  = ["attack_skill","missile_skill","defence_skill","knowledge","will","endurance","persuasion","perception","speed","agility"];
	 attributteButtons.forEach(button => {
        on(`clicked:${button}`, function(eventInfo) {
            console.log("button pressed: "+button);
            attributeRoll(button,"attribute","");
        });
      });

        on("clicked:repeating_weapons:weapon-as-roll clicked:repeating_weapons:weapon-ds-roll clicked:repeating_missiles:missile-ms-roll clicked:repeating_missiles:missile-ds-roll", function(eventInfo) {
            console.log("!!!!!! repeating section weapon roll "+JSON.stringify(eventInfo));
			roll_source = getRowID(eventInfo.sourceAttribute);
			console.log("roll_source: "+roll_source);
			console.log("eventInfo.htmlAttributes..name: "+eventInfo.htmlAttributes.name);
            attributeRoll(roll_source,"combat",eventInfo.htmlAttributes.name);
        });
		
		on("clicked:repeating_npc-weapons:weapon-as-roll clicked:repeating_npc-weapons:weapon-ds-roll clicked:repeating_npc-missiles:weapon-as-roll clicked:repeating_npc-missiles:weapon-ds-roll", function(eventInfo) {
            console.log("!!!!!! repeating section weapon roll "+JSON.stringify(eventInfo));
			roll_source = getRowID(eventInfo.sourceAttribute);
			console.log("roll_source: "+roll_source);
			console.log("eventInfo.htmlAttributes..name: "+eventInfo.htmlAttributes.name);
            attributeRoll(roll_source,"npc_combat",eventInfo.htmlAttributes.name);
        });
		
		
		
	  
	  function attributeRoll(roll_origin,type,weapon_button){
		let getStr = "";  
		if (type=="attribute"){
			getArray = [roll_origin+"_orig",roll_origin+"_temp",roll_origin+"_mod","cur_armor_penalty","whisper_str","show_npc","companion_ar_penalty"];
		} else if(type=="npc_combat"){
			console.log("weapon_button: "+weapon_button);
			var attribute_used = ""
			var weapon_mod = ""
			var base_mod = ""
								
			getArray = ["strong_grip","vicious",roll_origin+"_weapon_name",roll_origin+"_weapon_as",roll_origin+"_weapon_ds",roll_origin+"_weapon_damage","general_attack_skill_mod","general_defence_skill_mod","advanced_option","cur_armor_penalty","whisper_str","critical_percentage","show_npc","companion_ar_penalty"];

			console.log("getArray: "+getArray);								

		}  
		else if(type=="combat"){
			console.log("weapon_button: "+weapon_button);
			var attribute_used = ""
			var weapon_mod = ""
			var base_mod = ""
			
			if (weapon_button=="act_weapon-as-roll"){
				attribute_used = "attack_skill";
			} else if (weapon_button=="act_weapon-ds-roll"){
				attribute_used = "defence_skill";
			}  else if (weapon_button=="act_missile-ms-roll"){
				attribute_used = "missile_skill";
			}  else if (weapon_button=="act_missile-ds-roll"){
				attribute_used = "defence_skill";
			} else {
				console.log("Error weapon roll type 1");
			}


								
			getArray = ["strong_grip","vicious",roll_origin+"_weapon_name",roll_origin+"_weapon_as_mod",roll_origin+"_weapon_damage","general_attack_skill_mod","general_defence_skill_mod","advanced_option","cur_armor_penalty","show_npc","companion_ar_penalty"];

			console.log("getArray 1: "+getArray);					
			
			if (weapon_button=="act_weapon-as-roll"){
				getArray.push(roll_origin+"_weapon_as_mod","attack_skill_orig","attack_skill_temp","attack_skill_mod")
			} else if (weapon_button=="act_weapon-ds-roll"){
				getArray.push(roll_origin+"_weapon_ds_mod","defence_skill_orig","defence_skill_temp","defence_skill_mod")
			}  else if (weapon_button=="act_missile-ms-roll"){
				getArray.push(roll_origin+"_weapon_ms_mod","missile_skill_orig","missile_skill_temp","missile_skill_mod");
			}  else if (weapon_button=="act_missile-ds-roll"){
				getArray.push(roll_origin+"_weapon_ds_mod","defence_skill_orig","defence_skill_temp","defence_skill_mod");
			} else {
				console.log("Error weapon roll type 2");
			}		
			console.log("attribute_used: "+attribute_used);			
			console.log("getArray 2: "+getArray);		

		} else if(type=="companion_combat"){
			
			var attribute_used = ""
			var weapon_mod = ""
			var base_mod = ""
			
		
			if (weapon_button=="act_companion-weapon-as-roll1"){
				var getArray = [roll_origin+"_strong_grip",roll_origin+"vicious",roll_origin+"_companion_weapon_1",roll_origin+"_companion_as_1",roll_origin+"_companion_as_mod_1",roll_origin+"_companion_weapon_damage_1",roll_origin+"_companion_ar_penalty"];
				console.log("getArray companion as weapon 1: "+getArray);
				attribute_used = "companion-weapon-as-roll1"				
			} else if (weapon_button=="act_companion-weapon-ds-roll1"){		
				var getArray = [roll_origin+"_strong_grip",roll_origin+"vicious",roll_origin+"_companion_weapon_1",roll_origin+"_companion_ds_1",roll_origin+"_companion_ds_mod_1",roll_origin+"_companion_weapon_damage_1",roll_origin+"_companion_ar_penalty"];
				console.log("getArray companion ds weapon 1: "+getArray);
				attribute_used = "companion-weapon-ds-roll1"												
			} else  if (weapon_button=="act_companion-weapon-as-roll2"){
				var getArray = [roll_origin+"_strong_grip",roll_origin+"vicious",roll_origin+"_companion_weapon_2",roll_origin+"_companion_as_2",roll_origin+"_companion_as_mod_2",roll_origin+"_companion_weapon_damage_2",roll_origin+"_companion_ar_penalty"];
				console.log("getArray companion as weapon 2: "+getArray);
				attribute_used = "companion-weapon-as-roll2"									
			} else if (weapon_button=="act_companion-weapon-ds-roll2"){
				var getArray = [roll_origin+"_strong_grip",roll_origin+"vicious",roll_origin+"_companion_weapon_2",roll_origin+"_companion_ds_2",roll_origin+"_companion_ds_mod_2",roll_origin+"_companion_weapon_damage_2",roll_origin+"_companion_ar_penalty"];
				console.log("getArray companion ds weapon 1: "+getArray);
				attribute_used = "companion-weapon-ds-roll2"									
			} else  if (weapon_button=="act_companion-weapon-as-roll3"){
				var getArray = [roll_origin+"_strong_grip",roll_origin+"vicious",roll_origin+"_companion_weapon_3",roll_origin+"_companion_as_3",roll_origin+"_companion_as_mod_3",roll_origin+"_companion_weapon_damage_3",roll_origin+"_companion_ar_penalty"];
				console.log("getArray companion as weapon 3: "+getArray);
				attribute_used = "companion-weapon-as-roll2"								
			} else if (weapon_button=="act_companion-weapon-ds-roll3"){
				var getArray = [roll_origin+"_strong_grip",roll_origin+"vicious",roll_origin+"_companion_weapon_3",roll_origin+"_companion_ds_3",roll_origin+"_companion_ds_mod_3",roll_origin+"_companion_weapon_damage_3",roll_origin+"_companion_ar_penalty"];
				console.log("getArray companion ds weapon 3: "+getArray);
				attribute_used = "companion-weapon-ds-roll3"					
			} 
				
		} else if(type=="companion_attribute"){
		}			
		getAttrs(getArray, function(values) {
			//setAttrs({"cur_ar":ar,"cur_armor_penalty":pen});
			console.log("!!!!!! attributte button pressed getattrs values "+JSON.stringify(values));
			console.log("type: "+type)
			var is_defence_roll = 0;
			var strong_grip = 0;
            var vicious = 0;
            var show_npc = parseInt(values.show_npc);
			if (type=="combat"){
				console.log("marker1");
				console.log("roll_origin: "+roll_origin);
				var combat =1;
				var roll_source=values[roll_origin+"_weapon_name"];
			
				var  orig = parseInt(values[attribute_used+"_orig"]);
				console.log("orig: "+orig);
				var temp = (isNaN(parseInt(values[attribute_used+"_temp"])) ? 0 :  parseInt(values[attribute_used+"_temp"]) );
				console.log("temp: "+temp);
				var mod  = parseInt(values[attribute_used+"_mod"]);

				if (values.vicious == "1"){
					vicious = 1; 
				}	                
				if (values.strong_grip == "1"){
					strong_grip = 1; 
				}	
				if (weapon_button=="act_weapon-as-roll"){
					var general_mod = parseInt(values.general_attack_skill_mod)
					var general_str = "["+getTranslationByKey("Attack Skill Modifier")+"]";
					var weapon_skill_mod = values[roll_origin+"_weapon_as_mod"];
					roll_source = roll_source +" "+getTranslationByKey("Attack");
				} else if (weapon_button=="act_weapon-ds-roll"){
					var general_mod = parseInt(values.general_defence_skill_mod)
					var general_str = "["+getTranslationByKey("Defence Skill Modifier")+"]";
					var weapon_skill_mod = values[roll_origin+"_weapon_ds_mod"];
					is_defence_roll = 1;
					roll_source = roll_source +" "+getTranslationByKey("Defence");
				}  else if (weapon_button=="act_missile-ms-roll"){
					var general_mod = parseInt(values.general_attack_skill_mod)
					var general_str = "["+getTranslationByKey("Attack Skill Modifier")+"]";
					roll_source = roll_source +" "+getTranslationByKey("Attack");
					var weapon_skill_mod = values[roll_origin+"_weapon_ms_mod"];
				}  else if (weapon_button=="act_missile-ds-roll"){
					var general_mod = parseInt(values.general_defence_skill_mod)
					var general_str = "["+getTranslationByKey("Defence Skill Modifier")+"]";
					var weapon_skill_mod = values[roll_origin+"_weapon_ds_mod"];
					is_defence_roll = 1;
					roll_source = roll_source +" "+getTranslationByKey("Defence");
				} else {
					console.log("Error weapon roll type 3");
				}				
				console.log("general_str: "+general_str);
				console.log("weapon_skill_mod: "+weapon_skill_mod);
				
				//// generate advanced option modifiers
				adv_option_mod=0;
				adv_options_str = "["+getTranslationByKey("Advanced Option Modifier")+"]"
				var armor_penalty = parseInt(values.cur_armor_penalty);
				var target = ( temp != "0" && temp != "NaN" ? temp : orig );
				console.log("target: "+target);	
				var target_str = " {{target=[["+target+"+"+weapon_skill_mod+"["+getTranslationByKey("weapon-mod")+"]+"+mod+"["+getTranslationByKey("modifier")+"]+"+general_mod+general_str+"+"+armor_penalty+"["+getTranslationByKey("armor-penalty-modifier")+"]+"+adv_option_mod+adv_options_str+"]]}} " 
				console.log("general_str: "+general_str)
				var weapon_damage=values[roll_origin+"_weapon_damage"] ;
				console.log("weapon_damage:"+weapon_damage);
				var modded_target = target+mod+parseInt(weapon_skill_mod)+armor_penalty+general_mod;
				console.log("marker4");
				/// NEEDS DONE Aimed shot to crit and crit calculated before advanced option mods
				/// NEEDS DONE account for the combat options modifier weapon modifier and other modifiers
				var crit = ( values.vicsious=="1" ?  Math.floor(modded_target*0.13) : Math.floor(modded_target*0.1))
				console.log("crit: "+crit);	
				var fumble_possible = (modded_target > 90 ? 0 : 1)	;
				
				roll_str = "&{template:roll} {{name=@{character_name}}} {{source="+roll_source+"}} {{roll=[[1d100]]}} "+target_str+" {{result=[[0]]}} {{show_damage=[[0]]}} {{combat=[[1]]}} {{weapon_damage=[["+weapon_damage+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} {{fumble_roll=[[1D00]]}}  {{isCrit=[[0]]}} {{isFumble=[[0]]}} {{fumble_critical_roll=[[1d100]]}}  {{serious_str=[[0]]}} {{critical_str=[[0]]}} {{fumble_str=[[0]]}}";
			} else if (type=="npc_combat") {
				console.log("marker 3a");
				console.log("roll_origin: "+roll_origin);
				var combat =1;
				if (values[roll_origin+"_strong_grip"] == "1"){
					strong_grip = 1; 
				}	

				//get the skill value and mod				
				if (weapon_button=="act_weapon-as-roll"){
					var  target = parseInt(values[roll_origin+"_weapon_as"]);
					console.log("target: "+target);
					var mod  = parseInt(values["general_attack_skill_mod"]);
					var roll_source=values[roll_origin+"_weapon_name"]+" "+getTranslationByKey("Attack");	
					var weapon_damage=values[roll_origin+"_weapon_damage"] ;					
				} else if (weapon_button=="act_weapon-ds-roll"){
					var  target = parseInt(values[roll_origin+"_weapon_ds"]);
					console.log("target: "+target);
					var mod  = parseInt(values["general_defence_skill_mod"]);
					var roll_source=values[roll_origin+"_weapon_name"]+" "+getTranslationByKey("Attack");	
					var weapon_damage=values[roll_origin+"_weapon_damage"] ;
					is_defence_roll = 1;					
				} 
				else {
					console.log("Error weapon roll type 3");
				}				
					
				var target_str = " {{target=[["+target+"+"+mod+"["+getTranslationByKey("modifier")+"] ]]}} " 
				console.log("weapon_damage:"+weapon_damage);
				var modded_target = target+mod;
				console.log("marker4");
                /// NEEDS DONE Aimed shot to crit and crit calculated before advanced option mods				/// NEEDS DONE account for the combat options modifier weapon modifier and other modifiers
				var crit = Math.floor(modded_target*values.critical_percentage);
				console.log("crit: "+crit);	
				var fumble_possible = (modded_target > 90 ? 0 : 1)	;
				roll_str = values.whisper_str+" "+"&{template:roll} {{name=@{character_name}}} {{source="+roll_source+"}} {{roll=[[1d100]]}} "+target_str+" {{result=[[0]]}} {{show_damage=[[0]]}} {{combat=[[1]]}} {{weapon_damage=[["+weapon_damage+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} {{fumble_roll=[[1D00]]}}  {{isCrit=[[0]]}} {{isFumble=[[0]]}} {{fumble_critical_roll=[[1d100]]}}  {{serious_str=[[0]]}} {{critical_str=[[0]]}} {{fumble_str=[[0]]}}";	
				console.log("roll_str: "+roll_str);				
			}
			else if (type=="attribute") {
				console.log("marker2");
				var combat =0;
				var roll_source= getTranslationByKey(roll_origin);
				console.log("roll_origin: "+roll_origin);
				var orig = parseInt(values[roll_origin+"_orig"]);
				console.log("orig: "+orig);
				var temp = (isNaN(parseInt(values[roll_origin+"_temp"])) ? 0 :  parseInt(values[roll_origin+"_temp"]) );
				console.log("temp: "+temp);
				var mod  = parseInt(values[roll_origin+"_mod"]);
				console.log("temp: "+temp);				
				
				var armor_penalty = 0
				if (show_npc==2 && physical_attributes.includes(roll_origin)){				    
					armor_penalty = parseInt(values.companion_ar_penalty);				    
                }  else if (physical_attributes.includes(roll_origin)){
                    armor_penalty = parseInt(values.cur_armor_penalty)
                }   
				console.log("armor_penalty: "+armor_penalty);

				var target = ( temp != "0" && temp != "NaN" ? temp : orig );
				console.log("target: "+target);	
				var target_str = " {{target=[["+target+"+"+mod+"[modifier] "+"+"+armor_penalty+"["+getTranslationByKey("armor-penalty-modifier")+"] "+ "]]}} " 
				var modded_target = target+mod+armor_penalty;
                console.log("modded_target: "+modded_target);	
				console.log("marker4");
				/// NEEDS DONE to check if this is a combat roll and check the checkboxes for vicious and iron grip
				/// NEEDS DONE account for the combat options modifier weapon modifier and other modifiers
				var crit = Math.floor(modded_target*0.1)
				console.log("crit: "+crit);	
				var fumble_possible = (modded_target > 90 ? 0 : 1)	;
				roll_str = values.whisper_str+" "+"&{template:roll} {{name=@{character_name}}} {{source="+roll_source+"}} {{roll=[[1d100]]}} "+target_str+" {{result=[[0]]}} {{combat=[[0]]}} {{show_damage=[[0]]}} {{isCrit=[[0]]}} {{isFumble=[[0]]}}";				
			} else 	if (type=="companion_combat"){
				console.log("marker 3a");
				console.log("roll_origin: "+roll_origin);
				var combat =1;
				if (values[roll_origin+"_strong_grip"] == "1"){
					strong_grip = 1; 
				}	

				//get the skill value and mod				
				if (weapon_button=="act_companion-weapon-as-roll1"){
					var  target = parseInt(values[roll_origin+"_companion_as_1"]);
					console.log("target: "+target);
					var mod  = parseInt(values[roll_origin+"_companion_as_mod_1"]);
					var roll_source=values[roll_origin+"_companion_weapon_1"]+" "+getTranslationByKey("Attack");	
					var weapon_damage=values[roll_origin+"_companion_weapon_damage_1"] ;					
				} else if (weapon_button=="act_companion-weapon-ds-roll1"){
					var  target = parseInt(values[roll_origin+"_companion_ds_1"]);
					console.log("target: "+target);
					var mod  = parseInt(values[roll_origin+"_companion_ds_mod_1"]);
					console.log("mod: "+mod);
					var roll_source=values[roll_origin+"_companion_weapon_1"]+" "+getTranslationByKey("Defence");
					console.log("roll_source: "+roll_source);
					var weapon_damage=values[roll_origin+"_companion_weapon_damage_1"] ;
					console.log("weapon_damage: "+weapon_damage);
					is_defence_roll = 1;					
				} if (weapon_button=="act_companion-weapon-as-roll2"){
					var  target = parseInt(values[roll_origin+"_companion_as_2"]);
					console.log("target: "+target);
					var mod  = parseInt(values[roll_origin+"_companion_as_mod_2"]);
					var roll_source=values[roll_origin+"_companion_weapon_2"]+" "+getTranslationByKey("Attack");	
					var weapon_damage=values[roll_origin+"_companion_weapon_damage_2"] ;					
				} else if (weapon_button=="act_companion-weapon-ds-roll2"){
					var  target = parseInt(values[roll_origin+"_companion_ds_2"]);
					console.log("target: "+target);
					var mod  = parseInt(values[roll_origin+"_companion_ds_mod_2"]);
					console.log("mod: "+mod);
					var roll_source=values[roll_origin+"_companion_weapon_2"]+" "+getTranslationByKey("Defence");
					console.log("roll_source: "+roll_source);
					var weapon_damage=values[roll_origin+"_companion_weapon_damage_2"] ;
					console.log("weapon_damage: "+weapon_damage);
					is_defence_roll = 1;					
				} if (weapon_button=="act_companion-weapon-as-roll3"){
					var  target = parseInt(values[roll_origin+"_companion_as_3"]);
					console.log("target: "+target);
					var mod  = parseInt(values[roll_origin+"_companion_as_mod_3"]);
					var roll_source=values[roll_origin+"_companion_weapon_3"]+" "+getTranslationByKey("Attack");	
					var weapon_damage=values[roll_origin+"_companion_weapon_damage_3"] ;					
				} else if (weapon_button=="act_companion-weapon-ds-roll3"){
					var  target = parseInt(values[roll_origin+"_companion_ds_3"]);
					console.log("target: "+target);
					var mod  = parseInt(values[roll_origin+"_companion_ds_mod_3"]);
					console.log("mod: "+mod);
					var roll_source=values[roll_origin+"_companion_weapon_3"]+" "+getTranslationByKey("Defence");
					console.log("roll_source: "+roll_source);
					var weapon_damage=values[roll_origin+"_companion_weapon_damage_3"] ;
					console.log("weapon_damage: "+weapon_damage);
					is_defence_roll = 1;					
				}
				else {
					console.log("Error weapon roll type 3");
				}				
					
				var armor_penalty = parseInt(values[roll_origin+"_companion_ar_penalty"]);
				console.log("armor_penalty: "+armor_penalty);
				var target_str = " {{target=[["+target+"+"+mod+"["+getTranslationByKey("modifier")+"]"+armor_penalty+"["+getTranslationByKey("armor-penalty-modifier")+"] ]]}} " 
				console.log("weapon_damage:"+weapon_damage);
				var modded_target = target+mod;
				console.log("marker4");
				/// NEEDS DONE to check if this is a combat roll and check the checkboxes for vicious and iron grip
				/// NEEDS DONE account for the combat options modifier weapon modifier and other modifiers
				//var crit = ( values.vicsious=="1" ?  Math.floor(modded_target*0.13) : Math.floor(modded_target*0.1))
				crit = Math.floor(modded_target*0.1)
				console.log("crit: "+crit);	
				var fumble_possible = (modded_target > 90 ? 0 : 1)	;
				roll_str = "&{template:roll} {{name=@{character_name}}} {{source="+roll_source+"}} {{roll=[[1d100]]}} "+target_str+" {{result=[[0]]}} {{show_damage=[[0]]}} {{combat=[[1]]}} {{weapon_damage=[["+weapon_damage+"]]}}  {{half_damage=[[0]]}}  {{double_damage=[[0]]}} {{fumble_crit_roll=[[1D00]]}}  {{isCrit=[[0]]}} {{isFumble=[[0]]}} {{fumble_critical_roll=[[1d100]]}} {{serious_str=[[0]]}} {{critical_str=[[0]]}} {{fumble_str=[[0]]}}";	
				console.log("roll_str: "+roll_str);			
			}
			console.log("marker3");

			console.log("roll_str: "+roll_str);
			startRoll(roll_str, (results) => {
				console.log("!!!!!! aroll lresults "+JSON.stringify(results));
				const roll  = results.results.roll.result;        
				let weapon_dmage = 0;
				let half_damage =0 ;
				let double_damage=0;
				let isCrit=0;
				let isFumble=0;
                let fumble_str= "";
                let critical_str = ""
				if (combat==1){
					weapon_damage = parseInt(results.results.weapon_damage.result);
					half_damage = Math.ceil(weapon_damage*0.5);
					console.log("***********half_damage: "+half_damage)
					double_damage = weapon_damage*2;
					console.log("**********double_damage: "+double_damage)
				} 
				let show_damage = 0;
				let resultx = "";
				if (roll > 95){
					if (fumble_possible==1){
						if (type=="combat" || type=="companion_combat"){
							console.log("what is this strong_grip:"+strong_grip);
							if (strong_grip != 1){
								resultx = getTranslationByKey("fumble");
								isFumble=1
							} else if (strong_grip==1 && roll >= 99){
								resultx = getTranslationByKey("fumble");
								isFumble=1								
							} else {
								resultx = getTranslationByKey("failure");
							}								
						} else {
							resultx = getTranslationByKey("critical-failure");
						}
					} else {
						resultx = getTranslationByKey("failure");
					}						
				} else {
					
					if (roll <= crit) {
						if (combat==1 && is_defence_roll==0){
							show_damage =1;
						}
						resultx = getTranslationByKey("critical");
						isCrit=1;
					} else {
                        console.log("modded_target: "+modded_target)
						if (roll <= modded_target ){
							resultx = getTranslationByKey("success");
							if (combat==1  && is_defence_roll==0){
								show_damage =1;
							}
						} else {
							resultx = getTranslationByKey("failure");
						}
					}	

				}
                
                
                if (isFumble==1 && combat==1){
                    const fumble_critical_roll = parseInt(results.results.fumble_critical_roll.result);       
                    let fumble_result="01-20";
                    if (fumble_critical_roll >= 21 && fumble_critical_roll <= 40){
                      fumble_result="21-40";  
                    } else if (fumble_critical_roll >= 41 && fumble_critical_roll <= 60){
                      fumble_result="41-60";
                    } else if (fumble_critical_roll >= 61 && fumble_critical_roll <= 80){
                       fumble_result="61-80";
                    } else if (fumble_critical_roll >= 81 && fumble_critical_roll <= 95) {
                        fumble_result="81-95";
                    } else if (fumble_critical_roll >= 96 && fumble_critical_roll <= 99) {
                        fumble_result="96-99";
                    } else if (fumble_critical_roll > 99) {
                        fumble_result="100";
                    }
                    if (roll_origin.includes("repeating_npc-missiles") || roll_origin.includes("repeating_missiles")){
                       fumble_result = "FumbleMiss"+fumble_result
                    } else if (roll_origin.includes("repeating_npc-weapons") || roll_origin.includes("repeating_weapons")){
                       fumble_result = "Fumbleh2h"+fumble_result
                    }
                    fumble_str=getTranslationByKey(fumble_result);
                }
                console.log("fumble_str "+fumble_str)                    
				console.log("what is the result "+resultx)
				finishRoll(
					results.rollId,
					{				
                        fumble_str:fumble_str,			
						result:resultx,
						isCrit:isCrit,
						isFumble:isFumble,
						show_damage:show_damage,
						half_damage:half_damage,
						double_damage:double_damage
					}
				);
			});			
		});	  		  
	  }
	  
		const attributteResetSuffix = ["_orig","_temp","_mod"];
	  	const attributteResetBase = ["attack_skill","missle_skill","defence_Skill","knowledge","will","endurance","persuasion","speed","agility"];
		attributteResetBase.forEach(attributeBase => {
			
			attributteResetSuffix.forEach(attributeSuffix => {
				let changeStr = attributeBase+attributeSuffix
				on(`change:${changeStr}`, function(eventInfo) {
					if (isNaN(parseInt(eventInfo.newValue))){
						setAttrs({[eventInfo.sourceAttribute]:0});	
					}
				});						
			});	
			
      });	
	



	
	//// END ROLLS  SHEET WORKERS ////
	//// ARMOR SHEET WORKERS ///////////////
	on("change:repeating_armorClothing:worn", function(eventInfo) {
			//console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
			//console.log("!!!!!! eventinfo worn checkbox  "+JSON.stringify(eventInfo.sourceAttribute));
			let source = eventInfo.sourceAttribute;
			//console.log("!!!!!! source attribute for worn checkbox  "+source);
			let rowID = getRowID(source);
			//console.log("row id: "+rowID);
			
			if (eventInfo.newValue=="1"){
				getAttrs([rowID+"_ar",rowID+"_armor_penalty"], function(values) {
          //console.log("*****getattrs values  "+JSON.stringify(values));			
					let ar = values[rowID+"_ar"];
					let pen = values[rowID+"_armor_penalty"];
					//console.log("ar: "+ar)
					//console.log("pen: "+pen)
					setAttrs({"cur_ar":ar,"cur_armor_penalty":pen});
				    
				});
				resetWorn(rowID.replace("repeating_armorclothing_",""));
			} else if (eventInfo.newValue=="0")
			{
				console.log("What is this: "+eventInfo.newValue)
				setAttrs({"cur_ar":0,"cur_armor_penalty":0},{silent:true});				    
			}
				
		});	
		
		
		
		
		
		function resetWorn(selectedID){
			 getSectionIDs("repeating_armorClothing", function(idArray) {
				if (idArray.length > 0) {
		
					_.each(idArray, function(currentID, i) {
										
						if (currentID != selectedID){
								console.log(currentID+" = "+selectedID)		
								let attrsToSet = {["repeating_armorClothing_" + idArray[i] +'_worn']:0};								
								console.log("attrs to set "+JSON.stringify(attrsToSet));
								setAttrs(attrsToSet,{silent:true});
						}						
					});
				}
				
			});	
		}

	// event listener for worn armor checkbox
		on("change:repeating_armorClothing:ar change:repeating_armorClothing:armor_penalty", function(eventInfo) {
			console.log("!!!!!! eventinfo "+JSON.stringify(eventInfo));
				getAttrs(["repeating_armorClothing_ar","repeating_armorClothing_armor_penalty","repeating_armorClothing_worn"], function(values) {	
					console.log("^^^^^ values "+JSON.stringify(values));	
					if (values.repeating_armorClothing_worn=="1"){
						let ar = values.repeating_armorClothing_ar;
						let pen = values.repeating_armorClothing_armor_penalty; 
						setAttrs({"cur_ar":ar,"cur_armor_penalty":pen});
					}	
				});
		});	
		
//// END ARMOR SHEET WORKERS ///////////////
/// TOTAL WOUNDS SHEET WORKER /////
on("change:wounds change:bleeding_damage change:endurance_temp change:endurance_orig change:endurance_mod", function(eventInfo) {
	console.log("!!!!!! blah eventinfo "+JSON.stringify(eventInfo));
		getAttrs(["wounds","bleeding_damage","endurance_temp","endurance_orig","endurance_mod"], function(values) {	
			console.log("!!!!!! values"+JSON.stringify(values));
			setWoundTotal(values.wounds,values.bleeding_damage,parseInt(values.endurance_temp),parseInt(values.endurance_orig),parseInt(values.endurance_mod),"")
		});
});


on("change:repeating_companions:companion_wounds change:repeating_companions:companion_bleeding_damage change:repeating:companions_end", function(eventInfo) {
	console.log("!!!!!! blah 2 eventinfo "+JSON.stringify(eventInfo));
		getAttrs(["repeating_companions_companion_wounds","repeating_companions_companion_bleeding_damage","repeating_companions_end"], function(values) {	
			console.log("!!!!!! repeating_companions:companion_wounds values"+JSON.stringify(values));
			setWoundTotal(values.repeating_companions_companion_wounds,values.repeating_companions_companion_bleeding_damage,parseInt(values.repeating_companions_end),0,0,"repeating_companions_")
		});
});	

function setWoundTotal(wounds,bleeding_damage,endurance_temp,endurance_orig,endurance_mod,source){
	
			let tot =0;
			let wounds_array=wounds.split("/");
			console.log("^^^^^ wounds array "+JSON.stringify(wounds_array));	
			wounds_array.forEach(function(wound){
					tot += parseInt(wound);
				}
			);
			tot=tot+parseInt(bleeding_damage);
			let wounds_result=""
			
			let endurance = endurance_orig
			
			if (endurance_temp > 0){
				endurance =endurance_temp
			}
			
			endurance = endurance+endurance_mod
			console.log("endurance: "+endurance);
			

			if (tot > endurance && tot <= endurance + 20){
				 wounds_result = getTranslationByKey("Unconcious");
			} else if (tot > endurance + 20) {
				wounds_result = getTranslationByKey("Dead");
			}
			
			console.log("tot: "+tot);
			console.log("wounds_result: "+wounds_result);
				
			//setAttrs({attrsToSet});
			 setAttrs({[source+"wounds_total"]:tot,[source+"unconsciousness_or_dead"]:wounds_result});
} 

/// END WOUNDS SHEET WORKER /////

//// APPLY ONE ROUND OF BLEEDING ////
on("clicked:bleed", function(eventInfo) {
	console.log("!!!!!! bleed eventinfo "+JSON.stringify(eventInfo));
	getAttrs(["bleeding_damage","bleeding_wounds"], function(values) {
		applyBleeding(values.bleeding_damage,values.bleeding_wounds,"")
	});
});	

on("clicked:repeating_companions:bleed", function(eventInfo) {
	console.log("!!!!!! companion bleed eventinfo "+JSON.stringify(eventInfo));
	getAttrs(["repeating_companions_companion_bleeding_damage","repeating_companions_bleeding_wounds"], function(values) {
		console.log("!!!!!! companion bleed values "+JSON.stringify(values));
		console.log("WTF");
		applyBleeding(values.repeating_companions_companion_bleeding_damage,values.repeating_companions_bleeding_wounds,"repeating_companions_companion_")
	});
});


function applyBleeding(bleeding_damage,bleeding_wounds,source){
	let tot = parseInt(bleeding_damage)+parseInt(bleeding_wounds);
	console.log("argghhhh tot:"+tot);
	setAttrs({[source+"bleeding_damage"]:tot});
}


//// END APPLY ONE ROUND OF BLEEDING ////

//// APPLY ONE POINT OF HEALING ////
on("clicked:heal", function(eventInfo) {
	console.log("!!!!!! heal eventinfo "+JSON.stringify(eventInfo));
	getAttrs(["wounds","bleeding_damage"], function(values) {
			console.log("^^^^^ values "+JSON.stringify(values));	
			applyHealing(values.wounds,parseInt(values.bleeding_damage),"")
	});
});	



on("clicked:repeating_companions:companion-heal", function(eventInfo) {
	console.log("!!!!!! heal eventinfo "+JSON.stringify(eventInfo));
	getAttrs(["repeating_companions_companion_wounds","repeating_companions_companion_bleeding_damage"], function(values) {
			console.log("^^^^^ values "+JSON.stringify(values));	
			applyHealing(values.repeating_companions_companion_wounds,parseInt(values.repeating_companions_companion_bleeding_damage),"repeating_companions_companion_")
	});
});	

function applyHealing(wounds,bleeding_damage,source){
			let wound_str = "";
			let wounds_array=wounds.split("/");
			console.log("^^^^^ wounds array "+JSON.stringify(wounds_array));	
			wounds_array.forEach(function(wound){
					if (wound_str.length>0){
						wound_str=wound_str+"/";
					}
					wound_str = wound_str + Math.max(parseInt(wound)-1,0);
					
				}
			);
			let tot = Math.max(--bleeding_damage,0);
			setAttrs({[source+"wounds"]:wound_str,[source+"bleeding_damage"]:tot});		
		
}

//// END APPLY ONE POUNT OF HEALING ////

/// REPEATINg ROW FUNCTIONS
    function getRowID(source){
		const row_arr	= source.split("_");
		console.log("row arr:"+JSON.stringify(row_arr));
		return row_arr[0]+"_"+row_arr[1]+"_"+row_arr[2];
    }
/// END REPEATIN ROW FUNCTIONS
</script>	