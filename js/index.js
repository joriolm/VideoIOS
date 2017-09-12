

function hideText()
	 				{
						
						document.getElementById('Label1').hidden = !document.getElementById('Check1').checked; 
						document.getElementById('ProCantidad1').hidden = !document.getElementById('Check1').checked;
						
						document.getElementById('Label2').hidden = !document.getElementById('Check2').checked; 
						document.getElementById('ProCantidad2').hidden = !document.getElementById('Check2').checked;
						
						document.getElementById('Label3').hidden = !document.getElementById('Check3').checked; 
						document.getElementById('ProCantidad3').hidden = !document.getElementById('Check3').checked;
						
						document.getElementById('Label4').hidden = !document.getElementById('Check4').checked; 
						document.getElementById('ProCantidad4').hidden = !document.getElementById('Check4').checked;
						
						document.getElementById('Label5').hidden = !document.getElementById('Check5').checked; 
						document.getElementById('ProCantidad5').hidden = !document.getElementById('Check5').checked;
						
						document.getElementById('Label6').hidden = !document.getElementById('Check6').checked; 
						document.getElementById('ProCantidad6').hidden = !document.getElementById('Check6').checked;
						
						document.getElementById('Label7').hidden = !document.getElementById('Check7').checked; 
						document.getElementById('ProCantidad7').hidden = !document.getElementById('Check7').checked;
						
						document.getElementById('Label8').hidden = !document.getElementById('Check8').checked; 
						document.getElementById('ProLab1').hidden = !document.getElementById('Check8').checked;
						
						document.getElementById('Label9').hidden = !document.getElementById('Check9').checked; 
						document.getElementById('ProLab2').hidden = !document.getElementById('Check9').checked;
						
						document.getElementById('Label10').hidden = !document.getElementById('Check10').checked; 
						document.getElementById('ProLab3').hidden = !document.getElementById('Check10').checked;
						
						document.getElementById('Label11').hidden = !document.getElementById('Check11').checked; 
						document.getElementById('ProLab4').hidden = !document.getElementById('Check11').checked;
						
						document.getElementById('Label15').hidden = !document.getElementById('Check15').checked; 
						document.getElementById('ProLab5').hidden = !document.getElementById('Check15').checked;
						
						document.getElementById('Label16').hidden = !document.getElementById('Check16').checked; 
						document.getElementById('ProLab6').hidden = !document.getElementById('Check16').checked;
						
						document.getElementById('Label17').hidden = !document.getElementById('Check17').checked; 
						document.getElementById('ProLab7').hidden = !document.getElementById('Check17').checked;
						
						document.getElementById('Label18').hidden = !document.getElementById('Check18').checked; 
						document.getElementById('ProLab8').hidden = !document.getElementById('Check18').checked;
						
						document.getElementById('Label19').hidden = !document.getElementById('Check19').checked; 
						document.getElementById('ProLab9').hidden = !document.getElementById('Check19').checked;
						
						document.getElementById('Label20').hidden = !document.getElementById('Check20').checked; 
						document.getElementById('ProLab10').hidden = !document.getElementById('Check20').checked;
						
						document.getElementById('Label12').hidden = !document.getElementById('Check12').checked; 
						document.getElementById('Servicio1').hidden = !document.getElementById('Check12').checked;
						
						document.getElementById('Label13').hidden = !document.getElementById('Check13').checked; 
						document.getElementById('Servicio2').hidden = !document.getElementById('Check13').checked;
						
						document.getElementById('Label14').hidden = !document.getElementById('Check14').checked; 
						document.getElementById('Servicio3').hidden = !document.getElementById('Check14').checked;
						
						if(document.getElementById('Check8').checked==true)
							{
							document.getElementById('div-1').style.height = "130px";
							}
						else
							{
							document.getElementById('div-1').style.height = "90px";
							}
						
						if(document.getElementById('Check9').checked==true)
							{
							document.getElementById('div-2').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-2').style.height = "90px";
							}
							
						if(document.getElementById('Check10').checked==true)
							{
							document.getElementById('div-3').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-3').style.height = "90px";
							}
							
						if(document.getElementById('Check11').checked==true)
							{
							document.getElementById('div-4').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-4').style.height = "90px";
							}
							
						
						if(document.getElementById('Check15').checked==true)
							{
							document.getElementById('div-5').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-5').style.height = "90px";
							}
							
						if(document.getElementById('Check16').checked==true)
							{
							document.getElementById('div-6').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-6').style.height = "90px";
							}
							
						if(document.getElementById('Check17').checked==true)
							{
							document.getElementById('div-7').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-7').style.height = "90px";
							}
							
						if(document.getElementById('Check18').checked==true)
							{
							document.getElementById('div-8').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-8').style.height = "90px";
							}
							
						if(document.getElementById('Check19').checked==true)
							{
							document.getElementById('div-9').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-9').style.height = "90px";
							}
							
						if(document.getElementById('Check20').checked==true)
							{
							document.getElementById('div-10').style.height = "130px";
							
							}
						else
							{
							document.getElementById('div-10').style.height = "90px";
							}
							
						if(document.getElementById('Check12').checked==true)
							{
							document.getElementById('div-serv1').style.height = "150px";
							
							}
						else
							{
							document.getElementById('div-serv1').style.height = "72px";
							}
							
						if(document.getElementById('Check13').checked==true)
							{
							document.getElementById('div-serv2').style.height = "150px";
							
							}
						else
							{
							document.getElementById('div-serv2').style.height = "72px";
							}
							
						if(document.getElementById('Check14').checked==true)
							{
							document.getElementById('div-serv3').style.height = "150px";
							
							}
						else
							{
							document.getElementById('div-serv3').style.height = "72px";
							}	
							
					}
					
					function hideTextClear()
					{
						document.getElementById('Label1').hidden = true;
						document.getElementById('ProCantidad1').hidden = true;
						document.getElementById('Label2').hidden = true;
						document.getElementById('ProCantidad2').hidden = true;
						document.getElementById('Label3').hidden = true;
						document.getElementById('ProCantidad3').hidden = true;
						document.getElementById('Label4').hidden = true;
						document.getElementById('ProCantidad4').hidden = true;
						document.getElementById('Label5').hidden = true;
						document.getElementById('ProCantidad5').hidden = true;
						document.getElementById('Label6').hidden = true;
						document.getElementById('ProCantidad6').hidden = true;
						document.getElementById('Label7').hidden = true;
						document.getElementById('ProCantidad7').hidden = true;
						
						document.getElementById('Label8').hidden = true;
						document.getElementById('ProLab1').hidden = true;
						document.getElementById('Label9').hidden = true;
						document.getElementById('ProLab2').hidden = true;
						document.getElementById('Label10').hidden = true;
						document.getElementById('ProLab3').hidden = true;
						document.getElementById('Label11').hidden = true;
						document.getElementById('ProLab4').hidden = true;
						document.getElementById('Label15').hidden = true;
						document.getElementById('ProLab5').hidden = true;
						document.getElementById('Label16').hidden = true;
						document.getElementById('ProLab6').hidden = true;
						document.getElementById('Label17').hidden = true;
						document.getElementById('ProLab7').hidden = true;
						document.getElementById('Label18').hidden = true;
						document.getElementById('ProLab8').hidden = true;
						document.getElementById('Label19').hidden = true;
						document.getElementById('ProLab9').hidden = true;
						document.getElementById('Label20').hidden = true;
						document.getElementById('ProLab10').hidden = true;
						
						document.getElementById('Label12').hidden = true;
						document.getElementById('Servicio1').hidden = true;
						document.getElementById('Label13').hidden = true;
						document.getElementById('Servicio2').hidden = true;
						document.getElementById('Label14').hidden = true;
						document.getElementById('Servicio3').hidden = true;
						
					}
                    
					function sendMail()
					{
					var Pro1= document.getElementById("ProCantidad1").value
					var Pro2= document.getElementById("ProCantidad2").value
					var Pro3= document.getElementById("ProCantidad3").value
					var Pro4= document.getElementById("ProCantidad4").value
					var Pro5= document.getElementById("ProCantidad5").value
					var Pro6= document.getElementById("ProCantidad6").value
					var Pro7= document.getElementById("ProCantidad7").value
					
					var Cant1= document.getElementById("ProLab1").value
					var Cant2= document.getElementById("ProLab2").value
					var Cant3= document.getElementById("ProLab3").value
					var Cant4= document.getElementById("ProLab4").value
					var Cant5= document.getElementById("ProLab5").value
					var Cant6= document.getElementById("ProLab6").value
					var Cant7= document.getElementById("ProLab7").value
					var Cant8= document.getElementById("ProLab8").value
					var Cant9= document.getElementById("ProLab9").value
					var Cant10= document.getElementById("ProLab10").value
					
					var Serv1= document.getElementById("Servicio1").value
					var Serv2= document.getElementById("Servicio2").value
					var Serv3= document.getElementById("Servicio3").value
					
					var CheckPro1= document.getElementById("Check1").checked
					var CheckPro2= document.getElementById("Check2").checked
					var CheckPro3= document.getElementById("Check3").checked
					var CheckPro4= document.getElementById("Check4").checked
					var CheckPro5= document.getElementById("Check5").checked
					var CheckPro6= document.getElementById("Check6").checked
					var CheckPro7= document.getElementById("Check7").checked
					
					var CheckCant1= document.getElementById("Check8").checked
					var CheckCant2= document.getElementById("Check9").checked
					var CheckCant3= document.getElementById("Check10").checked
					var CheckCant4= document.getElementById("Check11").checked
					var CheckCant5= document.getElementById("Check15").checked
					var CheckCant6= document.getElementById("Check16").checked
					var CheckCant7= document.getElementById("Check17").checked
					var CheckCant8= document.getElementById("Check18").checked
					var CheckCant9= document.getElementById("Check19").checked
					var CheckCant10= document.getElementById("Check20").checked
					
					var CheckServ1= document.getElementById("Check12").checked
					var CheckServ2= document.getElementById("Check13").checked
					var CheckServ3= document.getElementById("Check14").checked
					
					
    				var ContactPhone = document.getElementById("ContactPhone").value
					var ContactName = document.getElementById("ContactName").value
					var yourMess = "";
					
					if ((CheckPro1==true)&&(Pro1!=""))
					{
						yourMess=yourMess+" Asfalto Caucho : "+Pro1;
					}
					if ((CheckPro1==true)&&(Pro1==""))
					{
						yourMess=yourMess+" Asfalto Caucho : "+"Cantidad No Ingresada";
					}
					
					if ((CheckPro2==true)&&(Pro2!="")) 
					{
						yourMess=yourMess+"%0D%0A Asfalto modificado con polímeros : "+Pro2;
					}
					if ((CheckPro2==true)&&(Pro2==""))
					{
						yourMess=yourMess+"%0D%0A Asfalto modificado con polímeros : "+"Cantidad No Ingresada";
					}
					
					if ((CheckPro3==true)&&(Pro3!="")) 
					{
						yourMess=yourMess+"%0D%0A Asfalto con mejoradores de adherencia : "+Pro3;
					}
					if ((CheckPro3==true)&&(Pro3==""))
					{
						yourMess=yourMess+"%0D%0A Asfalto con mejoradores de adherencia : "+"Cantidad No Ingresada";
					}
					
					if ((CheckPro4==true)&&(Pro4!="")) 
					{
						yourMess=yourMess+"%0D%0A Asfalto Normalizado : "+Pro4;
					}
					if ((CheckPro4==true)&&(Pro4==""))
					{
						yourMess=yourMess+"%0D%0A Asfalto Normalizado : "+"Cantidad No Ingresada";
					}
					
					if ((CheckPro5==true)&&(Pro5!="")) 
					{
						yourMess=yourMess+"%0D%0A Sellado de grietas - POLYBIT : "+Pro5;
					}
					if ((CheckPro5==true)&&(Pro5==""))
					{
						yourMess=yourMess+"%0D%0A Sellado de grietas - POLYBIT : "+"Cantidad No Ingresada";
					}
					
					if ((CheckPro6==true)&&(Pro6!="")) 
					{
						yourMess=yourMess+"%0D%0A Pavimento instantáneo - INSTAPAV : "+Pro6;
					}
					if ((CheckPro6==true)&&(Pro6==""))
					{
						yourMess=yourMess+"%0D%0A Pavimento instantáneo - INSTAPAV : "+"Cantidad No Ingresada";
					}
					
					if ((CheckPro7==true)&&(Pro7!="")) 
					{
						yourMess=yourMess+"%0D%0A Emulsiones Asfálticas : "+Pro7;
					}
					if ((CheckPro7==true)&&(Pro7==""))
					{
						yourMess=yourMess+"%0D%0A Emulsiones Asfálticas : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant1==true)&&(Cant1!=""))
					{
						yourMess=yourMess+"%0D%0A Determinación de la Limpieza Superficial de las Partículas de Agregado Grueso : "+Cant1;
					}
					if ((CheckCant1==true)&&(Cant1==""))
					{
						yourMess=yourMess+"%0D%0A Determinación de la Limpieza Superficial de las Partículas de Agregado Grueso : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant2==true)&&(Cant2!=""))
					{
						yourMess=yourMess+"%0D%0A Determinación de Terrones de Arcilla y Particulas Deleznables en Agregados : "+Cant2;
					}
					if ((CheckCant2==true)&&(Cant2==""))
					{
						yourMess=yourMess+"%0D%0A Determinación de Terrones de Arcilla y Particulas Deleznables en Agregados : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant3==true)&&(Cant3!=""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Agregados : "+Cant3;
					}
					if ((CheckCant3==true)&&(Cant3==""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Agregados : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant4==true)&&(Cant4!=""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Marshall Mezcla caliente en Contenido Óptimo de Asfalto : "+Cant4;
					}
					if ((CheckCant4==true)&&(Cant4==""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Marshall Mezcla caliente en Contenido Óptimo de Asfalto : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant5==true)&&(Cant5!=""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Asfaltos Modificados : "+Cant4;
					}
					if ((CheckCant5==true)&&(Cant5==""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Asfaltos Modificados : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant6==true)&&(Cant6!=""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Emulsiones Convencionales : "+Cant1;
					}
					if ((CheckCant6==true)&&(Cant6==""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Emulsiones Convencionales : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant7==true)&&(Cant7!=""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Emulsiones Modificadas : "+Cant2;
					}
					if ((CheckCant7==true)&&(Cant7==""))
					{
						yourMess=yourMess+"%0D%0A Caracterización Total de Emulsiones Modificadas : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant8==true)&&(Cant8!=""))
					{
						yourMess=yourMess+"%0D%0A  Curva Reológica del Asfalto Determinación de Viscosidad Brookfield : "+Cant3;
					}
					if ((CheckCant8==true)&&(Cant8==""))
					{
						yourMess=yourMess+"%0D%0A  Curva Reológica del Asfalto Determinación de Viscosidad Brookfield : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant9==true)&&(Cant9!=""))
					{
						yourMess=yourMess+"%0D%0A Determinación de la Viscosidad Brookfield : "+Cant4;
					}
					if ((CheckCant9==true)&&(Cant9==""))
					{
						yourMess=yourMess+"%0D%0A Determinación de la Viscosidad Brookfield : "+"Cantidad No Ingresada";
					}
					
					if ((CheckCant10==true)&&(Cant10!=""))
					{
						yourMess=yourMess+"%0D%0A Determinación contenido de parafinas en ligantes asfálticos : "+Cant4;
					}
					if ((CheckCant10==true)&&(Cant10==""))
					{
						yourMess=yourMess+"%0D%0A Determinación contenido de parafinas en ligantes asfálticos : "+"Cantidad No Ingresada";
					}
					
					if ((CheckServ1==true)&&(Serv1!=""))
					{
						yourMess=yourMess+"%0D%0A Mantenimiento Vial : "+Serv1;
					}
					if ((CheckServ1==true)&&(Serv1==""))
					{
						yourMess=yourMess+"%0D%0A Mantenimiento Vial : "+"Cantidad No Ingresada";
					}
					
					if ((CheckServ2==true)&&(Serv2!=""))
					{
						yourMess=yourMess+"%0D%0A Exportacion/Importacion : "+Serv2;
					}
					if ((CheckServ2==true)&&(Serv2==""))
					{
						yourMess=yourMess+"%0D%0A Exportacion/Importacion : "+"Cantidad No Ingresada";
					}
					
					if ((CheckServ3==true)&&(Serv3!=""))
					{
						yourMess=yourMess+"%0D%0A Logística de Transporte : "+Serv3;
					}
					if ((CheckServ3==true)&&(Serv3==""))
					{
						yourMess=yourMess+"%0D%0A Logística de Transporte : "+"Cantidad No Ingresada";
					}
					if (ContactName=="")
					{
						ContactName="Nombre no Ingresado";
					}
					if (ContactPhone=="")
					{
						ContactPhone="Teléfono no Ingresado";
					}
					
					
					var mail="ventas@mpi.net.co?subject="+"Cotización"+"&body="+yourMess+"%0D%0A  %0D%0A Nombre de Contacto : "+ContactName+"%0D%0A  %0D%0A Telefono de Contacto : "+ContactPhone;

					

    				location.href = "mailto:"+mail;
					}

				
