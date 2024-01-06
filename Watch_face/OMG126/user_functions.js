let colornumber_bg = 1
        let totalcolors_bg = 27
        let namecolor_bg = ''
		
		function click_BG() {
            if(colornumber_bg>=totalcolors_bg) {
            colornumber_bg=1;
                }
            else {
                colornumber_bg=colornumber_bg+1;
            }
			if ( colornumber_bg == 1) { namecolor_bg = "BACKGROUND 1/27"}
			if ( colornumber_bg == 2) { namecolor_bg = "BACKGROUND 2/27"}
			if ( colornumber_bg == 3) { namecolor_bg = "BACKGROUND 3/27"}
			if ( colornumber_bg == 4) { namecolor_bg = "BACKGROUND 4/27"}
			if ( colornumber_bg == 5) { namecolor_bg = "BACKGROUND 5/27"}
			if ( colornumber_bg == 6) { namecolor_bg = "BACKGROUND 6/27"}
			if ( colornumber_bg == 7) { namecolor_bg = "BACKGROUND 7/27"}
			if ( colornumber_bg == 8) { namecolor_bg = "BACKGROUND 8/27"}
			if ( colornumber_bg == 9) { namecolor_bg = "BACKGROUND 9/27"}
			if ( colornumber_bg == 10) { namecolor_bg = "BACKGROUND 10/27"}
			if ( colornumber_bg == 11) { namecolor_bg = "BACKGROUND 11/27"}
			if ( colornumber_bg == 12) { namecolor_bg = "BACKGROUND 12/27"}
			if ( colornumber_bg == 13) { namecolor_bg = "BACKGROUND 13/27"}
			if ( colornumber_bg == 14) { namecolor_bg = "BACKGROUND 14/27"}
			if ( colornumber_bg == 15) { namecolor_bg = "BACKGROUND 15/27"}
			if ( colornumber_bg == 16) { namecolor_bg = "BACKGROUND 16/27"}
			if ( colornumber_bg == 17) { namecolor_bg = "BACKGROUND 17/27"}
			if ( colornumber_bg == 18) { namecolor_bg = "BACKGROUND 18/27"}
			if ( colornumber_bg == 19) { namecolor_bg = "BACKGROUND 19/27"}
			if ( colornumber_bg == 20) { namecolor_bg = "BACKGROUND 20/27"}
			if ( colornumber_bg == 21) { namecolor_bg = "BACKGROUND 21/27"}
			if ( colornumber_bg == 22) { namecolor_bg = "BACKGROUND 22/27"}
			if ( colornumber_bg == 23) { namecolor_bg = "BACKGROUND 23/27"}
			if ( colornumber_bg == 24) { namecolor_bg = "BACKGROUND 24/27"}
			if ( colornumber_bg == 25) { namecolor_bg = "BACKGROUND 25/27"}
			if ( colornumber_bg == 26) { namecolor_bg = "BACKGROUND 26/27"}
			if ( colornumber_bg == 27) { namecolor_bg = "BACKGROUND 27/27"}

			hmUI.showToast({text: namecolor_bg });
            normal_background_bg_img.setProperty(hmUI.prop.SRC, "bg" + parseInt(colornumber_bg) + ".png");
        }
		
		let colornumber_main = 1
        let totalcolors_main = 18
        let namecolor_main = ''
		
		function click_COLOR() {
            if(colornumber_main>=totalcolors_main) {
            colornumber_main=1;
                }
            else {
                colornumber_main=colornumber_main+1;
            }
			if ( colornumber_main == 1) { namecolor_main = "COLOR 1/18"}
			if ( colornumber_main == 2) { namecolor_main = "COLOR 2/18"}
			if ( colornumber_main == 3) { namecolor_main = "COLOR 3/18"}
			if ( colornumber_main == 4) { namecolor_main = "COLOR 4/18"}
			if ( colornumber_main == 5) { namecolor_main = "COLOR 5/18"}
			if ( colornumber_main == 6) { namecolor_main = "COLOR 6/18"}
			if ( colornumber_main == 7) { namecolor_main = "COLOR 7/18"}
			if ( colornumber_main == 8) { namecolor_main = "COLOR 8/18"}
			if ( colornumber_main == 9) { namecolor_main = "COLOR 9/18"}
			if ( colornumber_main == 10) { namecolor_main = "COLOR 10/18"}
			if ( colornumber_main == 11) { namecolor_main = "COLOR 11/18"}
			if ( colornumber_main == 12) { namecolor_main = "COLOR 12/18"}
			if ( colornumber_main == 13) { namecolor_main = "COLOR 13/18"}
			if ( colornumber_main == 14) { namecolor_main = "COLOR 14/18"}
			if ( colornumber_main == 15) { namecolor_main = "COLOR 15/18"}
			if ( colornumber_main == 16) { namecolor_main = "COLOR 16/18"}
			if ( colornumber_main == 17) { namecolor_main = "COLOR 17/18"}
			if ( colornumber_main == 18) { namecolor_main = "COLOR 18/18"}

			hmUI.showToast({text: namecolor_main });
            normal_step_icon_img.setProperty(hmUI.prop.SRC, "color" + parseInt(colornumber_main) + ".png");
        }
		
		let btn_element_1 = ''
        let elementnumber_1 = 1
        let total_elemente = 3

        function click_Hands() {
            if(elementnumber_1==total_elemente) {
            elementnumber_1=1;
                UpdateElementeOne();
                }
            else {
                elementnumber_1=elementnumber_1+1;
                if(elementnumber_1==2) {
                  UpdateElementeTwo();
                }

                if(elementnumber_1==3) {
                  UpdateElementeThree();
                }

            }
            if(elementnumber_1==1) hmUI.showToast({text: 'SMOOTH ON'});
            if(elementnumber_1==2) hmUI.showToast({text: 'SMOOTH OFF'});
            if(elementnumber_1==3) hmUI.showToast({text: 'HANDS OFF'});
        }

        // Smooth ON
        function UpdateElementeOne(){
				normal_analog_clock_time_pointer_hour.setProperty(hmUI.prop.VISIBLE, true);
				normal_analog_clock_time_pointer_minute.setProperty(hmUI.prop.VISIBLE, true);
                normal_analog_clock_time_pointer_second.setProperty(hmUI.prop.VISIBLE, false);
                normal_analog_clock_pro_second_pointer_img.setProperty(hmUI.prop.VISIBLE, true);

        }

        //Smooth OFF
        function UpdateElementeTwo(){
				normal_analog_clock_time_pointer_hour.setProperty(hmUI.prop.VISIBLE, true);
				normal_analog_clock_time_pointer_minute.setProperty(hmUI.prop.VISIBLE, true);
                normal_analog_clock_time_pointer_second.setProperty(hmUI.prop.VISIBLE, true);
                normal_analog_clock_pro_second_pointer_img.setProperty(hmUI.prop.VISIBLE, false);
        }

        //Turn OFF
        function UpdateElementeThree(){
				normal_analog_clock_time_pointer_hour.setProperty(hmUI.prop.VISIBLE, false);
				normal_analog_clock_time_pointer_minute.setProperty(hmUI.prop.VISIBLE, false);
                normal_analog_clock_time_pointer_second.setProperty(hmUI.prop.VISIBLE, false);
                normal_analog_clock_pro_second_pointer_img.setProperty(hmUI.prop.VISIBLE, false);
        }
		
		let br_state = ''
		let br_state_total = 4;
		
		function click_br_Switcher() {
			br_state = (br_state + 1) % br_state_total;
			apply_br_switch();
		}

		function click_br_Switcher_reverse() {
			if (br_state == 0) {
			br_state = br_state_total - 1;
				} else {
			br_state = (br_state - 1) % br_state_total;
				}	
			apply_br_switch();
		}

		function apply_br_switch() {
			switch (br_state) {

			case 0:
				normal_stress_icon_img.setProperty(hmUI.prop.SRC, 'br1.png');
			break;

			case 1:
				normal_stress_icon_img.setProperty(hmUI.prop.SRC, 'br2.png');
			break;

			case 2:
				normal_stress_icon_img.setProperty(hmUI.prop.SRC, 'br3.png');
			break;

			case 3:
				normal_stress_icon_img.setProperty(hmUI.prop.SRC, 'br4.png');
			break;

			default:
			break;
			}
		}