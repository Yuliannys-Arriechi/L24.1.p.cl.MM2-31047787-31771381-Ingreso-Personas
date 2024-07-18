// Datos de las personas
const personas = [
    { nombre: "Mary", sexo: "F", ingreso: 150 },
    { nombre: "José", sexo: "M", ingreso: 135 },
    { nombre: "Carlos", sexo: "M", ingreso: 150 },
    { nombre: "Pedro", sexo: "M", ingreso: 75 },
    { nombre: "Rosa", sexo: "F", ingreso: 120 },
    { nombre: "Carmen", sexo: "F", ingreso: 120 }
  ];
  
  // Filtrar las mujeres
  const mujeres = personas.filter(persona => persona.sexo === "F");
  
  // Calcular el promedio de ingreso de las mujeres
  const totalIngresosMujeres = mujeres.reduce((total, mujer) => total + mujer.ingreso, 0);
  const promedioIngresosMujeres = totalIngresosMujeres / mujeres.length;
  
  // Encontrar la persona con mayor ingreso
  const personaMayorIngreso = personas.reduce((mayor, persona) => (persona.ingreso > mayor.ingreso ? persona : mayor));
  
  // Mostrar resultados en pantalla
  document.body.innerHTML = `
    <p>Promedio de ingreso de las mujeres: ${promedioIngresosMujeres}</p>
    <p>Nombre de la persona con mayor ingreso: ${personaMayorIngreso.nombre} con un ingreso de $${personaMayorIngreso.ingreso}</p>
  `;