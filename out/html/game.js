(function() {
  var game;
  var ui;

  var DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric',
                 month: 'short',
                 day: 'numeric' };

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;

    // Add your custom code here.
  };

  var TITLE = "Social Democracy: An Alternate History" + '_' + "Autumn Chen";

  // the url is a link to game.json
  // test url: https://aucchen.github.io/social_democracy_mods/v0.1.json
  // TODO; 
  window.loadMod = function(url) {
      ui.loadGame(url);
  };

  window.showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('library')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('library');
    }
  };

  window.showMods = function() {
    window.hideOptions();
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('mod_loader')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('mod_loader');
    }
  };
  
  window.showOptions = function() {
      var save_element = document.getElementById('options');
      window.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  window.hideOptions();
              }
          };
      }
  };

  window.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  window.disableBg = function() {
      window.dendryUI.disable_bg = true;
      document.body.style.backgroundImage = 'none';
      window.dendryUI.saveSettings();
  };

  window.enableBg = function() {
      window.dendryUI.disable_bg = false;
      window.dendryUI.setBg(window.dendryUI.dendryEngine.state.bg);
      window.dendryUI.saveSettings();
  };

  window.disableAnimate = function() {
      window.dendryUI.animate = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimate = function() {
      window.dendryUI.animate = true;
      window.dendryUI.saveSettings();
  };

  window.disableAnimateBg = function() {
      window.dendryUI.animate_bg = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimateBg = function() {
      window.dendryUI.animate_bg = true;
      window.dendryUI.saveSettings();
  };

  window.disableAudio = function() {
      window.dendryUI.toggle_audio(false);
      window.dendryUI.saveSettings();
  };

  window.enableAudio = function() {
      window.dendryUI.toggle_audio(true);
      window.dendryUI.saveSettings();
  };

  window.enableImages = function() {
      window.dendryUI.show_portraits = true;
      window.dendryUI.saveSettings();
  };

  window.disableImages = function() {
      window.dendryUI.show_portraits = false;
      window.dendryUI.saveSettings();
  };

    window.enableLightMode = function() {
        window.dendryUI.dark_mode = false;
        document.body.classList.remove('dark-mode');
        window.dendryUI.saveSettings();
  };
  
  window.enableDarkMode = function() {
      window.dendryUI.dark_mode = true;
      document.body.classList.add('dark-mode');
      window.dendryUI.saveSettings();
  }
   window.displayText = function (text) {
        return applyWholesome(text);
    };

    //To get a value 
    function getRelationshipText(value) {
        if (value === undefined || value === null) return '';
        if (value <= 5) return '<span style="color: #FF0000;">Hostile</span>';
        if (value <= 14.9) return '<span style="color: #FF4500;">Frigid</span>';
        if (value <= 29.9) return '<span style="color: #FF8C00;">Cold</span>';
        if (value <= 39.9) return '<span style="color: #FFA500;">Cool</span>';
        if (value <= 54.9) return '<span style="color: #FFD700;">Neutral</span>';
        if (value <= 64.9) return '<span style="color: #9ACD32;">Warm</span>';
        if (value <= 74.9) return '<span style="color: #32CD32;">Friendly</span>';
        return '<span style="color: #008000;">Very friendly</span>';
    }

    function getSizeText(value) {
        if (value === undefined || value === null) return '';
        if (value <= 20) return '<span style="color: #6B7280;">Minimal</span>';
        if (value <= 40) return '<span style="color: #8B6F47;">Weak</span>';
        if (value <= 60) return '<span style="color: #556B2F;">Moderate</span>';
        if (value <= 80) return '<span style="color: #7A0000;">Strong</span>';
        return '<span style="color: #2B0000;">Very Strong</span>';
    }

    function getMilitancyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.05) return '<span style="color: #008000;">Nonexistent</span>';
        if (value <= 0.14) return '<span style="color: #32CD32;">Very low</span>';
        if (value <= 0.24) return '<span style="color: #9ACD32;">Low</span>';
        if (value <= 0.44) return '<span style="color: #FFD700;">Medium-low</span>';
        if (value <= 0.69) return '<span style="color: #FFA500;">Medium</span>';
        if (value <= 1) return '<span style="color: #FF4500;">High</span>';
        return '<span style="color: #FF0000;">Very high</span>';
    }

    function getLoyaltyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.06) return '<span style="color: #FF0000;">Completely disloyal</span>';
        if (value <= 0.19) return '<span style="color: #FF4500;">Very disloyal</span>';
        if (value <= 0.31) return '<span style="color: #FF8C00;">Generally disloyal</span>';
        if (value <= 0.41) return '<span style="color: #FFA500;">Mostly disloyal</span>';
        if (value <= 0.54) return '<span style="color: #FFD700;">Divided</span>';
        if (value <= 0.71) return '<span style="color: #9ACD32;">Mostly loyal</span>';
        if (value <= 0.95) return '<span style="color: #32CD32;">Generally loyal</span>';
        return '<span style="color: #008000;">Completely loyal</span>';
    }

    function getStrenghtText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value < 10) return '<span style="color: #ADD8E6;">Weak</span>';
        if (value < 25) return '<span style="color: #6495ED;">Moderate</span>';
        if (value < 40) return '<span style="color: #4169E1;">Strong</span>';
        if (value < 60) return '<span style="color: #0000CD;">Very strong</span>';
        return '<span style="color: #00008B;">Dominant</span>';
    }

    function getDissentText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value < 4.999) return '<span style="color: #008000;">Very low</span>';
        if (value < 14.999) return '<span style="color: #9ACD32;">Low</span>';
        if (value < 30.999) return '<span style="color: #FFD700;">Medium</span>';
        if (value < 49.999) return '<span style="color: #FF4500;">High</span>';
        return '<span style="color: #FF0000;">Very high</span>';
    }

    //To check if extra dynamic or not
    function getDynamicTooltipContent(searchString, baseTooltip) {
        var Q = window.dendryUI && window.dendryUI.dendryEngine && window.dendryUI.dendryEngine.state ? 
                window.dendryUI.dendryEngine.state.qualities : null;

        if (!Q) return baseTooltip.explanationText;

       if (searchString === 'PSRI' && Q.psri_relation !== undefined) {
            var relationText = getRelationshipText(Q.psri_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PSI' ) {
            return baseTooltip.explanationText 
        }

        if (searchString === 'Communist' ) {
            var strenghtText = getStrenghtText(Q.communist_strength);
            var dissentText = getDissentText(Q.communist_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === 'Maximalist' ) {
            var strenghtText = getStrenghtText(Q.maximalist_strength);
            var dissentText = getDissentText(Q.maximalist_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === 'Labour' ) {
            var strenghtText = getStrenghtText(Q.labour_strength);
            var dissentText = getDissentText(Q.labour_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === 'Reformist' ) {
            var strenghtText = getStrenghtText(Q.reformist_strength);
            var dissentText = getDissentText(Q.reformist_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === 'Syndicalist' ) {
            var strenghtText = getStrenghtText(Q.syndicalist_strength);
            var dissentText = getDissentText(Q.syndicalist_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === "PCd'I" && Q.pcdi_relation !== undefined) {
            var relationText = getRelationshipText(Q.pcdi_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PSU' && Q.psu_relation !== undefined) {
            var relationText = getRelationshipText(Q.psu_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PLL' && Q.pll_relation !== undefined) {
            var relationText = getRelationshipText(Q.pll_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PRI' && Q.pri_relation !== undefined) {
            var relationText = getRelationshipText(Q.pri_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'DS' && Q.ds_relation !== undefined) {
            var relationText = getRelationshipText(Q.ds_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PDSI' && Q.ds_relation !== undefined) {
            var relationText = getRelationshipText(Q.ds_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PPI' && Q.ppi_relation !== undefined) {
            var relationText = getRelationshipText(Q.ppi_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'LDR' && Q.ldr_relation !== undefined) {
            var relationText = getRelationshipText(Q.ldr_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PLDI' && Q.ldr_relation !== undefined) {
            var relationText = getRelationshipText(Q.ldr_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PLI' && Q.ul_relation !== undefined) {
            var relationText = getRelationshipText(Q.ul_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'UL' && Q.ul_relation !== undefined) {
            var relationText = getRelationshipText(Q.ul_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PCS' && Q.pcs_relation !== undefined) {
            var relationText = getRelationshipText(Q.pcs_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'FdC' && Q.pnf_relation !== undefined) {
            var relationText = getRelationshipText(Q.pnf_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'PNF' && Q.pnf_relation !== undefined) {
            var relationText = getRelationshipText(Q.pnf_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'Vittorio Emanuele III' && Q.king_relation !== undefined) {
            var relationText = getRelationshipText(Q.king_relation);
            return baseTooltip.explanationText + '<br> King Relation: ' + relationText;
        }

       if (searchString === 'Umberto II' && Q.king_relation !== undefined) {
            var relationText = getRelationshipText(Q.king_relation);
            return baseTooltip.explanationText + '<br> King Relation: ' + relationText;
        }

        if (searchString === 'Red Guard' && Q.rg_strength !== undefined) {
            var strength = getSizeText(Q.rg_strength);
            var militancy = getMilitancyText(Q.rg_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === "Red Guards - PCd'I" && Q.sov_rg_strength !== undefined) {
            var strength = getSizeText(Q.sov_rg_strength);
            var militancy = getMilitancyText(Q.sov_rg_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Red Guards - PSI' && Q.rg_strength !== undefined) {
            var strength = getSizeText(Q.rg_strength);
            var militancy = getMilitancyText(Q.rg_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Arditi del Popolo' && Q.adp_strength !== undefined) {
            var strength = getSizeText(Q.adp_strength);
            var militancy = getMilitancyText(Q.adp_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }


        if (searchString === 'Fasci' && Q.fdc_strength !== undefined) {
            var strength = getSizeText(Q.fdc_strength);
            var militancy = getMilitancyText(Q.fdc_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Arditismo' && Q.ard_strength !== undefined) {
            var strength = getSizeText(Q.ard_strength);
            var militancy = getMilitancyText(Q.ard_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Anti-Bolshevik Leagues' && Q.abl_strength !== undefined) {
            var strength = getSizeText(Q.abl_strength);
            var militancy = getMilitancyText(Q.abl_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Regio Esercito' && Q.army_strength !== undefined) {
            var strength = Q.army_strength ? Q.army_strength : '0';
            var loyalty = getLoyaltyText(Q.army_loyalty);
            var militancy = getMilitancyText(Q.army_militancy)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Loyalty: ' + morale + '<br>Militancy:' + readiness;
        }

        if (searchString === 'Esercito Italiano' && Q.army_strength !== undefined) {
            var strength = Q.army_strength ? Q.army_strength : '0';
            var loyalty = getLoyaltyText(Q.army_loyalty);
            var militancy = getMilitancyText(Q.army_militancy)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Loyalty: ' + morale + '<br>Militancy:' + readiness;
        }

        if (searchString === 'Carabinieri' && Q.interior_police_strength !== undefined) {
            var strength = Q.interior_police_strength ? Q.interior_police_strength : '0';
            var loyalty = getLoyaltyText(Q.interior_police_loyalty);
            var readiness = getMilitancyText(Q.interior_police_militancy)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Loyalty: ' + morale + '<br>Militancy: ' + readiness;
        }

    return baseTooltip.explanationText;

    }

    window.getDynamicTooltipContent = getDynamicTooltipContent;

    function applyWholesome(str) {
        const allWords = new Set([
            ...tooltipList.map(t => t.searchString),
            ...colourList.map(c => c.word)
        ]);

        // Escape special regex characters in the words
        const escapedWords = [...allWords].map(word => 
            word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );

        //fix for longer words not showing up if they contained smaller entry words inside of them
        escapedWords.sort((a, b) => b.length - a.length);

        const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'g');

        return str.replace(/(<(?:span|strong)[^>]*>.*?<\/(?:span|strong)>|<[^>]+>|[^<]+)/g, (segment) => {
            if (segment.startsWith('<')) return segment;

            return segment.replace(regex, (match) => {
                const tooltip = tooltipList.find(t => t.searchString === match);
                const colour = colourList.find(c => c.word === match);

                let style = colour ? colour.style : '';
                let innerText = match;

                if (colour && colour.img) {
                    innerText = `<img src="${colour.img}" class="p_icon" alt="">${innerText}`;
                }

                if (tooltip) {
                    var tooltipContent = getDynamicTooltipContent(match, tooltip);
                    return `<span class='mytooltip' style='${style}'>${innerText}<span class='mytooltiptext'>${tooltipContent}</span></span>`;
                } else if (colour) {
                    return `<span style='${style}'>${innerText}</span>`;
                }

                return match;
            });
        });
    }
  
  // populates the checkboxes in the options view
  window.populateOptions = function() {
    var disable_bg = window.dendryUI.disable_bg;
    var animate = window.dendryUI.animate;
    var disable_audio = window.dendryUI.disable_audio;
    var show_portraits = window.dendryUI.show_portraits;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (disable_audio) {
        $('#audio_no')[0].checked = true;
    } else {
        $('#audio_yes')[0].checked = true;
    }
    if (show_portraits) {
        $('#images_yes')[0].checked = true;
    } else {
        $('#images_no')[0].checked = true;
    }
    if (window.dendryUI.dark_mode) {
        $('#dark_mode')[0].checked = true;
    } else {
        $('#light_mode')[0].checked = true;
    }
  };

  // This function allows you to do something in response to signals.
  window.handleSignal = function(signal, event, scene_id) {
  };
  
  // This function runs on a new page. Right now, this auto-saves.
  window.onNewPage = function() {
    var scene = window.dendryUI.dendryEngine.state.sceneId;
    if (scene != 'root' && !window.justLoaded) {
        window.dendryUI.autosave();
    }
    if (window.justLoaded) {
        window.justLoaded = false;
    }
  };

  // TODO: have some code for tabbed sidebar browsing.
  window.updateSidebar = function() {
      $('#qualities').empty();
      var scene = dendryUI.game.scenes[window.statusTab];
      dendryUI.dendryEngine._runActions(scene.onArrival);
      var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
      $('#qualities').append(dendryUI.contentToHTML.convert(displayContent));
  };

  window.changeTab = function(newTab, tabId) {
      if (tabId == 'poll_tab' && dendryUI.dendryEngine.state.qualities.historical_mode) {
          window.alert('Polls are not available in historical mode.');
          return;
      }
      var tabButton = document.getElementById(tabId);
      var tabButtons = document.getElementsByClassName('tab_button');
      for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
      }
      tabButton.className += ' active';
      window.statusTab = newTab;
      window.updateSidebar();
  };

  window.onDisplayContent = function() {
      window.updateSidebar();
  };

  /*
   * This function copied from the code for Infinite Space Battle Simulator
   *
   * quality - a number between max and min
   * qualityName - the name of the quality
   * max and min - numbers
   * colors - if true/1, will use some color scheme - green to yellow to red for high to low
   * */
  window.generateBar = function(quality, qualityName, max, min, colors) {
      var bar = document.createElement('div');
      bar.className = 'bar';
      var value = document.createElement('div');
      value.className = 'barValue';
      var width = (quality - min)/(max - min);
      if (width > 1) {
          width = 1;
      } else if (width < 0) {
          width = 0;
      }
      value.style.width = Math.round(width*100) + '%';
      if (colors) {
          value.style.backgroundColor = window.probToColor(width*100);
      }
      bar.textContent = qualityName + ': ' + quality;
      if (colors) {
          bar.textContent += '/' + max;
      }
      bar.appendChild(value);
      return bar;
  };


  window.justLoaded = true;
  window.statusTab = "status";
  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");

  window.onload = function() {
    window.dendryUI.loadSettings({show_portraits: false});
        if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    window.pinnedCardsDescription = "Advisor cards - actions are only usable once per 6 months.";
  };
  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.mytooltiptext').forEach(el => {
        el.style.setProperty('--mouse-x', e.clientX + 'px');
        el.style.setProperty('--mouse-y', e.clientY + 'px');
    });
});  
}());
