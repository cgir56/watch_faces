let am =''
let pm=''
let Year_array = ''
let Batt_array = ''
let Step_array =''

        // Start background change
        let btn_element_1 = ''
        let elementnumber_1 = 1
        let total_elemente = 5

        function click_elemente() {
            if(elementnumber_1==total_elemente) {
            elementnumber_1=1;
                }
            else {
                elementnumber_1=elementnumber_1+1;
            }


            if(elementnumber_1==1) {
hmUI.showToast({text: 'Color Blue'});
am = "Clock_AM.png"
pm = "Clock_PM.png"
Year_array = ["Font_Blue_Small_0.png","Font_Blue_Small_1.png","Font_Blue_Small_2.png","Font_Blue_Small_3.png","Font_Blue_Small_4.png","Font_Blue_Small_5.png","Font_Blue_Small_6.png","Font_Blue_Small_7.png","Font_Blue_Small_8.png","Font_Blue_Small_9.png"]
Batt_array = ["Batt01.png","Batt02.png","Batt03.png","Batt04.png","Batt05.png","Batt06.png","Batt07.png","Batt08.png","Batt09.png","Batt10.png"]
Step_array = ["Step_icon_01.png","Step_icon_02.png","Step_icon_03.png","Step_icon_04.png","Step_icon_05.png","Step_icon_06.png","Step_icon_07.png","Step_icon_08.png","Step_icon_09.png","Step_icon_10.png"]
}
            if(elementnumber_1==2) {
hmUI.showToast({text: 'Color Red'});
am = "Clock_R_AM.png"
pm = "Clock_R_PM.png"
Year_array = ["Font_Red_Small_0.png","Font_Red_Small_1.png","Font_Red_Small_2.png","Font_Red_Small_3.png","Font_Red_Small_4.png","Font_Red_Small_5.png","Font_Red_Small_6.png","Font_Red_Small_7.png","Font_Red_Small_8.png","Font_Red_Small_9.png"]
Batt_array = ["Batt_R_01.png","Batt_R_02.png","Batt_R_03.png","Batt_R_04.png","Batt_R_05.png","Batt_R_06.png","Batt_R_07.png","Batt_R_08.png","Batt_R_09.png","Batt_R_10.png"]
Step_array = ["Step_R_icon_01.png","Step_R_icon_02.png","Step_R_icon_03.png","Step_R_icon_04.png","Step_R_icon_05.png","Step_R_icon_06.png","Step_R_icon_07.png","Step_R_icon_08.png","Step_R_icon_09.png","Step_R_icon_10.png"]
}

            if(elementnumber_1==3) {
hmUI.showToast({text: 'Color Yellow'});
am = "Clock_Y_AM.png"
pm = "Clock_Y_PM.png"
Year_array = ["Font_Yellow_Small_0.png","Font_Yellow_Small_1.png","Font_Yellow_Small_2.png","Font_Yellow_Small_3.png","Font_Yellow_Small_4.png","Font_Yellow_Small_5.png","Font_Yellow_Small_6.png","Font_Yellow_Small_7.png","Font_Yellow_Small_8.png","Font_Yellow_Small_9.png"]
Batt_array = ["Batt_Y_01.png","Batt_Y_02.png","Batt_Y_03.png","Batt_Y_04.png","Batt_Y_05.png","Batt_Y_06.png","Batt_Y_07.png","Batt_Y_08.png","Batt_Y_09.png","Batt_Y_10.png"]
Step_array = ["Step_Y_icon_01.png","Step_Y_icon_02.png","Step_Y_icon_03.png","Step_Y_icon_04.png","Step_Y_icon_05.png","Step_Y_icon_06.png","Step_Y_icon_07.png","Step_Y_icon_08.png","Step_Y_icon_09.png","Step_Y_icon_10.png"]
}

            if(elementnumber_1==4) {
hmUI.showToast({text: 'Color Green'});
am = "Clock_G_AM.png"
pm = "Clock_G_PM.png"
Year_array = ["Font_Green_Small_0.png","Font_Green_Small_1.png","Font_Green_Small_2.png","Font_Green_Small_3.png","Font_Green_Small_4.png","Font_Green_Small_5.png","Font_Green_Small_6.png","Font_Green_Small_7.png","Font_Green_Small_8.png","Font_Green_Small_9.png"]
Batt_array = ["Batt_G_01.png","Batt_G_02.png","Batt_G_03.png","Batt_G_04.png","Batt_G_05.png","Batt_G_06.png","Batt_G_07.png","Batt_G_08.png","Batt_G_09.png","Batt_G_10.png"]
Step_array = ["Step_G_icon_01.png","Step_G_icon_02.png","Step_G_icon_03.png","Step_G_icon_04.png","Step_G_icon_05.png","Step_G_icon_06.png","Step_G_icon_07.png","Step_G_icon_08.png","Step_G_icon_09.png","Step_G_icon_10.png"]
}

            if(elementnumber_1==5) {
hmUI.showToast({text: 'Color Gray'});
am = "Clock_Gr_AM.png"
pm = "Clock_Gr_PM.png"
Year_array = ["Font_Gray_Small_0.png","Font_Gray_Small_1.png","Font_Gray_Small_2.png","Font_Gray_Small_3.png","Font_Gray_Small_4.png","Font_Gray_Small_5.png","Font_Gray_Small_6.png","Font_Gray_Small_7.png","Font_Gray_Small_8.png","Font_Gray_Small_9.png"]
Batt_array = ["Batt_Gr_01.png","Batt_Gr_02.png","Batt_Gr_03.png","Batt_Gr_04.png","Batt_Gr_05.png","Batt_Gr_06.png","Batt_Gr_07.png","Batt_Gr_08.png","Batt_Gr_09.png","Batt_Gr_10.png"]
Step_array = ["Step_Gr_icon_01.png","Step_Gr_icon_02.png","Step_Gr_icon_03.png","Step_Gr_icon_04.png","Step_Gr_icon_05.png","Step_Gr_icon_06.png","Step_Gr_icon_07.png","Step_Gr_icon_08.png","Step_Gr_icon_09.png","Step_Gr_icon_10.png"]
}



if (elementnumber_1 <= total_elemente) {

normal_background_bg_img.setProperty(hmUI.prop.SRC, "main" + parseInt(elementnumber_1) + ".png");

            normal_digital_clock_img_time_AmPm.setProperty(hmUI.prop.MORE, {
              am_x: 196,
              am_y: 196,
              am_sc_path: am,
              am_en_path: am,
              pm_x: 196,
              pm_y: 196,
              pm_sc_path: pm,
              pm_en_path: pm,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_year.setProperty(hmUI.prop.MORE, {
              year_startY: 349,
              year_sc_array: Year_array,
              year_tc_array: Year_array,
              year_en_array: Year_array,
              year_zero: 1,
              year_space: 3,
              year_align: hmUI.align.CENTER_H,
              year_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_image_progress_img_level.setProperty(hmUI.prop.MORE, {
              x: 34,
              y: 199,
              image_array: Batt_array,
              image_length: 10,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_image_progress_img_level.setProperty(hmUI.prop.MORE, {
              x: 414,
              y: 199,
              image_array: Step_array,
              image_length: 10,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

const result = hmSetting.setScreenOff()
}

        }