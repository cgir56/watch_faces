let colornumber_main = 1
        let totalcolors_main = 6
        let namecolor_main = ''
        function click_Color() {
            if(colornumber_main>=totalcolors_main) {
            colornumber_main=1;
                }
            else {
                colornumber_main=colornumber_main+1;
            }

			if ( colornumber_main == 1) { namecolor_main = "BLUE STYLE"
				
				
			}

			if ( colornumber_main == 2) { namecolor_main = "INDIGO STYLE"
				
				
			}

			if ( colornumber_main == 3) { namecolor_main = "RED STYLE"
				
				
			}

			if ( colornumber_main == 4) { namecolor_main = "GREEN STYLE"
				
				
			}
			
            if ( colornumber_main == 5) { namecolor_main = "BLACK STYLE"
				
				
			}
			
			if ( colornumber_main == 6) { namecolor_main = "VIOLET STYLE"
				
				
			}

			

			hmUI.showToast({text: namecolor_main });
            normal_image_img.setProperty(hmUI.prop.SRC, "main" + parseInt(colornumber_main) + ".png");
		}
		
		let elementnumber_3= 1
        let total_elemente3 = 2

        function click_Hands() {
            if(elementnumber_3==total_elemente3) {
            elementnumber_3=1;
                UpdateElemente3One();
                }
            else {
                elementnumber_3=elementnumber_3+1;
                if(elementnumber_3==2) {
                  UpdateElemente3Two();
                }

            }
            if(elementnumber_3==1) hmUI.showToast({text: 'HYBRID WATCH'});
            if(elementnumber_3==2) hmUI.showToast({text: 'DIGITAL ONLY'});
        }

        function UpdateElemente3One(){
        normal_analog_clock_time_pointer_hour.setProperty(hmUI.prop.VISIBLE, true);
		normal_analog_clock_time_pointer_minute.setProperty(hmUI.prop.VISIBLE, true);
        normal_analog_clock_pro_time_pointer_second.setProperty(hmUI.prop.VISIBLE, true);

        }

        function UpdateElemente3Two(){
        normal_analog_clock_time_pointer_hour.setProperty(hmUI.prop.VISIBLE, false);
        normal_analog_clock_time_pointer_minute.setProperty(hmUI.prop.VISIBLE, false);
        normal_analog_clock_time_pointer_second.setProperty(hmUI.prop.VISIBLE, false);
		normal_analog_clock_time_pointer_second.setProperty(hmUI.prop.VISIBLE, false);

        }