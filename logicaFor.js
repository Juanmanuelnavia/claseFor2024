var edad=0, estadoCivil=0, estatura=0, sexo=0, promedioEdad=0, promedioEstatura=0,
 porcentajePersonas=0, contadorPersonas=0, acumuladorEdad=0,
  acumuladorEstatura=0, cantidadPersonas=1;

for (let numeroPersona = 0; numeroPersona <= cantidadPersonas; numeroPersona++) {
    edad= parseFloat(prompt("ingrese la edad de la persona " + numeroPersona));
    estadoCivil= parseFloat(prompt("ingrese el estado de la persona " + numeroPersona + " 1.soltero  2.casado"));
    estatura= parseFloat(prompt("ingrese la estatura de la persona " + numeroPersona+ " en cms"));
    sexo= parseFloat(prompt("ingrese el sexo de la persona " + numeroPersona + " 1.hombre  2.mujer"));
    if ((edad>=18)&&(estadoCivil==1)&&(estatura>170)&&(sexo==1)) {
    contadorPersonas=contadorPersonas+1;
    acumuladorEdad=acumuladorEdad+edad;
    acumuladorEstatura=acumuladorEstatura+estatura;
    }
    
  


}
promedioEdad=acumuladorEdad/contadorPersonas;
promedioEstatura=acumuladorEstatura/contadorPersonas;
porcentajePersonas=(contadorPersonas/cantidadPersonas)*100;

alert("el promedio de edad ed las personas que cumple es: "+promedioEdad + " años");
alert("el promedio de estatura ed las personas que cumple es: "+promedioEstatura + " centimetros");
alert("porcentaje de personas que cumplen con la condicion es del " +porcentajePersonas + "%");
