'Abrir CRM
InvokeApplication "C:\Users\Marco\Desktop\Crm3.cmd"

''Esperar apertura Login
While  JavaWindow("Login").Exist = false
	wait(3)
Wend

'Ingresar datos de login e ingresar
JavaWindow("Login").JavaEdit("Nombre Login").Set "ind_frojas"
JavaWindow("Login").JavaEdit("Contraseńa").SetSecure "6305711182e239ea06687fcef36c" @@ hightlight id_;_25155961_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Login").JavaList("Idioma:").Select "español (Chile)" @@ hightlight id_;_14659481_;_script infofile_;_ZIP::ssf7.xml_;_
JavaWindow("Login").JavaButton("Login").Click

'Esperar apertura CRM
While JavaWindow("CRM").Exist = false
	wait(3)
Wend


 @@ hightlight id_;_21316053_;_script infofile_;_ZIP::ssf8.xml_;_





