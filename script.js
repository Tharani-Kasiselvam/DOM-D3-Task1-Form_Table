var cntnr = document.createElement("container")
cntnr.className="container"
    var cntnr_row = document.createElement("row")
    cntnr_row.className="row"
        var cntnr_col1 = document.createElement("col-md-6")
        cntnr_col1.className="col"
        cntnr_col1.style.width = "30%"
        cntnr_col1.style.marginLeft="50px"
            var titlediv = document.createElement("div")
            titlediv.style.fontFamily = "Calibri"
            titlediv.style.textAlign = "center"
            titlediv.innerHTML="<h1><p>FORM</p></h1>"

            var formdiv = document.createElement("form")
            formdiv.id = "formdiv"

            function lbl_create(tagname, attr, attr_val, content){
                let form_element = document.createElement(tagname)
                form_element.setAttribute(attr,attr_val)
                form_element.style.fontFamily = "Calibri"
                form_element.style.paddingRight = "50px"
                form_element.innerHTML = content
                return form_element
            }

            function text_create(tagname,attr,attr_val,idname,nm_attr,nm_val){
                let text_element = document.createElement(tagname)
                text_element.style.width="100px"
                text_element.style.height="20px"
                text_element.setAttribute(attr,attr_val)
                text_element.setAttribute(nm_attr,nm_val)
                text_element.id=idname
                
                return text_element
            }


            function text_ar_create(tagname,attr,attr_val,idname){
                var tx_ar_element = document.createElement(tagname)
                tx_ar_element.style.width="100px"
                tx_ar_element.style.height="50px"
                tx_ar_element.setAttribute(attr,attr_val)
                tx_ar_element.id = idname
                tx_ar_element.style.marginLeft = "15px"
                return tx_ar_element
            }

            function radio_create(tagname,attr,attr_val,idname,nm_attr,nm_val,val_attr,val){
                var rad_btn_elem = document.createElement(tagname)
                rad_btn_elem.setAttribute(attr,attr_val)
                rad_btn_elem.setAttribute(nm_attr,nm_val)
                rad_btn_elem.setAttribute(val_attr,val)
                rad_btn_elem.id = idname
                return rad_btn_elem
            }

            function chkbox_create(tagname,attr,attr_val,idname,nm_attr,nm_val,val_attr,val){
                var chk_box_elem = document.createElement(tagname)
                chk_box_elem.setAttribute(attr,attr_val)
                chk_box_elem.setAttribute(nm_attr,nm_val)
                chk_box_elem.setAttribute(val_attr,val)
                chk_box_elem.id = idname
                return chk_box_elem
            }

            function brk_create(){
                let brk = document.createElement("br")
                return brk
            }

            let f_name = lbl_create("label","for","f_name","First Name")
            let fn_brk = brk_create()
            let fn_inp = text_create("input","type","text","f_name")
            let fn2_brk = brk_create()

            let l_name = lbl_create("label","for","l_name","Last Name")
            let ln_inp = text_create("input","type","text","l_name")
            let ln_brk = brk_create()
            let ln2_brk = brk_create()

            let addr = lbl_create("label","for","l_name","Address")
            let txt_addr = text_ar_create("textarea","type","text","addr")
            let adr_brk = brk_create()
            let adr2_brk = brk_create()

            let pin_cd = lbl_create("label","for","pin_cd","Pincode")
            let pin_tx = text_create("input","type","text","pin_cd")
            let pin_brk = brk_create()
            let pin2_brk = brk_create()

            let gndr = lbl_create("label","for","gender","Gender")
            let gndr1_inp = radio_create("input","type","radio","gndr_male","name","gen","value","Male")
            let gndr1_lbl = lbl_create("label","for","male_lbl","Male")
            let gndr2_inp = radio_create("input","type","radio","gndr_fem","name","gen","value","Female")
            let gndr2_lbl = lbl_create("label","for","fem_lbl","Female")
            let gndr_brk = brk_create()
            let gndr2_brk = brk_create()

            let food = lbl_create("label","for","food","Choice of Food <br><i>(Choose atleast 2 food)</i>")
            let food_brk = brk_create()

            let food1_inp = chkbox_create("input","type","checkbox","ch_briyani","name","food","value","Briyani")
            let food1 = lbl_create("label","for","food","Briyani")
            let food1_brk = brk_create()

            let food2_inp = chkbox_create("input","type","checkbox","ch_crdrc","name","food","value","CurdRice")
            let food2 = lbl_create("label","for","food","Curd Rice")
            let food2_brk = brk_create()

            let food3_inp = chkbox_create("input","type","checkbox","ch_sim","name","food","value","South-Indian-Meals")
            let food3 = lbl_create("label","for","food","South Indian Meals")
            let food3_brk = brk_create()

            let food4_inp = chkbox_create("input","type","checkbox","ch_chap","name","food","value","Chappathi")
            let food4 = lbl_create("label","for","food","Chappathi")
            let food4_brk = brk_create()

            let food5_inp = chkbox_create("input","type","checkbox","ch_pas","name","food","value","Pasta")
            let food5 = lbl_create("label","for","food","Pasta")
            let food5_brk = brk_create()
            let food5_brk2 = brk_create()

            let state = lbl_create("label","for","state","State")
            let st_tx = text_create("input","type","text","state")
            let st_brk = brk_create()
            let st1_brk = brk_create()

            let country = lbl_create("label","for","cntry","Country")
            let cntry_tx = text_create("input","type","text","cntry")
            let scntry_brk = brk_create()
            let cntry1_brk = brk_create()

            let sbm = document.createElement("button")
            sbm.setAttribute("type","button")
            sbm.innerHTML="Submit"
            sbm.addEventListener("click",loadData)

            formdiv.append(f_name, fn_inp,fn_brk,fn2_brk,
                            l_name,ln_inp,ln_brk,ln2_brk,
                            addr,txt_addr,adr_brk,adr2_brk,
                            pin_cd,pin_tx,pin_brk,pin2_brk,
                            gndr,gndr1_inp,gndr1_lbl,gndr2_inp,gndr2_lbl,gndr_brk,gndr2_brk,
                            food,food_brk,food1_inp,food1,food1_brk,food2_inp,food2,food2_brk,food3_inp,food3,food3_brk,food4_inp,food4,food4_brk,food5_inp,food5,food5_brk,food5_brk2,
                            state,st_tx,st_brk,st1_brk,
                            country,cntry_tx,scntry_brk,cntry1_brk,sbm)

        cntnr_col1.append(titlediv,formdiv)
      

        var cntnr_col2 = document.createElement("col-md-6")
        cntnr_col2.className="col"
        cntnr_col2.style.width = "70%"
            var tablediv = document.createElement("div")

                var tbl = document.createElement("table")
                tbl.className= "table"


                var thd = document.createElement("thead")
                thd.className="thead-dark"

                    function tr_fn(){
                        var tr_elem = document.createElement("tr")
                        return tr_elem
                    }

                    function th_fn(scope_val,content){
                        var th_elem = document.createElement("th")
                        th_elem.scope=scope_val
                        th_elem.innerHTML=content
                        return th_elem
                    }

                    function td_fn(content){
                        var td_elem = document.createElement("td")
                        td_elem.innerHTML = content
                        return td_elem
                    }

                    var tr = tr_fn()
                        var th1 = th_fn("col","S.No")
                        var th2 = th_fn("col","First Name")
                        var th3 = th_fn("col","Last Name")
                        var th4 = th_fn("col","Address")
                        var th5 = th_fn("col","Pincode")
                        var th6 = th_fn("col","Gender")
                        var th7 = th_fn("col","Choice of Food")
                        var th8 = th_fn("col","State")
                        var th9 = th_fn("col","Country")
                    
                    tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9)
                thd.appendChild(tr)

            var tbdy = document.createElement("tbody")

                function loadData(){
                    var tr1 = tr_fn()

                        var th1a = th_fn("row","1")

                        var td1a = td_fn(document.getElementById("f_name").value)
                        var td1b = td_fn(document.getElementById("l_name").value)
                        var td1c = td_fn(document.getElementById("addr").value)
                        var td1d = td_fn(document.getElementById("pin_cd").value)

                        if(document.getElementById("gndr_male").checked) {
                            var td1e = td_fn(document.getElementById("gndr_male").value)
                        }
                        else if(document.getElementById('gndr_fem').checked) {
                            var td1e = td_fn(document.getElementById("gndr_fem").value)
                        }
                        else{
                            var td1e = ''
                        }
                        var foods = []   
                        if(document.getElementById("ch_briyani").checked) {

                            foods.push(document.getElementById("ch_briyani").value)
                        } 
                        if(document.getElementById("ch_crdrc").checked) {

                            foods.push(document.getElementById("ch_crdrc").value)
                        }   
                        if(document.getElementById("ch_sim").checked) {

                            foods.push(document.getElementById("ch_sim").value)
                        }   
                        if(document.getElementById("ch_chap").checked) {

                            foods.push(document.getElementById("ch_chap").value)
                        }   
                        if(document.getElementById("ch_pas").checked) {

                            foods.push(document.getElementById("ch_pas").value)
                        }                        
                        var td1f = td_fn(foods)
                        var td1g = td_fn(document.getElementById("state").value)
                        var td1h = td_fn(document.getElementById("cntry").value)
                    
                    tr1.append(th1a,td1a,td1b,td1c,td1d,td1e,td1f,td1g,td1h)

                tbdy.append(tr1)
                formdiv.reset()
            }   
                tbl.append(thd,tbdy)
            tablediv.append(tbl)
        cntnr_col2.appendChild(tablediv)
    cntnr_row.append(cntnr_col1,cntnr_col2)
cntnr.appendChild(cntnr_row)

document.body.append(cntnr)
